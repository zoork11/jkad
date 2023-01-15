<template>
  <v-container>
    <v-row justify="center">
      <v-card color="transparent" max-width="1000" width="100%">
        <v-card-title>
          {{$options.title}}
        </v-card-title>
        <v-card-subtitle>
        This is a story about finding what I would call my favorite bug.
        </v-card-subtitle>
        <v-card-text>
          <p class="text-h5">
          Introduction
          </p>
          <p class="text-body-1">
          A few years ago, we had to change something in the startup code of our embedded platform. We had a fairly standard architecture, I would say. A processor, a flash for the firmware, an external RAM and more peripherals not really relevant for the bug.
          With the change, a structure and some code was added to the startup code, running more or less right after powering the processor.  As usual, we tested everything locally and on component/module level and then forwarded everything for integration testing. This was also running smooth and we thought everything is fine.
          A few days later, all the integration test setups failed on start up. And since we were responsible for devices booting up, we had to flash all the test setups all by hand. I think anyone responsible for the low level stuff can relate to that.
          </p>
          <p class="text-h5">
          Investigation
          </p>
          <p class="text-body-1">
          So after bringing everything back to life, we started investigating what went wrong. And we saw that the flash content of the devices was altered. So it basically looked like this.
          </p>
          <p>
          <v-row justify="center">
          <v-img justify="center" max-height="300" max-width="500" src="../../assets/flash_content.png"></v-img>
          </v-row>
          </p>
          <p class="text-body-1">
          At the end of the flash, some random bytes got changed to random values. We had no explanation for this.
          </p>
          <p class="text-body-1">
          We reversed the changes in the startup code and saw that the issue disappeared. At first we were a bit baffled by this, as the changes did not interfere with anything related to flashing or updating the firmware. Anyway, we did another code review over the changes and tried to get more information by debugging. All to no avail, the code changes were perfectly fine and had no problem at all.
          </p>
          <p class="text-body-1">
          When we were reproducing the error, we saw that it always occurred when we moved from the revision with the changes in the startup code to a revision where the changes are not present. Moving to another revision with the changes present was working fine.
          </p>
          <p>
          <v-row justify="center">
          <v-img justify="center" max-height="300" max-width="500" src="../../assets/revisions.png"></v-img>
          </v-row>
          </p>
          <p class="text-body-1">
          So we thought the error must be connected to the changes in the revision. But the code changes were perfectly fine and we could not see anything that gave a clue why it failed.
          </p>
          <p class="text-h5">
          Short excursion to flashes
          </p>
          <p class="text-body-1">
          To grasp what was going wrong, it is important that we have a short look into what functionality flashes offer and how they are programmed.
          <br/>
          To change the content of a flash, usually some sort of registers or special addresses have to be written to interact with the flash. In all cases I know, a section/page of the flash have to be deleted first before it can be written. This is the case due to the way flashes are build physically. What happens if a section/cell is not deleted before it is written is undefined or the flash controller will not allow altering content.
          </p>
          <p>
          <v-row justify="center">
          <v-img justify="center" max-height="300" max-width="500" src="../../assets/flash1.png"></v-img>
          </v-row>
          </p>
          <p class="text-body-1">
          Also there are different kinds of modes how flashes can be operated. Normally, all interactions with a flash are like changing the content, a matter of talking to a controller. That means reading of flash content is not like interacting with a RAM where you just directly access a given address. But some flashes and processors can work together to allow such an access pattern for reading content. This is called XIP (execute in place) mode or at least this is what I know it for. For starting up, we used that mode in our embedded platform.
          </p>
          <p>
          <v-row justify="center">
          <v-img justify="center" max-height="300" max-width="500" src="../../assets/flash2.png"></v-img>
          </v-row>
          </p>
          <p class="text-h5">
          Going deeper
          </p>
          <p class="text-body-1">
          So back to the unsolved problem. We still had no clue what is going wrong, so we decided to debug a little bit deeper into what is happening. 
          We started looking into the firmware update routine. Before, we mostly focused on the code changes and what happens during startup.
          So we put a breakpoint into the firmware update function and triggered the update to version/revision causing the problem.
          </p>
          <p class="text-body-1">
          The firmware update function was not too complicated, it checked the binary blob that should be written to the flash. If everything is fine, it deletes the content of the flash writes the binary data into the flash and finally resets the microcontroller to startup with the new firmware.
          </p>
          <p>
          <v-row justify="center">
          <v-img justify="center" max-height="300" max-width="500" src="../../assets/firmware_update.png"></v-img>
          </v-row>
          </p>
          <p class="text-body-1">
          Stepping through the function, validation worked fine, nothing unexpected happens during deletion and writing the flash stores the binary data as it should (data in flash is exactly the same as binary data). When stepping over the reset function. The debugger gets deattached and the device reboots as it should, but it doesn't come up the data in the flash has changed. We were like ...???
          </p>
          <p>
          <v-row justify="center">
          <v-img justify="center" max-height="300" max-width="500" src="../../assets/stepping.png"></v-img>
          </v-row>
          </p>
          <p class="text-body-1">
          We are puzzled and running out of options. Going deeper and debugging the low level flashing functions is not trivial, since flashing has some timing constraints, and doing so seems useless since we already saw that flashing works fine. Well, since we are desperate and out of options, we still place a breakpoint into one of the low level flashing functions. I step again through the firmware update function to reproduce the problem.
          <br/>
          As expected, flashing works fine, data is placed correctly in the flash. We just let the debugger run into the reset function and out of nowhere the debugger halts again at the breakpoint.
          </p>
          <p>
          <v-row justify="center">
          <v-img justify="center" max-height="300" max-width="500" src="../../assets/dafuq.gif"></v-img>
          </v-row>
          </p>
          <p class="text-body-1">
          That's strange, looking at the call stack shows it is called from an address out of the flash. What the fuck? Is this just some random shit happening? We rerun the experiment and end up again with the same result. With that call, the content of the flash is changed, some cells change randomly. The section/page of the flash is not deleted and it is tried to be written again. We found the root cause of the problem.
          </p>
          <p class="text-h5">
          Solving the puzzle
          </p>
          <p class="text-body-1">
          Even after finding the root cause, at first we could not piece together what is happening. The last missing information, to grasp it, was that the reset function was actually located in the flash. As I stated earlier, we used the flash in xip mode, so we could directly run code from flash at start up. On start up, we also needed the reset function, therefore it was placed in the flash as well.
          </p>
          <p class="text-body-1">
          What happened? The firmware update changed the data in the flash. In the RAM, the old firmware is still present, pointing to old addresses in the flash. If we run into the reset function, the processor jumps to the flash for execution. But, since we just altered the content of the flash, we jump to the wrong destination. The problem did not surface earlier, beacuse up until that point nothing critical happend on calling wrong function pointers.
          </p>
          <p>
          <v-row justify="center">
          <v-img justify="center" max-height="300" max-width="500" src="../../assets/flash_layout.png"></v-img>
          </v-row>
          </p>
          <p class="text-body-1">
          The location the processor jumped to was not a valid function anymore, and the data there resolved to a jump to an address in the RAM where actually the low level write to flash function was located.
          </p>
          <p>
          <v-row justify="center">
          <v-img justify="center" max-height="300" max-width="500" src="../../assets/magic.png"></v-img>
          </v-row>
          </p>
          <p class="text-body-1">
          To sum it up, flash layout changed, we jump into the flash to reset the microcontroller, data there now resolves to a jump into the low level flash write function and this once again alters the flash content. The flash content changes randomly as the section/cell is not deleted.
          </p>
          <p class="text-h5">
          Conclusion
          </p>
          <p class="text-body-1">
          I loved this bug because it all seemed so random at first and we had no clue what is going on. But in the end it turned out to be a simple mistake. We spent a lot of time figuring it out, and the high from unraveling everything was great.
          </p>
          <p class="text-body-1">
          How could this be avoided or dealt with? Use bootloaders separated from the firmware or at least separate functions. It should be avoided to call functions in flash after the device booted and runs from RAM. It is best if it is somehow enforced technically, e.g. using separate projects or remove the flash from address space.
          </p>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'FirmwareUpdatePost',
    title: 'Updating software can be tricky',
    id: 0,
  }
</script>

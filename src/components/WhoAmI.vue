<template>
  <v-container>
  <v-row
      v-for="j in [
        'center',
        
      ]"
      :key="j"
      :justify="j"
    >

        <v-card
          class="pa-2"
          outlined
          tile
        >
          One of two columns
        </v-card>

    </v-row>
<v-row
      v-for="j in [
        'center',
        
      ]"
      :key="j"
      :justify="j"
    >
    <v-card color="transparent" max-width="1000">
      <v-card-title>who am i</v-card-title>
      <v-card-subtitle>random guy doing IT stuff</v-card-subtitle>
      <v-divider></v-divider>
      <v-row align="center">
      <v-col class="justify-center">
      <v-card color="transparent" max-width="800">
      <v-card-text>
        Hi i am from germany and i am interesed in several topics in the vast world of IT.
        I have several years experience in OS/embedded software development, working on safety relevant control units. While working as a software dev i stumbled over various interesting bugs sparking my interest on more security related topics.
        Finding bugs and figuring out what is going on was always a lot of fun for me. Where others gave up because i felt encouraged taking a deeper look. From finding and handling bugs it was not far to using them for unintended behavoir.
        Thats how i ended up in IT security. Since i wanted hands on experience on what can be done I decided to do the OSCP. And now i am working in IT security designing systems to protect assets in the car IT landscape.
      <v-img max-height="300" max-width="500" src="../assets/cat.gif"></v-img>
      </v-card-text>
      </v-card>
      </v-col>
      <v-col>
      <v-img max-height="300" max-width="500" src="../assets/cat.gif"></v-img>
      </v-col>
      </v-row>
      <v-row>
      <v-col>
      <v-img max-height="300" max-width="500" src="../assets/caligames.gif"></v-img>
      </v-col>
      <v-col>
      <v-card color="transparent" max-width="800">
      <v-card-text>
        Gaming dota and stuff
      </v-card-text>
      </v-card>
      </v-col>
      </v-row>
      <v-row>
      <v-col>
      <v-card color="transparent" max-width="800">
      <v-card-text>
        Sports and stuff
      </v-card-text>
      </v-card>
      </v-col>
      <v-col>
      
      </v-col>
      </v-row>
    </v-card>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'WhoAmI',
  }
</script>

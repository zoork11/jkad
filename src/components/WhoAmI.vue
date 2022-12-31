<template>
  <v-container>
    <v-row justify="center">
      <v-card color="transparent" max-width="1000" width="100%">
        <v-card-title>who am i</v-card-title>
        <v-card-subtitle>random guy doing IT stuff</v-card-subtitle>
        <v-divider></v-divider>
        <v-card-text>
          <p class="text-body-1">
          Hi there welcome to my blog :)
          </p>
          <p class="text-body-1"> 
          I have several years of experience in OS/embedded <b>software development</b>, working on safety relevant control units. While working as a software dev, i stumbled over various interesting bugs, sparking my interest on more security related topics.
          <br/>
          Finding <b>bugs</b> and figuring out what is going on was always a lot of fun for me. Where others gave up because i felt encouraged taking a deeper look.
          <br/>
          From finding and handling bugs it was not far to using them for unintended behavoir. Thats how i ended up in IT security. Since i wanted hands on experience on what can be done I decided to do the <b>OSCP</b>. And now i am working in IT security designing systems to protect assets in the car IT landscape.
          </p>
          <p>
          <v-row justify="center">
          <v-img justify="center" max-height="300" max-width="500" src="../assets/hacker.jpg"></v-img>
          </v-row>
          </p>
          <p class="text-body-1">
          I played alot of <b>PC games</b> when i was younger. I also remember writing my first code in basic when i was a teenager. I created a small textual quiz game with some if-else statements. I guess gaming is also a reason why i am now working on IT topics professionally.
          <br/>
          I can still remember the first pc games i played, though i was really young at that time. It was California Games, even though i mostly failed on biking and surfing it was fun and gaming stayed as a hobby. In my late teenager days i fell in love with <b>DotA</b>. I even played it semi professionally at some point and i am still playing it from time to time. Not alot of things are as pleasing as winning a clutch game.
          </p>
          <p>
          <v-row justify="center">
          <v-img justify="center" max-height="300" max-width="500" src="../assets/dota.gif"></v-img>
          </v-row>
          </p>
          <p class="text-body-1">
          Besides doing stuff with PCs i also spent a lot of time doing <b>sports</b>. Soccer/football, climbing/bouldering, dancing, running, hiking, biking, doing workouts, badminton, ... the list is long. Most time i spent on soccer/football since i started playing even before being a teenager but lately i fell in love with climbing/bouldering.
          </p>
          <p>
          <v-row justify="center">
          <v-img justify="center" max-height="300" max-width="500" src="../assets/climbing.gif"></v-img>
          </v-row>
          </p>
          <p class="text-body-1">
          <b>Why</b> another blog? Well i don't know exactly, somehow i want to share some of my knowledge and stories. If it helps or inspires someone or if you learn something new i am happy. And since i learned alot from various places in the internet, i thought it might be time to give something back.
          </p>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'WhoAmI',
    data: () => ({
      test: 'center'
    }),
  }
</script>

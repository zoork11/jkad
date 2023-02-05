<template>
  <v-container>
    <v-row justify="center">
      <v-card color="transparent" max-width="1000" width="100%">
        <v-card-title>who am i</v-card-title>
        <v-card-subtitle>random guy doing IT stuff</v-card-subtitle>
        <v-divider></v-divider>
        <v-card-text>
          <p class="text-body-1">
          Hi there, welcome to my blog :)
          </p>
          <p class="text-body-1"> 
          I have several years of experience in OS/embedded <b>software development</b>, working on safety relevant control units. While working as a software dev, I stumbled over various interesting bugs, sparking my interest on more security related topics.
          <br/>
          Finding <b>bugs</b> and figuring out what is going on was always a lot of fun for me. Where others gave up because I felt encouraged taking a deeper look.
          <br/>
          From finding and handling bugs, it was not far to use them for unintended behavior. That's how I ended up in IT security. Since I wanted hands-on experience on what can be done, I decided to do the <b>OSCP</b>. And now I am working in IT security, designing systems to protect assets in the car IT landscape.
          </p>
          <p>
          <v-row justify="center">
          <v-img justify="center" max-width="500px" width="100%" src="../assets/hacker.jpg" ></v-img>
          </v-row>
          </p>
          <p class="text-body-1">
          I played a lot of <b>PC games</b> when I was younger. The first code I wrote during my teenager days, was a quiz game in basic. Therefore, I guess gaming is also a reason why I am now working on IT topics professionally.
          <br/>
          I can still remember the first pc games I played, though I was really young at that time. It was California Games, even though I mostly failed on biking and surfing it was fun and gaming stayed as a hobby. In my late teenager days, I fell in love with <b>DotA</b>. I even played it semi-professionally at some point, and I am still playing it from time to time. Not a lot of things are as pleasing as winning a clutch game.
          </p>
          <p>
          <v-row justify="center">
          <v-img justify="center" max-width="500px" width="100%" src="../assets/dota.gif"></v-img>
          </v-row>
          </p>
          <p class="text-body-1">
          Besides doing stuff with PCs, I also spent a lot of time doing <b>sports</b>. Soccer/football, climbing/bouldering, dancing, running, hiking, biking, doing workouts, badminton, ... the list is long. Most time I spent on soccer/football, since I started playing even before being a teenager, but lately I fell in love with climbing/bouldering.
          </p>
          <p>
          <v-row justify="center">
          <v-img justify="center" max-width="500px" width="100%" min-width="50" src="../assets/climbing.gif"></v-img>
          </v-row>
          </p>
          <p class="text-body-1">
          <b>Why</b> another blog? Well, I don't know exactly. I guess I have two reasons. First, I wanted to give something back.  I learned a lot from various places on the internet, and I thought it is time to share some of the knowledge and experiences I made. Second, I wanted to do some front-end coding in Vue. So I thought an easy block might be a good project.
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

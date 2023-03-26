<template>
  <v-container>
    <v-row justify="center">
      <v-card color="transparent" max-width="1000" width="100%">
        <v-img height="110" src="../../assets/header.png" cover class="text-white">
        <v-card-title>
          {{$options.title}}
        </v-card-title>
        <v-card-subtitle>
        Because enduring math at university was not hard enough ;)
        </v-card-subtitle>
        </v-img>
        <v-card-text>
          <p class="text-h5">
          Introduction
          </p>
          <p class="text-body-1">
          While working as a software dev for various years, I developed a strong interest in IT security. I always loved tracing bugs and puzzling together what happens and what could happen if things go wrong.
          <br/>
          So bug hunting/bounties and penetration testing was not far off. And after spending some time with Hack the Box and TCM videos and streams, I thought let's give the OSCP a try. I was not 100% aware what I got my self into from the start, but it was a great experience over all.
          </p>
          <p class="text-h5">
          What is the OSCP?
          </p>
          <p class="text-body-1">
          For those of you who have no idea what the OSCP is. The OSCP is a certification in the offensive security field focusing on penetration testing. It is offered by Offensive Security, a commercial US based company.
          <br/>
          While writing this, I would say it is still viewed as the go to basic certificate or get into the field, even though it is loosing popularity/reputation to other certificate/courses.
          <br/>
          I would say the main thing you get from the OSCP is building a foundation on how to approach a penetration test on a practical level. In the exam, students have to gain access to several hosts in a limited time frame, similar to what a penetration test usually brings to the table. Although, the target hosts are not comparable to real world systems. I would say the biggest difference to real world targets is the fact, that there have to be a vulnerability on the target you are testing in the OSCP.
          </p>
          <p class="text-h5">
          The hard part
          </p>
          <p class="text-body-1">
          The hard thing about penetration testing in general is, that you often use systems in a way they are not intended to be used. This results in a very bad "user experience" where it can get hard to get meaningful responses, to figure out what is happening.
          <br/>
          Another problem is that it mostly feels like finding a needle in the haystack. The information overload is real and finding the attack vector without "going down the rabbit hole" is hard to learn, but is essential to pass the OSCP.
          </p>
          <p>
          <v-row justify="center">
          <v-img justify="center" max-width="500px" width="100%" src="../../assets/rabbithole.gif"></v-img>
          </v-row>
          </p>
          <p class="text-body-1">
          At the beginning, it is hard to tell if a finding in the recon phase is worth pursuing or not. And to add on top, it is even harder to tell if you are on the right track while trying to exploit something you found. Is it just a small thing that keeps you away from success and you should just spend more time, or are you on a completely wrong track and should stop and switch to a different finding.
          <br/>
          On top of it, comes that the learning environment provided by Offensive Security is a little bit hostile towards the students. The theoretical part in the PDFs is lacking a lot of information and also contains some mistakes or is outdated. And the "try harder" mindset, even if I like the idea behind it, is not always helpful.
          </p>
          <p class="text-h5">
          How to approach it
          </p>
          <p class="text-body-1">
          In order to pass the exam, the most essential thing is being lucky. This doesn't help anyone, but in my opinion this is the most important thing.
          <br/>
          I sat the exam twice and in the two attempts the difficulty level was very different. On the second attempt where I passed with getting full access to all hosts, I had the luck that nothing really new appeared during the exam. I didn't use the specific exploits before, but the kind of attack vectors and exploits were not unknown. This made it a lot easier to pass.
          <br/>
          In the first attempt, the 25 points box had some initial vector that I never saw before and never encountered afterward. I am still proud that I managed to get initial access during the exam. I think this was a lot harder to achieve, than aceing the second attempt. But it costed a lot of time and a lot of energy and in the end a few points were missing. So to sum it up, luck plays a major role. There are ways to bent it, but only for so much.
          </p>
          <p>
          <v-row justify="center">
          <v-img justify="center" max-width="500px" width="100%" src="../../assets/luck.gif"></v-img>
          </v-row>
          </p>
          <p class="text-body-1">
          The most important thing to bend the luck in your direction is building up a methodology on how to approach a target.
          <br/>
          My methodology was basically an endless cycling, with time boxing every action as much as possible. I set up a timer running for 2 hours and would force my self to move to the next target if I did not manage to get initial access.
          <br/>
          Besides the big timer ticking down, I tried to limit the effort spent on every action to avoid going down rabbit holes. So I would start with a general port scan (no UDP stuff etc.) to get a fast overview of the attack surface. Then I would look at each service on a high level manner and do some basics checks. Then I would rate what services looking the most promising and go a little bit deeper there. If after a certain time nothing shows up, take a step back and look at other services and so on. It is important to cycle through things and don't dive too deep from the get go.
          </p>
          <p>
          <v-row justify="center">
          <v-img justify="center" max-width="500px" width="100%" src="../../assets/time.gif"></v-img>
          </v-row>
          </p>
          <p class="text-body-1">
          To come up with good priorities and to avoid being confronted with something completely new in the exam, do as many boxes as possible. Even if they are too hard and not OSCP level, it will help to refine your methodology and maybe also teach something that might be relevant in your exam.
          <br/>
          I would rate the proving ground boxes to have the most in common with the exam targets. The second-best source is the official lab. I did all the lab hosts and a few targets from HTB before my first attempt. To prepare for the second attempt, I used proving grounds. HTB hosts are a little bit different. It also helps to do them, but a lot of things standard there, never popped up in the OSCP (Offensive Security) realm (e.g. scanning for subdomains).
          </p>
          <p class="text-h5">
          What i didn't like
          </p>
          <p class="text-body-1">
          The learning material was really not good, this was around 2020/21 when I was doing the certification. But based ob various posts, I think it is still the same.
          <br/>
          You get a pdf/videos explaining the general idea and some basic techniques regarding pentesting. The content is in my opinion not nearly enough to pass the exam. Since the field is changing rapidly it is impossible to have an up-to-date PDF explaining what is necessary, but in my opinion it would be a lot better to just explaining general concepts and clearly state that students need a lot of self studying based on public available information on the internet. I mean, you get that quite fast since there are so many resources outside the official PDFs, but Offensive Security should communicate this clearly.
          <br/>
          Where it gets interesting the first time is the labs. This is where you actually learn something you should spend most time here. But here also things get outdated a little bit. I had the impression that hosts in the lab and hosts in the exam drifted apart.
          <br/>
          Both the PDF and lab state results in the feeling that the material provided does not really enable you to pass the exam. For me, this is the biggest issue. If you pay money for the labs and material in order to get prepared it should also take you to the level needed, otherwise just paying for the exam and getting the training somewhere else would be the fairer approach.
          </p>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'OscpPost',
    title: 'The OSCP experience',
    id: 1,
  }
</script>

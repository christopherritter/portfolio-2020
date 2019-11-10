<template>
  <b-container class="about">
    <b-row>
      <b-col>
        <h1 class="resume-name">Christopher Ritter</h1>
        <h4 class="resume-title">User Experience Designer / Front-End Developer</h4>
      </b-col>
    </b-row>

    <b-row class="resume-abilities-header">
      <b-col
        cols="6"
        class="bullet-header"
      >Skills</b-col>
      <b-col class="bullet-header">Tools</b-col>
      <b-col class="bullet-header">Tech</b-col>
    </b-row>

    <b-row class="resume-abilities">
      <b-col>
        <div class="bullet-item">
          <div class="bullet"></div>
          <div class="bullet-text">Brainstorming</div>
        </div>
      </b-col>
      <b-col>
        <div class="bullet-item">
          <div class="bullet"></div>
          <div class="bullet-text">Prototyping</div>
        </div>
      </b-col>
      <b-col>
        <div class="bullet-item">
          <div class="bullet"></div>
          <div class="bullet-text">Adobe XD</div>
        </div>
      </b-col>
      <b-col>
        <div class="bullet-item">
          <div class="bullet"></div>
          <div class="bullet-text">HTML</div>
        </div>
      </b-col>
    </b-row>

    <b-row class="resume-section">
      <b-col>
        <h5>Experience</h5>
      </b-col>
    </b-row>

    <b-row class="company-header">
      <b-col>
        <h2 class="company-name">Jenzabar</h2>
        <span class="company-role">UX/UI Designer, 2015 - Today</span>
      </b-col>
    </b-row>

    <b-row class="company-tasks">
      <b-col>
        <div class="bullet-item">
          <div class="bullet"></div>
          <div class="bullet-text">Brainstorming</div>
        </div>
      </b-col>
    </b-row>

  </b-container>
</template>

<style scoped>
.resume-name {
  margin-top: 10rem;
  margin-bottom: 0;
}
.resume-title {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  margin-bottom: 10rem;
}
.resume-section {
  margin-bottom: 3rem;
}
.resume-abilities {
  margin-bottom: 8rem;
}
.bullet-header {
  font-family: "Montserrat SemiBold", Helvetica, Arial, sans-serif;
}
.bullet {
  border: 1px solid #222222;
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  display: inline-block;
  margin-right: 0.5rem;
  margin-bottom: 0.1rem;
}
.bullet-text {
  display: inline-block;
}
.company-header {
  margin-bottom: 1em;
}
.company-name {
  margin-bottom: 0.25rem;
}
.company-role {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
}
</style>
<template>
  <div id="app">
    <b-navbar id="nav" fixed="top" variant="light" toggleable="lg" type="light">
      <b-navbar-brand to="/">Christopher Ritter</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/" exact exact-active-class="active">Work</b-nav-item>
          <b-nav-item to="/about" exact exact-active-class="active"
            >About</b-nav-item
          >
          <b-nav-item to="/resume" exact exact-active-class="active"
            >Resume</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
    <b-container id="footer" class="text-light bg-dark" fluid>
      <b-container class="download-resume">
        <b-row>
          <b-col class="download-resume-header">
            <h3>Download a copy of my resume</h3>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="download-resume-text">
            Download an updated copy of my resume in Adobe PDF or Microsoft Word
            format.
          </b-col>
        </b-row>
        <b-row>
          <b-col class="download-resume-buttons">
            <b-button
              size="lg"
              variant="primary"
              href="https://app.box.com/s/gws18gc1hna8g7tnri88ncjeev4vthtm"
              target="_blank"
              >Adobe PDF</b-button
            >
            <b-button
              size="lg"
              variant="outline-light"
              href="https://app.box.com/s/vighxx386p10zqthjs22yjyoitkfuhnq"
              target="_blank"
              >Microsoft Word</b-button
            >
          </b-col>
        </b-row>
      </b-container>
      <hr />
      <b-container class="copyright-info">
        <b-row>
          <b-col>
            <p>&copy; 2019 Christopher Ritter</p>
          </b-col>
          <b-col class="text-right">
            <b-link
              href="mailto:hello@christopherritter.com"
              class="footer-icon-button"
              target="_blank"
            >
              <b-img
                :src="`/img/email.svg`"
                class="footer-icon"
                alt="Email"
              ></b-img>
            </b-link>
            <b-link
              href="http://www.twitter.com/geddon"
              class="footer-icon-button"
              target="_blank"
            >
              <b-img
                :src="`/img/twitter.svg`"
                class="footer-icon"
                alt="Twitter"
              ></b-img>
            </b-link>
            <b-link
              href="http://www.github.com/christopherritter"
              class="footer-icon-button"
              target="_blank"
            >
              <b-img
                :src="`/img/github-face.svg`"
                class="footer-icon"
                alt="Github"
              ></b-img>
            </b-link>
            <b-link
              href="http://www.linkedin.com/in/christopherritter"
              class="footer-icon-button"
              target="_blank"
            >
              <b-img
                :src="`/img/linkedin.svg`"
                class="footer-icon"
                alt="LinkedIn"
              ></b-img>
            </b-link>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Roboto Light", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.25rem;
  line-height: 1.65;
  color: #222222;
}

#nav {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
}

#nav .navbar-brand {
  font-family: "Montserrat SemiBold", Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
}

#nav .active.router-link-active {
  font-family: "Montserrat SemiBold", Helvetica, Arial, sans-serif;
}

#footer {
  font-size: 0.875rem;
  padding: 0;
  margin: 150px 0 0 0;
}

#footer .download-resume h3 {
  margin-top: 3em;
}

#footer hr {
  margin: 6em 0 0.25em 0;
}

#footer .copyright-info p {
  margin: 0.5em;
}

h1 {
  font-size: 4.5rem;
}

h1,
h2 {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  margin-bottom: 1.5rem;
}

h3,
h4,
h5 {
  font-family: "Montserrat SemiBold", Helvetica, Arial, sans-serif;
}

h6 {
  font-family: "Roboto Medium", Helvetica, Arial, sans-serif;
  font-size: 1.2rem !important;
}

@media (min-width: 1200px) {
  .container {
    max-width: 960px !important;
  }
}

p {
  margin-bottom: 1.5rem;
}

.lead {
  line-height: 2.5rem;
}

.download-resume {
  text-align: center;
}

.download-resume-header {
  padding-bottom: 0.25em;
}

.download-resume-text {
  font-size: 1.05rem;
  padding-bottom: 2em;
}

.download-resume-buttons .btn {
  font-size: 1.05rem;
  margin-right: 1em;
  margin-bottom: 1em;
}

.footer-icon-button {
  margin-right: 0.25em;
  padding: 0;
}

.footer-icon {
  width: 24px;
  height: 24px;
  margin: 0.5em 0.25em;
  padding: 0;
  fill: #ffffff; /* not working with b-image */
}
</style>

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
        <h3>Download a copy of my resume</h3>
        <p>
          Download an updated copy of my resume in Adobe PDF or Microsoft Word
          format.
        </p>
      </b-container>
      <hr />
      <b-container class="copyright-info">
        <p>&copy; 2019 Christopher Ritter</p>
      </b-container>
    </b-container>
  </div>
</template>

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

#footer .download-resume {
  padding: 130px 0;
}

#footer hr {
  margin: 0;
}

#footer .copyright-info {
  padding: 12px 0;
}

#footer .copyright-info p {
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 4.5rem !important;
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
</style>

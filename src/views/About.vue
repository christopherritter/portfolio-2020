<template>
  <b-container class="about">
    <div class="about-image"></div>
    <h2 class="about-me">About me</h2>
    <p class="lead">
      Hello! I’m Aleksi Tappura, a freelance designer focused on digital product
      design. I collaborate with passionate people and companies to create
      products and services that have exceptional user experience.
    </p>
    <p>
      I believe in working directly with the end-user from the beginning, to
      create solutions that are genuinely desirable, feasible and viable for the
      business and the users. In practice, this means a lot of experiments,
      prototypes and stakeholder interviews.
    </p>
    <p>
      I’m currently available for new projects, so send me a message and let’s
      discuss how I can help you. I’m open to work both on-site in Helsinki, or
      remotely.
    </p>
    <p>
      You can also follow me on Twitter, Dribbble, LinkedIn, or reach out via
      email - hello@aleksitappura.com.
    </p>
  </b-container>
</template>

<script>
export default {
  name: "about",
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.scrollToTop();
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped>
.about-image {
  width: 100%;
  height: 22em;
  background-color: #edf1f4;
  margin-bottom: 60px;
  background-image: url("/img/website-thumbnail.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.about-me {
  margin-bottom: 1.5rem;
}
.lead {
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-size: 1.45rem;
}
</style>

<template>
  <b-container class="about">
    <div class="about-image"></div>
    <h2 class="about-me">About me</h2>
    <p class="lead">
      My name is Christopher Ritter. I'm a designer with more than a decade of
      experience building interfaces for web, mobile, and desktop applications.
      I bridge the gap between design and development by focusing on the
      technlology that forms the basis of the user experience.
    </p>
    <p>
      In practical terms, I take a lean approach to UX design. This approach
      focuses on prototyping to gather feedback from primary stakeholders. As
      someone who likes to get their hands dirty working in code, I prefer to
      build prototypes that leverage the current technology stack. This makes it
      easier to iterate through multiple concepts and push the final solution
      into production.
    </p>
    <p>
      Lately I have become obsessed with the promise of design systems. I think
      of them like cataloges that PMs can use to improve their products. These
      cataloges provide a common language that speaks volumes to designers and
      developers, and end users as well through well crafted, consistant
      experiences across a variety of platforms and devices.
    </p>
    <p>
      If you want to learn more about my obsessions you can follow me on
      <b-link href="http://www.twitter.com/geddon" target="_blank"
        >Twitter</b-link
      >,
      <b-link href="http://www.github.com/christopherritter" target="_blank"
        >GitHub</b-link
      >,
      <b-link
        href="http://www.linkedin.com/in/christopherritter"
        target="_blank"
        >LinkedIn</b-link
      >, or reach out via email -
      <b-link href="mailto:hello@christopherritter.com" target="_blank"
        >hello@christopherritter.com</b-link
      >.
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
  background-image: url("/img/self-portrait.png");
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

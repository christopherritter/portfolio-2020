<template>
  <b-container class="work">
    <h2 class="about-me">
      Hello! I'm Christopher Ritter &mdash; a designer focused on UX/UI design,
      prototyping, and design systems.
    </h2>
    <JenzabarProjects />
  </b-container>
</template>

<script>
// @ is an alias to /src
import JenzabarProjects from "@/components/JenzabarProjects.vue";

export default {
  name: "work",
  components: {
    JenzabarProjects
  },
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
.about-me {
  margin: 6em 0;
  line-height: 1.7;
  text-align: center;
}
@media (min-width: 320px) and (max-width: 500px) {
  .about-me {
    margin: 3em 0;
  }
}
@media (max-width: 319px) {
  .about-me {
    margin: 2em 0;
  }
}
</style>

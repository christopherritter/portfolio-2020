<template>
  <b-container class="work">
    <h2 class="about-me">Hello! I'm Christopher Ritter &mdash; a designer focused on UX/UI design, prototyping, and design systems.</h2>
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
  }
};
</script>

<style scoped>
  .about-me {
    margin: 176px 0;
    line-height: 1.7;
    text-align: center;
  } 
</style>
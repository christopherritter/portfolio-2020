<template>
  <div class="jenzabar-projects">
    <b-row
      class="project"
      v-for="project in this.$store.state.companies[0].projects"
      v-bind:key="project.id"
    >
      <b-col>
        <div class="project-image"></div>
        <b-row>
          <b-col>
            <h6 class="project-name">{{ project.product }}</h6>
          </b-col>
          <b-col cols="8">
            <p class="project-description">{{ project.description }}</p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "JenzabarProjects",
  store,
  data() {
    return this.$store.state;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #2f89fc;
}
.project {
  margin-bottom: 72px;
}
.project-image {
  width: 100%;
  height: 540px;
  background-color: #edf1f4;
}
.project-name,
.project-description {
  margin: 12px;
  line-height: 1.65;
}
</style>

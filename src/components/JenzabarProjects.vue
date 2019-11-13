<template>
  <div class="jenzabar-projects">
    <b-row class="project" v-for="project in projects" v-bind:key="project.id">
      <b-col>
        <div class="project-image bg-light" v-if="project.img">
          <b-img :src="project.img" fluid :alt="project.name"></b-img>
        </div>
        <b-row>
          <b-col>
            <h6 class="project-name">{{ project.name }}</h6>
          </b-col>
          <b-col cols="8">
            <p class="project-description">{{ project.description }}</p>
            <b-link :to="'projects/' + project.path" class="project-path"
              >More info</b-link
            >
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
    return {
      loading: false,
      projects: [],
      error: null
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData();
  },
  methods: {
    fetchData() {
      let projects = this.$store.getters.projects;

      for (let p = 0; p < projects.length; p++) {
        if (projects[p].employer == "Jenzabar, Inc.") {
          this.projects.push(projects[p]);
        }
      }
    }
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
  /* background-color: #edf1f4; */
  margin-bottom: 0.675em;
}
.project-name,
.project-description {
  margin: 12px;
  line-height: 1.65;
}
.project-path {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  margin-left: 10px;
}
.project-path:after {
  content: " →";
}
</style>

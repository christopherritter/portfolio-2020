<template>
  <b-container class="project">

    <h2 class="project-name">{{ project.name }}</h2>
    <p class="project-description">{{ project.description }}</p>

    <div class="project-image"></div>

    <b-row class="resume-abilities-header">
      <b-col
        cols="6"
        class="bullet-header"
      >My role</b-col>
      <b-col
        cols="6"
        class="bullet-header"
      >Client</b-col>
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

    <hr />

    <div
      class="company-tasks"
      v-for="task in taskList"
      v-bind:key="task.id"
    >
      <b-row
        v-if="project.name == task.project"
        class="tasks"
      >
        <b-col>
          <div class="bullet-item">
            <div class="bullet"></div>
            <div class="bullet-text">{{ task.description }}</div>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import store from "@/store";

export default {
  name: "project",
  store,
  data() {
    return {
      loading: false,
      project: null,
      error: null
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      let project_slug = this.$route.params.project_slug;
      let projects = this.$store.getters.projects;

      for (let p = 0; p < projects.length; p++) {
        if (projects[p].path == project_slug.toLowerCase()) {
          this.project = projects[p];
        }
      }

      window.scrollTo(0,0);
    }
  },
  computed: {
    taskList() {
      return this.$store.getters.tasks;
    }
  }
};
</script>

<style scoped>
hr {
  margin: 3em 0;
}
.project-name {
  margin: 4em 0 0.5em 0;
}
.project-image {
  width: 100%;
  height: 540px;
  background-color: #edf1f4;
  margin: 6em 0 3em 0;
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
  margin-top: -2.05rem;
  text-indent: 1.25rem;
}
</style>

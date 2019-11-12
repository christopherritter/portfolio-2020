<template>
  <b-container class="project">
    <h2 class="project-name">{{ project.name }}</h2>
    <p class="project-description">{{ project.description }}</p>

    <div class="project-image"></div>

    <b-row class="resume-abilities-header">
      <b-col md="6" v-if="project.skills.length > 0">
        <b-row>
          <b-col>
            <h6 class="bullet-header">Skills</h6>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            cols="6"
            class="bullet-item"
            v-for="skill in project.skills"
            v-bind:key="skill.id"
          >
            <div class="bullet"></div>
            <div class="bullet-text">{{ skill }}</div>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="3" v-if="project.tools.length > 0">
        <b-row>
          <b-col>
            <h6 class="bullet-header">Tools</h6>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div
              class="bullet-item"
              v-for="tool in project.tools"
              v-bind:key="tool.id"
            >
              <div class="bullet"></div>
              <div class="bullet-text">{{ tool }}</div>
            </div>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="3" v-if="project.tech.length > 0">
        <b-row>
          <b-col>
            <h6 class="bullet-header">Tech</h6>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div
              class="bullet-item"
              v-for="technology in project.tech"
              v-bind:key="technology.id"
            >
              <div class="bullet"></div>
              <div class="bullet-text">{{ technology }}</div>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <hr />

    <div class="project-tasks" v-for="task in taskList" v-bind:key="task.id">
      <b-row v-if="project.name == task.project" class="tasks">
        <b-col>
          <div class="bullet-item">
            <div class="bullet"></div>
            <div class="bullet-text">{{ task.description }}</div>
          </div>
        </b-col>
      </b-row>
    </div>

    <div class="project-deliverables" v-if="project.deliverables.length > 0">
      <b-row class="deliverable" v-for="deliverable in project.deliverables" v-bind:key="deliverable.id">
        <b-col>
          <hr />
          <h4>{{ deliverable.title }}</h4>
          <div class="deliverable-image">
            <b-img :src="deliverable.img" fluid alt="Responsive image"></b-img>
          </div>
          <p>{{ deliverable.description }}</p>
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

      window.scrollTo(0, 0);
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
.project-image,
.deliverable-image {
  width: 100%;
  background-color: #edf1f4;
}
.project-image {
  height: 540px;
  margin: 6em 0 3em 0;
}
.deliverable-image {
  margin: 3em 0;
  padding: 2em;
}
.deliverable-image img {
  -webkit-box-shadow: 0 20px 16px -16px rgba(0,0,0,0.15);
  -moz-box-shadow: 0 20px 16px -16px rgba(0,0,0,0.15);
  box-shadow: 0 20px 16px -16px rgba(0,0,0,0.15);
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
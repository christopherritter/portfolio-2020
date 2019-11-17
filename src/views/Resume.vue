<template>
  <b-container class="about">
    <b-row>
      <b-col>
        <h1 class="resume-name">Christopher Ritter</h1>
        <h4 class="resume-title">
          User Experience Designer / User Interface Developer
        </h4>
      </b-col>
    </b-row>

    <b-row class="resume-abilities">
      <b-col class="resume-skills" md="6" sm="12">
        <b-row>
          <b-col sm="6" xs="12">
            <h6 class="bullet-header">Skills</h6>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            sm="6"
            xs="12"
            class="bullet-item"
            v-for="skill in skillList.slice(0, 10)"
            v-bind:key="skill.id"
          >
            <div class="bullet"></div>
            <div class="bullet-text">{{ skill.label }}</div>
          </b-col>
        </b-row>
      </b-col>
      <b-col class="resume-tools" md="3" sm="6" xs="12">
        <b-row>
          <b-col>
            <h6 class="bullet-header">Tools</h6>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div
              class="bullet-item"
              v-for="tool in toolList.slice(0, 5)"
              v-bind:key="tool.id"
            >
              <div class="bullet"></div>
              <div class="bullet-text">{{ tool.label }}</div>
            </div>
          </b-col>
        </b-row>
      </b-col>
      <b-col class="resume-tech" md="3" sm="6" xs="12">
        <b-row>
          <b-col>
            <h6 class="bullet-header">Tech</h6>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div
              class="bullet-item"
              v-for="technology in techList.slice(0, 5)"
              v-bind:key="technology.id"
            >
              <div class="bullet"></div>
              <div class="bullet-text">{{ technology.label }}</div>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row class="resume-section">
      <b-col>
        <h5>Experience</h5>
      </b-col>
    </b-row>

    <div
      class="employers"
      v-for="company in this.$store.state.employers"
      v-bind:key="company.id"
    >
      <b-row class="company-header">
        <b-col>
          <h2 class="company-name">{{ company.name }}</h2>
          <span class="company-role"
            >{{ company.title }}, {{ company.startDate }} -
            {{ company.endDate }}</span
          >
        </b-col>
      </b-row>

      <div class="company-tasks" v-for="task in taskList" v-bind:key="task.id">
        <b-row v-if="company.name == task.employer" class="tasks">
          <b-col>
            <div class="bullet-item">
              <div class="bullet"></div>
              <div class="bullet-text">{{ task.description }}</div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </b-container>
</template>

<script>
import store from "@/store";

export default {
  name: "resume",
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
    this.scrollToTop();
  },
  computed: {
    taskList() {
      return this.$store.getters.tasks;
    },
    skillList() {
      return this.$store.getters.skills;
    },
    toolList() {
      return this.$store.getters.tools;
    },
    techList() {
      return this.$store.getters.tech;
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped>
.resume-name {
  margin-top: 10rem;
  margin-bottom: 0;
}
@media (min-width: 1200px) {
  .resume-name {
    font-size: 4.5rem;
  }
}
.resume-title {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  margin-bottom: 10rem;
}
.resume-section {
  margin-bottom: 3rem;
}
.resume-abilities {
  margin-bottom: 8rem;
}
.resume-skills,
.resume-tools,
.resume-tech {
  margin-bottom: 1em;
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
.company-header {
  margin-bottom: 1em;
}
.company-name {
  margin-bottom: 0.25rem;
}
.company-role {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
}
.employers {
  margin-bottom: 72px;
}
</style>

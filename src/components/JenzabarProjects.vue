<template>
  <div class="jenzabar-projects">
    <b-row class="project" v-for="project in projects" v-bind:key="project.id">
      <b-col>
        <div
          class="project-image"
          v-if="project.img"
          :style="
            'background-color: ' +
              themes[currentTheme.id].overlay +
              '; border-color: ' +
              themes[currentTheme.id].border
          "
        >
          <b-link :to="'projects/' + project.path">
            <b-img :src="project.img" fluid :alt="project.name"></b-img>
          </b-link>
        </div>
        <b-row>
          <b-col lg="3" md="4" sm="12">
            <h6 class="project-name">{{ project.name }}</h6>
          </b-col>
          <b-col col lg="9" md="8" sm="12">
            <p class="project-description">{{ project.description }}</p>
            <b-link
              :to="'projects/' + project.path"
              class="project-path"
              :style="'color: ' + themes[currentTheme.id].link"
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
import { mapGetters } from "vuex";

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
  computed: {
    ...mapGetters(["currentTheme", "themes"])
  },
  methods: {
    fetchData() {
      let projects = this.$store.getters.projects;

      for (let p = 0; p < projects.length; p++) {
        if (projects[p].employer == "Jenzabar, Inc.") {
          this.projects.push(projects[p]);

          this.$ga.event({
            eventCategory: "projects",
            eventAction: "employer",
            eventValue: projects[p].employer
          });
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
.project {
  margin-bottom: 3em;
}
.project-image {
  width: 100%;
  height: auto;
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

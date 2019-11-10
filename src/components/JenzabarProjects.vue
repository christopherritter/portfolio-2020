<template>
  <div class="jenzabar-projects">
    <b-row
      class="project"
      v-for="project in projects"
      v-bind:key="project.id"
    >
      <b-col>
        <div class="project-image"></div>
        <b-row>
          <b-col>
            <h6 class="project-name">{{ project.name }}</h6>
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
export default {
  name: "JenzabarProjects",
  data() {
    return {
      projects: [
        {
          name: "Find Your Calling",
          description:
            "This is a somewhat lenghty project description. It should ideally take between 3 and four lines below the image of the project.",
          link: "FYC"
        },
        {
          name: "Jenzabar ICS 9",
          description:
            "This is a somewhat lenghty project description. It should ideally take between 3 and four lines below the image of the project.",
          link: "JICS9"
        },
        {
          name: "Jenzabar CX 10",
          description:
            "This is a somewhat lenghty project description. It should ideally take between 3 and four lines below the image of the project.",
          link: "CX10"
        },
        {
          name: "Jenzabar JX",
          description:
            "This is a somewhat lenghty project description. It should ideally take between 3 and four lines below the image of the project.",
          link: "JX"
        }
      ]
    };
  },
  props: {
    msg: String
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

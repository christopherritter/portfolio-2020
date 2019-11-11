<template>
  <div class="jenzabar-projects">
    <b-row
      class="product"
      v-for="product in this.$store.state.employers[0].products"
      v-bind:key="product.id"
    >
      <b-col>
        <div class="product-image"></div>
        <b-row>
          <b-col>
            <h6 class="product-name">{{ product.name }}</h6>
          </b-col>
          <b-col cols="8">
            <p class="product-description">{{ product.description }}</p>
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
.product {
  margin-bottom: 72px;
}
.product-image {
  width: 100%;
  height: 540px;
  background-color: #edf1f4;
}
.product-name,
.product-description {
  margin: 12px;
  line-height: 1.65;
}
</style>

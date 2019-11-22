<template>
  <div class="theme-picker">
    <div
      class="theme-picker-panel"
      :style="
        'background-color: ' +
          themes[currentTheme.id].overlay +
          '; border-color: ' +
          themes[currentTheme.id].border
      "
    >
      <b-button
        v-for="theme in themes"
        v-bind:key="theme.id"
        v-on:click="selectTheme(theme.id)"
        block
        class="rounded-circle theme-picker-button"
        :style="
          'color: ' +
            theme.text +
            '; background-color: ' +
            theme.overlay +
            '; border-color: ' +
            theme.border
        "
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["currentTheme", "themes"])
  },
  methods: {
    ...mapMutations(["selectTheme"])
  }
};
</script>

<style>
.theme-picker-panel {
  border-top-left-radius: 0.875em;
  border-bottom-left-radius: 0.875em;
  border-width: 1px;
  /* box-shadow: -3px 3px 3px rgba(0, 0, 0, 0.25); */
  padding: 6px 12px 6px 6px;
}
.theme-picker-button {
  width: 1.5em;
  height: 1.5em;
}
</style>

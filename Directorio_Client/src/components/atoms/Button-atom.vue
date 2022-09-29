<template>
  <b-button
    v-bind="{ ...$props, ...$attrs }"
    :class="classes"
    @click="() => $emit('click')"
    >label</b-button
  >
</template>

<script>
export default {
  computed: {
    classes() {
      const classes = ["Button"];
      if (this.spaced) classes.push("spaced");
      return classes.join(" ");
    },
  },
  props: {
    type: { type: String, default: "is-success is-light" },
    label: { type: String, default: "Accion" },
    spaced: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
.spaced {
  width: 45%;
}
</style>

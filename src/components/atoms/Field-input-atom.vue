<template>
  <b-field :label="title" required>
    <b-input v-model="text" v-bind="{ ...$props, ...$attrs }" required />
  </b-field>
</template>

<script>
export default {
  data() {
    return {
      text: this.value,
    };
  },
  computed: {},
  watch: {
    value(value) {
      this.text = value;
    },
    text() {
      this.$emit("input", this.text);
    },
  },
  props: {
    title: { type: String, default: "titulo" },
    type: { type: String, default: null },
    maxlength: { type: Number, default: null },
    value: { type: String, default: null },
    icon: { type: String, default: null },
  },
};
</script>

<style scoped></style>

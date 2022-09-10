<template>
  <b-field :label="title" required>
    <b-input v-bind="{ ...$props, ...$attrs }" v-model="text" required />
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
  },
  props: {
    title: { type: String, default: "titulo" },
    type: { type: String, default: null },
    maxLength: { type: Number, default: null },
    value: { type: String, default: null },
  },
};
</script>

<style scoped></style>

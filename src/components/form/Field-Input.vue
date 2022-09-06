<template>
  <b-field
    :label="label"
    :type="{ 'is-danger': hasError.err }"
    :message="hasError.mess"
    required
  >
    <b-input
      :icon="icon"
      :type="type"
      v-model="inputValue"
      :maxlength="maxlength"
      required
    />
  </b-field>
</template>

<script>
export default {
  watch: {
    inputValue() {
      this.$emit("input", this.inputValue);
    },
  },
  computed: {
    maxlength() {
      return this.type === "tel" ? "10" : "100";
    },
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
  props: {
    label: { type: String, default: null },
    type: { type: String, default: "text" },
    icon: { type: String, default: null },
    message: { type: String, default: null },
    hasError: { default: { err: false, mess: null } },
    value: { type: String, default: "" },
  },
};
</script>

<style scoped>
.field {
  margin: 10px;
}
</style>

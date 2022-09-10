<template>
  <div class="card-footer">
    <Button
      @click="() => $emit('clickDanger')"
      :label="labelDanger"
      type="is-danger is-light"
      spaced
    />
    <Button
      @click="() => $emit('clickSucces')"
      :label="labelSucces"
      type="is-success is-light"
      spaced
    />
  </div>
</template>

<script>
import { Button } from "@/components";
export default {
  components: {
    Button,
  },
  props: {
    labelSucces: { type: String, default: "succes" },
    labelDanger: { type: String, default: "danger" },
  },
};
</script>

<style scoped>
.card-footer {
  display: flex;
  padding-top: 13px;
  justify-content: space-evenly;
}
</style>

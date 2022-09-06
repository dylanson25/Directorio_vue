<template>
  <div class="options">
    <Search @sendSearch="(value) => $emit('sendSearch', value)" />
    <CardDropForm title="Agregar personsa" :closeDrop="showForm">
      <FormDataPerson
        btnLabel="Agregar"
        @cancel="() => (showForm = !showForm)"
      />
    </CardDropForm>
  </div>
</template>

<script>
import { CardDropForm, Search, FormDataPerson } from "@/components";
export default {
  components: {
    CardDropForm,
    FormDataPerson,
    Search,
  },
  data() {
    return {
      showForm: false,
    };
  },
};
</script>

<style scoped>
.options {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  padding-left: 13px;
  padding-right: 13px;
}
@media only screen and (min-width: 500px) {
  .options {
    justify-content: space-between;
    flex-direction: row;
  }
}
</style>

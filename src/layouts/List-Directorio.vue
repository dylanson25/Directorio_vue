<template>
  <div class="list">
    <template v-if="isActive">
      <EditarPersona v-model="isActive" :values="dataToEdit" @desactive="clearData" />
    </template>
    <CardInfo v-for="(registro, key) in directorio" :key="key" :registro="registro" @OpenModal="edit" />
  </div>
</template>

<script>
import { CardInfo } from "@/components";
import EditarPersona from "@/layouts/Edit-Person.vue";
export default {
  components: {
    CardInfo,
    EditarPersona,
  },
  methods: {
    edit(value) {
      this.dataToEdit = value;
      this.isActive = true;
    },
    clearData(value) {
      this.isActive = value;
      if (!this.isActive) {
        this.dataToEdit = {
          uid: "",
          nombre: "",
          direccion: "",
          phone: "",
        };
      }
    },
  },
  props: {
    directorio: { type: Array, default: () => [], require: true },
  },
  data() {
    return {
      isActive: false,
      dataToEdit: {
        uid: "",
        nombre: "",
        direccion: "",
        phone: "",
      },
    };
  },
};
</script>

<style scoped>
.list {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media only screen and (min-width: 540px) {
  .list {
    padding: 10px;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>

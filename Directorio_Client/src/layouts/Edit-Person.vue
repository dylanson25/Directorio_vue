<template>
  <b-modal v-model="isActive" has-modal-card trap-focus :destroy-on-hide="false" aria-role="dialog"
    aria-label="Editar usuario" aria-modal>
    <template>
      <form action="">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Editar registro</p>
            <button type="button" class="delete" @click="() => (isActive = !isActive)" />
          </header>
          <section class="modal-card-body">
            <FormDataPerson v-model="formData" btnLabel="Confirmar" @cancel="() => (isActive = !isActive)" />
          </section>
        </div>
      </form>
    </template>
  </b-modal>
</template>
<script>
import { FormDataPerson } from "@/components";
export default {
  name: "EditarPersona",
  components: {
    FormDataPerson,
  },
  watch: {
    show() {
      this.isActive = this.show;
    },
    isActive() {
      this.$emit("desactive", this.isActive);
    },
    values(values) {
      this.formData = { ...values };
    },
  },
  computed: {
    show() {
      return this.value;
    },
  },
  data() {
    return {
      isActive: this.value,
      formData: this.values,
    };
  },
  props: {
    values: {
      default() {
        return {
          uid: "",
          nombre: "",
          direccion: "",
          phone: "",
        };
      },
    },
    value: { type: Boolean, default: false },
  },
};
</script>
<style scoped>
.modal-card {
  border-radius: 10px;
  margin-left: 16px !important;
  margin-right: 16px !important;
}

.card-footer {
  display: flex;
  padding-top: 13px;
  justify-content: space-evenly;
}

.btn-space {
  width: 45%;
}

@media only screen and (min-width: 500px) {
  .modal-card {
    margin-left: 16% !important;
    margin-right: 16% !important;
  }
}

@media only screen and (min-width: 800px) {
  .modal-card {
    margin-left: 5% !important;
    margin-right: 5% !important;
  }
}
</style>

<template>
  <b-modal
    v-model="isActive"
    has-modal-card
    trap-focus
    :destroy-on-hide="false"
    aria-role="dialog"
    aria-label="Editar usuario"
    aria-modal
  >
    <template>
      <form action="">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Editar registro</p>
            <button
              type="button"
              class="delete"
              @click="() => (isActive = !isActive)"
            />
          </header>
          <section class="modal-card-body">
            <div>
              <Input
                :hasError="this.hasError.nombre"
                v-model="formData.nombre"
                label="Nombre completo:"
                icon="account"
              />
              <Input
                :hasError="this.hasError.direccion"
                v-model="formData.direccion"
                label="Dirección:"
                icon="home"
              />
              <Input
                :hasError="this.hasError.phone"
                v-model="formData.phone"
                label="Numero de telefono:"
                type="tel"
                icon="phone"
              />
              <footer class="card-footer">
                <b-button
                  @click="() => (isActive = !isActive)"
                  class="btn-space"
                  type="is-danger is-light"
                  >Cancelar</b-button
                >
                <b-button
                  @click="validatePersona"
                  class="btn-space"
                  type="is-success is-light"
                  >Confirmar</b-button
                >
              </footer>
            </div>
          </section>
        </div>
      </form>
    </template>
  </b-modal>
</template>
<script>
import { Input } from "@/components";
import { mapActions } from "vuex";
export default {
  name: "EditarPersona",
  components: {
    Input,
  },
  watch: {
    show() {
      this.isActive = this.show;
    },
    isActive() {
      this.$emit("desactive", this.isActive);
    },
    persona() {
      this.formData = this.persona;
    },
  },
  computed: {
    show() {
      return this.value;
    },
    persona() {
      return this.values;
    },
  },
  methods: {
    ...mapActions(["createPerson", "updateEntry"]),
    validatePersona() {
      if (this.formData.nombre.length == 0)
        this.hasError.nombre = { err: true, mess: "Falta llenar este campo" };
      if (this.formData.direccion.length == 0)
        this.hasError.direccion = {
          err: true,
          mess: "Falta llenar este campo",
        };
      if (this.formData.phone.length == 0) {
        this.hasError.phone = { err: true, mess: "Falta llenar este campo" };
      } else if (!this.regexTel.test(this.formData.phone)) {
        this.hasError.phone = {
          err: true,
          mess: "Formato de telefono no valido",
        };
      }

      if (
        !this.hasError.nombre.err &&
        !this.hasError.direccion.err &&
        !this.hasError.phone.err
      ) {
        this.updateEntry(this.formData);
        this.isActive = !this.isActive;
      }
    },
  },
  data() {
    return {
      hasError: {
        nombre: { err: false, mess: "" },
        direccion: { err: false, mess: "" },
        phone: { err: false, mess: "" },
      },
      regexTel: new RegExp("[0-9]$"),
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

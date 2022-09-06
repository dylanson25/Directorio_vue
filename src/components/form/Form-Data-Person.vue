<template>
  <div>
    <Input
      :hasError="this.hasError.nombre"
      v-model="persona.nombre"
      label="Nombre completo:"
      icon="account"
    />
    <Input
      :hasError="this.hasError.direccion"
      v-model="persona.direccion"
      label="Dirección:"
      icon="home"
    />
    <Input
      :hasError="this.hasError.phone"
      v-model="persona.phone"
      label="Numero de telefono:"
      type="tel"
      icon="phone"
    />
    <div class="card-footer">
      <b-button
        @click="() => $emit('cancel')"
        class="btn-space"
        type="is-danger is-light"
        >Cancelar</b-button
      >
      <b-button
        @click="validatePersona"
        class="btn-space"
        type="is-success is-light"
        >{{ btnLabel }}</b-button
      >
    </div>
  </div>
</template>

<script>
import { Input } from "@/components";
import { mapActions } from "vuex";

export default {
  components: {
    Input,
  },
  methods: {
    ...mapActions(["createPerson"]),
    validatePersona() {
      if (this.persona.nombre.length == 0)
        this.hasError.nombre = { err: true, mess: "Falta llenar este campo" };
      if (this.persona.direccion.length == 0)
        this.hasError.direccion = {
          err: true,
          mess: "Falta llenar este campo",
        };
      if (this.persona.phone.length == 0) {
        this.hasError.phone = { err: true, mess: "Falta llenar este campo" };
      } else if (!this.regexTel.test(this.persona.phone)) {
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
        this.createPerson(this.persona);
        this.persona.nombre = "";
        this.persona.direccion = "";
        this.persona.phone = "";
        this.$emit("cancel");
      }
    },
  },
  data() {
    return {
      regexTel: new RegExp("[0-9]$"),
      persona: {
        nombre: "",
        direccion: "",
        phone: "",
      },
      hasError: {
        nombre: { err: false, mess: "" },
        direccion: { err: false, mess: "" },
        phone: { err: false, mess: "" },
      },
    };
  },
  props: {
    btnLabel: { type: String, default: null },
  },
};
</script>
<style scoped>
.card-footer {
  display: flex;
  padding-top: 13px;
  justify-content: space-evenly;
}
.btn-space {
  width: 45%;
}
</style>

<template>
  <div>
    <Input v-model="registro.nombre" title="Nombre completo:" icon="account" />
    <Input v-model="registro.direccion" title="Dirección:" icon="home" />
    <Input
      v-model="registro.phone"
      title="Numero de telefono:"
      type="tel"
      icon="phone"
      :maxlength="10"
    />
    <GroupButtons
      :labelSucces="btnLabel"
      labelDanger="Cancelar"
      @clickDanger="() => $emit('cancel')"
      @clickSucces="validatePersona"
    />
  </div>
</template>

<script>
import { Input, GroupButtons } from "@/components";
import { mapActions } from "vuex";

export default {
  components: {
    Input,
    GroupButtons,
  },
  methods: {
    ...mapActions(["createPerson", "updateEntry"]),
    validatePersona() {
      if (
        !this.registro.nombre.lenght > 0 &&
        !this.registro.direccion.lenght > 0 &&
        !this.registro.phone.lenght > 0
      ) {
        this.btnLabel === "Agregar"
          ? this.createPerson(this.registro)
          : this.updateEntry(this.registro);

        this.registro.nombre = "";
        this.registro.direccion = "";
        this.registro.phone = "";
        this.$emit("cancel");
      }
    },
  },
  data() {
    return {
      regexTel: new RegExp("[0-9]$"),
      registro: { ...this.value },
    };
  },
  props: {
    btnLabel: { type: String, default: "" },
    value: {
      type: Object,
      default() {
        return {
          uid: "",
          nombre: "",
          direccion: "",
          phone: "",
        };
      },
    },
  },
};
</script>
<style scoped></style>

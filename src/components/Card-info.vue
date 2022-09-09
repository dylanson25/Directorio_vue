<template>
  <div class="card-info card">
    <div class="card-header">
      <p class="card-header-title">{{ nombre }}</p>
    </div>
    <div class="card-content">
      <div class="content">
        <p class="subtitle">Dirección</p>
        <p class="ps">{{ direccion }}</p>
      </div>
      <hr />
      <div class="content">
        <p class="subtitle">Numero</p>
        <p class="ps">{{ phone }}</p>
      </div>
      <div class="card-footer">
        <b-button
          class="btn-space"
          @click="() => confirmDelatePersona(uid)"
          type="is-danger is-light"
          >Eliminar</b-button
        >
        <b-button
          @click="
            () =>
              $emit('OpenModal', {
                uid,
                nombre,
                direccion,
                phone,
              })
          "
          class="btn-space"
          type="is-success is-light"
          >Editar</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["deletePersona"]),
    confirmDelatePersona(uid) {
      this.swalWithBootstrapButtons
        .fire({
          title: "¿Estas seguro?",
          text: "No podra recuperar el registro borrado",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Si, eliminar!",
          cancelButtonText: "No, cancelar!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.deletePersona(uid);
            this.swalWithBootstrapButtons.fire(
              "Eliminado!",
              "El registro se ah eliminado del directorio",
              "success"
            );
          }
        });
    },
  },
  data() {
    return {
      isActive: false,
      swalWithBootstrapButtons: this.$swal.mixin({
        customClass: {
          confirmButton: "button is-success is-light ",
          cancelButton: "button is-danger is-light  mx-4",
        },
        buttonsStyling: false,
      }),
    };
  },
  props: {
    uid: { type: String, default: "" },
    nombre: { type: String, default: "" },
    direccion: { type: String, default: "" },
    phone: { type: String, default: "" },
  },
};
</script>

<style scoped>
.btn-left {
  margin-left: 3px;
}
.card-header {
  background-color: #599;
}
.card-header-title {
  color: aliceblue;
}
.subtitle {
  font-size: 16px;
  font-weight: bold;
}
.ps {
  padding-left: 10px;
}
.card-info {
  width: 90%;
  margin-bottom: 10px;
  margin-top: 10px;
}
.card-footer {
  display: flex;
  padding-top: 13px;
  justify-content: space-evenly;
}
.btn-space {
  width: 45%;
}
@media only screen and (min-width: 540px) {
  .card-header-title {
    font-size: 14px;
  }
  .subtitle {
    font-size: 14px;
  }
  .card-info {
    max-width: 250px;
    margin-right: 10px;
  }
}
</style>

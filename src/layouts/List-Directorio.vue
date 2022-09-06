<template>
  <div class="list">
    <CardInfo
      v-for="(persona, key) in directorio"
      :key="key"
      :uid="persona.uid"
      :nombre="persona.nombre"
      :direccion="persona.direccion"
      :phone="persona.phone"
    />
  </div>
</template>

<script>
import { CardInfo } from "@/components";
export default {
  components: {
    CardInfo,
  },
  props: {
    directorio: { default: [], require: true },
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

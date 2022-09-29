<template>
  <b-field class="search" label="Buscar por nombre" label-position="on-border">
    <b-input
      v-model="searchService"
      placeholder="Buscar..."
      type="search"
    ></b-input>
  </b-field>
</template>

<script>
export default {
  methods: {
    setSearch(value, time = 500) {
      clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        this.$emit("sendSearch", value);
      }, time);
    },
  },
  watch: {
    searchService(nameservice) {
      this.setSearch(nameservice);
    },
  },
  data() {
    return {
      searchService: null,
    };
  },
};
</script>

<style scoped>
.search {
  width: 95%;
  margin-top: 12px;
}
@media only screen and (min-width: 500px) {
  .search {
    max-width: 300px;
  }
}
</style>

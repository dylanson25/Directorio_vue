<template>
  <div class="home">
    <navbar-component />
    <OptionsBar @sendSearch="getSearch" />
    <div v-if="isLoading" class="load-container">
      <div class="load-item">
        Cargando directorio...
        <div class="load-icon">
          <i class="fa fa-spin fa-sync"></i>
        </div>
      </div>
    </div>
    <ListDirectorio v-else :directorio="getDirectorio" />
  </div>
</template>

<script>
import { OptionsBar, ListDirectorio } from "@/layouts";
import { NavbarComponent } from "@/components";
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "HomeView",
  components: {
    NavbarComponent,
    OptionsBar,
    ListDirectorio,
  },
  created() {
    this.loadDirectorio();
  },
  methods: {
    ...mapActions(["loadDirectorio"]),
    getSearch(value) {
      this.searchTerm = value;
    },
  },
  computed: {
    ...mapGetters(["getDirectorioByTerm"]),
    ...mapState(["isLoading"]),
    getDirectorio() {
      return this.getDirectorioByTerm(this.searchTerm);
    },
  },
  data() {
    return {
      searchTerm: "",
    };
  },
};
</script>
<style scoped>
.load-container {
  display: flex;
  justify-content: center;
}
.load-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

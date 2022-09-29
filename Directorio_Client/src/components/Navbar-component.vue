<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="@/assets/logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
      <b-navbar-item> Mi Directorio </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script></script>

<style lang="css" scoped>
.navbar-item {
  font-weight: 600;
  font-size: large;
  color: aliceblue;
}
.navbar {
  background-color: #599;
  box-shadow: 0px 1px 2px #888888;
}
</style>

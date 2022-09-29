<template>
  <div class="card card-form">
    <header class="card-header">
      <p class="card-header-title">
        {{ title }}
      </p>
      <button
        @click="() => (isActive = !isActive)"
        class="card-header-icon"
        aria-label="more options"
      >
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </header>
    <div v-if="isActive" class="position-drop card-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    closeDrop() {
      this.isActive = false;
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  props: {
    title: { type: String, default: null },
    closeDrop: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
.card-form {
  width: 95%;
  margin: 10px;
}
.subtitle--form {
  font-weight: 600;
  text-align: center;
}
.position-drop {
  position: absolute;
  z-index: 1;
  background-color: white;
  border-end-start-radius: 0.25rem;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0px 0 1px rgb(10 10 10 / 2%);
  width: 100%;
}
@media only screen and (min-width: 600px) {
  .card-form {
    width: 300px;
  }
}
</style>

<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template class= "about">
  <main class="about">
    <TheWelcome />
  </main>
</template>
<style scoped>
@media (min-width: 1024px) {
  .about {
    line-height: 1.5;
    min-height: 100vh;
    max-width: 1280px;
    min-width: 1024px;
    align-items: center;
    justify-self: center;
  }
}
</style>

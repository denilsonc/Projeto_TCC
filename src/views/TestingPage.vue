<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>
<template>
    <div class="about">
        <h1>Testing</h1>
        <h1>{{ msg }}</h1>
    </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

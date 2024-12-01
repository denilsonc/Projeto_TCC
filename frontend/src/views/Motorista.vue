<script lang="ts">
import { RouterLink, RouterView } from 'vue-router';
const testeabc: boolean = false;
export default {
    testeab() {
        return testeabc;
    }
}
</script>
<template>
    <div>
        <RouterLink to="/drivers/view">View</RouterLink>
        <RouterLink to="/users">Usuário</RouterLink>
        <RouterLink to="/drivers/registre">registre</RouterLink>
    </div>
    <RouterView />
</template>
<style>
</style>
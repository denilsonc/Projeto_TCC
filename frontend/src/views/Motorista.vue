<script lang="ts">
const testeabc: boolean = false;
export default {
    name: 'MotristaMenu',
    method: {
        testeab() {
            return testeabc;
        }
    }
}
</script>
<template>

    <head>
        <router-link to="/">Home</router-link>
        <router-link to="/users">Usuário</router-link>
    </head>
    <h1>Página dos Motorista</h1>
</template>
<style></style>
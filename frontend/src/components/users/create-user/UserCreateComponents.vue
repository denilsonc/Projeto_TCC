<script lang="ts">
export default {
    components: {
        name: 'UserCreateComponents',
    },
    data() {
        return {
            user: {
                name: '',
                active: '',
                address: '',
                cellphone: '',
                birthday: '',
                cpf: '',
                email: '',
                password: '',
                privileges: '',
            },
        };
    },
    methods: {
        handleSubmitUserForm() {
            console.log('Submit successfull')
        }
    },
};
</script>
<template>
    <h1>Criação de</h1>
    <form v-on:submit.prevent="handleSubmitUserForm()" method="post">
        <label for="nameuser">Nome Completo</label>
        <input type="text" v-model="user.nameuser">
        <label for="birthday">Nascimento</label>
        <input type="text" v-model="user.birthday">
        <label for="cellphone">Telefone</label>
        <input type="text" v-model="user.cellphone">
        <label for="cpf">CPF</label>
        <input type="text" v-model="user.cpf">
        <label for="email">Email</label>
        <input type="text" v-model="user.email">
        <label for="password">Senha</label>
        <input type="password" v-model="user.password">
        <label for="privileges">Privilegios</label>
        <input type="text" v-model="user.privileges">
        <p>
            <label for="active">Ativo</label>
            <input type="checkbox" v-model="user.checkbox">
        </p>
        <button type="submit">Enviar</button>
    </form>
</template>
<script lang="ts">
export default {
    components: {
        name: 'Create User',
    },
    data() {
        return {
            user: {
                name: '',
                active:'',
                address:'',
                cellphone: '',
                birthday: '',
                cpf: '',
                email: '',
                password: '',
                privileges: '',

            }
        }
    }
}
</script>
<template>
    <form action="" method="post">
        <label for="nameuser">Nome Completo</label>
        <input type="text" name="nameuser" id="nameuser">
        <label for="birthday">Nascimento</label>
        <input type="text" name="birthday" id="birthday">
        <label for="cellphone">Telefone</label>
        <input type="text" name="cellphone" id="cellphone">
        <label for="cpf">CPF</label>
        <input type="text" name="cpf" id="cpf">
        <label for="email">Email</label>
        <input type="text" name="email" id="email">
        <label for="password">Senha</label>
        <input type="password" name="password" id="password">
        <label for="privileges">Privilegios</label>
        <input type="text" name="privileges" id="privileges">
        <label for="active">Ativo</label>
        <input type="checkbox" name="checkbox" id="checkbox">
        <button type="submit">Enviar</button>
    </form>
</template>
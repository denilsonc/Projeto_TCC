<script lang="ts">
import UserService from '@/services/UsersService';
export default {
    name: 'UserListComponent',
    data() {
        return {
            users: []
        };
    },
    mounted() {
        this.listAllUsers()
    },
    methods: {
        async listAllUsers() {
            const response = await UserService.getUsers()
            console.log(response);
            
            this.users = response;
        }
    }
}
</script>
<template>
    <h1> Página de listar Usuários</h1>
    <main class="flex flex-col">
        <!--Divisão para cada usuários-->
        <div class="m-1 p-0" v-for="user in users" :key="user.id">
            <!--Introdução-->
            <header class="flex flex-row min-w-min">
                <div class="flex-1">
                    Nome: {{ user.name }}
                </div>
                <div class="flex-1">
                    CPF: {{ user.cpf }}
                </div>
            </header>
            <!--Contatos-->
            <section class="flex flex-row min-w-min">
                <div class="flex-1">Email: {{ user.email }}</div>
                <div class="flex-1">Telefone: {{ user.cellphone }}</div>
            </section>
            <!--Adicionais-->
            <footer class="flex flex-row min-w-min">
                <div class="flex-1">Ativo: {{ user.active }}</div>
                <div class="flex-1">Função: {{ user.privileges }}</div>
            </footer>
            <hr>
        </div>
    </main>
</template>

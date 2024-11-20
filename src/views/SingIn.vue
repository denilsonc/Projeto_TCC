<template>
    <section class="about">
        <form action="SingIn" method="post">
            <label for="user">Usuário</label><br>
            <input type="text" name="user" id="user"><br>
            <label for="password">Senha</label><br>
            <input type="password" name="senha" id="senha"><br>
            <button type="submit">Entrar</button>
        </form>
    </section>
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

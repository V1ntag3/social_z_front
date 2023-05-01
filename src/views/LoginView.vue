<template>
    <div class="container-inputs">
        <img class="zombie" src="../assets/zombies/zombies-not-css.svg" alt="">

        <div class="container-logo"><img class="logo" src="../assets/SocialZ.png" alt="" srcset=""></div>

        <span class="titulo">Rápido!!! </span>
        <br />
        <span class="sub-titulo">Faça Login logo, eles estão chegando</span>

        <div class="inputs-container-c" style="margin-top: 10px;">
            <input placeholder="Email" class="input-geral form-control" type="email" name="" id="username" v-model="email">
            <div class="error">{{ erros.email }}</div>
            <input placeholder="Senha" class="input-geral form-control" type="password" name="" id="password"
                v-model="senha">
            <div class="error">{{ erros.senha }}</div>

            <button @click="logar()" class="botao-app">LOGIN</button>

            <router-link :to="{ name: 'RegisterView' }">
                <button class="botao-app registrar"> SE REGISTRAR</button>
            </router-link>
        </div>

    </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    name: 'LoginView',

    data() {
        return {
            email: "",
            senha: "",
            erros: {
                email: "",
                senha: ""
            }
        }
    },
    methods: {
        logar() {
            this.erros.email = this.email == "" ? "Campo Inválido" : ""
            this.erros.senha = this.senha == "" ? "Campo Inválido" : ""

            if (this.erros.email != "" && this.erros.senha != "") {

            }
        }
    }
}

</script>
  
<style scoped>
*{
    overflow: hidden;
}
.error {
    font-family: 'Poppins-Regular';
    font-size: 14px;
    font-weight: 600;
    color: rgb(255 17 17);
}
.inputs-container-c a{
 
}

.titulo {
    font-size: 30px;
    font-weight: 800;
    font-family: 'Poppins-SemiBold';
    color: white;
}

.zombie {
    position: absolute;
    bottom: -20px;
    left: -20px;
    width: 50vw;
    display: none;
}

.sub-titulo {
    font-size: 22px;
    font-weight: 700;
    font-family: 'Poppins-Thin';
    color: white;
}

.container-logo {
    width: 100%;
    margin: auto;
    text-align: center;
}

.logo {
    width: 200px;
    text-align: center;
}

.container-inputs {
    position: relative;
    display: block;
    height: auto;
    width: 450px;
    padding: 0px 30px 80px 30px;
    background-color: var(--color5);
    margin: auto;
    margin-top: 15vh;
    border-radius: 20px;
    overflow: hidden;
}
.container-inputs a{
    width: 100%;
    display: block;
    height: 60px;
    position: absolute;  
  bottom: 0px;
    right: 0px;
}
.input-geral::placeholder {
    /* Firefox 18- */
    color: rgb(58, 58, 58);
}

.input-geral {
    background-color: transparent;
    border: none;
    border-radius: 0px;
    border-bottom: 2.5px solid rgb(58, 58, 58);
    padding-top: 12px;
    font-size: 1.1rem;
    margin-bottom: 8px;
}

.input-geral:focus {
    background-color: transparent;
    box-shadow: none;
}

.input-geral:focus-visible {
    border: none;
    border-bottom: 2.5px solid var(--color3);
    outline: none;
}

.botao-app {
    width: 100%;
    margin-top: 25px;
    padding: 10px;
    background-color: var(--color4);
    border: none;
    color: white;
    font-family: 'Poppins-SemiBold';
    font-size: 14px;
    border-radius: 4px;
}

.registrar {
    width: calc(100% - 60px);
    margin: 0px 30px 30px 30px;
}

@media (min-width: 576px) {}

@media (max-width: 768px) {
    .zombie {
        display: unset;
    }

    .container-inputs {
        height: 95vh;
        width: auto;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        margin-top: 5vh;

    }

    .registrar {
        width: 50% ;
        position: absolute !important;
        bottom: 20px;
        right: 20px;
        margin: 0px;
    }
}
</style>


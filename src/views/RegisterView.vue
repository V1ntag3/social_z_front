<template>
    <div class="container-inputs">
        <img @click="$router.push('/')" src="../assets/voltar.svg" alt="" class="voltar">
        <div class="container-logo"><img class="logo" src="../assets/SocialZ.png" alt="" srcset=""></div>

        <span class="titulo">Rápido!!! </span>
        <br />
        <span class="sub-titulo">Se Registre o quanto antes</span>

        <div style="margin-top: 10px;">
            <input placeholder="Email" class="input-geral form-control" type="email" name="" id="username" v-model="email">
            <div class="error">{{ erros.email }}</div>
            <input placeholder="Senha" class="input-geral form-control" type="password" name="" id="password"
                v-model="senha">
            <div class="error">{{ erros.senha }}</div>
            <input placeholder="Confirmar Senha" class="input-geral form-control" type="password" name="" id="password"
                v-model="confirmSenha">
            <div class="error">{{ erros.senha }}</div>
            <button @click="registrar()" class="botao-app">REGISTRAR</button>


        </div>
    </div>
</template>
<script>

export default {
    name: 'LoginView',

    data() {
        return {
            email: "",
            senha: "",
            confirmSenha: "",
            erros: {
                email: "",
                senha: "",
                confirmSenha: ""
            }
        }
    },
    methods: {
        registrar() {
            this.erros.email = this.email == "" ? "Campo Inválido" : ""
            this.erros.senha = this.senha == "" ? "Campo Inválido" : ""
            this.erros.confirmSenha = this.confirmSenha == "" ? "Campo Inválido" : ""
            this.erros.confirmSenha = this.confirmSenha != this.senha ? "Senhas não coencidem" : ""

            if (this.erros.email != "" && this.erros.senha != "" && this.erros.confirmSenha) {

            }
        }
    }
}

</script>
  
<style scoped>
body {
    overflow: hidden;
}

.error {
    font-family: 'Poppins-Regular';
    font-size: 14px;
    font-weight: 600;
    color: rgb(255 17 17);
}
.voltar{
    position: absolute;
    left: 20px;
    top: 20px;
    cursor: pointer;
}
.titulo {
    font-size: 30px;
    font-weight: 800;
    font-family: 'Poppins-SemiBold';
    color: white;
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
    padding: 0px 30px 30px 30px;
    background-color: var(--color5);
    margin: auto;
    margin-top: 15vh;
    border-radius: 20px;
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
    margin-bottom: 2px;
    padding-top: 12px;
    font-size: 1.1rem;
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
    width: 50%;
    /* margin-left: 50%; */
    position: absolute;
    bottom: 20px;
    right: 20px;
}

@media (min-width: 576px) {}

@media (max-width: 768px) {
    .container-inputs {
        height: 95vh;
        width: auto;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        margin-top: 5vh;

    }
}</style>


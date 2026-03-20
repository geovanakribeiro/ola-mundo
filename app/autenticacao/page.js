'use client'

import { useState } from "react";

function Autenticacao() {

    const [autenticado, alteraAutenticado] = useState(false)

    const [email, alteraEmail] = useState("")
    const [senha, alteraSenha] = useState("")

    function autenticar(e) {
        e.preventDefault()

        const objeto = {
            email: email,
            senha: senha
        }

        console.log(objeto)

        //Manipulação de String

        if (objeto.email.length < 3) {
            alert("Usuário muito curto")
            return
        }

        if (objeto.email.includes("@") == false || objeto.email.includes(".") == false) {
            alert("O email deve ter um @ e um ponto")
            return
        }

        else if (objeto.email.length > 100) {
            alert("Usuário muito longo")
            return
        }

        if (objeto.email == "admin@admin.com" && objeto.senha == 123123) {
            //alert("Bem-vindo Administrador")
            alteraAutenticado(true)
        } else {
            alert("E-mail ou senha inválidos...")
        }

        if (objeto.senha.length < 4) {
            alert("Sua senha deve conter ao menos 6 caracteres")
            return
        }

        if (objeto.senha.length > 20) {
            alert("Sua senha deve conter no máximo 20 caracteres")
            return
        }
    }


    return (

        <div>


            <h1>Login</h1>
            <hr />

            <form onSubmit={autenticar}>

                <p>Digite seu e-mail: </p>
                <input onChange={e => alteraEmail(e.target.value)} />

                <p>Digite sua senha:</p>
                <input type="password" onChange={e => alteraSenha(e.target.value)} />


                <br />
                <button>Entrar</button>

            </form>

            <hr />

            {/* Operador Ternário */}
            {
                autenticado == true ?
                    <div>
                        <h1>Painel Administrativo</h1>
                        <p>Você esta logado</p>
                        <button onClick={ ()=> alteraAutenticado(false) }>Sair</button>
                    </div>
                :
                    <p>Você ainda não esta logado</p>

            }



        </div>

    );
}

export default Autenticacao;
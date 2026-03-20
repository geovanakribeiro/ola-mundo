'use client'

import { useEffect, useState } from "react";

function Login() {

    const [autenticado, alteraAutenticado] = useState(false)

    const [usuario, alteraUsuario] = useState("")
    const [senha, alteraSenha] = useState("")

    function autenticar() {

        if (usuario == "admin" && senha == "123123") {
            alert("Você se conectou com sucesso!")
            localStorage.setItem("logado", true)
            alteraAutenticado(true)

        } else {
            alert("Erro! Algum dado esta errado...")
        }
    }

    function desconectar() {

        alert("Desconectado com sucesso!")
        localStorage.removeItem("logado")
        alteraAutenticado(false)

    }

    useEffect( ()=> {
        const logado = localStorage.getItem("logado")
        if(logado == "true"){
            alteraAutenticado(true)
        }
    }, [] )


    return (

        <div>

            {
                autenticado == false ?

                    <div>

                        <h1>Login</h1>
                        <p>Digite o seu usuário: </p>
                        <input onChange={e => alteraUsuario(e.target.value)} />

                        <br />

                        <p>Digite sua senha: </p>
                        <input onChange={e => alteraSenha(e.target.value)} type="password" />
                        <br />
                        <br />

                        <button onClick={autenticar}>Entrar</button>

                        <br />
                        <br />

                    </div>

                :

                    <div>

                        <p>Você já esta logado</p>
                        <button onClick={desconectar} >Sair da Conta</button>

                    </div>

            }

        </div>

    );
}

export default Login;
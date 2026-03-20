'use client'
import { useState } from "react";

function Estados() {

    //const nome = "Geovana"
    //altera pode ser trocado por set no inglês

    const [nome, alteraNome] = useState("")
    const [senha, alteraSenha] = useState("")
    const [email, alteraEmail] = useState("")

    function salvar(){
        alert("O nome é " + nome + " e a senha é " + senha + " e o email é " + email)
    }

    return (

        <div>
            <h1>Programação em React com estados (UseState)</h1>
            <hr/>
            <p>Digite o seu nome: </p>
            <input onChange={e => alteraNome(e.target.value)} />

            <p>Digite sua senha: </p>
            <input type="password" onChange={e => alteraSenha(e.target.value)} />

            <p>Digite seu e-mail: </p>
            <input type="email" onChange={e => alteraEmail(e.target.value)} />

            <button onClick={salvar}>Salvar</button>

        </div>

    );
}

export default Estados;
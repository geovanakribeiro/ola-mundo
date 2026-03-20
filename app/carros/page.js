'use client'

import { useEffect, useState } from "react";

function Carros() {

    const [autenticado, alteraAutenticado] = useState(false)


    const [nome, alteraNome] = useState("")
    const [marca, alteraMarca] = useState("")
    const [cor, alteraCor] = useState("")
    const [valor, alteraValor] = useState()


    const [exibeListagem, alteraExibeListagem] = useState(true)

    const [listaCarros, alteraListaCarros] = useState(

        [
            {
                nome: "Nissan Leaf",
                marca: "Nissan",
                cor: "Vermelho Escuro",
                valor: 31485
            },

            {
                nome: "Tesla Model Y",
                marca: "Tesla",
                cor: "Preto Pérola",
                valor: 49000
            },

            {
                nome: "Toyota RAV4 Plug-In Hybrid",
                marca: "Toyota",
                cor: "Azul Metálico",
                valor: 42950
            },

            {
                nome: "Hyundai Ioniq 5",
                marca: "Hyundai",
                cor: "Cosmic Blue Pearl",
                valor: 36600
            },

            {
                nome: "Honda Civic Hybrid",
                marca: "Honda",
                cor: "Cinza Prata",
                valor: 30590
            },

            {
                nome: "Volvo EX60",
                marca: "Volvo",
                cor: "Branco Gelo",
                valor: 60000
            },

            {
                nome: "Kia EV5",
                marca: "Kia",
                cor: "Verde Jade",
                valor: 40000
            },

            {
                nome: "Audi Q5",
                marca: "Audi",
                cor: "Preto Fosco",
                valor: 52200
            },

            {
                nome: "BMW iX3",
                marca: "BMW",
                cor: "Azul Escuro",
                valor: 60000
            },

            {
                nome: "Subaru Crosstrek Hybrid",
                marca: "Subaru",
                cor: "Laranja Outono",
                valor: 35415
            }
        ]

    )

    function salvar(e) {
        e.preventDefault()

        const objeto = {

            nome: nome,
            marca: marca,
            cor: cor,
            valor: valor
        }

        // listaCarros.push(objeto)
        alteraListaCarros(listaCarros.concat(objeto))

    }

    useEffect(() => {
        const logado = localStorage.getItem("logado")
        if (logado == "true") {
            alteraAutenticado(true)
        }
    }, [])

    return (
        <div>

            <h1>Lista de Carros</h1>
            <hr />

            {autenticado == true ?

                <button onClick={() => alteraExibeListagem(false)} >Cadastro</button>
                
                :
                <div></div>

            }

            <button onClick={() => alteraExibeListagem(true)}>Listagem</button>

            {
                exibeListagem == true ?

                    <table className="table table-sm" >
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Cor</th>
                                <th scope="col">Valor</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">

                            {listaCarros.map(
                                item => <tr>

                                    <td>{item.nome}</td>
                                    <td>{item.marca}</td>
                                    <td>{item.cor}</td>
                                    <td>R$ {item.valor}</td>

                                </tr>
                            )
                            }
                        </tbody>
                    </table>

                    :

                    <form onSubmit={salvar}>

                        <p>Digite o nome do carro: </p>
                        <input onChange={e => alteraNome(e.target.value)} />

                        <p>Digite a marca do carro: </p>
                        <input onChange={e => alteraMarca(e.target.value)} />

                        <p>Digite a cor do carro: </p>
                        <input onChange={e => alteraCor(e.target.value)} />

                        <p>Digite o valor do carro: </p>
                        <input onChange={e => alteraValor(e.target.value)} />


                        <br /><br />
                        <button>Salvar</button>

                    </form>

            }

        </div>

    );
}

export default Carros;
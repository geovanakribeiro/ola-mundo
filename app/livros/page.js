'use client'

import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
const supabase = createClient('https://bwjjiaatfoiruotioltl.supabase.co', 'sb_publishable_VpaGmsLThKG11iNKMcT9kg_edw1bNy8')

function Livros() {

    const [titulo, alteraTitulo] = useState("")
    const [autor, alteraAutor] = useState("")
    const [editora, alteraEditora] = useState("")
    const [descricao, alteraDescricao] = useState("")
    const [valor, alteraValor] = useState()

    const [livros, alteraLivros] = useState([])

    // Esse aqui é para não mandar várias requisições pro banco enquanto carrega (não usar no P.I)
    const [carregandoLivros, alteraCarregandoLivros] = useState(false)

    async function buscar() {

        // Esse aqui é para não mandar várias requisições pro banco enquanto carrega (não usar no P.I)
        if (carregandoLivros == true) {
            console.log("Aguarde...")
            return
        } else {
            alteraCarregandoLivros(true)
        }

        const { data, error } = await supabase
            .from('livros')
            .select()

        console.log(data)
        alteraLivros(data)


        // Esse aqui é para não mandar várias requisições pro banco enquanto carrega (não usar no P.I)
        alteraCarregandoLivros(false)
    }

    async function salvar() {

        const objeto = {

            titulo: titulo,
            autor: autor,
            editora: editora,
            descricao: descricao,
            valor: valor.replaceAll(",", ".")
        }

        const { error } = await supabase
            .from('livros')
            .insert(objeto)

        console.log(error)

        if (error == null) {
            alert("Livro Cadastrado com Sucesso")
            alteraTitulo("")
            alteraAutor("")
            alteraEditora("")
            alteraDescricao("")
            alteraValor("")

        } else {
            alert("Danos inválidos, verifique os campos e tente novamente...")
        }

    }

    //useEffect é chamado apenas ao chamar a página, uma vez

    useEffect(() => {
        buscar()
    }, [])

    return (
        <div>

            <h1>Livros</h1>
            <p>Dados dos livros de vieram do banco</p>
            <hr />

            <form>

                <p>Digite o nome titulo do livro: </p>
                <input value={titulo} onChange={e => alteraTitulo(e.target.value)} />
                <br />

                <p>Digite o nome do autor: </p>
                <input value={autor} onChange={e => alteraAutor(e.target.value)} />
                <br />

                <p>Digite o nome da editora: </p>
                <input value={editora} onChange={e => alteraEditora(e.target.value)} />
                <br />

                <p>Digite a descrição: </p>
                <input value={descricao} onChange={e => alteraDescricao(e.target.value)} />
                <br />

                <p>Digite o valor: </p>
                R$ <input value={valor} type='number' onChange={e => alteraValor(e.target.value)} />
                <br />

            </form>


            <br />
            <button onClick={salvar}>Salvar</button>

            <ul>
                {

                    livros.length == 0 ?
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        :
                        livros.map(
                            item => <li>Título: {item.titulo} escrito por: {item.autor} por apenas: {item.valor} </li>
                        )
                }
            </ul>

        </div>
    );
}

export default Livros;
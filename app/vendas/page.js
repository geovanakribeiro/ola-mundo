'use client'
import "./vendas.css"
import { useEffect, useState } from "react";
import supabase from "../conexao/supabase";
import ConsultaVendas from "./[id]/page";

function Vendas() {

    const [id_usuario, alteraId_Usuario] = useState()
    const [id_livro, alteraId_Livros] = useState()
    const [quantidade, alteraQuantidade] = useState()
    const [pagamento, alteraPagamento] = useState()
    const [observacao, alteraObservacao] = useState()
    
    const [listaVendas, alteraListaVendas] = useState([])
    const [listaUsuarios, alteraListaUsuarios] = useState([])
    const [listaLivros, alteraListaLivros] = useState([])
    
    const [inputPesquisaPagamento, alteraInputPesquisaPagamento] = useState()



    async function buscaUsuarios() {

        const { data, error } = await supabase
            .from('usuarios')
            .select()

        alteraListaUsuarios(data)
    }

    async function buscaLivros() {

        const { data, error } = await supabase
            .from('livros')
            .select()

        alteraListaLivros(data)
    }

    async function buscaTodos() {

        const { data, error } = await supabase
            .from('vendas')
            .select(`
            *,
            id_usuario(*),
            id_livro(*)
        `)

        console.log(data)

        alteraListaVendas(data)
    }

    async function salvar(e) {
        e.preventDefault()

        const objeto = {
            id_usuario: id_usuario,
            id_livro: id_livro,
            quantidade: quantidade,
            pagamento: pagamento,
            observacao: observacao
        }

        const { error } = await supabase.from('vendas').insert(objeto)
        console.log(error)

    }

    async function excluir(id) {
        const opcao = confirm("Tem certeza que deseja excluir ?")
        if (opcao == false) {
            return
        }

        const response = await supabase
            .from('vendas')
            .delete()
            .eq('id', id)

    }

    function formataData(data) {
        let data_formatada = new Date(data)
        data_formatada = data_formatada.toLocaleDateString()
        return data_formatada
    }

    function formataHoras(horas) {
        let horas_formatada = new Date(horas)
        horas_formatada = horas_formatada.toLocaleTimeString()
        return horas_formatada
    }

    function formataPagamento(pagamento) {

        if (pagamento == "Pix") {
            return <span class="badge text-bg-info">PIX</span>
        }

        if (pagamento == "Cartão de Crédito") {
            return <span class="badge text-bg-secondary">CRÉDITO</span>
        }

        if (pagamento == "Cartão de Débito") {
            return <span class="badge text-bg-warning">DÉBITO</span>
        }

        if (pagamento == "Dinheiro") {
            return <span class="badge text-bg-success">DINHEIRO</span>
        }

    }

    //Funções de Pesquisa
    async function pesquisaPagamento(){
        const { data, error } = await supabase
          .from('vendas')
          .select()
          .eq('pagamento', inputPesquisaPagamento)
        
        alteraListaVendas(data)
    }
    async function pesquisaObservacao(){

    }
    async function pesquisaData(){

    }
    async function pesquisaIdUsuario(){

    }
    async function pesquisaIdProduto(){

    }
    async function pesquisaMaiorVenda(){

    }
    async function pesquisaVendasHoje(){

    }

    //useEffect é para chamar a função assim que a pessoa entra na página
    useEffect(() => {
        buscaTodos()
        buscaUsuarios()
        buscaLivros()
    }, [])


    return (

        <div>

            <h1>VENDAS</h1>
            <hr />

            <form onSubmit={salvar}>
                <p>Selecione o usuário</p>
                <select onChange={e => alteraId_Usuario(e.target.value)}>
                    <option>Selecione...</option>
                    {
                        listaUsuarios.map(
                            item => <option value={item.id}> {item.nome} </option>
                        )
                    }
                </select>
                <br />
                <br />

                <p>Selecione o livro</p>
                <select onChange={e => alteraId_Livros(e.target.value)} >
                    <option>Selecione...</option>
                    {
                        listaLivros.map(
                            item => <option value={item.id}> {item.titulo} </option>
                        )
                    }
                </select>
                <br />
                <br />

                <p>Digite a quantidade</p>
                <input onChange={e => alteraQuantidade(e.target.value)} />
                <br />

                <p>Digite a forma de pagamento</p>
                <input onChange={e => alteraPagamento(e.target.value)} />
                <br />
                <br />

                 <p>Digite uma observação</p>
                <input onChange={e => alteraObservacao(e.target.value)} />
                <br />
                <br />

                <button>Salvar</button>

                <br />
                <br />

            </form>
            <hr/>

            <h2>Filtros</h2>
            <p>Pesquisar pagamento<input onChange={e => alteraInputPesquisaPagamento(e.target.value)}/><button onClick={pesquisaPagamento}>Pesquisar</button></p>
            <p>Pesquisar observacao<input/><button onClick={pesquisaObservacao}>Pesquisar</button></p>
            <p>Pesquisar data<input type="date"/><button onClick={pesquisaData}>Pesquisar</button></p>
            <p>Pesquisar ID usuario<input/><button onClick={pesquisaIdUsuario}>Pesquisar</button></p>
            <p>Pesquisar ID produto<input/><button onClick={pesquisaIdProduto}>Pesquisar</button></p>
            <p>Filtrar por maiores vendas<button onClick={pesquisaMaiorVenda}>Pesquisar</button></p>
            <p>Filtrar por vendas feitas hoje<button onClick={pesquisaVendasHoje}>Pesquisar</button></p>

            <table class="table">
                <tr>
                    <td>#</td>
                    <td>Cliente</td>
                    <td>Produto</td>
                    <td>Quantidade</td>
                    <td>Forma de Pagamento</td>
                    <td>Observações</td>
                    <td>Data</td>
                    <td>Ações</td>
                </tr>

                {
                    listaVendas.length == 0 ?
                        <p>Carregando...</p>
                        :
                        listaVendas.map(
                            (item, indice) => <tr>

                                <td>{indice + 1}</td>
                                <td>{item.id_usuario.nome}</td>
                                <td>{item.id_livro.titulo}</td>
                                <td>{item.quantidade}</td>
                                <td>{formataPagamento(item.pagamento)}</td>
                                <td>{item.observacao}</td>
                                <td>{formataData(item.created_at)} às {formataHoras(item.created_at)}</td>
                                <td> <button onClick={() => location.href = "/vendas/" + item.id}>Visualizar</button> <button onClick={() => excluir(item.id)}>Excluir</button></td>

                            </tr>
                        )
                }

            </table>

        </div>

    );
}

export default Vendas;
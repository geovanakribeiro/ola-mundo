'use client'
import "./vendas.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useEffect, useState } from "react";
import supabase from "../conexao/supabase";
import ConsultaVendas from "./[id]/page";

function Vendas() {

    const [id_usuario, alteraId_Usuario] = useState()
    const [id_livro, alteraId_Livros] = useState()
    const [quantidade, alteraQuantidade] = useState()
    const [pagamento, alteraPagamento] = useState()
    const [observacao, alteraObservacao] = useState()

    const [editando, alteraEditando] = useState(null)

    const [listaVendas, alteraListaVendas] = useState([])
    const [listaUsuarios, alteraListaUsuarios] = useState([])
    const [listaLivros, alteraListaLivros] = useState([])

    //variável para os filtros de pesquisa
    const [inputPesquisaPagamento, alteraInputPesquisaPagamento] = useState()
    const [inputPesquisaObservacao, alteraInputPesquisaObservacao] = useState()
    const [inputPesquisaData, alteraInputPesquisaData] = useState()
    const [inputPesquisaIdUsuario, alteraInputPesquisaIdUsuario] = useState()
    const [inputPesquisaIdProduto, alteraInputPesquisaIdProduto] = useState()



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
        .order('id', { ascending: false })

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

        buscaTodos()

    }

    async function atualizar() {

        const objeto = {
           
            quantidade: quantidade,
            pagamento: pagamento,
            observacao: observacao
        }

        const { error } = await supabase
            .from('vendas')
            .update(objeto)
            .eq('id', editando)

        if(error == null){
            alert("Atualização realizada com sucesso! ✅")
            cancelaEdicao()
            buscaTodos()
        }else{
            alert("Dados inválidos! Verifique os campos e tente novamente...")
        }

    }


    function editar(objeto) {

        alteraEditando(objeto.id)

        alteraQuantidade(objeto.quantidade)
        alteraPagamento(objeto.pagamento)
        alteraObservacao(objeto.observacao)

    }

    function cancelaEdicao() {

        alteraEditando(null)

        alteraQuantidade("")
        alteraPagamento("")
        alteraObservacao("")

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
    async function pesquisaPagamento() {
        const { data, error } = await supabase
            .from('vendas')
            .select(`*,id_usuario(*),id_livro(*)`)
            .eq('pagamento', inputPesquisaPagamento)

        alteraListaVendas(data)
    }
    async function pesquisaObservacao() {
        const { data, error } = await supabase
            .from('vendas')
            .select(`*,id_usuario(*),id_livro(*)`)
            .ilike('observacao', "%" + inputPesquisaObservacao + "%")

        alteraListaVendas(data)
    }
    async function pesquisaData() {
        const { data, error } = await supabase
            .from('vendas')
            .select(`*,id_usuario(*),id_livro(*)`)
            .gt('created_at', inputPesquisaData + " 00:00:00+00")
            .lt('created_at', inputPesquisaData + " 23:59:00+00")

        alteraListaVendas(data)
    }
    async function pesquisaIdUsuario() {
        const { data, error } = await supabase
            .from('vendas')
            .select(`*,id_usuario(*),id_livro(*)`)
            .eq('id_usuario', inputPesquisaIdUsuario)

        alteraListaVendas(data)
    }
    async function pesquisaIdProduto() {
        const { data, error } = await supabase
            .from('vendas')
            .select(`*,id_usuario(*),id_livro(*)`)
            .eq('id_livro', inputPesquisaIdProduto)

        alteraListaVendas(data)
    }
    async function pesquisaMaiorVenda() {
        const { data, error } = await supabase
            .from('vendas')
            .select(`*,id_usuario(*),id_livro(*)`)
            .order('quantidade', { ascending: false })
            .limit(1)

        alteraListaVendas(data)

    }
    async function pesquisaVendasHoje() {
        const { data, error } = await supabase
            .from('vendas')
            .select(`*,id_usuario(*),id_livro(*)`)
            .gt('created_at', new Date().toISOString().split("T")[0] + " 00:00:00+00")
            .lt('created_at', new Date().toISOString().split("T")[0] + " 23:59:00+00")

        alteraListaVendas(data)


    }

    //useEffect é para chamar a função assim que a pessoa entra na página
    useEffect(() => {
        buscaTodos()
        buscaUsuarios()
        buscaLivros()
    }, [])


    return (

        <div>
            {/* https://api.whatsapp.com/?phone=5516997012991&text=Olá vim pelo site, gostaria de saber mais informações sobre os livros disponíveis */}

            <a href="https://wa.me/hh16997012991">
                <img class="zap" src="https://store-images.s-microsoft.com/image/apps.8453.13655054093851568.4a371b72-2ce8-4bdb-9d83-be49894d3fa0.7f3687b9-847d-4f86-bb5c-c73259e2b38e" />
            </a>

            <h1>VENDAS</h1>
            <hr />

            <i class="bi bi-house-heart"></i>

            <form onSubmit={salvar}>

                <p>Selecione o usuário</p>
                <select disabled={editando != null} onChange={e => alteraId_Usuario(e.target.value)}>
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
                <select disabled={editando != null} onChange={e => alteraId_Livros(e.target.value)} >
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
                <input value={quantidade} onChange={e => alteraQuantidade(e.target.value)} />
                <br />

                <p>Digite a forma de pagamento</p>
                <input value={pagamento} onChange={e => alteraPagamento(e.target.value)} />
                <br />
                <br />

                <p>Digite uma observação</p>
                <input value={observacao} onChange={e => alteraObservacao(e.target.value)} />
                <br />
                <br />

                {
                    editando != null ?
                        <div>
                            <button onClick={atualizar}>Atualizar</button>
                            <button onClick={() => cancelaEdicao()}>Cancelar</button>
                        </div>
                        :

                        <button>Salvar</button>
                }

                <br />
                <br />

            </form>
            <hr />

            <h2>Filtros</h2>

            <p>Pesquisar pagamento<input onChange={e => alteraInputPesquisaPagamento(e.target.value)} /><button onClick={pesquisaPagamento}>Pesquisar</button></p>

            <p>Pesquisar observacao<input onChange={e => alteraInputPesquisaObservacao(e.target.value)} /><button onClick={pesquisaObservacao}>Pesquisar</button></p>

            <p>Pesquisar data<input type="date" onChange={e => alteraInputPesquisaData(e.target.value)} /><button onClick={pesquisaData}>Pesquisar</button></p>

            <p>Pesquisar ID usuario<input onChange={e => alteraInputPesquisaIdUsuario(e.target.value)} /><button onClick={pesquisaIdUsuario}>Pesquisar</button></p>

            <p>Pesquisar ID produto<input onChange={e => alteraInputPesquisaIdProduto(e.target.value)} /><button onClick={pesquisaIdProduto}>Pesquisar</button></p>

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
                                <td> <button onClick={() => location.href = "/vendas/" + item.id}>Ver</button>
                                    <button onClick={() => editar(item)}>Editar</button>
                                    <button onClick={() => excluir(item.id)}>Excluir</button>
                                </td>

                            </tr>
                        )
                }

            </table>

        </div>

    );
}

export default Vendas;
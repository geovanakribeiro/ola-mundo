'use client'

import supabase from "@/app/conexao/supabase";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


function ConsultaVendas() {

    const params = useParams()

    const [venda, alteraVenda] = useState([])

    async function buscaVendas() {
        const { data, error } = await supabase
            .from('vendas')
            .select(`
            *,
            id_usuario(*),
            id_livro(*)
        `)
            .eq('id', params.id)

        alteraVenda(data)
    }

    function formataData(data) {
        let data_formatada = new Date(data)
        data_formatada = data_formatada.toLocaleDateString()
        return data_formatada
    }

    useEffect(() => {
        buscaVendas()
    }, [])

    return (

        <div>
            <h1>Consulta de Vendas</h1>
            <hr />

            {venda.map(
                item =>

                    <div>
                        <p><strong>ID:</strong> {item.id}</p>
                        <p><strong>Cliente:</strong> {item.id_usuario.nome}</p>
                        <p><strong>Livro:</strong> {item.id_livro.titulo}</p>
                        <p><strong>Quantidade:</strong> {item.quantidade}</p>
                        <p><strong>Pagamento:</strong> {item.pagamento}</p>
                        <p><strong>Data:</strong> {formataData(item.created_at)}</p>
                    </div>
            )
            }

            <p></p>

        </div>

    );
}

export default ConsultaVendas;
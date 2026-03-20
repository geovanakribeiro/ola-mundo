'use client'

function Equipamentos() {

    const listaEquipamentos = [
        {
            equipamento: "Chave de fenda",
            valor: 8.5,
            observacao: "(Serve para por em fendas)"
        },

        {
            equipamento: "Serrote",
            valor: 29.9,
            observacao: "(Serra coisas que terminam om 'ote')"
        },

        {
            equipamento: "Martelo",
            valor: 15.25,
            observacao: "(Martela o martelão)"
        }

    ]

    return (

        <div>
            <h1>Listagem de equipamentos</h1>
            <hr/>

            <ul>

            <li> <strong>Item: </strong> {listaEquipamentos[0].equipamento} R$ <strong>{listaEquipamentos[0].valor}</strong> {listaEquipamentos[0].observacao} </li>
            <li> <strong>Item: </strong> {listaEquipamentos[1].equipamento} R$ <strong>{listaEquipamentos[1].valor}</strong> {listaEquipamentos[1].observacao} </li>
            <li> <strong>Item: </strong> {listaEquipamentos[2].equipamento} R$ <strong>{listaEquipamentos[2].valor}</strong> {listaEquipamentos[2].observacao} </li>

            </ul>


        </div>

    );
}

export default Equipamentos;
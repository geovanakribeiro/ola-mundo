'use client'

function Objetos() {

    const listaNumeros = [3, 10, 9, 7, 821, -9999]
    const listaNomes = ["Geovana", "Luiz", "Isa", "Giselli"]
    
    //Quando coloca as chaves vira um objeto na variável
    const usuario = {
        nome: "Geovana",
        dataNascimento: "15/07/1996",
        idade: 29,
        admin: true
    }
    
    //Array com lista de objetos
    const listaUsuario = [

        {
            id: 7, 
            nome: "Quati",
            email: "quati.voador@patinete.br"
        },

        {
            id: 32, 
            nome: "Gilbarte",
            email: "labaleia@batatinha.uk"
        },
        {
            id: 99, 
            nome: "Ornitorrinco",
            email: "o_lojista_de_laringe@comercial.com",
            enderecos: [
                    "Rua Episcopal",
                    "Rua Dom Pedro",
                    "Rua São Joaquim"
            ],
            dependentes: [
                {
                    nome: "Theodoro",
                    parentesco: "Filho"
                },
                {
                    nome: "Douglas",
                    parentesco: "Namorado"
                }
            ]
        }

    ]



    //visualizar o objeto no console
    console.log(listaUsuario)

    return ( 

        <div>

            <h1>Objetos em JavaScript</h1>
            <p>Conhecendo o famoso JSON, a estrutura mais usada da programação.</p>
           
           <p>Seja bem-vindo {usuario.nome}, você nasceu em {usuario.dataNascimento} e tem {usuario.idade} anos.</p>
           <p>Top 5 melhores números: {listaNumeros[1]} </p>

           <p>Top 3 melhores bichos: {listaUsuario[0].nome}, {listaUsuario[1].nome}, {listaUsuario[2].nome} </p>


        </div>

     );
}

export default Objetos;
'use client'
import "./Listagem.css"

function Listagem() {

    const avesBonitas = [
        {
            nome: "Arara-azul",
            cor: "Azul vibrante com detalhes amarelos",
            especie: "Anodorhynchus hyacinthinus",
            habitat: "Pantanal e regiões do Cerrado",
            alimentacao: "Sementes, castanhas e frutos"
        },
        {
            nome: "Flamingo",
            cor: "Rosa",
            especie: "Phoenicopterus roseus",
            habitat: "Lagoas salinas e áreas costeiras",
            alimentacao: "Algas, pequenos crustáceos e plâncton"
        },
        {
            nome: "Tucano-toco",
            cor: "Preto com peito branco e bico laranja",
            especie: "Ramphastos toco",
            habitat: "Florestas tropicais e Cerrado",
            alimentacao: "Frutas, insetos e pequenos animais"
        },
        {
            nome: "Beija-flor",
            cor: "Verde metálico com tons iridescentes",
            especie: "Trochilidae",
            habitat: "Jardins, florestas e áreas tropicais",
            alimentacao: "Néctar e pequenos insetos"
        },
        {
            nome: "Pavão",
            cor: "Azul e verde com cauda multicolorida",
            especie: "Pavo cristatus",
            habitat: "Áreas abertas e florestas",
            alimentacao: "Grãos, sementes e pequenos insetos"
        },
        {
            nome: "Cardeal",
            cor: "Vermelho intenso",
            especie: "Paroaria coronata",
            habitat: "Campos, jardins e áreas arborizadas",
            alimentacao: "Sementes e frutos"
        },
        {
            nome: "Coruja-buraqueira",
            cor: "Marrom com manchas brancas",
            especie: "Athene cunicularia",
            habitat: "Campos abertos e áreas rurais",
            alimentacao: "Insetos, pequenos roedores e répteis"
        },
        {
            nome: "Saíra-sete-cores",
            cor: "Azul, verde, amarelo e vermelho",
            especie: "Tangara seledon",
            habitat: "Mata Atlântica",
            alimentacao: "Frutas e insetos"
        },
        {
            nome: "Garça-branca",
            cor: "Branca",
            especie: "Ardea alba",
            habitat: "Áreas alagadas e margens de rios",
            alimentacao: "Peixes, anfíbios e insetos"
        },
        {
            nome: "Canário-da-terra",
            cor: "Amarelo vibrante",
            especie: "Sicalis flaveola",
            habitat: "Campos e áreas urbanas",
            alimentacao: "Sementes e grãos"
        },
        {
            nome: "Papagaio-verdadeiro",
            cor: "Verde com testa azul",
            especie: "Amazona aestiva",
            habitat: "Florestas e áreas rurais",
            alimentacao: "Frutas, sementes e flores"
        },
        {
            nome: "Galo-da-serra",
            cor: "Laranja vibrante",
            especie: "Rupicola rupicola",
            habitat: "Florestas tropicais úmidas",
            alimentacao: "Frutas"
        },
        {
            nome: "Andorinha",
            cor: "Azul escuro com ventre claro",
            especie: "Hirundo rustica",
            habitat: "Áreas abertas e urbanas",
            alimentacao: "Insetos"
        },
        {
            nome: "Calopsita",
            cor: "Cinza com face amarela e bochechas laranjas",
            especie: "Nymphicus hollandicus",
            habitat: "Áreas áridas e savanas",
            alimentacao: "Sementes e grãos"
        },
        {
            nome: "Águia-real",
            cor: "Marrom escuro com dourado",
            especie: "Aquila chrysaetos",
            habitat: "Montanhas e áreas abertas",
            alimentacao: "Pequenos mamíferos e aves"
        },
        {
            nome: "Albatroz",
            cor: "Branco com asas escuras",
            especie: "Diomedeidae",
            habitat: "Oceanos e áreas costeiras",
            alimentacao: "Peixes e lulas"
        },
        {
            nome: "Pelicano",
            cor: "Branco ou acinzentado com bico longo",
            especie: "Pelecanus",
            habitat: "Lagos e regiões costeiras",
            alimentacao: "Peixes"
        },
        {
            nome: "Martim-pescador",
            cor: "Azul brilhante com peito alaranjado",
            especie: "Chloroceryle amazona",
            habitat: "Margens de rios e lagos",
            alimentacao: "Peixes e insetos aquáticos"
        },
        {
            nome: "Cisne-negro",
            cor: "Preto com bico vermelho",
            especie: "Cygnus atratus",
            habitat: "Lagos e lagoas",
            alimentacao: "Plantas aquáticas"
        },
        {
            nome: "João-de-barro",
            cor: "Marrom-avermelhado",
            especie: "Furnarius rufus",
            habitat: "Campos e áreas urbanas",
            alimentacao: "Insetos"
        },
        {
            nome: "Gralha-azul",
            cor: "Azul intenso",
            especie: "Cyanocorax caeruleus",
            habitat: "Mata Atlântica",
            alimentacao: "Sementes, frutos e insetos"
        },
        {
            nome: "Pica-pau-do-campo",
            cor: "Preto e branco com topo vermelho",
            especie: "Colaptes campestris",
            habitat: "Campos e áreas abertas",
            alimentacao: "Insetos"
        },
        {
            nome: "Rouxinol",
            cor: "Marrom discreto",
            especie: "Luscinia megarhynchos",
            habitat: "Bosques e jardins",
            alimentacao: "Insetos e frutas"
        },
        {
            nome: "Mainá",
            cor: "Marrom escuro com detalhes amarelos",
            especie: "Acridotheres tristis",
            habitat: "Áreas urbanas e rurais",
            alimentacao: "Insetos, frutas e restos alimentares"
        },
        {
            nome: "Pintassilgo",
            cor: "Amarelo com preto",
            especie: "Spinus magellanicus",
            habitat: "Campos e áreas arborizadas",
            alimentacao: "Sementes"
        },
        {
            nome: "Ararajuba",
            cor: "Amarelo intenso com verde",
            especie: "Guaruba guarouba",
            habitat: "Floresta Amazônica",
            alimentacao: "Frutas e sementes"
        },
        {
            nome: "Ibis-escarlate",
            cor: "Vermelho vibrante",
            especie: "Eudocimus ruber",
            habitat: "Manguezais e áreas alagadas",
            alimentacao: "Crustáceos e insetos"
        },
        {
            nome: "Seriema",
            cor: "Cinza-amarronzado",
            especie: "Cariama cristata",
            habitat: "Campos e Cerrado",
            alimentacao: "Insetos e pequenos animais"
        },
        {
            nome: "Periquito-australiano",
            cor: "Verde com amarelo",
            especie: "Melopsittacus undulatus",
            habitat: "Regiões semiáridas",
            alimentacao: "Sementes"
        },
        {
            nome: "Falcão-peregrino",
            cor: "Cinza com peito claro",
            especie: "Falco peregrinus",
            habitat: "Montanhas e áreas urbanas",
            alimentacao: "Outras aves"
        },
        {
            nome: "Tangará-dançarino",
            cor: "Preto com detalhes vermelhos",
            especie: "Chiroxiphia caudata",
            habitat: "Mata Atlântica",
            alimentacao: "Frutas e insetos"
        },
        {
            nome: "Uirapuru",
            cor: "Marrom discreto",
            especie: "Cyphorhinus arada",
            habitat: "Floresta Amazônica",
            alimentacao: "Insetos"
        },
        {
            nome: "Gaivota",
            cor: "Branca e cinza",
            especie: "Larus",
            habitat: "Regiões costeiras",
            alimentacao: "Peixes e restos alimentares"
        },
        {
            nome: "Pombo-correio",
            cor: "Cinza com tons metálicos",
            especie: "Columba livia",
            habitat: "Áreas urbanas",
            alimentacao: "Grãos e sementes"
        },
        {
            nome: "Corvo",
            cor: "Preto brilhante",
            especie: "Corvus corax",
            habitat: "Diversos ambientes",
            alimentacao: "Onívoro"
        },
        {
            nome: "Biguá",
            cor: "Preto com pescoço alongado",
            especie: "Phalacrocorax brasilianus",
            habitat: "Rios e lagoas",
            alimentacao: "Peixes"
        },
        {
            nome: "Canário-belga",
            cor: "Amarelo ou branco",
            especie: "Serinus canaria",
            habitat: "Ambientes domésticos e ilhas",
            alimentacao: "Sementes"
        },
        {
            nome: "Colhereiro",
            cor: "Rosa claro",
            especie: "Platalea ajaja",
            habitat: "Áreas alagadas",
            alimentacao: "Pequenos peixes e crustáceos"
        },
        {
            nome: "Gavião-carijó",
            cor: "Cinza com listras",
            especie: "Rupornis magnirostris",
            habitat: "Áreas urbanas e rurais",
            alimentacao: "Pequenos animais"
        },
        {
            nome: "Tesourinha",
            cor: "Preto com cauda longa bifurcada",
            especie: "Tyrannus savana",
            habitat: "Campos abertos",
            alimentacao: "Insetos"
        }

    ];

    return (
        <div>

            <h1>Listagem de aves bonitas</h1>
            <hr />

            {
                avesBonitas.map(
                    item => <p> {item.nome} da especie {item.especie} de cor {item.cor} que vive em {item.habitat} e se alimenta de {item.alimentacao} </p>
                )
            }


        </div>

    );
}

export default Listagem;
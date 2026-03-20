# Como instalar e rodar o React
É necessário ter instalado o **Node** no computador.

Em seguida, abrir o terminal (CMD) na pasta onde vai ficar o projeto e digitar o comando ```npx create-next-app```.
*Nota: Estamos usando o React junto do **NextJS***
Escolher as seguintes opções na instalação:
-No, Customize settings
-Use TypeScript? Escolher **NO**
-O restante das opções pode deixar padrão.

Depois de baixado, se quiser faça a limpeza dos arquivos padrões que vem no projeto (arquivos CSS, SVG, Ico).

Por fim para iniciar (rodar) um projeto em React, rodar no terminal o comando ```npm run dev```.
*Nota: tenha certeza de rodar esse comendo na pasta raiz do projeto (No terminal com Ctrl + ")*

## Como criar um módulo/componente em React
Sempre que for criar um módulo com componente use essa estrutura:
```
export default function Produtos() {
    return (
        <div>

        </div>
    )
}
```


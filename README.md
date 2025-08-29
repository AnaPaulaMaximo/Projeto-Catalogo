
-----

# 📱 Meu Catálogo Pessoal

Este é um aplicativo móvel simples, desenvolvido com **React Native**, que exibe uma lista de itens de uma coleção pessoal. O projeto serve como um catálogo de filmes, com cada item exibido em um "card" estilizado, carregado a partir de um arquivo de dados local.

## 🚀 Tecnologias Utilizadas

  - **React Native**: Framework para construir aplicativos móveis nativos usando JavaScript e React.
  - **Expo**: Ferramenta que simplifica o desenvolvimento em React Native, facilitando a configuração e o teste do aplicativo.
  - **TypeScript**: Uma camada sobre o JavaScript que adiciona tipagem estática, garantindo um código mais robusto e fácil de manter.
  - **Expo Router**: Uma solução de roteamento para Expo que gerencia a navegação e o layout da tela.

## ⚙️ Como o Projeto Funciona

O projeto segue uma arquitetura de componentes clara e modular.

  - **Fonte de Dados (`catalogo.json`)**: Na raiz do projeto, um arquivo `.json` armazena os dados do catálogo (filmes, livros, etc.). Cada item é um objeto com `id`, `titulo`, `subtitulo` e `ano`. Isso permite que o aplicativo seja facilmente atualizado com novos dados sem alterar a lógica do código.

  - **Componente de Tela (`CatalogoScreen.tsx`)**: Toda a lógica e a interface do catálogo estão encapsuladas neste componente. Ele é responsável por:

    1.  Importar os dados diretamente do `catalogo.json`.
    2.  Utilizar o método `.map()` do JavaScript para percorrer o array de dados.
    3.  Para cada item no array, renderizar um componente `View` estilizado como um "card", exibindo o título, subtítulo e ano.

  - **Estilização**: Toda a estilização do aplicativo é feita usando `StyleSheet` dentro do `CatalogoScreen.tsx`, com o layout principal organizado usando **Flexbox**. O design é moderno, com um tema escuro e elementos flutuantes que dão profundidade.

  - **Estrutura do Projeto**: A tela principal (`app/index.tsx`) simplesmente importa e renderiza o `CatalogoScreen.tsx`, mantendo a separação de responsabilidades. O `app/_layout.tsx` é usado para configurar a navegação e remover o cabeçalho padrão, garantindo que o aplicativo exiba apenas o catálogo.

## 🖼️ Preview

*(Opcional: Adicione aqui uma imagem, GIF ou vídeo do seu aplicativo em funcionamento para demonstrar o resultado final.)*

## 🏃 Como Rodar o Projeto

1.  **Clone o Repositório:**

    ```bash
    git clone https://github.com/AnaPaulaMaximo/Projeto-Catalogo.git
    cd nome-do-seu-repositorio
    ```

2.  **Instale as Dependências:**

    ```bash
    npm install
    ```

    ou

    ```bash
    yarn install
    ```

3.  **Execute o Aplicativo:**

    ```bash
    npx expo start
    ```

4.  **Inicie no seu Dispositivo:**

      * Siga as instruções no terminal para escanear o código QR com o aplicativo **Expo Go** no seu celular ou tablet.
      * Você também pode rodar o aplicativo em um simulador (iOS) ou emulador (Android) conectado.

-----

Desenvolvido por: Ana Paula Maximo
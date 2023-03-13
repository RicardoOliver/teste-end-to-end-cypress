# Requisitos funcionais:

    O usuário deve ser capaz de visualizar as informações do produto, incluindo nome, preço, imagem e descrição.
    O usuário deve ser capaz de adicionar o produto ao carrinho de compras.
    O usuário deve ser capaz de visualizar o preço total do carrinho de compras atualizado após a adição do produto.
    O usuário deve ser capaz de navegar para outras áreas do site sem perder a sessão do carrinho de compras.

# Requisitos não funcionais:

    A página deve carregar rapidamente e sem erros.
    A página deve ser responsiva e ser exibida corretamente em diferentes tamanhos de tela.
    O texto e as imagens na página devem ser claros e legíveis.

---

---

# Pré-requisitos

1. Para configurar o Cypress em seu projeto, você precisará seguir os seguintes passos:
   Certifique-se de ter o Node.js instalado em seu computador. Você pode verificar se ele está instalado digitando node -v em seu terminal. Se você não tiver o Node.js instalado, pode baixá-lo em https://nodejs.org/en/.
2. Em seu terminal, navegue até o diretório do seu projeto e execute o comando npm init. Isso criará um arquivo package.json em seu diretório.

3. Instale o Cypress usando o comando npm install cypress --save-dev. Isso instalará o Cypress como uma dependência de desenvolvimento em seu projeto.

4. Depois de instalar o Cypress, você pode inicializá-lo executando o comando npx cypress open. Isso abrirá a interface do usuário do Cypress, onde você pode criar seus testes.

5. Se você quiser executar seus testes em segundo plano, você pode usar o comando npx cypress run.

6. Para adicionar configurações adicionais ao Cypress, você pode criar um arquivo cypress.json em seu diretório raiz do projeto. Este arquivo deve estar no formato JSON e pode incluir configurações como o diretório de destino dos testes e as configurações do servidor.

   Com esses passos, você terá configurado o Cypress em seu projeto e estará pronto para começar a escrever seus testes.

   Antes de começar, garanta que os seguintes sistemas estejam instalados em seu computador.

- [git](https://git-scm.com/) (estou usando a versão -`2.39.1` )
- [Node.js](https://nodejs.org/en - `v18.14.0`)
- npm (estou usando a versão `8.19.2`)
- [Visual Studio Code](https://code.visualstudio.com - `1.75.1`)

> **Obs.:** Recomendo utilizar as mesmas versões, ou versões mais recentes dos sistemas listados acima.
>
> **Obs. 2:** Ao instalar o Node.js o npm é instalado junto.
>
> **Obs. 3:** Para verificar as versões do git, Node.js e npm instaladas em seu computador, execute o comando `git --version && node --version && npm --version` no seu terminal de linha de comando.

import AdicionarProdutoCarrinhoPage from '..//PageObjects/AdicionarProdutoCarrinhoPage'
const adicionarProdutoCarrinho = new AdicionarProdutoCarrinhoPage

//CT02 - Adicionar o produto ao carrinho
Given("que acesso o site", () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    adicionarProdutoCarrinho.abrirUrl();
    
})


And("devo clicar no botão Comprar", () => {
    adicionarProdutoCarrinho.btnAdicionarAoCarrinhoPage();
})

And("devo digitar o cep no campo de busca para calcular o frete e prazo de entrega", () => {
    adicionarProdutoCarrinho.cepPage();
})



And("devo clicar no botão continuar", () => {
    adicionarProdutoCarrinho.btnContinuarPage();
})

And("devo digitar o email no campo de busca", () => {
    adicionarProdutoCarrinho.imputEmailPage();
})

When("devo digitar senha no campo de busca", () => {
    adicionarProdutoCarrinho.imputSenhaPage();
})

Then("clicar no link preciso de ajuda", () => {
    adicionarProdutoCarrinho.linkAjudaPage();
})


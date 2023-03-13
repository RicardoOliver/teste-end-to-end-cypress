import DetalhesDoProdutoPage from '..//PageObjects/DetalhesDoProdutoPage'
const detalheProduto = new DetalhesDoProdutoPage


//CT01 - Validar nome do produto
Given("que acesso o site", () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    detalheProduto.abrirUrl();
    
})
  
  Then('devo ver o nome do produto', () => {
    detalheProduto.nomeProd();
  });
  
  And('devo ver o preço do produto', () => {
    detalheProduto.precoProd();
  });
  

    //CT02 - Adicionar o produto ao carrinho
    
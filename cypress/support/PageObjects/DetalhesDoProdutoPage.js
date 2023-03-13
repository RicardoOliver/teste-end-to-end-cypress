/// <reference types="cypress" />
    import  DetalhesDoProdutoElements  from '../Elements/DetalhesDoProdutoElements'
    const detalhesProdElements = new DetalhesDoProdutoElements
    const NavegadorUrl = Cypress.config("baseUrl")
    
class  DetalhesDoProdutoPage {

    abrirUrl(){
        cy.visit(NavegadorUrl)
        //tempo
    }

    nomeProd()  {
        cy.wait(3000)
        cy.get(detalhesProdElements.nomeProduto()).contains("Smart TV Philips")
    }
    
    precoProd()  {
        cy.wait(3000)
        cy.get(detalhesProdElements.precoProduto()).contains("R$ 2.099,00")

    }
}

export default DetalhesDoProdutoPage
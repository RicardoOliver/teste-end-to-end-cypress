/// <reference types="cypress" />
import  AdicionarProdutoCarrinhoElements  from '../Elements/AdicionarProdutoCarrinhoElements'
const adicionarProdElements = new AdicionarProdutoCarrinhoElements
const NavegadorUrl = Cypress.config("baseUrl")

class  AdicionarProdutoCarrinhoPage {

    abrirUrl(){
        cy.visit(NavegadorUrl)
        
    }
   
    btnAdicionarAoCarrinhoPage(){
        cy.wait(3000)
        cy.get(adicionarProdElements.btnAdicionarAoCarrinhoElements()).click()
    }

    cepPage(){
        cy.wait(3000)
        cy.get(adicionarProdElements.cepElements()).type('09980254')
    }
    
   
    btnContinuarPage(){
        cy.wait(3000)
        cy.get(adicionarProdElements.bntContinuarElements()).contains('Continuar').click()
    }
    
    linkAjudaPage(){
        cy.wait(3000)
        cy.get(adicionarProdElements.linkPrecisoAjudaElements()).contains('preciso de ajuda').click()
    }

  
    imputEmailPage(){
        cy.wait(3000)
        cy.get(adicionarProdElements.inputEmailElements()).type(' digitar email aqui! ')
    }

    imputSenhaPage(){
        cy.wait(3000)
        cy.get(adicionarProdElements.inputSenhaElements()).type(' digitar senha aqui! ')
    }


}

export default AdicionarProdutoCarrinhoPage
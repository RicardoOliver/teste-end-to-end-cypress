Feature: Adicionar o produto ao carrinho de compras 

    Feature Description: Adicionar o produto ao carrinho de compras e verificar o preço total do carrinho de compras atualizado
    
    Background: Background name here
        Given que acesso o site
        
    @CT02 @Regression @Smoke
    Scenario: Adicionar o produto ao carrinho
        And  devo clicar no botão Comprar
        And  devo digitar o cep no campo de busca para calcular o frete e prazo de entrega
        And  devo clicar no botão continuar
        And  devo digitar o email no campo de busca
        When devo digitar senha no campo de busca
        Then clicar no link preciso de ajuda
        
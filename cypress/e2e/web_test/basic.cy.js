describe('Login e navegação do usuário standard_user', () => {
  it('Realiza login com credenciais standard_user/secret_sauce e adiciona e remove um produto do carrinho', () => {
    // Visitar página de login
    cy.visit('https://www.saucedemo.com/')

    // Preencher campos de login e submeter formulário
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // Verificar se a página de produtos é exibida corretamente
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

    // Adicionar um produto ao carrinho
    cy.get('.inventory_list button').first().click()

    // Verificar se o produto adicionado foi exibido corretamente no carrinho
    cy.get('.shopping_cart_badge').should('have.text', '1')

    // Ir para a página do carrinho
    cy.get('.shopping_cart_link').click()

    // Verificar se a página do carrinho é exibida corretamente
    cy.url().should('eq', 'https://www.saucedemo.com/cart.html')

    // Remover o produto adicionado do carrinho
    cy.get('.cart_item').first().find('.cart_button').click()

    // Verificar se o produto foi removido corretamente do carrinho
    cy.get('.shopping_cart_badge').should('not.exist')

    //selecionar o menu de opções
    cy.get('#react-burger-menu-btn').click()

    // Fazer logout da conta
    cy.get('#logout_sidebar_link').click()

    // Verificar se o usuário foi redirecionado para a página de login
    cy.url().should('eq', 'https://www.saucedemo.com/')
    })
})

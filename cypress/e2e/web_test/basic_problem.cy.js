describe('Login', () => {
  it('login with standard_user credentials', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  })

  it('login with problem_user credentials', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('problem_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  })
})

describe('Product', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  })

  it('add product to cart', () => {
    cy.get('.inventory_item:first').find('.btn_inventory').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
  })

  it('remove product from cart', () => {
    cy.get('.inventory_item:first').find('.btn_inventory').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_list').find('.cart_button').click();
    cy.get('.shopping_cart_badge').should('not.exist');
  })
})

describe('Checkout process', () => {
  it('Should display error message when CEP is not filled correctly', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.inventory_item').first().click()
    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
    cy.get('html body div#root div#page_wrapper.page_wrapper div#contents_wrapper div#header_container.header_container div.primary_header div#shopping_cart_container.shopping_cart_container a.shopping_cart_link span.shopping_cart_badge').click()
    cy.get('#checkout').click()
    cy.get('[data-test=firstName]').type('John')
    cy.get('[data-test=lastName]').type('Doe')
    cy.contains('Error: Postal Code is required').should('be.visible')
 
  })
})

describe('image', () => {
  it('Should display error message when image is not filled correctly', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test=username]').type('problem_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.inventory_item').first().click()
    cy.get('#contents_wrapper > div:nth-child(2)').contains('Error: Image is required').should('be.visible')
 
  })
})







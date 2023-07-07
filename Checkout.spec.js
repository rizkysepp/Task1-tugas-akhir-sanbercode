it('Checkout Backpack sauce labs', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('#user-name').type("standard_user")

    cy.get('#password').type("secret_sauce")

    cy.get('#login-button').click ()

    cy.get('#add-to-cart-sauce-labs-backpack').click ()

    cy.get('#shopping_cart_container > a').click ()

    cy.get('#checkout').click ()

    cy.get('#first-name').type("asep")

    cy.get('#last-name').type("muhamad")

    cy.get('#postal-code').type("123")

    cy.get('#continue').click ()

    cy.get('#finish').click ()

    cy.url().should('include','/checkout-complete')
   
   })

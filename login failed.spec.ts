it('Login failed', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('#user-name').type("locked_out_user")

    cy.get('#password').type("secret_sauce")

    cy.get('#login-button').click ()

    cy.contains('Login').should('be.visible')

   // cy.get('#item_4_title_link').click ()

    //cy.url().should('include','/inventory')
   
   })

it('View backpack sauce labs', () => {
     cy.visit('https://www.saucedemo.com/')

     cy.get('#user-name').type("standard_user")

     cy.get('#password').type("secret_sauce")

     cy.get('#login-button').click ()

     cy.get('#item_4_title_link').click ()

     cy.url().should('include','/inventory')
    
    })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Victor')
    cy.get('#lastName').type('Veron')
    cy.get('#email').type('victorh.veron@outlook#com')
    cy.get('#open-text-area').type('Quero abrir um chamado')
    cy.contains('button', 'Enviar').click()
})

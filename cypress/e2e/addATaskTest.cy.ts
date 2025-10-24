describe('Add a Task Test', () => {
  it('Adds a Task', () => {
    // Opens browser and display landing page showing add task form
    cy.visit('http://localhost:3000/')

    // Make sure the form input and text area is empty
    cy.get('[data-testid="cypress-add-title-input"]').should('exist').should('have.value', '')
    cy.get('[data-testid="cypress-add-description-textarea"]').should('exist').should('have.value', '')

    // Type title and description and make sure the value typed is what contains
    cy.get('[data-testid="cypress-add-title-input"]').type('Create a ToDo app for Coverage X')
    cy.get('[data-testid="cypress-add-description-textarea"]').type('By sunday have to complete full development, test and documentation')
    cy.get('[data-testid="cypress-add-title-input"]').should('have.value', 'Create a ToDo app for Coverage X')
    cy.get('[data-testid="cypress-add-description-textarea"]').should('have.value', 'By sunday have to complete full development, test and documentation')
    
    // Add task button exist and click
    cy.get('[data-testid="cypress-add-task-button"]').should('exist').click()

    // As soon task is added the input and text area should be empty
    cy.get('[data-testid="cypress-add-title-input"]').should('have.value', '')
    cy.get('[data-testid="cypress-add-description-textarea"]').should('have.value', '')

    // Added tasks must display the title description and done button 
    cy.get('[data-testid="cypress-added-task-title"]').should('contain', 'Create a ToDo app for Coverage X')
    cy.get('[data-testid="cypress-added-task-description"]').should('contain', 'By sunday have to complete full development, test and documentation')

    cy.get('[data-testid="cypress-done-task-button"]').should('exist').should('contain.text', 'Done')

  })
})
describe('Landing Page Test', () => {
  it('Visits the landing page', () => {
    // Opens browser and display landing page showing add task form
    cy.visit('http://localhost:3000/')

    // Make sure the form heading exist and show the title
    cy.get('[data-testid="cypress-add-a-task-title"]').should('exist').should('contain.text', 'Add a Task')

    // Make sure the form input for task title exist and its empty
    cy.get('[data-testid="cypress-add-title-input"]').should('exist').should('contain.value', '')

    // Make sure the form text area for task description exist and its empty
    cy.get('[data-testid="cypress-add-description-textarea"]').should('exist').should('contain.value', '')

    // Make sure the form add button for submitting exist and it contain add text
    cy.get('[data-testid="cypress-add-task-button"]').should('exist').should('contain.text', 'Add')
  })
})



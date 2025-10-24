describe('Complete a Task', () => {
  it('passes', () => {
    // Opens browser and display landing page showing added tasks
    cy.visit('http://localhost:3000/')

    // Make sure the added tasks and done buttons display
    cy.get('[data-testid="cypress-added-task-title"]').should('contain', 'Create a ToDo app for Coverage X')
    cy.get('[data-testid="cypress-added-task-description"]').should('contain', 'By sunday have to complete full development, test and documentation')
    cy.get('[data-testid="cypress-done-task-button"]').should('exist')

    // Click the done button  as soon its clicked the tasks should not exist anymore
    cy.get('[data-testid="cypress-done-task-button"]').click({multiple: true})
    cy.get('[data-testid="cypress-added-task-title"]').should('not.exist')
    cy.get('[data-testid="cypress-added-task-description"]').should('not.exist')
    cy.get('[data-testid="cypress-done-task-button"]').should('not.exist')

    // If no tasks available show the no task message
    cy.get('[data-testid="cypress-no-task-message"]').should('exist').should('contain.text', "No ToDo's yet. Create one above!")
  })
})
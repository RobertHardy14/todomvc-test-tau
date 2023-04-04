/// <reference types = "cypress" />

it('should navigate to the TODOMVC App', () => {
    cy.visit('https://todomvc-app-for-testing.surge.sh/')
})

it('should be able to add a new todo to the list', () => {
    cy
        .visit('https://todomvc-app-for-testing.surge.sh/')
    cy
        .get('.new-todo')
        .click()
        .type('Clean Room {enter}')

    cy
        .get('label')
        .should('have.text', 'Clean Room')
})

it('should validate the todo is not checked, and then check it', () => {
    cy
        .visit('https://todomvc-app-for-testing.surge.sh/')
    cy
        .get('.new-todo')
        .click()
        .type('Clean Room {enter}')

    cy
        .get('.toggle')
        .should('not.be.checked')

    cy
        .get('.toggle')
        .click()
        .should('be.checked')

    cy
        .get('label')
        .should('have.css', 'text-decoration-line', 'line-through')
})

it('should clear the completed todos', () => {
    cy
        .visit('https://todomvc-app-for-testing.surge.sh/')
    cy
        .get('.new-todo')
        .click()
        .type('Clean Room {enter}')

    cy
        .get('.toggle')
        .click()
        .should('be.checked')

    cy
        .get('label')
        .should('have.css', 'text-decoration-line', 'line-through')

    cy
        .get('.clear-completed')
        .contains('Clear completed')
        .click()
})

it('should verify the todos have been cleared', () => {
    cy
        .visit('https://todomvc-app-for-testing.surge.sh/')
    cy
        .get('.new-todo')
        .click()
        .type('Clean Room {enter}')

    cy
        .get('.toggle')
        .click()
        .should('be.checked')

    cy
        .get('label')
        .should('have.css', 'text-decoration-line', 'line-through')

    cy
        .get('.clear-completed')
        .contains('Clear completed')
        .click()

    cy
        .get('.todo-list')
        .should('not.have.descendants', 'li')
})

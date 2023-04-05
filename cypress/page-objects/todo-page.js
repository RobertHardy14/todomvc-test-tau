export class TodoPage {
    navigate() {
        cy.visit('https://todomvc-app-for-testing.surge.sh/')
    }

    addTodo(todoText) {
        cy
            .get('.new-todo')
            .click()
            .type(todoText + '{enter}')
    }

    validateTodo(todoIndex, expectedText) {
        cy
            .get(`.todo-list li:nth-child(${todoIndex + 1}) label`)
            .should('have.text', expectedText)
    }

    verifyNotChecked() {
        cy
            .get('.toggle')
            .should('not.be.checked')
    }

    verifyChecked() {
        cy
            .get('label')
            .should('have.css', 'text-decoration-line', 'line-through')
    }

    toggleTodo(todoIndex) {
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
    }

    showCompleted() {
        cy.contains('Completed').click()
    }

    showActive() {
        cy.contains('Active').click()
    }

    showAll() {
        cy.contains('All').click()
    }

    clearCompleted() {
        cy.contains('Clear completed').click()
    }

    validateNumberOfTodosShown(expectedNumberOfTodos) {
        cy.get('.todo-list li').should('have.length', expectedNumberOfTodos)
    }


}
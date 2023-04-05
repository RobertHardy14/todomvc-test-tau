/// <reference types = "cypress" />

import { TodoPage } from "../page-objects/todo-page"

describe('Filtering in TODOMVC', () => {

    const todoPage = new TodoPage()

    beforeEach(() => {
        todoPage.navigate()
        todoPage.addTodo('Clean Room')
        todoPage.addTodo('Learn Javascript')
        todoPage.addTodo('Use Cypress')
        todoPage.toggleTodo(1)
    })

    it('Validates the Active filter works', () => {
        todoPage.showActive()
        todoPage.validateNumberOfTodosShown(2)
    })

    it('Validate the Completed filter works', () => {
        todoPage.showCompleted()
        todoPage.validateNumberOfTodosShown(1)
    })

    it('Validates the All filter works', () => {
        todoPage.showAll()
        todoPage.validateNumberOfTodosShown(3)
    })
})
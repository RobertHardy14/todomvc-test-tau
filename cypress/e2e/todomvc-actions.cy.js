/// <reference types = "cypress" />

import { TodoPage } from "../page-objects/todo-page"

describe('TodoMVC add Todo', () => {

    const todoPage = new TodoPage()

    beforeEach(() => {

        todoPage.navigate()
        todoPage.addTodo("Clean Room")
        todoPage.validateTodo(0, 'Clean Room')
    })

    it('should validate the todo is not checked, and then check it', () => {
        todoPage.verifyNotChecked()
        todoPage.toggleTodo(0)
        todoPage.verifyChecked()
    })

    it('should clear the completed todos', () => {
        todoPage.verifyNotChecked()
        todoPage.toggleTodo(0)
        todoPage.verifyChecked()
        todoPage.clearCompleted()
    })

    it('should verify the todos have been cleared', () => {
        todoPage.verifyNotChecked()
        todoPage.toggleTodo(0)
        todoPage.verifyChecked()
        todoPage.clearCompleted()
        todoPage.validateNumberOfTodosShown(0)
    })

})



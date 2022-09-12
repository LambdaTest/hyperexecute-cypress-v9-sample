describe('Input form', () => {

  beforeEach(() => {
    cy.visit('https://lambdatest.github.io/sample-todo-app/')
  })

  it('Ssmple todo test', () => {

    cy.get("[name='li1']")
    cy.get("[name='li2']")
    cy.get('#sampletodotext').type("Yey, Let's add it to list")
    cy.get('#addbutton').click()
    cy.get('li:nth-last-child(1) span').invoke("text").should("eq", "Yey, Let's add it to list")
  })


})

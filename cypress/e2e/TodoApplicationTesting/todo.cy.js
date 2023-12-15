

describe('TodoApplication', ()=>{

  it('should pass the condition', () => {

    // Url to visit the page
    cy.visit('http://localhost:4200/');
    // to check the text contains or not
    cy.contains('Todo-List');
    // to check the cad is visible or not
    cy.get('.cardalign').should('be.visible');
    // write the text in the input
    cy.get('[placeholder="Task To Do"]').type('test');
    //click the button and add the text to the firebase
    cy.get('.fa-solid.fa-circle-plus.fa-xl').should('be.visible').click();
    // to check the list is visible
    cy.get('.list-group-item').should('be.visible');
    //to check the button
    cy.get('.list-group-item').eq(0).find('.text-success').click();
    // to check the task once it completed
    cy.get('.list-group-item').eq(1).find('.text-success').click();
    //to delete the task
    cy.get('.list-group-item').eq(2).find('.fa-trash-can').click();
    // to update the task
    cy.get('.list-group-item').eq(1).find('.text-success').click();

  });
})

class validarLogin{

    validarSucesso(){
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    cy.screenshot('Login com Sucesso');
    }

    validarErro(){ 
        cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.screenshot('Login com erro');
    }         
}
export default new validarLogin();
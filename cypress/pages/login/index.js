import { elementes } from "./elements";

class LoginPage {

    acessarPagina(){
        cy.visit('https://www.saucedemo.com/');
    }

loginValido(){
    cy.get(elementes.userName).type('standard_user');
    cy.get(elementes.password).type('secret_sauce');
    cy.get(elementes.loginButton).click();
    
}

loginInvalido(){
    cy.get(elementes.userName).type('wrong_user');
    cy.get(elementes.password).type('wrong_password');
    cy.get(elementes.loginButton).click();
    cy.get(elementes.errorMessage).should('contain', 'Epic sadface: Username and password do not match any user in this service');
    
    
}
}
export default new LoginPage();
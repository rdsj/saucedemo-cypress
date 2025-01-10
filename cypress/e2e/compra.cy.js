
import compraPage from '../pages/compra'


describe('Concluir compra', () => {
    

    it('Concluir compra', () => {

        cy.visit('https://www.saucedemo.com/')  
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');  
        cy.get('[data-test="login-button"]').click();  
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();  
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('.shopping_cart_link').should('be.visible').and('have.text', '2');
        cy.get('[data-test="shopping-cart-link"]').click();
         cy.url().should('eq', 'https://www.saucedemo.com/cart.html');


compraPage.checkout(); 
compraPage.form('Joao', 'Silva', '12345');
compraPage.finish();    
       
        
         
     
    }) 


})
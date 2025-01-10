import { elementes } from "./elements";

class compraPage {
    checkout() {
        cy.get(elementes.buttonCheckout).click();  
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html'); 
    }

    form(mame, lastName, postalCode) {
        cy.get(elementes.firstNaame).type(mame);
        cy.get(elementes.lastName).type(lastName);
        cy.get(elementes.postalCode).type(postalCode);  
        cy.get(elementes.continue).click();
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html');

    }

    finish() {
        cy.get(elementes.buttonFinish).click();
        cy.screenshot('Compra concluida');
    }

}

export default new compraPage(); 
import { elements } from "./elements";

class produtosPage {

    adicionarAoCarrinho(produto) {
        cy.get(elements.addCart(produto)).click();
        cy.scrollTo('top');
        cy.get(elements.showCart).should('be.visible').and('have.text', '1');
        cy.get(elements.clickCart).click();
         cy.url().should('eq', 'https://www.saucedemo.com/cart.html');
         cy.screenshot('Adicionar ao carrinho');
     
    }
    removerDoCarrinho(produto) {
        cy.get(elements.removeCart(produto)).click();
        //cy.scrollTo('top');
        cy.get(elements.showCart).should('be.visible').and('have.text', '');
        cy.get(elements.clickCart).click();
         cy.url().should('eq', 'https://www.saucedemo.com/cart.html');
         cy.screenshot('Remover do carrinho');
     
    }
}

export default new produtosPage();

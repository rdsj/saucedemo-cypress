import { elementes } from "./elements";

class filtrosPage {

    filtroZtoA() {
        cy.get(elementes.select).select('Name (Z to A)')
    }
    
    filtroAtoZ() {
        cy.get(elementes.select).select('Name (A to Z)')
    }
    
    filtroPrecoCrescente() {
        cy.get(elementes.select).select('Price (low to high)')
    }
    
    filtroPrecoDecrescente() {
        cy.get(elementes.select).select('Price (high to low)')
    }
    
}

export default new filtrosPage();
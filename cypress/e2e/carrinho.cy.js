import LoginPage from '../pages/login'
import produtosPage from '../pages/carrinho'

describe('Carrinho', () => {
    beforeEach(() => {
        LoginPage.acessarPagina()
        LoginPage.loginValido()
    })

    it ('Adicionar produto ao carrinho', () => {

        produtosPage.adicionarAoCarrinho('Sauce-Labs-Backpack')
        
    })

    it ('Remover produto do carrinho', () => {
        produtosPage.adicionarAoCarrinho('Sauce-Labs-Backpack')
        produtosPage.removerDoCarrinho('Sauce-Labs-Backpack')
        
    })  
})
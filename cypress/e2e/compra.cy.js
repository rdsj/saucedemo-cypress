
import LoginPage from '../pages/login'
import compraPage from '../pages/compra'
import produtosPage from '../pages/carrinho'


describe('Concluir compra', () => {

    beforeEach(() => {
        LoginPage.acessarPagina()
        LoginPage.loginValido()
    })  
    

    it('Concluir compra', () => {

        produtosPage.adicionarAoCarrinho('Sauce-Labs-Backpack');
        compraPage.checkout(); 
        compraPage.form('Joao', 'Silva', '12345');
        compraPage.finish();    
       
        
         
     
    }) 


})

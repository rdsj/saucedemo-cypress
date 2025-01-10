import LoginPage from '../pages/login'
import filtrosPage from '../pages/filtros'

describe('Filtros', () => {
   beforeEach(() => {
        LoginPage.acessarPagina()
        LoginPage.loginValido()
  })

  it ('Filtrar por nome de Z a A', () => {
filtrosPage.filtroZtoA()
    
    }
)

it ('Filtrar por nome de A a Z', () => {
filtrosPage.filtroAtoZ()
    
    }
)

it ('Filtrar por preço crescente', () => {
filtrosPage.filtroPrecoCrescente()
    
    }
)

it ('Filtrar por preço decrescente', () => {
filtrosPage.filtroPrecoDecrescente()
    
    }
)

})  




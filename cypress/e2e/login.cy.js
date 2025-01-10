import login from '../pages/login'
import LoginPage from '../pages/login'
import validarLogin from '../pages/login/validaLogin'

describe('Login', () => {
  beforeEach(() => {
    LoginPage.acessarPagina()
  })

  it ('Realizar login com sucesso', () => {
    LoginPage.loginValido()
    validarLogin.validarSucesso()
  }
  )

  it('Realizar login com erro de credenciais', () => {  

    LoginPage.loginInvalido()
    validarLogin.validarErro()
  })

})
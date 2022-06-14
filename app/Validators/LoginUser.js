'use strict'

class LoginUser {
  get rules () {
    return {
      'email':'required|email',
      'password':'required'
    }
  }

  get messages(){
    return{
      'required':'Ohh oh!, You missed {{ field }}, please check.',
    }
  }

  async fails(error){
    this.ctx.session.withErrors(error)
    .flashAll();

    return this.ctx.response.redirect('back');
  }
  
}


module.exports = LoginUser

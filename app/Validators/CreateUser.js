'use strict'

class CreateUser {
  get rules () {
    return {
        'username':'required|unique:users',
        'email':'required|unique:users',
        'password':'required'
    }
  }

  get messages(){
    return{
    'required':'Please fill {{ field }}, it is mandatory',
    'unique':'{{field}} is already taken by another user. Please choose different.'
    }
  }

  async fails(error){
    this.ctx.session.withErrors(error)
    .flashAll();

    return this.ctx.response.redirect('back');
  }

}

module.exports = CreateUser

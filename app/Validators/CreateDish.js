'use strict'

class CreateDish {
  get rules () {
    return {
        title:'required',
        link:'required'
    }
  }

  get messages(){
    return {
      'required':'Ops! Missed {{field}}? Please fill it up.' 
    }
  }

  async fails(error){
    this.ctx.session.withErrors(error)
    .flashAll();

    return this.ctx.response.redirect('back');
  }
}

module.exports = CreateDish

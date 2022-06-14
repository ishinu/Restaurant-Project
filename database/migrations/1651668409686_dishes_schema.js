'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DishesSchema extends Schema {
  up () {
    this.create('dishes', (table) => {
      table.increments()
      table.string('title')
      table.string('link')
      table.string('description')
      table.integer('user_id')
      table.timestamps()
    })
  }   

  down () {
    this.drop('dishes')
  }
}

module.exports = DishesSchema

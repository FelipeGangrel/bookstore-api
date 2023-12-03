import Genre from 'App/Models/Genre'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Genre, ({ faker }) => {
  return {
    name: faker.lorem.word(),
  }
}).build()

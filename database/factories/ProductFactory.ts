import Product from 'App/Models/Product'
import Factory from '@ioc:Adonis/Lucid/Factory'
import { string } from '@ioc:Adonis/Core/Helpers'

export default Factory.define(Product, ({ faker }) => {
  return {
    name: string.capitalCase(faker.lorem.words(faker.number.int({ min: 1, max: 4 }))),
    description: faker.lorem.paragraph(),
    price: faker.number.float({ min: 10, max: 400, precision: 2 }),
  }
}).build()

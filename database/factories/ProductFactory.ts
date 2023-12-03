import Product from 'App/Models/Product'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Product, ({ faker }) => {
  return {
    name: faker.lorem.words(faker.number.int({ min: 1, max: 3 })),
    description: faker.lorem.paragraph(),
    price: faker.number.float({ min: 10, max: 400, precision: 2 }),
  }
}).build()

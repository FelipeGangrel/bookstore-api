import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'
import ProductFactory from 'Database/factories/ProductFactory'

export default class extends BaseSeeder {
  public async run() {
    await Product.truncate()
    await ProductFactory.createMany(10)
  }
}

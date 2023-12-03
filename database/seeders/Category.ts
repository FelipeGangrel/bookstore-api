import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Category from 'App/Models/Category'
import CategoryFactory from 'Database/factories/CategoryFactory'

export default class extends BaseSeeder {
  public async run() {
    await Category.truncate()
    await CategoryFactory.createMany(10)
  }
}

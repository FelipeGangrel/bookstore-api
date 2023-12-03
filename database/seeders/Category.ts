import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Category from 'App/Models/Category'
import CategoryFactory from 'Database/factories/CategoryFactory'

const categories: Partial<Category>[] = [
  {
    name: 'Livros',
  },
  {
    name: 'Papelaria',
  },
]

export default class extends BaseSeeder {
  public async run() {
    await Category.truncate()
    await CategoryFactory.merge(categories).createMany(categories.length)
  }
}

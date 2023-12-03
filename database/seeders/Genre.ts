import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Genre from 'App/Models/Genre'
import GenreFactory from 'Database/factories/GenreFactory'

export default class extends BaseSeeder {
  public async run() {
    await Genre.truncate()
    await GenreFactory.createMany(10)
  }
}

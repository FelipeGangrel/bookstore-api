import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Genre from 'App/Models/Genre'
import GenreFactory from 'Database/factories/GenreFactory'

const genres: Partial<Genre>[] = [
  {
    name: 'Romance histórico',
  },
  {
    name: 'Ficção científica',
  },
  {
    name: 'Fantasia',
  },
]

export default class extends BaseSeeder {
  public async run() {
    await Genre.truncate()
    await GenreFactory.merge(genres).createMany(genres.length)
  }
}

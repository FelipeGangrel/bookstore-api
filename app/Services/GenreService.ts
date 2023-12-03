import { PaginatedData } from 'App/Contracts/Common'
import { CreateGenreSchema, FindGenres, UpdateGenreSchema } from 'App/Contracts/Genre'
import Genre from 'App/Models/Genre'

export default class GenreService {
  public async getGenres(data: FindGenres): Promise<PaginatedData> {
    const { page = 1, limit = 10, orderBy = 'name', direction = 'asc', search } = data

    const query = Genre.query()

    if (search) {
      query.where('name', 'like', `%${search}%`)
    }

    query.orderBy(orderBy, direction)

    const genres = await query.paginate(page, limit)
    return genres.serialize()
  }

  public async getGenre(id: number) {
    return await Genre.findOrFail(id)
  }

  public async createGenre(data: CreateGenreSchema) {
    return await Genre.create(data)
  }

  public async updateGenre(id: number, data: UpdateGenreSchema) {
    const genre = await Genre.findOrFail(id)
    genre.merge(data)
    await genre.save()
    return genre
  }

  public async deleteGenre(id: number) {
    const genre = await Genre.findOrFail(id)
    await genre.delete()
  }
}

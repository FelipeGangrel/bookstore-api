import { HttpContextContract } from 'App/Contracts/Common'
import GenreService from 'App/Services/GenreService'
import CreateGenreValidator from 'App/Validators/Genre/CreateGenreValidator'
import UpdateGenreValidator from 'App/Validators/Genre/UpdateGenreValidator'

export default class GenreController {
  private readonly genreService = new GenreService()

  public async getGenres(ctx: HttpContextContract) {
    const reqData = ctx.request.qs()
    const resData = await this.genreService.getGenres(reqData)
    return ctx.response.json(resData)
  }

  public async getGenre(ctx: HttpContextContract) {
    const id = ctx.request.param('id')
    const resData = await this.genreService.getGenre(id)
    return ctx.response.json(resData)
  }

  public async createGenre(ctx: HttpContextContract) {
    const reqData = await ctx.request.validate(CreateGenreValidator)
    const resData = await this.genreService.createGenre(reqData)
    return ctx.response.json(resData)
  }

  public async updateGenre(ctx: HttpContextContract) {
    const id = ctx.request.param('id')
    const reqData = await ctx.request.validate(UpdateGenreValidator)
    const resData = await this.genreService.updateGenre(id, reqData)
    return ctx.response.json(resData)
  }

  public async deleteGenre(ctx: HttpContextContract) {
    const id = ctx.request.param('id')
    await this.genreService.deleteGenre(id)
    return ctx.response.json({ messsage: 'Gênero deletado com sucesso' })
  }
}

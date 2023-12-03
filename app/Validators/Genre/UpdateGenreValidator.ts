import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ValidationExceptionReporter from 'App/Exceptions/ValidationExceptionReporter'

export default class UpdateGenreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public reporter = ValidationExceptionReporter

  public schema = schema.create({
    name: schema.string.optional({ trim: true }, [
      rules.unique({ table: 'genres', column: 'name', whereNot: { id: this.ctx.params.id } }),
    ]),
  })

  public messages: CustomMessages = {
    'name.unique': 'Já existe um gênero com esse nome',
  }
}

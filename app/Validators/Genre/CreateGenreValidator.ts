import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ValidationExceptionReporter from 'App/Exceptions/ValidationExceptionReporter'

export default class CreateGenreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public reporter = ValidationExceptionReporter

  public schema = schema.create({
    name: schema.string({ trim: true }, [rules.unique({ table: 'genres', column: 'name' })]),
  })

  public messages: CustomMessages = {
    'name.required': 'Informe o nome do gênero',
    'name.unique': 'Já existe um gênero com esse nome',
  }
}

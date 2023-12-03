import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CustomMessages, rules, schema } from '@ioc:Adonis/Core/Validator'
import ValidationExceptionReporter from 'App/Exceptions/ValidationExceptionReporter'

export default class RegisterUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public reporter = ValidationExceptionReporter

  public schema = schema.create({
    name: schema.string({ trim: true }),
    email: schema.string({}, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
    password: schema.string(),
  })

  public messages: CustomMessages = {
    'name.required': 'Informe seu nome completo',
    'email.required': 'Informe seu e-mail',
    'email.email': 'E-mail inválido',
    'email.unique': 'E-mail já cadastrado',
    'password.required': 'Informe sua senha',
  }
}

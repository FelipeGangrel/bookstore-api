import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ValidationExceptionReporter from 'App/Exceptions/ValidationExceptionReporter'

export default class PasswordResetStep2Validator {
  constructor(protected ctx: HttpContextContract) {}

  public reporter = ValidationExceptionReporter

  public schema = schema.create({
    email: schema.string({ trim: true }, [rules.email()]),
    password: schema.string({ trim: true }),
    token: schema.string({ trim: true }),
  })

  public messages: CustomMessages = {
    'email.required': 'Informe seu e-mail de login',
    'email.email': 'Informe um e-mail válido',
    'password.required': 'Informe sua senha',
    'token.required': 'Informe o token de recuperação de senha',
  }
}

export type PasswordResetStep2Schema = typeof PasswordResetStep2Validator.prototype.schema.props

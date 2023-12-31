import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ValidationExceptionReporter from 'App/Exceptions/ValidationExceptionReporter'

export default class PasswordResetStep1Validator {
  constructor(protected ctx: HttpContextContract) {}

  public reporter = ValidationExceptionReporter

  public schema = schema.create({
    email: schema.string({ trim: true }, [rules.email()]),
  })

  public messages: CustomMessages = {
    'email.required': 'Informe seu e-mail de login',
    'email.email': 'Informe um e-mail válido',
  }
}

export type PasswordResetStep1Schema = typeof PasswordResetStep1Validator.prototype.schema.props

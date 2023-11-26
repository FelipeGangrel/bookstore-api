import { Exception } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from 'App/Contracts/Common'

type ValidationErrors = Record<string, string | string[]>

type ConstructorProps = {
  validationErrors?: ValidationErrors
  message?: string
  status?: number
  code?: string
}

export default class ValidationException extends Exception {
  private readonly validationErrors: ValidationErrors

  constructor(props: ConstructorProps) {
    super(
      props.message || 'Validation Error',
      props.status || 403,
      props.code || 'E_VALIDATION_FAILURE'
    )
    this.validationErrors = props.validationErrors || {}
  }

  public async handle(error: this, ctx: HttpContextContract): Promise<void> {
    ctx.response.status(error.status).send({
      message: error.message.replace(`${error.code}: `, ''),
      validationErrors: error.validationErrors,
      code: error.code,
    })
  }
}

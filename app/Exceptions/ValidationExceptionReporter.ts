import type { ErrorReporterContract, MessagesBagContract } from '@ioc:Adonis/Core/Validator'
import { ValidationException } from '@ioc:Adonis/Core/Validator'

type ValidationErrors = Record<string, string | string[]>

type ErrorBody = {
  message: string
  validationErrors: ValidationErrors
  code: string
}

export default class ValidationExceptionReporter implements ErrorReporterContract<ErrorBody> {
  public hasErrors: boolean
  private validationErrors: ValidationErrors = {}

  constructor(
    private messages: MessagesBagContract,
    private bail: boolean
  ) {}

  public report(
    pointer: string,
    rule: string,
    message?: string | undefined,
    arrayExpressionPointer?: string | undefined,
    args?: any
  ): void {
    this.hasErrors = true

    const errorMessage = this.messages.get(
      pointer,
      rule,
      message || `O campo ${pointer} é inválido`,
      arrayExpressionPointer,
      args
    )

    Object.assign(this.validationErrors, {
      [pointer]: errorMessage,
    })

    if (this.bail) {
      this.toError()
    }
  }

  public toError() {
    throw new ValidationException(false, this.toJSON())
  }

  public toJSON(): ErrorBody {
    return {
      message: 'Seu formulário contém erros de validação',
      validationErrors: this.validationErrors,
      code: 'E_VALIDATION_FAILURE',
    }
  }
}

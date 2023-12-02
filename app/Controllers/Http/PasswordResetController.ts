import type { HttpContextContract } from 'App/Contracts/Common'
import PasswordResetService from 'App/Services/PasswordResetService'
import PasswordResetStep1Validator from 'App/Validators/Auth/PasswordResetStep1Validator'

export default class PasswordResetController {
  private readonly passwordResetService = new PasswordResetService()

  public async genereateToken(ctx: HttpContextContract) {
    const data = await ctx.request.validate(PasswordResetStep1Validator)
    return this.passwordResetService.generateToken(data)
  }
}

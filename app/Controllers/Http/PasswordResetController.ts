import type { HttpContextContract } from 'App/Contracts/Common'
import PasswordResetService from 'App/Services/PasswordResetService'
import PasswordResetStep1Validator from 'App/Validators/Auth/PasswordResetStep1Validator'
import PasswordResetStep2Validator from 'App/Validators/Auth/PasswordResetStep2Validator'

export default class PasswordResetController {
  private readonly passwordResetService = new PasswordResetService()

  public async generateToken(ctx: HttpContextContract) {
    const data = await ctx.request.validate(PasswordResetStep1Validator)
    return this.passwordResetService.generateToken(data)
  }

  public async resetPassword(ctx: HttpContextContract) {
    const data = await ctx.request.validate(PasswordResetStep2Validator)
    return this.passwordResetService.resetPassword(data)
  }
}

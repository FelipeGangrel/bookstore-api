import type { HttpContextContract } from 'App/Contracts/Common'
import PasswordResetService from 'App/Services/PasswordResetService'
import PasswordResetStep1Validator from 'App/Validators/Auth/PasswordResetStep1Validator'
import PasswordResetStep2Validator from 'App/Validators/Auth/PasswordResetStep2Validator'

export default class PasswordResetController {
  private readonly passwordResetService = new PasswordResetService()

  public async generateToken(ctx: HttpContextContract) {
    const data = await ctx.request.validate(PasswordResetStep1Validator)
    await this.passwordResetService.generateToken(data)
    return ctx.response.json({ message: 'Código para recuperação de senha gerado com sucesso' })
  }

  public async updatePassword(ctx: HttpContextContract) {
    const data = await ctx.request.validate(PasswordResetStep2Validator)
    await this.passwordResetService.updatePassword(data)
    return ctx.response.json({ message: 'senha atualizada com sucesso' })
  }
}

import type { HttpContextContract } from 'App/Contracts/Common'
import PasswordResetService from 'App/Services/PasswordResetService'
import GenerateTokenValidator from 'App/Validators/PasswordReset/GenerateTokenValidator'
import UpdatePasswordValidator from 'App/Validators/PasswordReset/UpdatePasswordValidator'

export default class PasswordResetController {
  private readonly passwordResetService = new PasswordResetService()

  public async generateToken(ctx: HttpContextContract) {
    const reqData = await ctx.request.validate(GenerateTokenValidator)
    await this.passwordResetService.generateToken(reqData)
    return ctx.response.json({ message: 'Código para recuperação de senha gerado com sucesso' })
  }

  public async updatePassword(ctx: HttpContextContract) {
    const resData = await ctx.request.validate(UpdatePasswordValidator)
    await this.passwordResetService.updatePassword(resData)
    return ctx.response.json({ message: 'senha atualizada com sucesso' })
  }
}

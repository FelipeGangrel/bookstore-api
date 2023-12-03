import type { HttpContextContract } from 'App/Contracts/Common'
import { UserRole } from 'App/Contracts/User'
import AuthService from 'App/Services/AuthService'
import LoginValidator from 'App/Validators/Auth/LoginValidator'

export default class AuthController {
  private readonly authService = new AuthService()

  public async clientLogin(ctx: HttpContextContract) {
    await ctx.request.validate(LoginValidator)
    return this.authService.login(ctx, UserRole.CLIENT)
  }

  public async adminLogin(ctx: HttpContextContract) {
    await ctx.request.validate(LoginValidator)
    return this.authService.login(ctx, UserRole.ADMIN)
  }

  public async logout(ctx: HttpContextContract) {
    await this.authService.logout(ctx)
    return ctx.response.json({ message: 'Até mais' })
  }
}

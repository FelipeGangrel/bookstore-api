import type { HttpContextContract } from 'App/Contracts/Common'
import LoginValidator from 'App/Validators/Auth/LoginValidator'

export default class AuthController {
  public async login(ctx: HttpContextContract): Promise<any> {
    const result = await ctx.request.validate(LoginValidator)
    return result
  }
}

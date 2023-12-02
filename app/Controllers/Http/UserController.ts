import { HttpContextContract } from 'App/Contracts/Common'
import { UserRole } from 'App/Contracts/Users'
import UserService from 'App/Services/UserService'
import RegisterUserValidator from 'App/Validators/User/RegisterUserValidator'

export default class UserController {
  private readonly userService = new UserService()

  public async registerClient(ctx: HttpContextContract) {
    const data = await ctx.request.validate(RegisterUserValidator)
    return this.userService.registerUser(data, UserRole.CLIENT)
  }

  public async registerAdmin(ctx: HttpContextContract) {
    const data = await ctx.request.validate(RegisterUserValidator)
    return this.userService.registerUser(data, UserRole.ADMIN)
  }
}

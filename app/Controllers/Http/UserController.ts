import { HttpContextContract } from 'App/Contracts/Common'
import { UserRole } from 'App/Contracts/User'
import UserService from 'App/Services/UserService'
import RegisterUserValidator from 'App/Validators/User/RegisterUserValidator'

export default class UserController {
  private readonly userService = new UserService()

  public async registerClient(ctx: HttpContextContract) {
    const reqData = await ctx.request.validate(RegisterUserValidator)
    const resData = await this.userService.registerUser(reqData, UserRole.CLIENT)
    return ctx.response.json(resData)
  }

  public async registerAdmin(ctx: HttpContextContract) {
    const reqData = await ctx.request.validate(RegisterUserValidator)
    const resData = await this.userService.registerUser(reqData, UserRole.ADMIN)
    return ctx.response.json(resData)
  }
}

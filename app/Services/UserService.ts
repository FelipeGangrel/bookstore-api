import { UserRole } from 'App/Contracts/Users'
import User from 'App/Models/User'
import { RegisterUserValidatorSchema } from 'App/Validators/User/RegisterUserValidator'

export default class UserService {
  public async registerUser(payload: RegisterUserValidatorSchema, role?: UserRole): Promise<User> {
    const user = await User.create({
      name: payload.name,
      email: payload.email,
      password: payload.password,
      role: role || UserRole.CLIENT,
    })

    return user
  }
}

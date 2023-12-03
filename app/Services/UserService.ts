import { RegisterUserSchema, UserRole } from 'App/Contracts/User'
import User from 'App/Models/User'

export default class UserService {
  public async registerUser(payload: RegisterUserSchema, role?: UserRole): Promise<User> {
    const user = await User.create({
      name: payload.name,
      email: payload.email,
      password: payload.password,
      role: role || UserRole.CLIENT,
    })

    return user
  }
}

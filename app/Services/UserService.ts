import { RegisterUserSchema, UserRole } from 'App/Contracts/User'
import User from 'App/Models/User'

export default class UserService {
  public async registerUser(data: RegisterUserSchema, role?: UserRole): Promise<User> {
    const user = await User.create({
      name: data.name,
      email: data.email,
      password: data.password,
      role: role || UserRole.CLIENT,
    })

    return user
  }
}

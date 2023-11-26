import { LoginResponseBody } from 'App/Contracts/Auth'
import { HttpContextContract } from 'App/Contracts/Common'
import { UserRole } from 'App/Contracts/Users'
import AuthorizationException from 'App/Exceptions/AuthorizationException'

export default class AuthService {
  public async login(ctx: HttpContextContract, role?: UserRole): Promise<LoginResponseBody> {
    const { auth, request } = ctx
    const { email, password } = request.body()

    try {
      const { token, user } = await auth.use('api').attempt(email, password, {
        expiresIn: '1 days',
      })

      if (user.deletedAt !== null) {
        throw new AuthorizationException({
          message: 'User is deactivated',
        })
      }

      if (role && user.role !== role) {
        throw new AuthorizationException({
          message: 'You cannot access this resource',
        })
      }

      return {
        jwt: token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      }
    } catch (error) {
      throw new AuthorizationException({
        message: 'Invalid credentials',
      })
    }
  }

  public async logout(ctx: HttpContextContract): Promise<void> {
    const { auth } = ctx
    await auth.use('api').logout()
  }
}

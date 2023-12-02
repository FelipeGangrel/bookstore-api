import { LoginResponseBody } from 'App/Contracts/Auth'
import { HttpContextContract } from 'App/Contracts/Common'
import { UserRole } from 'App/Contracts/Users'
import AuthenticationException from 'App/Exceptions/AuthenticationException'

export default class AuthService {
  public async login(ctx: HttpContextContract, role?: UserRole): Promise<LoginResponseBody> {
    const { auth, request } = ctx
    const { email, password } = request.body()

    try {
      const { token, user } = await auth.use('api').attempt(email, password, {
        expiresIn: '1 days',
      })

      if (user.deletedAt !== null) {
        throw new AuthenticationException({
          message: 'O usuário foi desativado',
        })
      }

      if (role && user.role !== role) {
        throw new AuthenticationException({
          message: 'Você não tem permissão para acessar este recurso',
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
      throw new AuthenticationException({
        message: 'Credenciais inválidas',
      })
    }
  }

  public async logout(ctx: HttpContextContract): Promise<void> {
    const { auth } = ctx
    await auth.use('api').revoke()
  }
}

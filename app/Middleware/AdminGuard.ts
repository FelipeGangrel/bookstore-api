import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UserRole } from 'App/Contracts/User'
import AuthenticationException from 'App/Exceptions/AuthenticationException'

export default class AdminGuard {
  public async handle({ auth }: HttpContextContract, next: () => Promise<void>) {
    if (auth.user?.role !== UserRole.ADMIN) {
      throw new AuthenticationException()
    }

    await next()
  }
}

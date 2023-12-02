import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UserRole } from 'App/Contracts/Users'
import AuthorizationException from 'App/Exceptions/AuthorizationException'

export default class AdminGuard {
  public async handle({ auth }: HttpContextContract, next: () => Promise<void>) {
    if (auth.user?.role !== UserRole.ADMIN) {
      throw new AuthorizationException()
    }

    await next()
  }
}

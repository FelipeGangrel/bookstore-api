import Mail from '@ioc:Adonis/Addons/Mail'
import AuthorizationException from 'App/Exceptions/AuthorizationException'
import User from 'App/Models/User'
import type { PasswordResetStep1Schema } from 'App/Validators/Auth/PasswordResetStep1Validator'

export default class PasswordResetService {
  public async generateToken({ email }: PasswordResetStep1Schema): Promise<void> {
    try {
      const user = await User.query().where({ email, deletedAt: null }).firstOrFail()

      const token = this.generateNumericToken(6)

      await Mail.send((message) => {
        message
          .subject('Recuperação de senha')
          .from('no-reply@example.com', 'Bookstore')
          .to(email, user.name)
          .htmlView('emails/password_reset', {
            name: user.name,
            token,
          })
      })

      user.merge({
        passwordResetToken: token,
      })

      await user.save()
    } catch (error) {
      throw new AuthorizationException({ message: 'User not found' })
    }
  }

  private generateNumericToken(length: number): string {
    const numbers = '0123456789'
    let token = ''

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * numbers.length)
      token += numbers[randomIndex]
    }

    return token
  }
}

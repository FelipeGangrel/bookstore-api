import Mail from '@ioc:Adonis/Addons/Mail'
import AuthorizationException from 'App/Exceptions/AuthorizationException'
import User from 'App/Models/User'
import type { PasswordResetStep1Schema } from 'App/Validators/Auth/PasswordResetStep1Validator'
import type { PasswordResetStep2Schema } from 'App/Validators/Auth/PasswordResetStep2Validator'

export default class PasswordResetService {
  public async generateToken(payload: PasswordResetStep1Schema): Promise<void> {
    try {
      const { email } = payload

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

  public async updatePassword(payload: PasswordResetStep2Schema): Promise<void> {
    const { email, token, password } = payload

    const user = await User.query()
      .where({ email, passwordResetToken: token, deletedAt: null })
      .firstOrFail()

    user.merge({
      password,
      passwordResetToken: null,
    })

    await user.save()
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

import Hash from '@ioc:Adonis/Core/Hash'
import { beforeSave, column } from '@ioc:Adonis/Lucid/Orm'
import { UserRole } from 'App/Contracts/User'
import { DateTime } from 'luxon'
import AppBaseModel from './AppBaseModel'

export default class User extends AppBaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column()
  public name: string

  @column()
  public role: UserRole

  @column({ serializeAs: null })
  public password: string

  @column()
  public passwordResetToken: string | null

  @column()
  public rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime()
  public deletedAt: DateTime | null

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}

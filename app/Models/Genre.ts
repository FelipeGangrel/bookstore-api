import { HasManyThrough, column, hasManyThrough } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import AppBaseModel from './AppBaseModel'
import Product from './Product'
import ProductGenre from './ProductGenre'

export default class Genre extends AppBaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  /** Relationships */

  @hasManyThrough([() => Product, () => ProductGenre], {
    onQuery(query) {
      query.whereNull('deletedAt')
    },
  })
  public products: HasManyThrough<typeof Product>
}

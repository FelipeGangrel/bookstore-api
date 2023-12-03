import { DateTime } from 'luxon'
import { BaseModel, HasManyThrough, column, hasManyThrough } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'
import ProductGenre from './ProductGenre'

export default class Genre extends BaseModel {
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

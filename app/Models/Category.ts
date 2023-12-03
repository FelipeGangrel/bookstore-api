import { DateTime } from 'luxon'
import { BaseModel, HasManyThrough, column, hasManyThrough } from '@ioc:Adonis/Lucid/Orm'
import ProductCategory from './ProductCategory'
import Product from './Product'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  /** Relationships */

  @hasManyThrough([() => Product, () => ProductCategory], {
    onQuery(query) {
      query.whereNull('deletedAt')
    },
  })
  public products: HasManyThrough<typeof Product>
}

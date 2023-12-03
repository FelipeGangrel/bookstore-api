import { HasManyThrough, column, hasManyThrough } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import AppBaseModel from './AppBaseModel'
import Product from './Product'
import ProductCategory from './ProductCategory'

export default class Category extends AppBaseModel {
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

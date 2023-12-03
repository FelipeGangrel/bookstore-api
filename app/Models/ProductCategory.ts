import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import AppBaseModel from './AppBaseModel'
import Category from './Category'
import Product from './Product'

export default class ProductCategory extends AppBaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public productId: number

  @column()
  public categoryId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  /** Relationships */

  @belongsTo(() => Product)
  public product: BelongsTo<typeof Product>

  @belongsTo(() => Category)
  public category: BelongsTo<typeof Category>
}

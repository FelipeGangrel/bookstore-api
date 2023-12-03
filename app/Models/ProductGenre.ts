import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import AppBaseModel from './AppBaseModel'
import Genre from './Genre'
import Product from './Product'

export default class ProductGenre extends AppBaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public productId: number

  @column()
  public genreId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  /** Relationships */

  @belongsTo(() => Product)
  public product: BelongsTo<typeof Product>

  @belongsTo(() => Genre)
  public genre: BelongsTo<typeof Genre>
}

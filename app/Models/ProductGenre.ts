import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'
import Genre from './Genre'

export default class ProductGenre extends BaseModel {
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

import { HasManyThrough, column, hasManyThrough } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import AppBaseModel from './AppBaseModel'
import Category from './Category'
import Genre from './Genre'
import ProductCategory from './ProductCategory'
import ProductGenre from './ProductGenre'

export default class Product extends AppBaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public price: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime()
  public deletedAt: DateTime | null

  /** Relationships */

  @hasManyThrough([() => Category, () => ProductCategory])
  public categories: HasManyThrough<typeof Category>

  @hasManyThrough([() => Category, () => ProductGenre])
  public genres: HasManyThrough<typeof Genre>
}

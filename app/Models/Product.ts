import { DateTime } from 'luxon'
import { BaseModel, HasManyThrough, column, hasManyThrough } from '@ioc:Adonis/Lucid/Orm'
import Category from './Category'
import ProductCategory from './ProductCategory'

export default class Product extends BaseModel {
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
}

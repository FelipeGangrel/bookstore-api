import type { SimplePaginatorMetaKeys } from '@ioc:Adonis/Lucid/Database'
import type { ModelObject } from '@ioc:Adonis/Lucid/Orm'
export type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export type PaginatedData = {
  meta: SimplePaginatorMetaKeys
  data: ModelObject[]
}

export type PropsWithFindMany<T extends Record<string, unknown> = {}> = T & {
  page?: number
  limit?: number
  orderBy?: string
  direction?: 'asc' | 'desc'
  search?: string
}

export type ExtractSchemaProps<T> = T extends { schema: { props: infer U } } ? U : never

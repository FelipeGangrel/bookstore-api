import type { ModelObject } from '@ioc:Adonis/Lucid/Orm'
export type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export type PaginationMeta = {
  total: number
  perPage: number
  currentPage: number
  lastPage: number
  firstPage: number
  firstPageUrl: string
  lastPageUrl: string
  nextPageUrl: string | null
  previousPageUrl: string | null
}

export type PaginatedResponse = {
  meta: PaginationMeta
  data: ModelObject[]
}

export type PropsWithFindMany<T extends Record<string, unknown> = {}> = T & {
  page?: number
  limit?: number
  orderBy?: string
  direction?: 'asc' | 'desc'
}

export type ExtractSchemaProps<T> = T extends { schema: { props: infer U } } ? U : never

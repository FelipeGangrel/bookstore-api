import { WithPaginationParams } from './Common'

export enum UserRole {
  ADMIN = 'admin',
  CLIENT = 'client',
}

export type FindManyUsers = WithPaginationParams<{
  search?: string
}>

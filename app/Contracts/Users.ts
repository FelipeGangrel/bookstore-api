import type { ExtractSchemaProps, PropsWithFindMany } from './Common'
import type RegisterUserValidator from 'App/Validators/User/RegisterUserValidator'

export enum UserRole {
  ADMIN = 'admin',
  CLIENT = 'client',
}

export type FindUsers = PropsWithFindMany<{
  search?: string
  role?: string
}>

export type RegisterUserSchema = ExtractSchemaProps<RegisterUserValidator>

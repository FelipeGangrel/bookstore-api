import GenerateTokenValidator from 'App/Validators/PasswordReset/GenerateTokenValidator'
import UpdatePasswordValidator from 'App/Validators/PasswordReset/UpdatePasswordValidator'
import { ExtractSchemaProps } from './Common'

export type GenerateTokenSchema = ExtractSchemaProps<GenerateTokenValidator>
export type UpdatePasswordSchema = ExtractSchemaProps<UpdatePasswordValidator>

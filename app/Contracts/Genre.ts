import { ExtractSchemaProps, PropsWithFindMany } from './Common'
import CreateGenreValidator from 'App/Validators/Genre/CreateGenreValidator'
import UpdateGenreValidator from 'App/Validators/Genre/UpdateGenreValidator'

export type FindGenres = PropsWithFindMany
export type CreateGenreSchema = ExtractSchemaProps<CreateGenreValidator>
export type UpdateGenreSchema = ExtractSchemaProps<UpdateGenreValidator>

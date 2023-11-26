import User from 'App/Models/User'

export type LoginResponseBody = {
  jwt: string
  user: Pick<User, 'id' | 'email' | 'name' | 'role'>
}

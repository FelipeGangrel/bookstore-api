import Route from '@ioc:Adonis/Core/Route'
import 'App/Routes/AuthRoutes'
import 'App/Routes/PasswordResetRoutes'
import 'App/Routes/UserRoutes'
import 'App/Routes/GenreRoutes'

Route.get('/', async () => {
  return { hello: 'world' }
})

import Route from '@ioc:Adonis/Core/Route'
import 'App/Routes/AuthRoutes'
import 'App/Routes/PasswordResetRoutes'

Route.get('/', async () => {
  return { hello: 'world' }
})

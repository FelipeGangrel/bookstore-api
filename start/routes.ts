import Route from '@ioc:Adonis/Core/Route'
import 'App/Routes/AuthRoutes'

Route.get('/', async () => {
  return { hello: 'world' }
})

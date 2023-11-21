import Route from '@ioc:Adonis/Core/Route'

const c = 'AuthController'

Route.group(() => {
  Route.post('/login', `${c}.login`)
}).prefix('auth')

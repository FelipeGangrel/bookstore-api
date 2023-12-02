import Route from '@ioc:Adonis/Core/Route'

const c = 'UserController'

Route.group(() => {
  Route.post('/register-client', `${c}.registerClient`)
  Route.post('/register-admin', `${c}.registerAdmin`).middleware(['auth', 'admin'])
}).prefix('users')

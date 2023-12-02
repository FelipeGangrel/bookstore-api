import Route from '@ioc:Adonis/Core/Route'

const c = 'PasswordResetController'

Route.group(() => {
  Route.post('/generate-token', `${c}.generateToken`)
}).prefix('password-reset')

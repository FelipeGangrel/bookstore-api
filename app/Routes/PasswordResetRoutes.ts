import Route from '@ioc:Adonis/Core/Route'

const c = 'PasswordResetController'

Route.group(() => {
  Route.post('/generate-token', `${c}.generateToken`)
  Route.post('/update-password', `${c}.updatePassword`)
}).prefix('password-reset')

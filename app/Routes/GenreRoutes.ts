import Route from '@ioc:Adonis/Core/Route'

const c = 'GenreController'

Route.group(() => {
  Route.get('', `${c}.getGenres`)
  Route.get('/:id', `${c}.getGenre`)
}).prefix('genres')

Route.group(() => {
  Route.post('', `${c}.createGenre`)
  Route.put('/:id', `${c}.updateGenre`)
  Route.delete('/:id', `${c}.deleteGenre`)
})
  .prefix('genres')
  .middleware(['auth', 'admin'])

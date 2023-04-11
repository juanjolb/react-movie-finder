import Movies from './components/Movies'
import useMovies from './hooks/useMovies'

import './App.css'
import useSearch from './hooks/useSearch'

function App () {
  const { search, setSearch, formError } = useSearch()
  const { movies, getMovies, loading, error } = useMovies(search)

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    getMovies(newSearch)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies(search)
  }

  return (
    <>
      <header className='search'>
        <h1>Search for a movie</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} type='search' name='search_field' placeholder='Avatar, Gran torino...' />
          <input type='submit' value='Search' disabled={formError} />
        </form>
        {formError && <small style={{ color: 'red' }}>{formError}</small>}
      </header>
      <main>
        {
          loading
            ? <p style={{ textAlign: 'center' }}>loading...</p>
            : <Movies movies={movies} />
        }
        {error && <p style={{ color: 'red' }}> {error} </p>}
      </main>
    </>
  )
}
export default App

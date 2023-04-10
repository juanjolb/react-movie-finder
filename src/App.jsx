import Movies from './components/Movies'
import useMovies from './hooks/useMovies'
import { useState } from 'react'

import './App.css'

function App () {
  const [search, setSearch] = useState('')
  const { movies, getMovies, loading, error } = useMovies(search)

  const handleChange = (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)
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
          <input type='submit' value='Search' />
        </form>
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

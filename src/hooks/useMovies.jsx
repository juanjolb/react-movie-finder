import { useState } from 'react'
import { fetchMovies } from '../services/fetchMovies'

const useMovies = (search) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getMovies = async () => {
    try {
      setLoading(true)
      setError(null)
      await fetchMovies(search).then(movies => setMovies(movies))
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }
  return { loading, movies, getMovies, error }
}

export default useMovies

import { useRef, useState } from 'react'
import { fetchMovies } from '../services/fetchMovies'

const useMovies = (search) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = async () => {
    if (previousSearch.current === search) return

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await fetchMovies(search)
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }
  return { loading, movies, getMovies, error }
}

export default useMovies

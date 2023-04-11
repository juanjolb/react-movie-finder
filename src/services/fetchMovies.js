const API_KEY = '4287ad07'
const FILM_SEARCH_URL = `https://omdbapi.com/?apikey=${API_KEY}&s=`

export const fetchMovies = async (search) => {
  try {
    const response = await fetch(`${FILM_SEARCH_URL}${search}`)
    const json = await response.json()
    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster
    }))
  } catch (e) {
    throw new Error(`Error searching movies, details: ${e}`)
  }
}

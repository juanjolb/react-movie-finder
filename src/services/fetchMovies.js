const API_KEY = '4287ad07'
const FILM_SEARCH_URL = `https://omdbapi.com/?apikey=${API_KEY}&s=`

export const fetchMovies = async (search) => {
  try {
    return fetch(`${FILM_SEARCH_URL}${search}`)
      .then(res => res.json())
      .then(data => data.Search)
  } catch (e) {
    throw new Error(`Error searching movies, details: ${e}`)
  }
}

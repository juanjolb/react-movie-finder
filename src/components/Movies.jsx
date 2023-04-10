function Movies ({ movies }) {
  return movies ? hasMovies(movies) : hasMovies()
}
export default Movies

export const hasMovies = (movies) => {
  console.log('render')
  return (
    <section className='movies-list'>
      {!movies && <p style={{ textAlign: 'center' }}>No movies found with that title.</p>}
      {
        movies && movies.map(({ Title, Year, Poster }) =>
          (
            <div className='movie-item' key={Poster}>
              <h3>{Title}</h3>
              <p>{Year}</p>
              <img src={Poster} alt={Title} />
            </div>
          )
        )
        }
    </section>
  )
}

export const hasNoMovies = () => <h1>There are no movies for this title</h1>

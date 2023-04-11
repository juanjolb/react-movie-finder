function Movies ({ movies }) {
  return movies ? hasMovies(movies) : hasMovies()
}
export default Movies

export const hasMovies = (movies) => {
  return (
    <section className='movies-list'>
      {!movies && <p style={{ textAlign: 'center' }}>No movies found with that title.</p>}
      {
        movies && movies.map(({ id, title, year, image }) =>
          (
            <div className='movie-item' key={id}>
              <h3>{title}</h3>
              <p>{year}</p>
              <img src={image} alt={title} />
            </div>
          )
        )
        }
    </section>
  )
}

export const hasNoMovies = () => <h1>There are no movies for this title</h1>

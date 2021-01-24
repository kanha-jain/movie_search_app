export const CardList = ({movies}) => {
    const posterPrefix = "https://www.themoviedb.org/t/p/original";

    return <div className="card-list">
        {
            movies
                .filter(movie => movie.poster_path)
                .map((movie) => {
                    return <div className="card" key={movie.id}>
                        <img src={`${posterPrefix}${movie.poster_path}`} alt={`${movie.title} poster`} className="card--image"/>
                        <div className="card--content">
                            <h3 className="card--title">{movie.title}</h3>
                            <p><small>RELEASE DATE: {movie.release_date}</small></p>
                            <p><small>RATING: {movie.vote_average}</small></p>
                            <p className="card--desc">{movie.overview}</p>
                        </div>
                    </div>
                })
        }
    </div>
}
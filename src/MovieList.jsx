import MovieCard from './MovieCard.jsx'

const MovieList = ({ busquedas, onSelect }) => {

    if (!busquedas) return null
    if (busquedas.length === 0) return <p>No se encontraron resultados.</p>

    return (
        <ul className="movie-list">
            {busquedas.map((busqueda) => (
                <MovieCard
                    key={busqueda.imdbID}
                    pelicula={busqueda}
                    onClick={() => onSelect(busqueda.imdbID)}
                />
            ))}
        </ul>
    )
}

export default MovieList
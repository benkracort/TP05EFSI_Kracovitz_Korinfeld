const MovieCard = ({ pelicula, onClick }) => {
    return (
        <li onClick={onClick} className="movie-card">
            <img
                src={pelicula.Poster !== 'N/A' ? pelicula.Poster : '/placeholder.jpg'}
                alt={pelicula.Title ?? 'Sin título'}
            />
            <h3>{pelicula.Title ?? 'Sin título'}</h3>
            <p>{pelicula.Year ?? 'Año desconocido'}</p>
            <p>{pelicula.Type ?? 'Tipo desconocido'}</p>
        </li>
    )
}

export default MovieCard
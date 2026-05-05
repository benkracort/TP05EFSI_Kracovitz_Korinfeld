const MovieCard = ({ pelicula, onClick }) => {
    return (
        <li onClick={onClick} style={{ cursor: 'pointer' }}>
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
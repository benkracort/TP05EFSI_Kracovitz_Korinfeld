const MovieCard = () => {

    return (
        <li onClick={onClick} style={{ cursor: 'pointer' }}>
            <img
                src={pelicula.primaryImage?.url ?? '/placeholder.jpg'}
                alt={pelicula.primaryTitle ?? 'Sin título'}
            />
            <h3>{pelicula.primaryTitle ?? 'Sin título'}</h3>
            <p>{pelicula.startYear ?? 'Año desconocido'}</p>
            <p>{pelicula.titleType ?? 'Tipo desconocido'}</p>
        </li>
    )
}

export default MovieCard
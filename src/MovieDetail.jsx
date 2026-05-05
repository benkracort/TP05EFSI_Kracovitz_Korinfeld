import { useEffect, useState } from 'react'
import api from './api.jsx'
import Loader from './Loader.jsx'
import ErrorMessage from './ErrorMessage.jsx'

const MovieDetail = ({ imdbID }) => {
    const [pelicula, setPelicula] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!imdbID) return

        setLoading(true)
        setError(null)

        api.get('/', { params: { i: imdbID } })
            .then((response) => {
                setPelicula(response.data)
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error al buscar por ID', error)
                setError('Ocurrió un error al buscar.')
                setLoading(false)
            })
    }, [imdbID])

    if (loading) return <Loader />
    if (error) return <ErrorMessage mensaje={error} />
    if (!pelicula) return null

    return (
        <div>
            <img src={pelicula.Poster !== 'N/A' ? pelicula.Poster : '/placeholder.jpg'} alt={pelicula.Title} />
            <h1>{pelicula.Title ?? 'Sin título'}</h1>
            <p>Año: {pelicula.Year ?? 'N/A'}</p>
            <p>Género: {pelicula.Genre ?? 'N/A'}</p>
            <p>Director: {pelicula.Director ?? 'N/A'}</p>
            <p>Actores: {pelicula.Actors ?? 'N/A'}</p>
            <p>Sinopsis: {pelicula.Plot ?? 'N/A'}</p>
            <p>Duración: {pelicula.Runtime ?? 'N/A'}</p>
            <p>Idioma: {pelicula.Language ?? 'N/A'}</p>
            <p>País: {pelicula.Country ?? 'N/A'}</p>
            {pelicula.imdbRating !== 'N/A' && <p>⭐ IMDb: {pelicula.imdbRating}/10</p>}
        </div>
    )
}

export default MovieDetail
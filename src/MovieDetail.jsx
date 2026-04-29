import { useEffect, useState } from 'react'
import api from './api.jsx'

const MovieDetail = ({ id }) => {  
    const [pelicula, setPelicula] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!id) return

        setLoading(true)
        setError(null)

        api.get(`/titles/${id}`)
            .then((response) => {
                console.log(response.data)
                setPelicula(response.data)
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error al buscar por ID', error)
                setError('Ocurrió un error al buscar por ID.')
                setLoading(false)
            })
    }, [id])

    if (loading) return <p>Cargando...</p>
    if (error) return <p>ERROR - {error}</p>
    if (!pelicula) return null

    return (
        <div>
            <img src={pelicula.primaryImage?.url ?? '/placeholder.jpg'} alt={pelicula.primaryTitle} />
            <h1>{pelicula.primaryTitle ?? 'Sin título'}</h1>
            <p>Año: {pelicula.startYear ?? 'Año desconocido'}</p>
            <p>Tipo: {pelicula.titleType ?? 'Tipo desconocido'}</p>

            {pelicula.genres?.length > 0 && (
                <p>Generos: {pelicula.genres.join(', ')}</p>
            )}
            {pelicula.plot && (
                <p>Plot: {pelicula.plot}</p>
            )}
            {pelicula.runtimeMinutes && (
                <p>Duracion: {pelicula.runtimeMinutes} min</p>
            )}
            {pelicula.language && (
                <p>Lenguaje: {pelicula.language}</p>
            )}
            {pelicula.countriesOfOrigin?.length > 0 && (
                <p>Pais de origen: {pelicula.countriesOfOrigin.join(', ')}</p>
            )}
            {pelicula.rating?.aggregateRating && (
                <p>Rating en IMDb: {pelicula.rating.aggregateRating}/10</p>
            )}
            {pelicula.directors?.length > 0 && (
                <p>Director: {pelicula.directors.join(', ')}</p>
            )}
            {pelicula.cast?.length > 0 && (
                <p>Actores: {pelicula.cast.join(', ')}</p>
            )}
        </div>
    );
}

export default MovieDetail
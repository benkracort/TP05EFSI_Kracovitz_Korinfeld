import { useEffect, useState } from 'react'
import api from './api.jsx'
import MovieList from './MovieList.jsx'
import MovieDetail from './MovieDetail.jsx'
import Loader from './Loader.jsx'
import ErrorMessage from './ErrorMessage.jsx'

const SearchBar = () => {
    const [query, setQuery] = useState('')
    const [submit, setSubmit] = useState('')
    const [busquedas, setBusqueda] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [selectedMovie, setSelectedMovie] = useState(null)

    useEffect(() => {
        if (!submit.trim()) return

        setLoading(true)
        setError(null)

        api.get('/', { params: { s: submit } })
            .then((response) => {
                if (response.data.Response === 'False') {
                    setBusqueda([])
                } else {
                    setBusqueda(response.data.Search)
                }
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error al cargar la busqueda', error)
                setError('Ocurrió un error al buscar.')
                setLoading(false)
            })
    }, [submit])

    const handleSubmit = () => setSubmit(query)
    const handleKeyDown = (e) => { if (e.key === 'Enter') handleSubmit() }

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Buscar película o serie..."
            />
            <button onClick={handleSubmit}>Buscar</button>

            {loading && <Loader />}
            {error && <ErrorMessage mensaje={error} />}

            <MovieList busquedas={busquedas} onSelect={setSelectedMovie} />
            {selectedMovie && <MovieDetail imdbID={selectedMovie} />}
        </div>
    )
}

export default SearchBar
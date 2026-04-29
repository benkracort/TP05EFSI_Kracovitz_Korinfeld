import { useEffect, useState } from 'react'
import api from './api.jsx'

const SearchBar = () => {
    const [query, setQuery] = useState('')
    const [busquedas, setBusqueda] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!query.trim()) return

        setLoading(true)
        setError(null)

        api.get('/search/titles', {
            params: { query }
        })
            .then((response) => {
                setBusqueda(response.data.results ?? response.data)
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error al cargar la busqueda', error)
                setError('Ocurrió un error al buscar.')
                setLoading(false)
            })
    }, [query])

    if (loading) return <p>Cargando...</p>
    if (error) return <p>{error}</p>

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar película o serie..."
            />
            <h2>Resultados de '{query}'</h2>

            {busquedas && busquedas.length === 0 && <p>No se encontraron resultados.</p>}

            <ul>
                {busquedas && busquedas.map((busqueda) => (
                    <li key={busqueda.imdbID}>
                        <img
                            src={busqueda.Poster !== 'N/A'}
                            alt={busqueda.Title}
                        />
                        <h3>{busqueda.Title ?? 'Sin título'}</h3>
                        <p>{busqueda.Year ?? 'Año desconocido'}</p>
                        <p>{busqueda.Type ?? 'Tipo desconocido'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchBar
import React, { useEffect, useState } from 'react';
import api from './api.jsx'

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [busqueda, setBusqueda] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!query.trim()) return;

        setLoading(true)

        api.get('/search/titles', {
            params: { query }
        })
            .then((response) => {
                setBusqueda(response.data.results ?? response.data)
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error al cargar la busqueda', error);
                setLoading(false)
            })
    }, [])

    if (loading) return <p>Cargando...</p>

    return (
        <div>
            <input type="text"  value={query}/>
            <h2>Resultados de '{query}'</h2>
            <ul>
                {
                    busqueda.map((users)
                    )
                }
            </ul>
        </div>
    )
}

export default SearchBar;
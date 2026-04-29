import { useEffect, useState } from 'react'
import api from './api.jsx'

const Loader = () => {

    if (loading) return <p>Cargando...</p>
    if (error) return <p>{error}</p>

    return (
        <div>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar película o serie..."/>

            {busquedas && busquedas.length === 0 && <p>No se encontraron resultados.</p>}

            <ul>
                {busquedas && busquedas.map((busqueda) => (
                    <MovieCard
                        key={busqueda.id}
                        pelicula={busqueda}
                        onClick={() => setSelectedID(busqueda.id)}
                    />
                ))}
            </ul>

            {selectedID && <MovieDetail id={selectedID} />}
        </div>
    )
}

export default Loader
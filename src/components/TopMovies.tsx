import React, { useEffect, useState } from 'react';
import { fetchTopMovies } from '../api';

export type Movie = {
    id: number
    title: string
    poster_path: string
    vote_average: number
}

export const TopMovies: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const getMovies = async () => {
            const data = await fetchTopMovies()
            setMovies(data)
        }
        getMovies()
    }, [])

    return (
        <div style={{ display: 'flex', gap: '20px', overflowX: 'auto' }}>
            {movies.map((movie) => (
                <div
                    key={movie.id}
                    style={{
                        width: '200px',
                        textAlign: 'center',
                        border: '1px solid #ddd',
                        borderRadius: '10px',
                        padding: '10px',
                    }}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        style={{ width: '100%', borderRadius: '10px' }}
                    />
                    <h3 style={{ fontSize: '1rem', margin: '10px 0' }}>{movie.title}</h3>
                    <p>⭐ {movie.vote_average}</p>
                </div>
            ))}
        </div>
    )
}
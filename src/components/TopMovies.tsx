import React, { useEffect, useState } from 'react';
import { fetchTopMovies } from '../api';
import type { Movie } from './MovieCard';
import MovieCard from './MovieCard';


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
                <MovieCard 
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                    vote_average={movie.vote_average}
                />
            ))}
        </div>
    )
}
import { useEffect, useState } from 'react';
import { fetchTopMovies } from '../../api';
import type { Movie } from '../../components';
import {MovieCard, Div} from '../../components';

export default function TopMovies() {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const getMovies = async () => {
            const data = await fetchTopMovies()
            setMovies(data)
        }
        getMovies()
    }, [])

    return (
        <div className="flex flex-col items-center justify-center">
            {movies.map((movie) => (
                <MovieCard 
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                    vote_average={movie.vote_average}
                    overview={movie.overview}
                />
            ))}
        </div>
    )
}
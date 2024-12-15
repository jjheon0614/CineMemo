import type { FC } from "react"
import { Div } from "./Div"

export type Movie = {
    id: number
    title: string
    poster_path: string
    vote_average: number
    overview: string
}

export const MovieCard: FC<Movie> = ({title, poster_path, vote_average, overview}) => {
    return (
        <Div className="flex m-2 rounded-xl p-2 border" minWidth="30rem" maxWidth="30rem" minHeight="30rem" maxHeight="30rem" height="30rem">
            <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                style={{
                    width: '70%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '10px'
                }}
            />
            <Div className="p-2">
                <h2 className="mt-2 mb-2">{title}</h2>
                <p>rate: {vote_average}</p>
                <h2 className="mt-6 mb-2">Summary</h2>
                <Div className="line-clamp-4">{overview}</Div>
            </Div>
        </Div>
    )
}
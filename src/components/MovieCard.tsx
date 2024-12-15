import type { FC } from "react"
import { Div } from "./Div"

export type Movie = {
    id: number
    title: string
    poster_path: string
    vote_average: number
}

const MovieCard: FC<Movie> = ({title, poster_path, vote_average}) => {
    return (
        <Div className="m-2 rounded-xl p-2 border" width="15rem">
            <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                style={{ width: '100%', borderRadius: '10px' }}
            />
            <h3 className="mt-2 mb-2">{title}</h3>
            <p>rate: {vote_average}</p>
        </Div>
    )
}

export default MovieCard
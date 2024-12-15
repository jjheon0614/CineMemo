import { Div } from "../../components"
import TopMovies from "./TopMovies"

export default function LandingPage() {
    return (
        <section className="mt-4">
            <Div className="text-xl">
                <TopMovies />
            </Div>
        </section>
    )
}
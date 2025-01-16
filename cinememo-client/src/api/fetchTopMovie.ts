import axios from 'axios';

// access token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGQ3ODBkNTZlOGQ4ODgwMTFlNjNmMWM5MDU5MjQ3OSIsIm5iZiI6MTczNDI4NjI1Ny41NjQsInN1YiI6IjY3NWYxYmIxYThkMGViNTYwZmFhNWJiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T6-Vmj1ka55-IP6NxlGpXdXgP4WyAKbMAxcS06EToWI
// api key: 3dd780d56e8d888011e63f1c90592479

const API_KEY = '3dd780d56e8d888011e63f1c90592479';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTopMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
                page: 1,
            },
        });
        return response.data.results; // return popular movie list
    } catch (error) {
        console.error('Error fetching top movies:', error);
        return [];
    }
};
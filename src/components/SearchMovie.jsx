import { useState } from 'react';
import { CardList } from './CardList.jsx';
import { API_KEY } from '../../config';

export const SearchMovie = () => {

    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting");
        
        if (!query) return;

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setMovies(data.results);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
        <form className="form" onSubmit={searchMovies}>
            <label htmlFor="query" className="label">Movie Name</label>
            <input 
                type="text" 
                name="query" 
                id="query" 
                className="input" 
                placeholder="i.e. Jurassic Park"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                />
            <button className="button" type="submit">Search</button>
        </form>

        <CardList movies={movies} />
        </>
    )
}

import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieList from "./views/MovieList";


const API_URL = 'http://www.omdbapi.com?apikey=722dcfdb';

const movie1 = {
  "Title": "Superman",
  "Year": "1978",
  "imdbID": "tt0078346",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
}


const App = () => {

  const [movies, setMovies] = useState([]);

  const [searchTerm, setsearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);

  }

  useEffect(() => {
    searchMovies("Superman");
  }, [])

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}></input>
        <img src={SearchIcon} alt="search"
          onClick={() => searchMovies(searchTerm)}></img>
      </div>
      <MovieList movies={movies} />

    </div>
  );
}

export default App;

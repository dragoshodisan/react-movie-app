import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./MovieDetails.css";

const API_URL = 'http://www.omdbapi.com?apikey=722dcfdb';

export default function MovieDetails() {
    let { movieId } = useParams();

    const [movie, setMovie] = useState([]);

    const searchMovie = async (id) => {
        const response = await fetch(`${API_URL}&i=${id}`);
        const data = await response.json();

        setMovie(data.Search);
        console.log(movie);

    }

    useEffect(() => {
        searchMovie(movieId);
    }, []);

    return (movie && <div className="card">
        <div className="card__inner">
            <header className="card__header">
                <nav className="card__nav">
                    <ul className="list list--nav">
                        <li><a href="#">Movie</a></li>
                        <li><a href="#">Trivia</a></li>
                        <li><a href="#">Reviews</a></li>
                    </ul>
                </nav>
            </header>

            <main className="card__body">

                <div className="card__info">
                    <h1 className="card__title">{movie.Title}</h1>

                    <p className="card__slug">Political interference in the Avengers' activities causes a rift between former allies Captain America and Iron Man.</p>

                    <button className="card__btn" value="Watch trailer">Watch trailer</button>

                    <div className="card__rating">
                        8.2
                    </div>
                </div>
            </main>

            <footer className="card__footer">
                <ul className="list list--info">
                    <li>2016</li>
                    <li>122 min</li>
                    <li>Action | Sci-Fi</li>
                </ul>
            </footer>
        </div>
    </div>
    )
}

import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "../views/MovieDetailsPage.css";

const API_URL = 'http://www.omdbapi.com?apikey=722dcfdb';

export default function MovieDetails() {
    let { movieId } = useParams();

    const [movie, setMovie] = useState([]);

    const searchMovie = async (id) => {
        const response = await fetch(`${API_URL}&i=${id}`);
        const data = await response.json();

        setMovie(data);
    }

    useEffect(() => {
        searchMovie(movieId);
    }, []);

    const styles = {
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(" + movie.Poster + ")",
    }

    return (movie && <div className="card" style={styles}>
        <div className="card__inner">
            {/* <header className="card__header">
                <nav className="card__nav">
                    <ul className="list list--nav">
                        <li><a href="#">Movie</a></li>
                        <li><a href="#">Trivia</a></li>
                        <li><a href="#">Reviews</a></li>
                    </ul>
                </nav>
            </header> */}

            <main className="card__body">

                <div className="card__info">
                    <h1 className="card__title">{movie.Title}</h1>


                    <p className="card__slug">{movie.Plot}</p>

                    {/* <button className="card__btn" value="Watch trailer">Watch trailer</button> */}
                    <div className="card__boxoffice">
                        <h4>{movie.BoxOffice}</h4>

                        <div className="card__rating">
                            {movie.imdbRating}

                        </div>
                    </div>
                </div>
            </main>

            <footer className="card__footer">
                <ul className="list list--info">
                    <li>{movie.Year}</li>
                    <li>{movie.Runtime}</li>
                    <li>{movie.Rated}</li>
                </ul>
            </footer>
        </div>
    </div>
    )
}



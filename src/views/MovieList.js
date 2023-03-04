import "./../App.css";
import MovieCard from "./../MovieCard";

const MovieList = ({ movies }) => {

    return (
        <section className="movie-list">

            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (<MovieCard movie={movie} key={movie.Title} />))}
                        </div>
                    ) :
                    (
                        <div className="empty"><h2>No movies found</h2></div>
                    )
            }


        </section>
    );
}

export default MovieList;

import {
    createBrowserRouter,
} from "react-router-dom";
import MoviesPage from "./views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MoviesPage />
    },
    {
        path: "/movies/:movieId",
        element: <MovieDetailsPage />
    },
]);

export default router;
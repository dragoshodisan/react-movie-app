import {
    createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import MovieDetails from "./views/MovieDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/movies/:movieId",
        element: <MovieDetails />
    },
]);

export default router;
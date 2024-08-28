import { TMDBGenresMovieList } from "./movieList"
import { TMDBGenresTvList } from "./tvList"

const TMDBGenres = {
	/**
	 * Get the list of official genres for movies.
	 *
	 * @link https://developer.themoviedb.org/reference/genre-movie-list
	 */
	movieList: TMDBGenresMovieList,
	/**
	 * Get the list of official genres for TV shows.
	 *
	 * @link https://developer.themoviedb.org/reference/genre-tv-list
	 */
	tvList: TMDBGenresTvList,
}

export default TMDBGenres

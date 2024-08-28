import { TMDBMovieListsNowPlaying } from "./nowPlaying"
import { TMDBMovieListsPopular } from "./popular"
import { TMDBMovieListsTopRated } from "./topRated"
import { TMDBMovieListsUpcoming } from "./upcoming"

const TMDBMovieLists = {
	/**
	 * Get a list of movies that are currently in theatres.
	 *
	 * This call is really just a discover call behind the scenes. If you would like to tweak any of the default filters head over and read about [discover](https://developer.themoviedb.org/reference/discover-movie).
	 *
	 * @link https://developer.themoviedb.org/reference/movie-now-playing-list
	 */
	nowPlaying: TMDBMovieListsNowPlaying,
	/**
	 * Get a list of movies ordered by popularity.
	 *
	 * This call is really just a discover call behind the scenes. If you would like to tweak any of the default filters head over and read about [discover](https://developer.themoviedb.org/reference/discover-movie).
	 *
	 * @link https://developer.themoviedb.org/reference/movie-popular-list
	 */
	popular: TMDBMovieListsPopular,
	/**
	 * Get a list of movies ordered by rating.
	 *
	 * This call is really just a discover call behind the scenes. If you would like to tweak any of the default filters head over and read about [discover](https://developer.themoviedb.org/reference/discover-movie).
	 *
	 * @link https://developer.themoviedb.org/reference/movie-top-rated-list
	 */
	topRated: TMDBMovieListsTopRated,
	/**
	 * Get a list of movies that are being released soon.
	 *
	 * This call is really just a discover call behind the scenes. If you would like to tweak any of the default filters head over and read about [discover](https://developer.themoviedb.org/reference/discover-movie).
	 *
	 * @link https://developer.themoviedb.org/reference/movie-upcoming-list
	 */
	upcoming: TMDBMovieListsUpcoming,
}

export default TMDBMovieLists

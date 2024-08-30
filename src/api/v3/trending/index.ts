import { TMDBTrendingAll } from "./all"
import { TMDBTrendingMovies } from "./movies"
import { TMDBTrendingPeople } from "./people"
import { TMDBTrendingTv } from "./tv"

const TMDBTrending = {
	/**
	 * Get the trending movies, TV shows and people.
	 *
	 * This call is similar to how the multi search works in the sense that we return multiple media types (movies, TV shows and people) in a single call to get the most trending data on the entirety of TMDB.
	 *
	 * If you would like to only get the trending data by a specific media type, use one of the specific methods:
	 *  1. [Trending movies](https://developer.themoviedb.org/reference/trending-movies)
	 *  2. [Trending TV shows](https://developer.themoviedb.org/reference/trending-tv)
	 *  3. [Trending people](https://developer.themoviedb.org/reference/trending-people)
	 *
	 * @type https://developer.themoviedb.org/reference/trending-all
	 */
	all: TMDBTrendingAll,
	/**
	 * Get the trending movies on TMDB.
	 *
	 * @link https://developer.themoviedb.org/reference/trending-movies
	 */
	movies: TMDBTrendingMovies,
	/**
	 * Get the trending people on TMDB.
	 *
	 * @link https://developer.themoviedb.org/reference/trending-people
	 */
	people: TMDBTrendingPeople,
	/**
	 * Get the trending TV shows on TMDB.
	 *
	 * @link https://developer.themoviedb.org/reference/trending-tv
	 */
	tv: TMDBTrendingTv,
}

export default TMDBTrending

import { TMDBGuestSessionsRatedMovies } from "./ratedMovies"
import { TMDBGuestSessionsRatedTv } from "./ratedTv"
import { TMDBGuestSessionsRatedTvEpisodes } from "./ratedTvEpisodes"

const TMDBGuestSessions = {
	/**
	 * Get the rated movies for a guest session.
	 *
	 * @link https://developer.themoviedb.org/reference/guest-session-rated-movies
	 */
	ratedMovies: TMDBGuestSessionsRatedMovies,
	/**
	 * Get the rated TV shows for a guest session.
	 *
	 * @link https://developer.themoviedb.org/reference/guest-session-rated-tv
	 */
	ratedTv: TMDBGuestSessionsRatedTv,
	/**
	 * Get the rated TV episodes for a guest session.
	 *
	 * @link https://developer.themoviedb.org/reference/guest-session-rated-tv-episodes
	 */
	ratedTvEpisodes: TMDBGuestSessionsRatedTvEpisodes,
}

export default TMDBGuestSessions

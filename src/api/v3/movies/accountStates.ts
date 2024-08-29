import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/movie-account-states
 */
export interface TMDBMovieAccountStatesRequest {
	/**
	 * @type int32
	 */
	movie_id: number
	session_id?: string
	guest_session_id?: string
}

type PathParams = {
	movie_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBMovieAccountStatesRequest,
		keyof PathParams
	>]: TMDBMovieAccountStatesRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/movie-account-states
 */
export interface TMDBMovieAccountStatesResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	/**
	 * @default true
	 */
	favorite: boolean
	rated: {
		/**
		 * @type int
		 * @default 0
		 */
		value: number
	}
	/**
	 * @default true
	 */
	watchlist: boolean
}

/**
 * Get the rating, watchlist and favorite status of an account.
 *
 * @link https://developer.themoviedb.org/reference/movie-account-states
 */
export function TMDBMovieAccountStates(
	request: TMDBMovieAccountStatesRequest,
	fetcher: Fetcher,
): Promise<TMDBMovieAccountStatesResponse>
/**
 * Get the rating, watchlist and favorite status of an account.
 *
 * @link https://developer.themoviedb.org/reference/movie-account-states
 */
export function TMDBMovieAccountStates(
	request: TMDBMovieAccountStatesRequest,
	readAccessToken: string,
): Promise<TMDBMovieAccountStatesResponse>

/**
 * Get the rating, watchlist and favorite status of an account.
 *
 * @link https://developer.themoviedb.org/reference/movie-account-states
 */
export default function TMDBMovieAccountStates(
	request: TMDBMovieAccountStatesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBMovieAccountStatesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.MOVIE,
		"{movie_id}/account_states",
		{
			path: {
				movie_id: request.movie_id,
			},
			query: {
				session_id: request.session_id,
				guest_session_id: request.session_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBMovieAccountStatesResponse>(url)
	}
}

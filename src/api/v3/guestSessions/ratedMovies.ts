import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/guest-session-rated-movies
 */
interface TMDBGuestSessionsRatedMoviesRequest {
	guest_session_id: string
	/**
	 * @default "en-US"
	 */
	language?: string
	/**
	 * @type int32
	 * @default 1
	 */
	page?: number
	/**
	 * @default "created_at.asc"
	 */
	sort_by?: "created_at.asc" | "created_at.desc"
}

type PathParams = {
	guest_session_id: string
}

type QueryParams = {
	language?: string
	page?: number
	sort_by?: "created_at.asc" | "created_at.desc"
}

/**
 * @link https://developer.themoviedb.org/reference/guest-session-rated-movies
 */
interface TMDBGuestSessionsRatedMoviesResponse {
	/**
	 * @type int
	 */
	page: number
	results: {
		/**
		 * @default true
		 */
		adult: boolean
		backdrop_path: string
		/**
		 * @type int[]
		 */
		genre_ids: number[]
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		original_language: string
		original_title: string
		overview: string
		/**
		 * @type number
		 * @default 0
		 */
		popularity: number
		poster_path: string
		release_date: string
		title: string
		/**
		 * @default true
		 */
		video: boolean
		/**
		 * @type number
		 * @default 0
		 */
		vote_average: number
		/**
		 * @type int
		 * @default 0
		 */
		vote_count: number
		/**
		 * @type number
		 * @default 0
		 */
		rating: number
	}[]
	/**
	 * @type int
	 * @default 0
	 */
	total_pages: number
	/**
	 * @type int
	 * @default 0
	 */
	total_results: number
}

/**
 * Get the rated movies for a guest session.
 *
 * @link https://developer.themoviedb.org/reference/guest-session-rated-movies
 */
export function TMDBGuestSessionsRatedMovies(
	request: TMDBGuestSessionsRatedMoviesRequest,
	fetcher: Fetcher,
): Promise<TMDBGuestSessionsRatedMoviesResponse>
/**
 * Get the rated movies for a guest session.
 *
 * @link https://developer.themoviedb.org/reference/guest-session-rated-movies
 */
export function TMDBGuestSessionsRatedMovies(
	request: TMDBGuestSessionsRatedMoviesRequest,
	readAccessToken: string,
): Promise<TMDBGuestSessionsRatedMoviesResponse>

/**
 * Get the rated movies for a guest session.
 *
 * @link https://developer.themoviedb.org/reference/guest-session-rated-movies
 */
export default function TMDBGuestSessionsRatedMovies(
	request: TMDBGuestSessionsRatedMoviesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBGuestSessionsRatedMoviesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.GUEST_SESSION,
		"{guest_session_id}/rated/movies",
		{
			path: {
				guest_session_id: request.guest_session_id,
			},
			query: {
				language: request.language,
				page: request.page,
				sort_by: request.sort_by,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBGuestSessionsRatedMoviesResponse>(url)
	}
}

import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/account-get-favorites
 */
export interface TMDBAccountFavoriteMoviesRequest {
	/**
	 * @type int32
	 */
	account_id: number
	/**
	 * @default "en-US"
	 */
	language?: string
	/**
	 * @type int32
	 * @default 1
	 */
	page?: number
	session_id?: string
	/**
	 * @default "created_at.asc"
	 */
	sort_by?: "created_at.asc" | "created_at.desc"
}

type PathParams = {
	account_id: number
}

type QueryParams = {
	language?: string
	page?: number
	session_id?: string
	sort_by?: "created_at.asc" | "created_at.desc"
}

/**
 * @link https://developer.themoviedb.org/reference/account-get-favorites
 */
export interface TMDBAccountFavoriteMoviesResponse {
	/**
	 * @type int
	 * @default 0
	 */
	page: number
	results: {
		/**
		 * @default true
		 */
		adult: boolean
		backdrop_path: string
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
 * @link https://developer.themoviedb.org/reference/account-get-favorites
 */
export function TMDBAccountFavoriteMovies(
	request: TMDBAccountFavoriteMoviesRequest,
	fetcher: Fetcher,
): Promise<TMDBAccountFavoriteMoviesResponse>
/**
 * @link https://developer.themoviedb.org/reference/account-get-favorites
 */
export function TMDBAccountFavoriteMovies(
	request: TMDBAccountFavoriteMoviesRequest,
	readAccessToken: string,
): Promise<TMDBAccountFavoriteMoviesResponse>

/**
 * @link https://developer.themoviedb.org/reference/account-get-favorites
 */
export default function TMDBAccountFavoriteMovies(
	request: TMDBAccountFavoriteMoviesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBAccountFavoriteMoviesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.ACCOUNT,
		"{account_id}/favorite/movies",
		{
			path: {
				account_id: request.account_id,
			},
			query: {
				language: request.language,
				page: request.page,
				session_id: request.session_id,
				sort_by: request.sort_by,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBAccountFavoriteMoviesResponse>(url)
	}
}

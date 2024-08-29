import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/account-watchlist-tv
 */
export interface TMDBAccountWatchlistTvRequest {
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
 * @link https://developer.themoviedb.org/reference/account-watchlist-tv
 */
export interface TMDBAccountWatchlistTvResponse {
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
		origin_country: string[]
		original_language: string
		original_name: string
		overview: string
		/**
		 * @type number
		 * @default 0
		 */
		popularity: number
		poster_path: string
		first_air_date: string
		name: string
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
 * @link https://developer.themoviedb.org/reference/account-watchlist-tv
 */
export function TMDBAccountWatchlistTv(
	request: TMDBAccountWatchlistTvRequest,
	fetcher: Fetcher,
): Promise<TMDBAccountWatchlistTvResponse>
/**
 * @link https://developer.themoviedb.org/reference/account-watchlist-tv
 */
export function TMDBAccountWatchlistTv(
	request: TMDBAccountWatchlistTvRequest,
	readAccessToken: string,
): Promise<TMDBAccountWatchlistTvResponse>

/**
 * @link https://developer.themoviedb.org/reference/account-watchlist-tv
 */
export default function TMDBAccountWatchlistTv(
	request: TMDBAccountWatchlistTvRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBAccountWatchlistTvResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.ACCOUNT,
		"{account_id}/watchlist/tv",
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
		return fetcherOrApi<TMDBAccountWatchlistTvResponse>(url)
	}
}

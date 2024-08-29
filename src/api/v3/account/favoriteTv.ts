import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/account-favorite-tv
 */
export interface TMDBAccountFavoriteTvRequest {
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
 * @link https://developer.themoviedb.org/reference/account-favorite-tv
 */
export interface TMDBAccountFavoriteTvResponse {
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
 * @link https://developer.themoviedb.org/reference/account-favorite-tv
 */
export function TMDBAccountFavoriteTv(
	request: TMDBAccountFavoriteTvRequest,
	fetcher: Fetcher,
): Promise<TMDBAccountFavoriteTvResponse>
/**
 * @link https://developer.themoviedb.org/reference/account-favorite-tv
 */
export function TMDBAccountFavoriteTv(
	request: TMDBAccountFavoriteTvRequest,
	readAccessToken: string,
): Promise<TMDBAccountFavoriteTvResponse>

/**
 * @link https://developer.themoviedb.org/reference/account-favorite-tv
 */
export default function TMDBAccountFavoriteTv(
	request: TMDBAccountFavoriteTvRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBAccountFavoriteTvResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.ACCOUNT,
		"{account_id}/favorite/tv",
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
		return fetcherOrApi<TMDBAccountFavoriteTvResponse>(url)
	}
}

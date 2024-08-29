import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/account-lists
 */
export interface TMDBAccountListsRequest {
	/**
	 * @type int32
	 */
	account_id: number
	session_id?: string
	/**
	 * @type int32
	 * @default 1
	 */
	page?: number
}

type PathParams = {
	account_id: number
}

type QueryParams = {
	session_id?: string
	page?: number
}

/**
 * @link https://developer.themoviedb.org/reference/account-lists
 */
export interface TMDBAccountListsResponse {
	/**
	 * @type int
	 * @default 0
	 */
	page: number
	results: {
		description: string
		/**
		 * @type int
		 * @default 0
		 */
		favorite_count: number
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		/**
		 * @type int
		 * @default 0
		 */
		item_count: number
		iso_639_1: string
		list_type: string
		name: string
		poster_path: string
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
 * @link https://developer.themoviedb.org/reference/account-lists
 */
export function TMDBAccountLists(
	request: TMDBAccountListsRequest,
	fetcher: Fetcher,
): Promise<TMDBAccountListsResponse>
/**
 * @link https://developer.themoviedb.org/reference/account-lists
 */
export function TMDBAccountLists(
	request: TMDBAccountListsRequest,
	readAccessToken: string,
): Promise<TMDBAccountListsResponse>

/**
 * @link https://developer.themoviedb.org/reference/account-lists
 */
export default function TMDBAccountLists(
	request: TMDBAccountListsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBAccountListsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.ACCOUNT,
		"{account_id}/lists",
		{
			path: {
				account_id: request.account_id,
			},
			query: {
				session_id: request.session_id,
				page: request.page,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBAccountListsResponse>(url)
	}
}

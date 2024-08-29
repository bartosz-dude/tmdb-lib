import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/list-check-item-status
 */
export interface TMDBListsCheckItemStatusRequest {
	/**
	 * @type int32
	 */
	list_id: number
	/**
	 * @default "en-US"
	 */
	language?: string
	/**
	 * @type int32
	 */
	movie_id?: number
}

type PathParams = {
	list_id: number
}

type QueryParams = {
	language?: string
	movie_id?: number
}

/**
 * @link https://developer.themoviedb.org/reference/list-check-item-status
 */
export interface TMDBListsCheckItemStatusResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	/**
	 * @default true
	 */
	item_present: boolean
}

/**
 * Use this method to check if an item has already been added to the list.
 *
 * @link https://developer.themoviedb.org/reference/list-check-item-status
 */
export function TMDBListsCheckItemStatus(
	request: TMDBListsCheckItemStatusRequest,
	fetcher: Fetcher,
): Promise<TMDBListsCheckItemStatusResponse>
/**
 * Use this method to check if an item has already been added to the list.
 *
 * @link https://developer.themoviedb.org/reference/list-check-item-status
 */
export function TMDBListsCheckItemStatus(
	request: TMDBListsCheckItemStatusRequest,
	readAccessToken: string,
): Promise<TMDBListsCheckItemStatusResponse>

/**
 * Use this method to check if an item has already been added to the list.
 *
 * @link https://developer.themoviedb.org/reference/list-check-item-status
 */
export default function TMDBListsCheckItemStatus(
	request: TMDBListsCheckItemStatusRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBListsCheckItemStatusResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.LIST,
		"{list_id}/item_status",
		{
			path: {
				list_id: request.list_id,
			},
			query: {
				language: request.language,
				movie_id: request.movie_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBListsCheckItemStatusResponse>(url)
	}
}

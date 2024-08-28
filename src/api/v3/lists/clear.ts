import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

/**
 * @link https://developer.themoviedb.org/reference/list-clear
 */
export interface TMDBListsClearRequest {
	/**
	 * @type int32
	 */
	list_id: number
	session_id: string
	confirm: boolean
}

type PathParams = {
	list_id: number
}

type QueryParams = {
	session_id: string
	confirm: boolean
}

/**
 * @link https://developer.themoviedb.org/reference/list-clear
 */
export interface TMDBListsClearResponse {
	/**
	 * @type int
	 * @default 0
	 */
	status_code: number
	status_message: string
}

/**
 * Clear all items from a list.
 *
 * @link https://developer.themoviedb.org/reference/list-clear
 */
export function TMDBListsClear(
	request: TMDBListsClearRequest,
	fetcher: Fetcher,
): Promise<TMDBListsClearResponse>
/**
 * Clear all items from a list.
 *
 * @link https://developer.themoviedb.org/reference/list-clear
 */
export function TMDBListsClear(
	request: TMDBListsClearRequest,
	readAccessToken: string,
): Promise<TMDBListsClearResponse>

/**
 * Clear all items from a list.
 *
 * @link https://developer.themoviedb.org/reference/list-clear
 */
export default function TMDBListsClear(
	request: TMDBListsClearRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBListsClearResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.LIST,
		"{list_id}/clear",
		{
			path: {
				list_id: request.list_id,
			},
			query: {
				session_id: request.session_id,
				confirm: request.confirm,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi, { method: "POST" })
	} else {
		return fetcherOrApi<TMDBListsClearResponse>(url, { method: "POST" })
	}
}

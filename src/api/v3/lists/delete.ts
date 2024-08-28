import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

/**
 * @link https://developer.themoviedb.org/reference/list-delete
 */
export interface TMDBListsDeleteRequest {
	/**
	 * @type int32
	 */
	list_id: number
	session_id: string
}

type PathParams = {
	list_id: number
}

type QueryParams = {
	session_id: string
}

/**
 * @link https://developer.themoviedb.org/reference/list-delete
 */
export interface TMDBListsDeleteResponse {
	/**
	 * @type int
	 * @default 0
	 */
	status_code: number
	status_message: string
}

/**
 * Delete a list.
 *
 * @link https://developer.themoviedb.org/reference/list-delete
 */
export function TMDBListsDelete(
	request: TMDBListsDeleteRequest,
	fetcher: Fetcher,
): Promise<TMDBListsDeleteResponse>
/**
 * Delete a list.
 *
 * @link https://developer.themoviedb.org/reference/list-delete
 */
export function TMDBListsDelete(
	request: TMDBListsDeleteRequest,
	readAccessToken: string,
): Promise<TMDBListsDeleteResponse>

/**
 * Delete a list.
 *
 * @link https://developer.themoviedb.org/reference/list-delete
 */
export default function TMDBListsDelete(
	request: TMDBListsDeleteRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBListsDeleteResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.LIST,
		"{list_id}",
		{
			path: {
				list_id: request.list_id,
			},
			query: {
				session_id: request.session_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi, { method: "DELETE" })
	} else {
		return fetcherOrApi<TMDBListsDeleteResponse>(url, { method: "DELETE" })
	}
}

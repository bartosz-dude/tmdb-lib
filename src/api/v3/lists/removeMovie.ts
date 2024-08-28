import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

/**
 * @link https://developer.themoviedb.org/reference/list-remove-movie
 */
export interface TMDBListsRemoveMovieRequest {
	/**
	 * @type int32
	 */
	list_id: number
	session_id: string
	raw_body: any
}

type PathParams = {
	list_id: number
}

type QueryParams = {
	session_id: string
}

/**
 * @link https://developer.themoviedb.org/reference/list-remove-movie
 */
export interface TMDBListsRemoveMovieResponse {
	/**
	 * @type int
	 * @default 0
	 */
	status_code: number
	status_message: string
}

/**
 * Remove a movie from a list.
 *
 * @link https://developer.themoviedb.org/reference/list-remove-movie
 */
export function TMDBListsRemoveMovie(
	request: TMDBListsRemoveMovieRequest,
	fetcher: Fetcher,
): Promise<TMDBListsRemoveMovieResponse>
/**
 * Remove a movie from a list.
 *
 * @link https://developer.themoviedb.org/reference/list-remove-movie
 */
export function TMDBListsRemoveMovie(
	request: TMDBListsRemoveMovieRequest,
	readAccessToken: string,
): Promise<TMDBListsRemoveMovieResponse>

/**
 * Remove a movie from a list.
 *
 * @link https://developer.themoviedb.org/reference/list-remove-movie
 */
export default function TMDBListsRemoveMovie(
	request: TMDBListsRemoveMovieRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBListsRemoveMovieResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.LIST,
		"{list_id}/remove_item",
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
		return TMDBFetcher(url, fetcherOrApi, {
			method: "POST",
			rawBody: request.raw_body,
		})
	} else {
		return fetcherOrApi<TMDBListsRemoveMovieResponse>(url, {
			method: "POST",
			rawBody: request.raw_body,
		})
	}
}

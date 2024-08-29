import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/list-add-movie
 */
export interface TMDBListsAddMovieRequest {
	/**
	 * @type int32
	 */
	list_id: number
	session_id: string
	raw_body?: any
}

type PathParams = {
	list_id: number
}

type QueryParams = {
	session_id: string
}

/**
 * @link https://developer.themoviedb.org/reference/list-add-movie
 */
export interface TMDBListsAddMovieResponse {
	/**
	 * @type int
	 * @default 0
	 */
	status_code: number
	status_message: string
}

/**
 * Add a movie to a list.
 *
 * @link https://developer.themoviedb.org/reference/list-add-movie
 */
export function TMDBListsAddMovie(
	request: TMDBListsAddMovieRequest,
	fetcher: Fetcher,
): Promise<TMDBListsAddMovieResponse>
/**
 * Add a movie to a list.
 *
 * @link https://developer.themoviedb.org/reference/list-add-movie
 */
export function TMDBListsAddMovie(
	request: TMDBListsAddMovieRequest,
	readAccessToken: string,
): Promise<TMDBListsAddMovieResponse>

/**
 * Add a movie to a list.
 *
 * @link https://developer.themoviedb.org/reference/list-add-movie
 */
export default function TMDBListsAddMovie(
	request: TMDBListsAddMovieRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBListsAddMovieResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.LIST,
		"{list_id}/add_item",
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
		return fetcherOrApi<TMDBListsAddMovieResponse>(url, {
			method: "POST",
			rawBody: request.raw_body,
		})
	}
}

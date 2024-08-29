import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/list-create
 */
export interface TMDBListsCreateRequest {
	session_id: string
	raw_body: any
}

type PathParams = null

type QueryParams = {
	session_id: string
}

/**
 * @link https://developer.themoviedb.org/reference/list-create
 */
export interface TMDBListsCreateResponse {
	status_message: string
	/**
	 * @default true
	 */
	success: boolean
	/**
	 * @type int
	 * @default 0
	 */
	status_code: number
	/**
	 * @type int
	 * @default 0
	 */
	list_id: number
}

/**
 * @link https://developer.themoviedb.org/reference/list-create
 */
export function TMDBListsCreate(
	request: TMDBListsCreateRequest,
	fetcher: Fetcher,
): Promise<TMDBListsCreateResponse>
/**
 * @link https://developer.themoviedb.org/reference/list-create
 */
export function TMDBListsCreate(
	request: TMDBListsCreateRequest,
	readAccessToken: string,
): Promise<TMDBListsCreateResponse>

/**
 * @link https://developer.themoviedb.org/reference/list-create
 */
export default function TMDBListsCreate(
	request: TMDBListsCreateRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBListsCreateResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.LIST, "", {
		query: {
			session_id: request.session_id,
		},
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi, {
			method: "POST",
			rawBody: request.raw_body,
		})
	} else {
		return fetcherOrApi<TMDBListsCreateResponse>(url, {
			method: "POST",
			rawBody: request.raw_body,
		})
	}
}

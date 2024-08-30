import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/search-company
 */
export interface TMDBSearchKeywordRequest {
	query: string
	/**
	 * @type int32
	 * @default 1
	 */
	page?: number
}

type PathParams = null

type QueryParams = {
	[key in keyof TMDBSearchKeywordRequest]: TMDBSearchKeywordRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/search-company
 */
export interface TMDBSearchKeywordResponse {
	/**
	 * @type int
	 * @default 0
	 */
	page: number
	results: {
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		name: string
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
 * Search for keywords by their name.
 *
 * @link https://developer.themoviedb.org/reference/search-company
 */
export function TMDBSearchKeyword(
	request: TMDBSearchKeywordRequest,
	fetcher: Fetcher,
): Promise<TMDBSearchKeywordResponse>
/**
 * Search for keywords by their name.
 *
 * @link https://developer.themoviedb.org/reference/search-company
 */
export function TMDBSearchKeyword(
	request: TMDBSearchKeywordRequest,
	readAccessToken: string,
): Promise<TMDBSearchKeywordResponse>

/**
 * Search for keywords by their name.
 *
 * @link https://developer.themoviedb.org/reference/search-company
 */
export default function TMDBSearchKeyword(
	request: TMDBSearchKeywordRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBSearchKeywordResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.SEARCH,
		"keyword",
		{
			query: request,
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBSearchKeywordResponse>(url)
	}
}

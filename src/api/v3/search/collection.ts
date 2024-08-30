import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/search-collection
 */
export interface TMDBSearchCollectionRequest {
	query: string
	/**
	 * @default false
	 */
	include_adult?: boolean
	/**
	 * @default "en-US"
	 */
	language?: string
	/**
	 * @type int32
	 * @default 1
	 */
	page?: number
	region?: string
}

type PathParams = null

type QueryParams = {
	[key in keyof TMDBSearchCollectionRequest]: TMDBSearchCollectionRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/search-collection
 */
export interface TMDBSearchCollectionResponse {
	/**
	 * @type int
	 * @default 0
	 */
	page: number
	results: {
		adult: boolean
		backdrop_path: string
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		name: string
		original_language: string
		original_name: string
		overview: string
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
 * Search for collections by their original, translated and alternative names.
 *
 * @link https://developer.themoviedb.org/reference/search-collection
 */
export function TMDBSearchCollection(
	request: TMDBSearchCollectionRequest,
	fetcher: Fetcher,
): Promise<TMDBSearchCollectionResponse>
/**
 * Search for collections by their original, translated and alternative names.
 *
 * @link https://developer.themoviedb.org/reference/search-collection
 */
export function TMDBSearchCollection(
	request: TMDBSearchCollectionRequest,
	readAccessToken: string,
): Promise<TMDBSearchCollectionResponse>

/**
 * Search for collections by their original, translated and alternative names.
 *
 * @link https://developer.themoviedb.org/reference/search-collection
 */
export default function TMDBSearchCollection(
	request: TMDBSearchCollectionRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBSearchCollectionResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.SEARCH,
		"collection",
		{
			query: request,
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBSearchCollectionResponse>(url)
	}
}

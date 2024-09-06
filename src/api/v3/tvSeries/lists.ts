import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/lists-copy
 */
export interface TMDBTvSeriesListsRequest {
	/**
	 * @type int32
	 */
	series_id: number
	/**
	 * @default "en-US"
	 */
	language?: string
	/**
	 * @type int32
	 * @default 1
	 */
	page?: number
}

type PathParams = {
	series_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBTvSeriesListsRequest,
		keyof PathParams
	>]: TMDBTvSeriesListsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/lists-copy
 */
export interface TMDBTvSeriesListsResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
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
		iso_1_639_1: string
		iso_3166_1: TMDB_ISO_3166_1
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
 * Get the lists that a TV series has been added to.
 *
 * @link https://developer.themoviedb.org/reference/lists-copy
 */
export function TMDBTvSeriesLists(
	request: TMDBTvSeriesListsRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeriesListsResponse>
/**
 * Get the lists that a TV series has been added to.
 *
 * @link https://developer.themoviedb.org/reference/lists-copy
 */
export function TMDBTvSeriesLists(
	request: TMDBTvSeriesListsRequest,
	readAccessToken: string,
): Promise<TMDBTvSeriesListsResponse>

/**
 * Get the lists that a TV series has been added to.
 *
 * @link https://developer.themoviedb.org/reference/lists-copy
 */
export default function TMDBTvSeriesLists(
	request: TMDBTvSeriesListsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeriesListsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/lists",
		{
			path: {
				series_id: request.series_id,
			},
			query: {
				language: request.language,
				page: request.page,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBTvSeriesListsResponse>(url)
	}
}

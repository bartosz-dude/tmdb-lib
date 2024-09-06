import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-series-keywords
 */
export interface TMDBTvSeriesKeywordsRequest {
	/**
	 * @type int32
	 */
	series_id: number
}

type PathParams = {
	series_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBTvSeriesKeywordsRequest,
		keyof PathParams
	>]: TMDBTvSeriesKeywordsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-series-keywords
 */
export interface TMDBTvSeriesKeywordsResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	results: {
		name: string
		/**
		 * @type int
		 * @default 0
		 */
		id: number
	}[]
}

/**
 * Get a list of keywords that have been added to a TV show.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-keywords
 */
export function TMDBTvSeriesKeywords(
	request: TMDBTvSeriesKeywordsRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeriesKeywordsResponse>
/**
 * Get a list of keywords that have been added to a TV show.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-keywords
 */
export function TMDBTvSeriesKeywords(
	request: TMDBTvSeriesKeywordsRequest,
	readAccessToken: string,
): Promise<TMDBTvSeriesKeywordsResponse>

/**
 * Get a list of keywords that have been added to a TV show.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-keywords
 */
export default function TMDBTvSeriesKeywords(
	request: TMDBTvSeriesKeywordsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeriesKeywordsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/keywords",
		{
			path: {
				series_id: request.series_id,
			},
			query: {},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBTvSeriesKeywordsResponse>(url)
	}
}

import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-series-content-ratings
 */
export interface TMDBTvSeriesContentRatingsRequest {
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
		TMDBTvSeriesContentRatingsRequest,
		keyof PathParams
	>]: TMDBTvSeriesContentRatingsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-series-content-ratings
 */
export interface TMDBTvSeriesContentRatingsResponse {
	results: {
		description: []
		iso_3166_1: TMDB_ISO_3166_1
		rating: string
	}[]
	/**
	 * @type int
	 * @default 0
	 */
	id: number
}

/**
 * Get the content ratings that have been added to a TV show.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-content-ratings
 */
export function TMDBTvSeriesContentRatings(
	request: TMDBTvSeriesContentRatingsRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeriesContentRatingsResponse>
/**
 * Get the alternative titles that have been added to a TV show.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-alternative-titles
 */
export function TMDBTvSeriesContentRatings(
	request: TMDBTvSeriesContentRatingsRequest,
	readAccessToken: string,
): Promise<TMDBTvSeriesContentRatingsResponse>

/**
 * Get the alternative titles that have been added to a TV show.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-alternative-titles
 */
export default function TMDBTvSeriesContentRatings(
	request: TMDBTvSeriesContentRatingsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeriesContentRatingsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/content_ratings",
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
		return fetcherOrApi<TMDBTvSeriesContentRatingsResponse>(url)
	}
}

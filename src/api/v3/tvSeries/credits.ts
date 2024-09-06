import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-series-credits
 */
export interface TMDBTvSeriesCreditsRequest {
	/**
	 * @type int32
	 */
	series_id: number
	/**
	 * @default "en-US"
	 */
	language?: string
}

type PathParams = {
	series_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBTvSeriesCreditsRequest,
		keyof PathParams
	>]: TMDBTvSeriesCreditsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-series-credits
 */
export interface TMDBTvSeriesCreditsResponse {
	cast: {
		/**
		 * @default true
		 */
		adult: boolean
		/**
		 * | Value | Gender                  |
		 * |-------|-------------------------|
		 * |   0   | Not set / not specified |
		 * |   1   |         Female          |
		 * |   2   |          Male           |
		 * |   3   |       Non-binary        |
		 * @default 0
		 */
		gender: number
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		known_for_department: string
		name: string
		original_name: string
		/**
		 * @type number
		 * @default 0
		 */
		popularity: number
		profile_path: string
		character: string
		credit_id: string
		/**
		 * @type int
		 * @default 0
		 */
		order: number
	}[]
	crew: {
		/**
		 * @default true
		 */
		adult: boolean
		/**
		 * | Value | Gender                  |
		 * |-------|-------------------------|
		 * |   0   | Not set / not specified |
		 * |   1   |         Female          |
		 * |   2   |          Male           |
		 * |   3   |       Non-binary        |
		 * @default 0
		 */
		gender: number
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		known_for_department: string
		name: string
		original_name: string
		/**
		 * @type number
		 * @default 0
		 */
		popularity: number
		profile_path: string
		credit_id: string
		department: string
		job: string
	}[]
	/**
	 * @type int
	 * @default 0
	 */
	id: number
}

/**
 * Get the latest season credits of a TV show.
 *
 * This is the original TV credits method which returns the ***latest season credit data***. If you would like to request the aggregate view (which is what you see on our website) you should use the [`/aggregate_credits`](https://developer.themoviedb.org/reference/tv-series-aggregate-credits) method.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-credits
 */
export function TMDBTvSeriesCredits(
	request: TMDBTvSeriesCreditsRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeriesCreditsResponse>
/**
 * Get the latest season credits of a TV show.
 *
 * This is the original TV credits method which returns the ***latest season credit data***. If you would like to request the aggregate view (which is what you see on our website) you should use the [`/aggregate_credits`](https://developer.themoviedb.org/reference/tv-series-aggregate-credits) method.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-credits
 */
export function TMDBTvSeriesCredits(
	request: TMDBTvSeriesCreditsRequest,
	readAccessToken: string,
): Promise<TMDBTvSeriesCreditsResponse>

/**
 * Get the latest season credits of a TV show.
 *
 * This is the original TV credits method which returns the ***latest season credit data***. If you would like to request the aggregate view (which is what you see on our website) you should use the [`/aggregate_credits`](https://developer.themoviedb.org/reference/tv-series-aggregate-credits) method.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-credits
 */
export default function TMDBTvSeriesCredits(
	request: TMDBTvSeriesCreditsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeriesCreditsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/credits",
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
		return fetcherOrApi<TMDBTvSeriesCreditsResponse>(url)
	}
}

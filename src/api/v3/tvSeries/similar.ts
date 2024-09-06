import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-series-similar
 */
export interface TMDBTvSeriesSimilarRequest {
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
		TMDBTvSeriesSimilarRequest,
		keyof PathParams
	>]: TMDBTvSeriesSimilarRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-series-similar
 */
export interface TMDBTvSeriesSimilarResponse {
	/**
	 * @type int
	 * @default 0
	 */
	page: number
	results: {
		/**
		 * @default true
		 */
		adult: boolean
		backdrop_path: string
		/**
		 * @type int[]
		 */
		genre_ids: number[]
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		origin_country: string[]
		original_language: string
		original_name: string
		overview: string
		/**
		 * @type number
		 * @default 0
		 */
		popularity: number
		poster_path: string
		first_air_date: string
		name: string
		/**
		 * @type number
		 * @default 0
		 */
		vote_average: number
		/**
		 * @type int
		 * @default 0
		 */
		vote_count: number
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
 * Get the similar TV shows.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-similar
 */
export function TMDBTvSeriesSimilar(
	request: TMDBTvSeriesSimilarRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeriesSimilarResponse>
/**
 * Get the similar TV shows.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-similar
 */
export function TMDBTvSeriesSimilar(
	request: TMDBTvSeriesSimilarRequest,
	readAccessToken: string,
): Promise<TMDBTvSeriesSimilarResponse>

/**
 * Get the similar TV shows.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-similar
 */
export default function TMDBTvSeriesSimilar(
	request: TMDBTvSeriesSimilarRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeriesSimilarResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/similar",
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
		return fetcherOrApi<TMDBTvSeriesSimilarResponse>(url)
	}
}

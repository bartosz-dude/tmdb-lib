import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-series-recommendations
 */
export interface TMDBTvSeriesRecommendationsRequest {
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
		TMDBTvSeriesRecommendationsRequest,
		keyof PathParams
	>]: TMDBTvSeriesRecommendationsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-series-recommendations
 */
export interface TMDBTvSeriesRecommendationsResponse {
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
		 * @type int
		 * @default 0
		 */
		id: number
		name: string
		original_language: string
		original_name: string
		overview: string
		poster_path: string
		media_type: string
		/**
		 * @type int[]
		 */
		genre_ids: number[]
		/**
		 * @type number
		 * @default 0
		 */
		popularity: number
		first_air_date: string
		/**
		 * @type nubmer
		 * @default 0
		 */
		vote_average: number
		/**
		 * @type int
		 * @default 0
		 */
		vote_count: number
		origin_country: string[]
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
 * @link https://developer.themoviedb.org/reference/tv-series-recommendations
 */
export function TMDBTvSeriesRecommendations(
	request: TMDBTvSeriesRecommendationsRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeriesRecommendationsResponse>
/**
 * @link https://developer.themoviedb.org/reference/tv-series-recommendations
 */
export function TMDBTvSeriesRecommendations(
	request: TMDBTvSeriesRecommendationsRequest,
	readAccessToken: string,
): Promise<TMDBTvSeriesRecommendationsResponse>

/**
 * @link https://developer.themoviedb.org/reference/tv-series-recommendations
 */
export default function TMDBTvSeriesRecommendations(
	request: TMDBTvSeriesRecommendationsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeriesRecommendationsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/recommendations",
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
		return fetcherOrApi<TMDBTvSeriesRecommendationsResponse>(url)
	}
}

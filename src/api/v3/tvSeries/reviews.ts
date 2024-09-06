import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-series-reviews
 */
export interface TMDBTvSeriesReviewsRequest {
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
		TMDBTvSeriesReviewsRequest,
		keyof PathParams
	>]: TMDBTvSeriesReviewsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-series-reviews
 */
export interface TMDBTvSeriesReviewsResponse {
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
		author: string
		author_details: {
			name: string
			username: string
			avatar_path: string
			/**
			 * @type int
			 * @default 0
			 */
			rating: number
		}
		content: string
		created_at: string
		id: string
		updated_at: string
		url: string
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
 * Get the reviews that have been added to a TV show.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-reviews
 */
export function TMDBTvSeriesReviews(
	request: TMDBTvSeriesReviewsRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeriesReviewsResponse>
/**
 * Get the reviews that have been added to a TV show.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-reviews
 */
export function TMDBTvSeriesReviews(
	request: TMDBTvSeriesReviewsRequest,
	readAccessToken: string,
): Promise<TMDBTvSeriesReviewsResponse>

/**
 * Get the reviews that have been added to a TV show.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-reviews
 */
export default function TMDBTvSeriesReviews(
	request: TMDBTvSeriesReviewsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeriesReviewsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/reviews",
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
		return fetcherOrApi<TMDBTvSeriesReviewsResponse>(url)
	}
}

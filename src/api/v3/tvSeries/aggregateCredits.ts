import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-series-aggregate-credits
 */
export interface TMDBTvSeriesAggregateCreditsRequest {
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
		TMDBTvSeriesAggregateCreditsRequest,
		keyof PathParams
	>]: TMDBTvSeriesAggregateCreditsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-series-aggregate-credits
 */
export interface TMDBTvSeriesAggregateCreditsResponse {
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
		role: {
			credit_id: string
			character: string
			/**
			 * @type int
			 * @default 0
			 */
			episode_count: number
		}[]
		/**
		 * @type int
		 * @default 0
		 */
		total_episode_count: number
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
		 * @type int
		 * @default 0
		 */
		popularity: number
		profile_path: string
		jobs: {
			credit_id: string
			job: string
			/**
			 * @type int
			 * @default 0
			 */
			episode_count: number
		}[]
		department: string
		/**
		 * @type int
		 * @default 0
		 */
		total_episode_count: number
	}[]
	/**
	 * @type int
	 * @default 0
	 */
	id: number
}

/**
 * Get the aggregate credits (cast and crew) that have been added to a TV show.
 *
 * This call differs from the main credits call in that it does not return the newest season. Instead, it is a view of all the entire cast & crew for all episodes belonging to a TV show.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-aggregate-credits
 */
export function TMDBTvSeriesAggregateCredits(
	request: TMDBTvSeriesAggregateCreditsRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeriesAggregateCreditsResponse>
/**
 * Get the aggregate credits (cast and crew) that have been added to a TV show.
 *
 * This call differs from the main credits call in that it does not return the newest season. Instead, it is a view of all the entire cast & crew for all episodes belonging to a TV show.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-aggregate-credits
 */
export function TMDBTvSeriesAggregateCredits(
	request: TMDBTvSeriesAggregateCreditsRequest,
	readAccessToken: string,
): Promise<TMDBTvSeriesAggregateCreditsResponse>

/**
 * Get the aggregate credits (cast and crew) that have been added to a TV show.
 *
 * This call differs from the main credits call in that it does not return the newest season. Instead, it is a view of all the entire cast & crew for all episodes belonging to a TV show.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-aggregate-credits
 */
export default function TMDBTvSeriesAggregateCredits(
	request: TMDBTvSeriesAggregateCreditsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeriesAggregateCreditsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/aggregate_credits",
		{
			path: {
				series_id: request.series_id,
			},
			query: {
				language: request.language,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBTvSeriesAggregateCreditsResponse>(url)
	}
}

import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-season-aggregate-credits
 */
export interface TMDBTvSeasonsAggregateCreditsRequest {
	/**
	 * @type int32
	 */
	series_id: number
	/**
	 * @type int32
	 */
	season_number: number
	/**
	 * @default "en-US"
	 */
	language?: string
}

type PathParams = {
	series_id: number
	season_number: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBTvSeasonsAggregateCreditsRequest,
		keyof PathParams
	>]: TMDBTvSeasonsAggregateCreditsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-season-aggregate-credits
 */
export interface TMDBTvSeasonsAggregateCreditsResponse {
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
		 * @type int
		 * @default 0
		 */
		popularity: number
		profile_path: string
		roles: {
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
 * Get the aggregate credits (cast and crew) that have been added to a TV season.
 *
 * This call differs from the main credits call in that it does not return the newest season. Instead, it is a view of all the entire cast & crew for all episodes belonging to a TV show.
 *
 * @link https://developer.themoviedb.org/reference/tv-season-aggregate-credits
 */
export function TMDBTvSeasonsAggregateCredits(
	request: TMDBTvSeasonsAggregateCreditsRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeasonsAggregateCreditsResponse>
/**
 * Get the aggregate credits (cast and crew) that have been added to a TV season.
 *
 * This call differs from the main credits call in that it does not return the newest season. Instead, it is a view of all the entire cast & crew for all episodes belonging to a TV show.
 *
 * @link https://developer.themoviedb.org/reference/tv-season-aggregate-credits
 */
export function TMDBTvSeasonsAggregateCredits(
	request: TMDBTvSeasonsAggregateCreditsRequest,
	readAccessToken: string,
): Promise<TMDBTvSeasonsAggregateCreditsResponse>

/**
 * Get the aggregate credits (cast and crew) that have been added to a TV season.
 *
 * This call differs from the main credits call in that it does not return the newest season. Instead, it is a view of all the entire cast & crew for all episodes belonging to a TV show.
 *
 * @link https://developer.themoviedb.org/reference/tv-season-aggregate-credits
 */
export default function TMDBTvSeasonsAggregateCredits(
	request: TMDBTvSeasonsAggregateCreditsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeasonsAggregateCreditsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/season/{season_number}/aggregate_credits",
		{
			path: {
				series_id: request.series_id,
				season_number: request.season_number,
			},
			query: {
				language: request.language,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBTvSeasonsAggregateCreditsResponse>(url)
	}
}

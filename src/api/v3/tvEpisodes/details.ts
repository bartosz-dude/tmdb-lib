import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-episode-details
 */
export interface TMDBTvEpisodesDetailsRequest {
	/**
	 * @type int32
	 */
	series_id: number
	/**
	 * @type int32
	 */
	season_number: number
	/**
	 * @type int32
	 */
	episode_number: number
	/**
	 * comma separated list of endpoints within this namespace, 20 items max
	 */
	append_to_response?: string | {}
	/**
	 * @default "en-US"
	 */
	language?: string
}

type PathParams = {
	series_id: number
	season_number: number
	episode_number: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBTvEpisodesDetailsRequest,
		keyof PathParams
	>]: TMDBTvEpisodesDetailsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-episode-details
 */
export interface TMDBTvEpisodesDetailsResponse {
	air_date: string
	crew: {
		department: string
		job: string
		credit_id: string
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
	}[]
	/**
	 * @type int
	 * @default 0
	 */
	episode_number: number
	guest_stars: {
		character: string
		credit_id: string
		/**
		 * @type int
		 * @default 0
		 */
		order: number
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
	}[]
	name: string
	overview: string
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	production_code: string
	/**
	 * @type int
	 * @default 0
	 */
	runtime: number
	/**
	 * @type int
	 * @default 0
	 */
	season_number: number
	still_path: string
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
}

/**
 * Query the details of a TV episode.
 *
 * This method supports using `append_to_response`. Read more about this [here](https://developer.themoviedb.org/docs/append-to-response).
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-details
 */
export function TMDBTvEpisodesDetails(
	request: TMDBTvEpisodesDetailsRequest,
	fetcher: Fetcher,
): Promise<TMDBTvEpisodesDetailsResponse>
/**
 * Query the details of a TV episode.
 *
 * This method supports using `append_to_response`. Read more about this [here](https://developer.themoviedb.org/docs/append-to-response).
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-details
 */
export function TMDBTvEpisodesDetails(
	request: TMDBTvEpisodesDetailsRequest,
	readAccessToken: string,
): Promise<TMDBTvEpisodesDetailsResponse>

/**
 * Query the details of a TV episode.
 *
 * This method supports using `append_to_response`. Read more about this [here](https://developer.themoviedb.org/docs/append-to-response).
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-details
 */
export default function TMDBTvEpisodesDetails(
	request: TMDBTvEpisodesDetailsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvEpisodesDetailsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/season/{season_number}/episode/{episode_number}",
		{
			path: {
				season_number: request.season_number,
				episode_number: request.episode_number,
				series_id: request.series_id,
			},
			query: {
				append_to_response: request.append_to_response,
				language: request.language,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBTvEpisodesDetailsResponse>(url)
	}
}

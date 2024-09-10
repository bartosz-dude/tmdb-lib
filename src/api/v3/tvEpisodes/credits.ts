import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-episode-credits
 */
export interface TMDBTvEpisodesCreditsRequest {
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
		TMDBTvEpisodesCreditsRequest,
		keyof PathParams
	>]: TMDBTvEpisodesCreditsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-episode-credits
 */
export interface TMDBTvEpisodesCreditsResponse {
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
		department: string
		jbo: string
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
	/**
	 * @type int
	 * @default 0
	 */
	id: number
}

/**
 * @link https://developer.themoviedb.org/reference/tv-episode-credits
 */
export function TMDBTvEpisodesCredits(
	request: TMDBTvEpisodesCreditsRequest,
	fetcher: Fetcher,
): Promise<TMDBTvEpisodesCreditsResponse>
/**
 * @link https://developer.themoviedb.org/reference/tv-episode-credits
 */
export function TMDBTvEpisodesCredits(
	request: TMDBTvEpisodesCreditsRequest,
	readAccessToken: string,
): Promise<TMDBTvEpisodesCreditsResponse>

/**
 * @link https://developer.themoviedb.org/reference/tv-episode-credits
 */
export default function TMDBTvEpisodesCredits(
	request: TMDBTvEpisodesCreditsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvEpisodesCreditsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/season/{season_number}/episode/{episode_number}/credits",
		{
			path: {
				season_number: request.season_number,
				episode_number: request.episode_number,
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
		return fetcherOrApi<TMDBTvEpisodesCreditsResponse>(url)
	}
}

import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-season-credits
 */
export interface TMDBTvSeasonsCreditsRequest {
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
		TMDBTvSeasonsCreditsRequest,
		keyof PathParams
	>]: TMDBTvSeasonsCreditsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-season-credits
 */
export interface TMDBTvSeasonsCreditsResponse {
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
 * @link https://developer.themoviedb.org/reference/tv-season-credits
 */
export function TMDBTvSeasonsCredits(
	request: TMDBTvSeasonsCreditsRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeasonsCreditsResponse>
/**
 * @link https://developer.themoviedb.org/reference/tv-season-credits
 */
export function TMDBTvSeasonsCredits(
	request: TMDBTvSeasonsCreditsRequest,
	readAccessToken: string,
): Promise<TMDBTvSeasonsCreditsResponse>

/**
 * @link https://developer.themoviedb.org/reference/tv-season-credits
 */
export default function TMDBTvSeasonsCredits(
	request: TMDBTvSeasonsCreditsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeasonsCreditsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/season/{season_number}/credits",
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
		return fetcherOrApi<TMDBTvSeasonsCreditsResponse>(url)
	}
}

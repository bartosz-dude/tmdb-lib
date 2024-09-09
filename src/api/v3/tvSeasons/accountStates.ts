import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-season-account-states
 */
export interface TMDBTvSeriesKeywordsRequest {
	/**
	 * @type int32
	 */
	series_id: number
	/**
	 * @type int32
	 */
	season_number: number
	session_id?: string
	guest_session_id?: string
}

type PathParams = {
	series_id: number
	season_number: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBTvSeriesKeywordsRequest,
		keyof PathParams
	>]: TMDBTvSeriesKeywordsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-season-account-states
 */
export interface TMDBTvSeriesKeywordsResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	results: {
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		/**
		 * @type int
		 * @default 0
		 */
		episode_number: number
		rated: {
			/**
			 * @type int
			 * @default 0
			 */
			value: number
		}
	}[]
}

/**
 * Get the rating, watchlist and favorite status.
 *
 * @link https://developer.themoviedb.org/reference/tv-season-account-states
 */
export function TMDBTvSeasonsAccountStates(
	request: TMDBTvSeriesKeywordsRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeriesKeywordsResponse>
/**
 * Get the rating, watchlist and favorite status.
 *
 * @link https://developer.themoviedb.org/reference/tv-season-account-states
 */
export function TMDBTvSeasonsAccountStates(
	request: TMDBTvSeriesKeywordsRequest,
	readAccessToken: string,
): Promise<TMDBTvSeriesKeywordsResponse>

/**
 * Get the rating, watchlist and favorite status.
 *
 * @link https://developer.themoviedb.org/reference/tv-season-account-states
 */
export default function TMDBTvSeasonsAccountStates(
	request: TMDBTvSeriesKeywordsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeriesKeywordsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/season/{season_number}/account_states",
		{
			path: {
				series_id: request.series_id,
				season_number: request.season_number,
			},
			query: {
				guest_session_id: request.guest_session_id,
				session_id: request.session_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBTvSeriesKeywordsResponse>(url)
	}
}

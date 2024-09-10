import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-episode-account-states
 */
export interface TMDBTvEpisodesAccountStatesRequest {
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
	session_id?: string
	guest_session_id?: string
}

type PathParams = {
	series_id: number
	season_number: number
	episode_number: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBTvEpisodesAccountStatesRequest,
		keyof PathParams
	>]: TMDBTvEpisodesAccountStatesRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-episode-account-states
 */
export interface TMDBTvEpisodesAccountStatesResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	/**
	 * @default true
	 */
	favorite: boolean
	rated: {
		/**
		 * @type int
		 * @default 0
		 */
		value: number
	}
	/**
	 * @default true
	 */
	watchlist: boolean
}

/**
 * Get the rating, watchlist and favorite status.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-account-states
 */
export function TMDBTvEpisodesAccountStates(
	request: TMDBTvEpisodesAccountStatesRequest,
	fetcher: Fetcher,
): Promise<TMDBTvEpisodesAccountStatesResponse>
/**
 * Get the rating, watchlist and favorite status.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-account-states
 */
export function TMDBTvEpisodesAccountStates(
	request: TMDBTvEpisodesAccountStatesRequest,
	readAccessToken: string,
): Promise<TMDBTvEpisodesAccountStatesResponse>

/**
 * Get the rating, watchlist and favorite status.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-account-states
 */
export default function TMDBTvEpisodesAccountStates(
	request: TMDBTvEpisodesAccountStatesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvEpisodesAccountStatesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/season/{season_number}/episode/{episode_number}/account_states",
		{
			path: {
				season_number: request.season_number,
				episode_number: request.episode_number,
				series_id: request.series_id,
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
		return fetcherOrApi<TMDBTvEpisodesAccountStatesResponse>(url)
	}
}

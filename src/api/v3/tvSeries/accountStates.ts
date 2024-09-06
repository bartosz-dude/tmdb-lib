import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-series-account-states
 */
export interface TMDBTvSeriesAccountStatesRequest {
	/**
	 * @type int32
	 */
	series_id: number
	session_id?: string
	guest_session_id?: string
}

type PathParams = {
	series_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBTvSeriesAccountStatesRequest,
		keyof PathParams
	>]: TMDBTvSeriesAccountStatesRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-series-account-states
 */
export interface TMDBTvSeriesAccountStatesResponse {
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
 * @link https://developer.themoviedb.org/reference/tv-series-account-states
 */
export function TMDBTvSeriesAccountStates(
	request: TMDBTvSeriesAccountStatesRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeriesAccountStatesResponse>
/**
 * Get the rating, watchlist and favorite status.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-account-states
 */
export function TMDBTvSeriesAccountStates(
	request: TMDBTvSeriesAccountStatesRequest,
	readAccessToken: string,
): Promise<TMDBTvSeriesAccountStatesResponse>

/**
 * Get the rating, watchlist and favorite status.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-account-states
 */
export default function TMDBTvSeriesAccountStates(
	request: TMDBTvSeriesAccountStatesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeriesAccountStatesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/account_states",
		{
			path: {
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
		return fetcherOrApi<TMDBTvSeriesAccountStatesResponse>(url)
	}
}

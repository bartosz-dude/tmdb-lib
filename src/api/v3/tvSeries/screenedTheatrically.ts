import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-series-screened-theatrically
 */
export interface TMDBTvSeriesScreenedTheatricallyRequest {
	/**
	 * @type int32
	 */
	series_id: number
}

type PathParams = {
	series_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBTvSeriesScreenedTheatricallyRequest,
		keyof PathParams
	>]: TMDBTvSeriesScreenedTheatricallyRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-series-screened-theatrically
 */
export interface TMDBTvSeriesScreenedTheatricallyResponse {
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
		/**
		 * @type int
		 * @default 0
		 */
		season_number: number
	}[]
}

/**
 * Get the seasons and episodes that have screened theatrically.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-screened-theatrically
 */
export function TMDBTvSeriesScreenedTheatrically(
	request: TMDBTvSeriesScreenedTheatricallyRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeriesScreenedTheatricallyResponse>
/**
 * Get the seasons and episodes that have screened theatrically.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-screened-theatrically
 */
export function TMDBTvSeriesScreenedTheatrically(
	request: TMDBTvSeriesScreenedTheatricallyRequest,
	readAccessToken: string,
): Promise<TMDBTvSeriesScreenedTheatricallyResponse>

/**
 * Get the seasons and episodes that have screened theatrically.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-screened-theatrically
 */
export default function TMDBTvSeriesScreenedTheatrically(
	request: TMDBTvSeriesScreenedTheatricallyRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeriesScreenedTheatricallyResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/screened_theatrically",
		{
			path: {
				series_id: request.series_id,
			},
			query: {},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBTvSeriesScreenedTheatricallyResponse>(url)
	}
}

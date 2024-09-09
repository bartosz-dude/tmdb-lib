import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-series-changes
 */
export interface TMDBTvSeriesChangesRequest {
	/**
	 * @type int32
	 */
	series_id: number
	end_date?: Date
	/**
	 * @type int32
	 * @default 1
	 */
	page?: number
	start_date?: Date
}

type PathParams = {
	series_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBTvSeriesChangesRequest,
		keyof PathParams
	>]: TMDBTvSeriesChangesRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-series-changes
 */
export interface TMDBTvSeriesChangesResponse {
	changes: {
		key: string
		items: {
			id: string
			action: string
			time: string
			iso_639_1: string
			iso_3166_1: TMDB_ISO_3166_1
			value: {
				poster: {
					file_path: string
					iso_639_1: string
				}
			}
			original_value: {
				poster: {
					file_path: string
					iso_639_1: string
				}
			}
		}[]
	}[]
}

/**
 * Get the recent changes for a TV show.
 *
 * Get the changes for a TV show. By default only the last 24 hours are returned.
 *
 * You can query up to 14 days in a single query by using the `start_date` and `end_date` query parameters.
 *
 * TV show changes are a little different than movie changes in that there are some edits on seasons and episodes that will create a top level change entry at the show level. These can be found under the season and episode keys. These keys will contain a `series_id` and `episode_id`. You can use the season changes and episode changes methods to look these up individually.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-changes
 */
export function TMDBTvSeriesChanges(
	request: TMDBTvSeriesChangesRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeriesChangesResponse>
/**
 * Get the recent changes for a TV show.
 *
 * Get the changes for a TV show. By default only the last 24 hours are returned.
 *
 * You can query up to 14 days in a single query by using the `start_date` and `end_date` query parameters.
 *
 * TV show changes are a little different than movie changes in that there are some edits on seasons and episodes that will create a top level change entry at the show level. These can be found under the season and episode keys. These keys will contain a `series_id` and `episode_id`. You can use the season changes and episode changes methods to look these up individually.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-changes
 */
export function TMDBTvSeriesChanges(
	request: TMDBTvSeriesChangesRequest,
	readAccessToken: string,
): Promise<TMDBTvSeriesChangesResponse>

/**
 * Get the recent changes for a TV show.
 *
 * Get the changes for a TV show. By default only the last 24 hours are returned.
 *
 * You can query up to 14 days in a single query by using the `start_date` and `end_date` query parameters.
 *
 * TV show changes are a little different than movie changes in that there are some edits on seasons and episodes that will create a top level change entry at the show level. These can be found under the season and episode keys. These keys will contain a `series_id` and `episode_id`. You can use the season changes and episode changes methods to look these up individually.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-changes
 */
export default function TMDBTvSeriesChanges(
	request: TMDBTvSeriesChangesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeriesChangesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/changes",
		{
			path: {
				series_id: request.series_id,
			},
			query: {
				end_date: request.end_date,
				page: request.page,
				start_date: request.start_date,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBTvSeriesChangesResponse>(url)
	}
}

import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-season-changes-by-id
 */
export interface TMDBTvSeasonsChangesRequest {
	/**
	 * @type int32
	 */
	season_number: number
	end_date?: Date
	/**
	 * @type int32
	 * @default 1
	 */
	page?: number
	start_date?: Date
}

type PathParams = {
	season_number: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBTvSeasonsChangesRequest,
		keyof PathParams
	>]: TMDBTvSeasonsChangesRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-season-changes-by-id
 */
export interface TMDBTvSeasonsChangesResponse {
	changes: {
		key: string
		items: {
			/**
			 * @type int
			 * @default 0
			 */
			id: number
			action: string
			time: string
			value: {
				/**
				 * @type int
				 * @default 0
				 */
				episode_id: number
				/**
				 * @type int
				 * @default 0
				 */
				episode_number: number
			}
		}
	}[]
}

/**
 * Get the recent changes for a TV season.
 *
 * Get the changes for a TV season. By default only the last 24 hours are returned.
 *
 * You can query up to 14 days in a single query by using the start_date and end_date query parameters.
 *
 * TV season changes are a little different than movie changes in that there are some edits on episodes that will create a top level change entry at the season level. These can be found under the episode keys. These keys will contain a `episode_id`. You can use the episode changes methods to look these up individually.
 *
 * @link https://developer.themoviedb.org/reference/tv-season-changes-by-id
 */
export function TMDBTvSeasonsChanges(
	request: TMDBTvSeasonsChangesRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeasonsChangesResponse>
/**
 * Get the recent changes for a TV season.
 *
 * Get the changes for a TV season. By default only the last 24 hours are returned.
 *
 * You can query up to 14 days in a single query by using the start_date and end_date query parameters.
 *
 * TV season changes are a little different than movie changes in that there are some edits on episodes that will create a top level change entry at the season level. These can be found under the episode keys. These keys will contain a `episode_id`. You can use the episode changes methods to look these up individually.
 *
 * @link https://developer.themoviedb.org/reference/tv-season-changes-by-id
 */
export function TMDBTvSeasonsChanges(
	request: TMDBTvSeasonsChangesRequest,
	readAccessToken: string,
): Promise<TMDBTvSeasonsChangesResponse>

/**
 * Get the recent changes for a TV season.
 *
 * Get the changes for a TV season. By default only the last 24 hours are returned.
 *
 * You can query up to 14 days in a single query by using the start_date and end_date query parameters.
 *
 * TV season changes are a little different than movie changes in that there are some edits on episodes that will create a top level change entry at the season level. These can be found under the episode keys. These keys will contain a `episode_id`. You can use the episode changes methods to look these up individually.
 *
 * @link https://developer.themoviedb.org/reference/tv-season-changes-by-id
 */
export default function TMDBTvSeasonsChanges(
	request: TMDBTvSeasonsChangesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeasonsChangesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"/season/{season_number}/changes",
		{
			path: {
				season_number: request.season_number,
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
		return fetcherOrApi<TMDBTvSeasonsChangesResponse>(url)
	}
}

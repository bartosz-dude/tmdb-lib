import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-episode-changes-by-id
 */
export interface TMDBTvEpisodesChangesRequest {
	/**
	 * @type int32
	 */
	episode_id: number
}

type PathParams = {
	episode_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBTvEpisodesChangesRequest,
		keyof PathParams
	>]: TMDBTvEpisodesChangesRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-episode-changes-by-id
 */
export interface TMDBTvEpisodesChangesResponse {
	changes: {
		key: string
		items: {
			id: string
			action: string
			time: string
			value: string
		}[]
	}[]
}

/**
 * Get the recent changes for a TV episode.
 *
 * Get the changes for a TV episode. By default only the last 24 hours are returned.
 *
 * You can query up to 14 days in a single query by using the `start_date` and `end_date` query parameters.
 *
 * TV episode changes are a little different than movie changes in that there are some edits on episodes that will create a top level change entry at the season level. These can be found under the episode keys. These keys will contain a `episode_id`. You can use the episode changes methods to look these up individually.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-changes-by-id
 */
export function TMDBTvEpisodesChanges(
	request: TMDBTvEpisodesChangesRequest,
	fetcher: Fetcher,
): Promise<TMDBTvEpisodesChangesResponse>
/**
 * Get the recent changes for a TV episode.
 *
 * Get the changes for a TV episode. By default only the last 24 hours are returned.
 *
 * You can query up to 14 days in a single query by using the `start_date` and `end_date` query parameters.
 *
 * TV episode changes are a little different than movie changes in that there are some edits on episodes that will create a top level change entry at the season level. These can be found under the episode keys. These keys will contain a `episode_id`. You can use the episode changes methods to look these up individually.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-changes-by-id
 */
export function TMDBTvEpisodesChanges(
	request: TMDBTvEpisodesChangesRequest,
	readAccessToken: string,
): Promise<TMDBTvEpisodesChangesResponse>

/**
 * Get the recent changes for a TV episode.
 *
 * Get the changes for a TV episode. By default only the last 24 hours are returned.
 *
 * You can query up to 14 days in a single query by using the `start_date` and `end_date` query parameters.
 *
 * TV episode changes are a little different than movie changes in that there are some edits on episodes that will create a top level change entry at the season level. These can be found under the episode keys. These keys will contain a `episode_id`. You can use the episode changes methods to look these up individually.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-changes-by-id
 */
export default function TMDBTvEpisodesChanges(
	request: TMDBTvEpisodesChangesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvEpisodesChangesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"episode/{episode_id}/changes",
		{
			path: {
				episode_id: request.episode_id,
			},
			query: {},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBTvEpisodesChangesResponse>(url)
	}
}

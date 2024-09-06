import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-series-episode-groups
 */
export interface TMDBTvSeriesEpisodeGroupsRequest {
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
		TMDBTvSeriesEpisodeGroupsRequest,
		keyof PathParams
	>]: TMDBTvSeriesEpisodeGroupsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-series-episode-groups
 */
export interface TMDBTvSeriesEpisodeGroupsResponse {
	results: {
		description: string
		/**
		 * @type int
		 * @default 0
		 */
		episode_count: number
		/**
		 * @type int
		 * @default 0
		 */
		group_count: number
		id: string
		name: string
		network: {
			/**
			 * @type int
			 * @default 0
			 */
			id: number
			logo_path: string
			name: string
			origin_country: string
		}
		/**
		 * @type int
		 * @default 0
		 */
		type: number
	}[]
	/**
	 * @type int
	 * @default 0
	 */
	id: number
}

/**
 * Get the episode groups that have been added to a TV show.
 *
 * With a group ID you can call the get TV episode group details method.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-episode-groups
 */
export function TMDBTvSeriesEpisodeGroups(
	request: TMDBTvSeriesEpisodeGroupsRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeriesEpisodeGroupsResponse>
/**
 * Get the episode groups that have been added to a TV show.
 *
 * With a group ID you can call the get TV episode group details method.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-episode-groups
 */
export function TMDBTvSeriesEpisodeGroups(
	request: TMDBTvSeriesEpisodeGroupsRequest,
	readAccessToken: string,
): Promise<TMDBTvSeriesEpisodeGroupsResponse>

/**
 * Get the episode groups that have been added to a TV show.
 *
 * With a group ID you can call the get TV episode group details method.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-episode-groups
 */
export default function TMDBTvSeriesEpisodeGroups(
	request: TMDBTvSeriesEpisodeGroupsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeriesEpisodeGroupsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/alternative_titles",
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
		return fetcherOrApi<TMDBTvSeriesEpisodeGroupsResponse>(url)
	}
}

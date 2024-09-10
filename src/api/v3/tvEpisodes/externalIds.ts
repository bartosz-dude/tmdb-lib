import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-episode-external-ids
 */
export interface TMDBTvEpisodesExternalIdsRequest {
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
}

type PathParams = {
	series_id: number
	season_number: number
	episode_number: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBTvEpisodesExternalIdsRequest,
		keyof PathParams
	>]: TMDBTvEpisodesExternalIdsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-episode-external-ids
 */
export interface TMDBTvEpisodesExternalIdsResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	imdb_id: string
	freebase_mid: string
	freebase_id: string
	/**
	 * @type int
	 * @default 0
	 */
	tvdb_id: number
	/**
	 * @type int
	 * @default 0
	 */
	tvrage_id: number
	wikidata_id: string
}

/**
 * Get a list of external IDs that have been added to a TV episode.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-external-ids
 */
export function TMDBTvEpisodesExternalIds(
	request: TMDBTvEpisodesExternalIdsRequest,
	fetcher: Fetcher,
): Promise<TMDBTvEpisodesExternalIdsResponse>
/**
 * Get a list of external IDs that have been added to a TV episode.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-external-ids
 */
export function TMDBTvEpisodesExternalIds(
	request: TMDBTvEpisodesExternalIdsRequest,
	readAccessToken: string,
): Promise<TMDBTvEpisodesExternalIdsResponse>

/**
 * Get a list of external IDs that have been added to a TV episode.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-external-ids
 */
export default function TMDBTvEpisodesExternalIds(
	request: TMDBTvEpisodesExternalIdsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvEpisodesExternalIdsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/season/{season_number}/episode/{episode_number}/external_ids",
		{
			path: {
				season_number: request.season_number,
				episode_number: request.episode_number,
				series_id: request.series_id,
			},
			query: {},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBTvEpisodesExternalIdsResponse>(url)
	}
}

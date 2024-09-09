import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-season-external-ids
 */
export interface TMDBTvSeasonsExternalIdsRequest {
	/**
	 * @type int32
	 */
	series_id: number
	/**
	 * @type int32
	 */
	season_number: number
}

type PathParams = {
	series_id: number
	season_number: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBTvSeasonsExternalIdsRequest,
		keyof PathParams
	>]: TMDBTvSeasonsExternalIdsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-season-external-ids
 */
export interface TMDBTvSeasonsExternalIdsResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	freebase_mid: string
	freebase_id: string
	/**
	 * @type int
	 * @default 0
	 */
	tvdb_id: number
	tvrage_id: string
	wikidata_id: string
}

/**
 * Get a list of external IDs that have been added to a TV season.
 *
 * @link https://developer.themoviedb.org/reference/tv-season-external-ids
 */
export function TMDBTvSeasonsExternalIds(
	request: TMDBTvSeasonsExternalIdsRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeasonsExternalIdsResponse>
/**
 * Get a list of external IDs that have been added to a TV season.
 *
 * @link https://developer.themoviedb.org/reference/tv-season-external-ids
 */
export function TMDBTvSeasonsExternalIds(
	request: TMDBTvSeasonsExternalIdsRequest,
	readAccessToken: string,
): Promise<TMDBTvSeasonsExternalIdsResponse>

/**
 * Get a list of external IDs that have been added to a TV season.
 *
 * @link https://developer.themoviedb.org/reference/tv-season-external-ids
 */
export default function TMDBTvSeasonsExternalIds(
	request: TMDBTvSeasonsExternalIdsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeasonsExternalIdsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/season/{season_number}/external_ids",
		{
			path: {
				series_id: request.series_id,
				season_number: request.season_number,
			},
			query: {},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBTvSeasonsExternalIdsResponse>(url)
	}
}

import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-series-external-ids
 */
export interface TMDBTvSeriesExternalIdsRequest {
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
		TMDBTvSeriesExternalIdsRequest,
		keyof PathParams
	>]: TMDBTvSeriesExternalIdsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-series-external-ids
 */
export interface TMDBTvSeriesExternalIdsResponse {
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
	facebook_id: string
	instagram_id: string
	twitter_id: string
}

/**
 * Get a list of external IDs that have been added to a TV show.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-external-ids
 */
export function TMDBTvSeriesExternalIds(
	request: TMDBTvSeriesExternalIdsRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeriesExternalIdsResponse>
/**
 * Get a list of external IDs that have been added to a TV show.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-external-ids
 */
export function TMDBTvSeriesExternalIds(
	request: TMDBTvSeriesExternalIdsRequest,
	readAccessToken: string,
): Promise<TMDBTvSeriesExternalIdsResponse>

/**
 * Get a list of external IDs that have been added to a TV show.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-external-ids
 */
export default function TMDBTvSeriesExternalIds(
	request: TMDBTvSeriesExternalIdsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeriesExternalIdsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/external_ids",
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
		return fetcherOrApi<TMDBTvSeriesExternalIdsResponse>(url)
	}
}

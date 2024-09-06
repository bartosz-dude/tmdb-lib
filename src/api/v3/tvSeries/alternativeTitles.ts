import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-series-alternative-titles
 */
export interface TMDBTvSeriesAlternativeTitlesRequest {
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
		TMDBTvSeriesAlternativeTitlesRequest,
		keyof PathParams
	>]: TMDBTvSeriesAlternativeTitlesRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-series-alternative-titles
 */
export interface TMDBTvSeriesAlternativeTitlesResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	results: {
		iso_3166_1: TMDB_ISO_3166_1
		title: string
		type: string
	}[]
}

/**
 * Get the alternative titles that have been added to a TV show.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-alternative-titles
 */
export function TMDBTvSeriesAlternativeTitles(
	request: TMDBTvSeriesAlternativeTitlesRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeriesAlternativeTitlesResponse>
/**
 * Get the alternative titles that have been added to a TV show.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-alternative-titles
 */
export function TMDBTvSeriesAlternativeTitles(
	request: TMDBTvSeriesAlternativeTitlesRequest,
	readAccessToken: string,
): Promise<TMDBTvSeriesAlternativeTitlesResponse>

/**
 * Get the alternative titles that have been added to a TV show.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-alternative-titles
 */
export default function TMDBTvSeriesAlternativeTitles(
	request: TMDBTvSeriesAlternativeTitlesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeriesAlternativeTitlesResponse> {
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
		return fetcherOrApi<TMDBTvSeriesAlternativeTitlesResponse>(url)
	}
}

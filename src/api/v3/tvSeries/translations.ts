import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-series-translations
 */
export interface TMDBTvSeriesTranslationsRequest {
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
		TMDBTvSeriesTranslationsRequest,
		keyof PathParams
	>]: TMDBTvSeriesTranslationsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-series-translations
 */
export interface TMDBTvSeriesTranslationsResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	translations: {
		iso_3166_1: TMDB_ISO_3166_1
		iso_639_1: string
		name: string
		english_name: string
		data: {
			name: string
			overview: string
			homepage: string
			tagline: string
		}
	}[]
}

/**
 * Get the translations that have been added to a TV show.
 *
 * Take a read through our [language](https://developer.themoviedb.org/docs/languages) documentation for more information about languages on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-translations
 */
export function TMDBTvSeriesTranslations(
	request: TMDBTvSeriesTranslationsRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeriesTranslationsResponse>
/**
 * Get the translations that have been added to a TV show.
 *
 * Take a read through our [language](https://developer.themoviedb.org/docs/languages) documentation for more information about languages on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-translations
 */
export function TMDBTvSeriesTranslations(
	request: TMDBTvSeriesTranslationsRequest,
	readAccessToken: string,
): Promise<TMDBTvSeriesTranslationsResponse>

/**
 * Get the translations that have been added to a TV show.
 *
 * Take a read through our [language](https://developer.themoviedb.org/docs/languages) documentation for more information about languages on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-translations
 */
export default function TMDBTvSeriesTranslations(
	request: TMDBTvSeriesTranslationsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeriesTranslationsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/translations",
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
		return fetcherOrApi<TMDBTvSeriesTranslationsResponse>(url)
	}
}

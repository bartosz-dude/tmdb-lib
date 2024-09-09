import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-season-translations
 */
export interface TMDBTvSeasonsTranslationsRequest {
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
		TMDBTvSeasonsTranslationsRequest,
		keyof PathParams
	>]: TMDBTvSeasonsTranslationsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-season-translations
 */
export interface TMDBTvSeasonsTranslationsResponse {
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
		}
	}[]
}

/**
 * Get the translations for a TV season.
 *
 * Take a read through our [language](https://developer.themoviedb.org/docs/languages) documentation for more information about languages on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/tv-season-translations
 */
export function TMDBTvSeasonsTranslations(
	request: TMDBTvSeasonsTranslationsRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeasonsTranslationsResponse>
/**
 * Get the translations for a TV season.
 *
 * Take a read through our [language](https://developer.themoviedb.org/docs/languages) documentation for more information about languages on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/tv-season-translations
 */
export function TMDBTvSeasonsTranslations(
	request: TMDBTvSeasonsTranslationsRequest,
	readAccessToken: string,
): Promise<TMDBTvSeasonsTranslationsResponse>

/**
 * Get the translations for a TV season.
 *
 * Take a read through our [language](https://developer.themoviedb.org/docs/languages) documentation for more information about languages on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/tv-season-translations
 */
export default function TMDBTvSeasonsTranslations(
	request: TMDBTvSeasonsTranslationsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeasonsTranslationsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/season/{season_number}/translations",
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
		return fetcherOrApi<TMDBTvSeasonsTranslationsResponse>(url)
	}
}

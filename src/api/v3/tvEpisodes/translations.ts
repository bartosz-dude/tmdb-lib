import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-episode-translations
 */
export interface TMDBTvEpisodesTranslationsRequest {
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
		TMDBTvEpisodesTranslationsRequest,
		keyof PathParams
	>]: TMDBTvEpisodesTranslationsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-episode-translations
 */
export interface TMDBTvEpisodesTranslationsResponse {
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
 * Get the translations that have been added to a TV episode.
 *
 * Take a read through our [language](https://developer.themoviedb.org/docs/languages) documentation for more information about languages on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-translations
 */
export function TMDBTvEpisodesTranslations(
	request: TMDBTvEpisodesTranslationsRequest,
	fetcher: Fetcher,
): Promise<TMDBTvEpisodesTranslationsResponse>
/**
 * Get the translations that have been added to a TV episode.
 *
 * Take a read through our [language](https://developer.themoviedb.org/docs/languages) documentation for more information about languages on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-translations
 */
export function TMDBTvEpisodesTranslations(
	request: TMDBTvEpisodesTranslationsRequest,
	readAccessToken: string,
): Promise<TMDBTvEpisodesTranslationsResponse>

/**
 * Get the translations that have been added to a TV episode.
 *
 * Take a read through our [language](https://developer.themoviedb.org/docs/languages) documentation for more information about languages on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-translations
 */
export default function TMDBTvEpisodesTranslations(
	request: TMDBTvEpisodesTranslationsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvEpisodesTranslationsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/season/{season_number}/episode/{episode_number}/translations",
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
		return fetcherOrApi<TMDBTvEpisodesTranslationsResponse>(url)
	}
}

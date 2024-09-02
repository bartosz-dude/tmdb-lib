import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/translations
 */
export interface TMDBPeopleTranslationsRequest {
	/**
	 * @type int32
	 */
	person_id: number
}

type PathParams = {
	person_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBPeopleTranslationsRequest,
		keyof PathParams
	>]: TMDBPeopleTranslationsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/translations
 */
export interface TMDBPeopleTranslationsResponse {
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
			biography: string
		}
	}[]
}

/**
 * Get the translations that belong to a person.
 *
 * Take a read through our [language](https://developer.themoviedb.org/docs/languages) documentation for more information about languages on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/translations
 */
export function TMDBPeopleTranslations(
	request: TMDBPeopleTranslationsRequest,
	fetcher: Fetcher,
): Promise<TMDBPeopleTranslationsResponse>
/**
 * Get the translations that belong to a person.
 *
 * Take a read through our [language](https://developer.themoviedb.org/docs/languages) documentation for more information about languages on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/translations
 */
export function TMDBPeopleTranslations(
	request: TMDBPeopleTranslationsRequest,
	readAccessToken: string,
): Promise<TMDBPeopleTranslationsResponse>

/**
 * Get the translations that belong to a person.
 *
 * Take a read through our [language](https://developer.themoviedb.org/docs/languages) documentation for more information about languages on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/translations
 */
export default function TMDBPeopleTranslations(
	request: TMDBPeopleTranslationsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBPeopleTranslationsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.PERSON,
		"{person_id}/translations",
		{
			query: {},
			path: {
				person_id: request.person_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBPeopleTranslationsResponse>(url)
	}
}

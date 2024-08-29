import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/configuration-languages
 */
export interface TMDBConfigurationLanguagesRequest {}

type PathParams = null

type QueryParams = null

/**
 * @link https://developer.themoviedb.org/reference/configuration-languages
 */
export type TMDBConfigurationLanguagesResponse = {
	iso_3166_1: string
	english_name: string
	name: string
}[]

/**
 * Get the list of languages (ISO 639-1 tags) used throughout TMDB.
 *
 * @see `TMDB_CONFIGURATION.languages` constant provides the same information as a default request to this endpoint as of 08/2024
 *
 * @link https://developer.themoviedb.org/reference/configuration-languages
 */
export function TMDBConfigurationLanguages(
	request: TMDBConfigurationLanguagesRequest,
	fetcher: Fetcher,
): Promise<TMDBConfigurationLanguagesResponse>
/**
 * Get the list of languages (ISO 639-1 tags) used throughout TMDB.
 *
 * @see `TMDB_CONFIGURATION.languages` constant provides the same information as a default request to this endpoint as of 08/2024
 *
 * @link https://developer.themoviedb.org/reference/configuration-languages
 */
export function TMDBConfigurationLanguages(
	request: TMDBConfigurationLanguagesRequest,
	readAccessToken: string,
): Promise<TMDBConfigurationLanguagesResponse>

/**
 * Get the list of languages (ISO 639-1 tags) used throughout TMDB.
 *
 * @see `TMDB_CONFIGURATION.languages` constant provides the same information as a default request to this endpoint as of 08/2024
 *
 * @link https://developer.themoviedb.org/reference/configuration-languages
 */
export default function TMDBConfigurationLanguages(
	request: TMDBConfigurationLanguagesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBConfigurationLanguagesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.CONFIGURATION,
		"languages",
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBConfigurationLanguagesResponse>(url)
	}
}

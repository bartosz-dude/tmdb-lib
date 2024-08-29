import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/configuration-countries
 */
export interface TMDBConfigurationCountriesRequest {
	/**
	 * @default "en-US"
	 */
	language?: string
}

type PathParams = null

type QueryParams = {
	language?: string
}

/**
 * @link https://developer.themoviedb.org/reference/configuration-countries
 */
export type TMDBConfigurationCountriesResponse = {
	iso_3166_1: string
	english_name: string
	native_name: string
}[]

/**
 * Get the list of countries (ISO 3166-1 tags) used throughout TMDB.
 *
 * @see `TMDB_CONFIGURATION.countries` constant provides the same information as a default request to this endpoint as of 08/2024
 *
 * @link https://developer.themoviedb.org/reference/configuration-countries
 */
export function TMDBConfigurationCountries(
	request: TMDBConfigurationCountriesRequest,
	fetcher: Fetcher,
): Promise<TMDBConfigurationCountriesResponse>
/**
 * Get the list of countries (ISO 3166-1 tags) used throughout TMDB.
 *
 * @see `TMDB_CONFIGURATION.countries` constant provides the same information as a default request to this endpoint as of 08/2024
 *
 * @link https://developer.themoviedb.org/reference/configuration-countries
 */
export function TMDBConfigurationCountries(
	request: TMDBConfigurationCountriesRequest,
	readAccessToken: string,
): Promise<TMDBConfigurationCountriesResponse>

/**
 * Get the list of countries (ISO 3166-1 tags) used throughout TMDB.
 *
 * @see `TMDB_CONFIGURATION.countries` constant provides the same information as a default request to this endpoint as of 08/2024
 *
 * @link https://developer.themoviedb.org/reference/configuration-countries
 */
export default function TMDBConfigurationCountries(
	request: TMDBConfigurationCountriesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBConfigurationCountriesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.CONFIGURATION,
		"countries",
		{
			query: {
				language: request.language,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBConfigurationCountriesResponse>(url)
	}
}

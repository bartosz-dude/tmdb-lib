import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/configuration-timezones
 */
export interface TMDBConfigurationTimezonesRequest {}

type PathParams = null

type QueryParams = null

/**
 * @link https://developer.themoviedb.org/reference/configuration-timezones
 */
export type TMDBConfigurationTimezonesResponse = {
	iso_3166_1: string
	zones: string[]
}[]

/**
 * Get the list of timezones used throughout TMDB.
 *
 * @see `TMDB_CONFIGURATION.timezones` constant provides the same information as a default request to this endpoint as of 08/2024
 *
 * @link https://developer.themoviedb.org/reference/configuration-timezones
 */
export function TMDBConfigurationTimezones(
	request: TMDBConfigurationTimezonesRequest,
	fetcher: Fetcher,
): Promise<TMDBConfigurationTimezonesResponse>
/**
 * Get the list of timezones used throughout TMDB.
 *
 * @see `TMDB_CONFIGURATION.timezones` constant provides the same information as a default request to this endpoint as of 08/2024
 *
 * @link https://developer.themoviedb.org/reference/configuration-timezones
 */
export function TMDBConfigurationTimezones(
	request: TMDBConfigurationTimezonesRequest,
	readAccessToken: string,
): Promise<TMDBConfigurationTimezonesResponse>

/**
 * Get the list of timezones used throughout TMDB.
 *
 * @see `TMDB_CONFIGURATION.timezones` constant provides the same information as a default request to this endpoint as of 08/2024
 *
 * @link https://developer.themoviedb.org/reference/configuration-timezones
 */
export default function TMDBConfigurationTimezones(
	request: TMDBConfigurationTimezonesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBConfigurationTimezonesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.CONFIGURATION,
		"timezones",
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBConfigurationTimezonesResponse>(url)
	}
}

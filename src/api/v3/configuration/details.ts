import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

/**
 * @link https://developer.themoviedb.org/reference/configuration-details
 */
export interface TMDBConfigurationDetailsRequest {}

type PathParams = null

type QueryParams = null

/**
 * @link https://developer.themoviedb.org/reference/configuration-details
 */
export interface TMDBConfigurationDetailsResponse {
	images: {
		base_url: string
		secure_base_url: string
		backdrop_sizes: string[]
		logo_sizes: string[]
		poster_sizes: string[]
		profile_sizes: string[]
		still_sizes: string[]
	}
	change_keys: string[]
}

/**
 * Query the API configuration details.
 *
 * The data returned here in the configuration endpoint is designed to provide some of the required information you'll need as you integrate our API.
 *
 * For example, you can get a list of valid image sizes and the valid image address.
 *
 * @see `TMDB_CONFIGURATION.details` constant provides the same information as a default request to this endpoint as of 08/2024
 *
 * @link https://developer.themoviedb.org/reference/configuration-details
 */
export function TMDBConfigurationDetails(
	request: TMDBConfigurationDetailsRequest,
	fetcher: Fetcher,
): Promise<TMDBConfigurationDetailsResponse>
/**
 * Query the API configuration details.
 *
 * The data returned here in the configuration endpoint is designed to provide some of the required information you'll need as you integrate our API.
 *
 * For example, you can get a list of valid image sizes and the valid image address.
 *
 * @see `TMDB_CONFIGURATION.details` constant provides the same information as a default request to this endpoint as of 08/2024
 *
 * @link https://developer.themoviedb.org/reference/configuration-details
 */
export function TMDBConfigurationDetails(
	request: TMDBConfigurationDetailsRequest,
	readAccessToken: string,
): Promise<TMDBConfigurationDetailsResponse>

/**
 * Query the API configuration details.
 *
 * The data returned here in the configuration endpoint is designed to provide some of the required information you'll need as you integrate our API.
 *
 * For example, you can get a list of valid image sizes and the valid image address.
 *
 * @see `TMDB_CONFIGURATION.details` constant provides the same information as a default request to this endpoint as of 08/2024
 *
 * @link https://developer.themoviedb.org/reference/configuration-details
 */
export default function TMDBConfigurationDetails(
	request: TMDBConfigurationDetailsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBConfigurationDetailsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.CONFIGURATION, "")

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBConfigurationDetailsResponse>(url)
	}
}

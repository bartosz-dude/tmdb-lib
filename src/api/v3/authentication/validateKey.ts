import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/authentication-validate-key
 */
export interface TMDBAuthenticationValidateKeyRequest {}

type PathParams = null

type QueryParams = null

/**
 * @link https://developer.themoviedb.org/reference/authentication-validate-key
 */
export interface TMDBAuthenticationValidateKeyResponse {
	/**
	 * @default true
	 */
	success: boolean
	/**
	 * @type int
	 * @default 0
	 */
	status_code: number
	status_message: string
}

/**
 * Test your API Key to see if it's valid.
 *
 * @link https://developer.themoviedb.org/reference/authentication-validate-key
 */
export function TMDBAuthenticationValidateKey(
	request: TMDBAuthenticationValidateKeyRequest,
	fetcher: Fetcher,
): Promise<TMDBAuthenticationValidateKeyResponse>
/**
 * Test your API Key to see if it's valid.
 *
 * @link https://developer.themoviedb.org/reference/authentication-validate-key
 */
export function TMDBAuthenticationValidateKey(
	request: TMDBAuthenticationValidateKeyRequest,
	readAccessToken: string,
): Promise<TMDBAuthenticationValidateKeyResponse>

/**
 * Test your API Key to see if it's valid.
 *
 * @link https://developer.themoviedb.org/reference/authentication-validate-key
 */
export default function TMDBAuthenticationValidateKey(
	request: TMDBAuthenticationValidateKeyRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBAuthenticationValidateKeyResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.AUTHENTICATION,
		"",
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBAuthenticationValidateKeyResponse>(url)
	}
}

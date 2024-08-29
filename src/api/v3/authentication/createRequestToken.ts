import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/authentication-create-request-token
 */
export interface TMDBAuthenticationCreateRequestTokenRequest {}

type PathParams = null

type QueryParams = null

/**
 * @link https://developer.themoviedb.org/reference/authentication-create-request-token
 */
export interface TMDBAuthenticationCreateRequestTokenResponse {
	/**
	 * @default true
	 */
	success: boolean
	expires_at: string
	request_token: string
}

/**
 * Create an intermediate request token that can be used to validate a TMDB user login. More details about how this works can be found [here](https://developer.themoviedb.org/reference/authentication-how-do-i-generate-a-session-id).
 *
 * This is step 1 from the [How do I generate a session id?](https://developer.themoviedb.org/reference/authentication-how-do-i-generate-a-session-id) guide.
 *
 * @link https://developer.themoviedb.org/reference/authentication-create-request-token
 */
export function TMDBAuthenticationCreateRequestToken(
	request: TMDBAuthenticationCreateRequestTokenRequest,
	fetcher: Fetcher,
): Promise<TMDBAuthenticationCreateRequestTokenResponse>
/**
 * Create an intermediate request token that can be used to validate a TMDB user login. More details about how this works can be found [here](https://developer.themoviedb.org/reference/authentication-how-do-i-generate-a-session-id).
 *
 * This is step 1 from the [How do I generate a session id?](https://developer.themoviedb.org/reference/authentication-how-do-i-generate-a-session-id) guide.
 *
 * @link https://developer.themoviedb.org/reference/authentication-create-request-token
 */
export function TMDBAuthenticationCreateRequestToken(
	request: TMDBAuthenticationCreateRequestTokenRequest,
	readAccessToken: string,
): Promise<TMDBAuthenticationCreateRequestTokenResponse>

/**
 * Create an intermediate request token that can be used to validate a TMDB user login. More details about how this works can be found [here](https://developer.themoviedb.org/reference/authentication-how-do-i-generate-a-session-id).
 *
 * This is step 1 from the [How do I generate a session id?](https://developer.themoviedb.org/reference/authentication-how-do-i-generate-a-session-id) guide.
 *
 * @link https://developer.themoviedb.org/reference/authentication-create-request-token
 */
export default function TMDBAuthenticationCreateRequestToken(
	request: TMDBAuthenticationCreateRequestTokenRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBAuthenticationCreateRequestTokenResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.AUTHENTICATION,
		"token/new",
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBAuthenticationCreateRequestTokenResponse>(url)
	}
}

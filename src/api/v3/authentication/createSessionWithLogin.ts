import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/authentication-create-session-from-login
 */
export interface TMDBAuthenticationCreateSessionWithLoginRequest {
	raw_body: any
}

type PathParams = null

type QueryParams = null

/**
 * @link https://developer.themoviedb.org/reference/authentication-create-session-from-login
 */
export interface TMDBAuthenticationCreateSessionWithLoginResponse {
	/**
	 * @default true
	 */
	success: boolean
	expires_at: string
	request_token: string
}

/**
 * Not all applications have access to a web view so this can be used as a substitute.
 *
 * Please note, the preferred method of validating a request token is to have a user authenticate the request via the TMDB website. You can read about that method [here](https://developer.themoviedb.org/reference/authentication-how-do-i-generate-a-session-id).
 *
 * If you decide to use this method please **use HTTPS**.
 *
 * This would replace step 3 from the [How do I generate a session id?](https://developer.themoviedb.org/reference/authentication-how-do-i-generate-a-session-id) guide.
 *
 * @link https://developer.themoviedb.org/reference/authentication-create-session-from-login
 */
export function TMDBAuthenticationCreateSessionWithLogin(
	request: TMDBAuthenticationCreateSessionWithLoginRequest,
	fetcher: Fetcher,
): Promise<TMDBAuthenticationCreateSessionWithLoginResponse>
/**
 * Not all applications have access to a web view so this can be used as a substitute.
 *
 * Please note, the preferred method of validating a request token is to have a user authenticate the request via the TMDB website. You can read about that method [here](https://developer.themoviedb.org/reference/authentication-how-do-i-generate-a-session-id).
 *
 * If you decide to use this method please **use HTTPS**.
 *
 * This would replace step 3 from the [How do I generate a session id?](https://developer.themoviedb.org/reference/authentication-how-do-i-generate-a-session-id) guide.
 *
 * @link https://developer.themoviedb.org/reference/authentication-create-session-from-login
 */
export function TMDBAuthenticationCreateSessionWithLogin(
	request: TMDBAuthenticationCreateSessionWithLoginRequest,
	readAccessToken: string,
): Promise<TMDBAuthenticationCreateSessionWithLoginResponse>

/**
 * Not all applications have access to a web view so this can be used as a substitute.
 *
 * Please note, the preferred method of validating a request token is to have a user authenticate the request via the TMDB website. You can read about that method [here](https://developer.themoviedb.org/reference/authentication-how-do-i-generate-a-session-id).
 *
 * If you decide to use this method please **use HTTPS**.
 *
 * This would replace step 3 from the [How do I generate a session id?](https://developer.themoviedb.org/reference/authentication-how-do-i-generate-a-session-id) guide.
 *
 * @link https://developer.themoviedb.org/reference/authentication-create-session-from-login
 */
export default function TMDBAuthenticationCreateSessionWithLogin(
	request: TMDBAuthenticationCreateSessionWithLoginRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBAuthenticationCreateSessionWithLoginResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.AUTHENTICATION,
		"token/validate_with_login",
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi, {
			method: "POST",
			rawBody: request.raw_body,
		})
	} else {
		return fetcherOrApi<TMDBAuthenticationCreateSessionWithLoginResponse>(url, {
			method: "POST",
			rawBody: request.raw_body,
		})
	}
}

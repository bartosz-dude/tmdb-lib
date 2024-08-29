import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/authentication-create-session
 */
export interface TMDBAuthenticationCreateSessionRequest {
	raw_body: any
}

type PathParams = null

type QueryParams = null

/**
 * @link https://developer.themoviedb.org/reference/authentication-create-session
 */
export interface TMDBAuthenticationCreateSessionResponse {
	/**
	 * @default true
	 */
	success: boolean
	session_id: string
}

/**
 * You can use this method to create a fully valid session ID once a user has validated the request token. More information about how this works can be found here.
 *
 * This is step 3 from the [How do I generate a session id?](https://developer.themoviedb.org/reference/authentication-how-do-i-generate-a-session-id) guide.
 *
 * @link https://developer.themoviedb.org/reference/authentication-create-session
 */
export function TMDBAuthenticationCreateSession(
	request: TMDBAuthenticationCreateSessionRequest,
	fetcher: Fetcher,
): Promise<TMDBAuthenticationCreateSessionResponse>
/**
 * You can use this method to create a fully valid session ID once a user has validated the request token. More information about how this works can be found here.
 *
 * This is step 3 from the [How do I generate a session id?](https://developer.themoviedb.org/reference/authentication-create-session) guide.
 *
 * @link https://developer.themoviedb.org/reference/authentication-create-session
 */
export function TMDBAuthenticationCreateSession(
	request: TMDBAuthenticationCreateSessionRequest,
	readAccessToken: string,
): Promise<TMDBAuthenticationCreateSessionResponse>

/**
 * You can use this method to create a fully valid session ID once a user has validated the request token. More information about how this works can be found here.
 *
 * This is step 3 from the [How do I generate a session id?](https://developer.themoviedb.org/reference/authentication-create-session) guide.
 *
 * @link https://developer.themoviedb.org/reference/authentication-create-session
 */
export default function TMDBAuthenticationCreateSession(
	request: TMDBAuthenticationCreateSessionRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBAuthenticationCreateSessionResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.AUTHENTICATION,
		"session/new",
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi, {
			method: "POST",
			rawBody: request.raw_body,
		})
	} else {
		return fetcherOrApi<TMDBAuthenticationCreateSessionResponse>(url, {
			method: "POST",
			rawBody: request.raw_body,
		})
	}
}

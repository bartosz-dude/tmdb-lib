import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/authentication-create-session-from-v4-token
 */
export interface TMDBAuthenticationCreateSessionFromV4TokenRequest {
	raw_body: any
}

type PathParams = null

type QueryParams = null

/**
 * @link https://developer.themoviedb.org/reference/authentication-create-session-from-v4-token
 */
export interface TMDBAuthenticationCreateSessionFromV4TokenResponse {
	/**
	 * @default true
	 */
	success: boolean
	session_id: string
}

/**
 * Use this method to create a v3 session ID if you already have a valid v4 access token. The v4 token needs to be authenticated by the user. Your standard "read token" will not validate to create a session ID.
 *
 * This would replace step 3 from the [How do I generate a session id?](https://developer.themoviedb.org/reference/authentication-how-do-i-generate-a-session-id) guide.
 *
 * @link https://developer.themoviedb.org/reference/authentication-create-session-from-v4-token
 */
export function TMDBAuthenticationCreateSessionFromV4Token(
	request: TMDBAuthenticationCreateSessionFromV4TokenRequest,
	fetcher: Fetcher,
): Promise<TMDBAuthenticationCreateSessionFromV4TokenResponse>
/**
 * Use this method to create a v3 session ID if you already have a valid v4 access token. The v4 token needs to be authenticated by the user. Your standard "read token" will not validate to create a session ID.
 *
 * This would replace step 3 from the [How do I generate a session id?](https://developer.themoviedb.org/reference/authentication-how-do-i-generate-a-session-id) guide.
 *
 * @link https://developer.themoviedb.org/reference/authentication-create-session-from-v4-token
 */
export function TMDBAuthenticationCreateSessionFromV4Token(
	request: TMDBAuthenticationCreateSessionFromV4TokenRequest,
	readAccessToken: string,
): Promise<TMDBAuthenticationCreateSessionFromV4TokenResponse>

/**
 * Use this method to create a v3 session ID if you already have a valid v4 access token. The v4 token needs to be authenticated by the user. Your standard "read token" will not validate to create a session ID.
 *
 * This would replace step 3 from the [How do I generate a session id?](https://developer.themoviedb.org/reference/authentication-how-do-i-generate-a-session-id) guide.
 *
 * @link https://developer.themoviedb.org/reference/authentication-create-session-from-v4-token
 */
export default function TMDBAuthenticationCreateSessionFromV4Token(
	request: TMDBAuthenticationCreateSessionFromV4TokenRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBAuthenticationCreateSessionFromV4TokenResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.AUTHENTICATION,
		"session/convert/4",
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi, {
			method: "POST",
			rawBody: request.raw_body,
		})
	} else {
		return fetcherOrApi<TMDBAuthenticationCreateSessionFromV4TokenResponse>(
			url,
			{
				method: "POST",
				rawBody: request.raw_body,
			},
		)
	}
}

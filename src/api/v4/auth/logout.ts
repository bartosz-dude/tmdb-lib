import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

export interface TMDB4AuthLogoutRequest {
	raw_body: object
}

type PathParams = {}

type QueryParams = {}

export interface TMDB4AuthLogoutResponse {
	/**
	 * @default true
	 */
	success: boolean
	status_message: string
	/**
	 * @type int
	 * @default 0
	 */
	status_code: number
}

/**
 * Log out of a session.
 *
 * @link https://developer.themoviedb.org/v4/reference/auth-logout
 */
export function TMDB4AuthLogout(
	request: TMDB4AuthLogoutRequest,
	fetcher: Fetcher,
): Promise<TMDB4AuthLogoutResponse>
/**
 * Log out of a session.
 *
 * @link https://developer.themoviedb.org/v4/reference/auth-logout
 */
export function TMDB4AuthLogout(
	request: TMDB4AuthLogoutRequest,
	readAccessToken: string,
): Promise<TMDB4AuthLogoutResponse>

/**
 * Log out of a session.
 *
 * @link https://developer.themoviedb.org/v4/reference/auth-logout
 */
export default function TMDB4AuthLogout(
	request: TMDB4AuthLogoutRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDB4AuthLogoutResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.ACCOUNT4,
		"request_token",
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi, {
			method: "DELETE",
			rawBody: request.raw_body,
		})
	} else {
		return fetcherOrApi<TMDB4AuthLogoutResponse>(url)
	}
}

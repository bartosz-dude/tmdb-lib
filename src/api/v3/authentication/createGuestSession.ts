import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

/**
 * @link https://developer.themoviedb.org/reference/authentication-create-guest-session
 */
export interface TMDBAuthenticationCreateGuestSessionRequest {}

type PathParams = null

type QueryParams = null

/**
 * @link https://developer.themoviedb.org/reference/authentication-create-guest-session
 */
export interface TMDBAuthenticationCreateGuestSessionResponse {
	/**
	 * @default true
	 */
	success: boolean
	guest_session_id: string
	expires_at: string
}

/**
 * Guest sessions are a special kind of session that give you some of the functionality of an account, but not all. For example, some of the things you can do with a guest session are; maintain a rated list, a watchlist and a favorite list.
 *
 * Guest sessions will automatically be deleted if they are not used within 60 minutes of it being issued.
 *
 * @link https://developer.themoviedb.org/reference/authentication-create-guest-session
 */
export function TMDBAuthenticationCreateGuestSession(
	request: TMDBAuthenticationCreateGuestSessionRequest,
	fetcher: Fetcher,
): Promise<TMDBAuthenticationCreateGuestSessionResponse>
/**
 * Guest sessions are a special kind of session that give you some of the functionality of an account, but not all. For example, some of the things you can do with a guest session are; maintain a rated list, a watchlist and a favorite list.
 *
 * Guest sessions will automatically be deleted if they are not used within 60 minutes of it being issued.
 *
 * @link https://developer.themoviedb.org/reference/authentication-create-guest-session
 */
export function TMDBAuthenticationCreateGuestSession(
	request: TMDBAuthenticationCreateGuestSessionRequest,
	readAccessToken: string,
): Promise<TMDBAuthenticationCreateGuestSessionResponse>

/**
 * Guest sessions are a special kind of session that give you some of the functionality of an account, but not all. For example, some of the things you can do with a guest session are; maintain a rated list, a watchlist and a favorite list.
 *
 * Guest sessions will automatically be deleted if they are not used within 60 minutes of it being issued.
 *
 * @link https://developer.themoviedb.org/reference/authentication-create-guest-session
 */
export default function TMDBAuthenticationCreateGuestSession(
	request: TMDBAuthenticationCreateGuestSessionRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBAuthenticationCreateGuestSessionResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.AUTHENTICATION,
		"guest_session/new",
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBAuthenticationCreateGuestSessionResponse>(url)
	}
}

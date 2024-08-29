import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/authentication-delete-session
 */
export interface TMDBAuthenticationDeleteSessionRequest {
	raw_body: any
}

type PathParams = null

type QueryParams = null

/**
 * @link https://developer.themoviedb.org/reference/authentication-delete-session
 */
export interface TMDBAuthenticationDeleteSessionResponse {
	/**
	 * @default true
	 */
	success: boolean
}

/**
 * @link https://developer.themoviedb.org/reference/authentication-delete-session
 */
export function TMDBAuthenticationDeleteSession(
	request: TMDBAuthenticationDeleteSessionRequest,
	fetcher: Fetcher,
): Promise<TMDBAuthenticationDeleteSessionResponse>
/**
 * @link https://developer.themoviedb.org/reference/authentication-delete-session
 */
export function TMDBAuthenticationDeleteSession(
	request: TMDBAuthenticationDeleteSessionRequest,
	readAccessToken: string,
): Promise<TMDBAuthenticationDeleteSessionResponse>

/**
 * @link https://developer.themoviedb.org/reference/authentication-delete-session
 */
export default function TMDBAuthenticationDeleteSession(
	request: TMDBAuthenticationDeleteSessionRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBAuthenticationDeleteSessionResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.AUTHENTICATION,
		"session",
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi, {
			method: "DELETE",
			rawBody: request.raw_body,
		})
	} else {
		return fetcherOrApi<TMDBAuthenticationDeleteSessionResponse>(url, {
			method: "DELETE",
			rawBody: request.raw_body,
		})
	}
}

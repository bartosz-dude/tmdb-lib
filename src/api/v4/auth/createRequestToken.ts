import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

export interface TMDB4AuthCreateRequestTokenRequest {
	raw_body: object
}

type PathParams = {}

type QueryParams = {}

export interface TMDB4AuthCreateRequestTokenResponse {
	access_token: string
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
 * This is step #1 from the user [authentication page](https://developer.themoviedb.org/v4/docs/authentication-user).
 *
 * This method generates a new request token that you can ask a user to approve. This is the first step in getting permission from a user to read and write data on their behalf.
 *
 * @link https://developer.themoviedb.org/v4/reference/auth-create-request-token
 */
export function TMDB4AuthCreateRequestToken(
	request: TMDB4AuthCreateRequestTokenRequest,
	fetcher: Fetcher,
): Promise<TMDB4AuthCreateRequestTokenResponse>
/**
 * This is step #1 from the user [authentication page](https://developer.themoviedb.org/v4/docs/authentication-user).
 *
 * This method generates a new request token that you can ask a user to approve. This is the first step in getting permission from a user to read and write data on their behalf.
 *
 * @link https://developer.themoviedb.org/v4/reference/auth-create-request-token
 */
export function TMDB4AuthCreateRequestToken(
	request: TMDB4AuthCreateRequestTokenRequest,
	readAccessToken: string,
): Promise<TMDB4AuthCreateRequestTokenResponse>

/**
 * This is step #1 from the user [authentication page](https://developer.themoviedb.org/v4/docs/authentication-user).
 *
 * This method generates a new request token that you can ask a user to approve. This is the first step in getting permission from a user to read and write data on their behalf.
 *
 * @link https://developer.themoviedb.org/v4/reference/auth-create-request-token
 */
export default function TMDB4AuthCreateRequestToken(
	request: TMDB4AuthCreateRequestTokenRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDB4AuthCreateRequestTokenResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.ACCOUNT4,
		"request_token",
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi, {
			method: "POST",
			rawBody: request.raw_body,
		})
	} else {
		return fetcherOrApi<TMDB4AuthCreateRequestTokenResponse>(url)
	}
}

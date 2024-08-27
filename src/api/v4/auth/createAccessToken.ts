import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

export interface TMDB4AuthCreateAccessTokenRequest {
	raw_body: object
}

type PathParams = {}

type QueryParams = {}

export interface TMDB4AuthCreateAccessTokenResponse {
	account_id: string
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
 * This is step #3 from the user [authentication page](https://developer.themoviedb.org/v4/docs/authentication-user).
 *
 * This method will finish the user authentication flow and issue an official user access token. The request token in this request is sent along as part of the `POST` body. You should still use your standard API read access token for authenticating this request.
 *
 * @link https://developer.themoviedb.org/v4/reference/auth-create-access-token
 */
export function TMDB4AuthCreateAccessToken(
	request: TMDB4AuthCreateAccessTokenRequest,
	fetcher: Fetcher,
): Promise<TMDB4AuthCreateAccessTokenResponse>
/**
 * This is step #3 from the user [authentication page](https://developer.themoviedb.org/v4/docs/authentication-user).
 *
 * This method will finish the user authentication flow and issue an official user access token. The request token in this request is sent along as part of the `POST` body. You should still use your standard API read access token for authenticating this request.
 *
 * @link https://developer.themoviedb.org/v4/reference/auth-create-access-token
 */
export function TMDB4AuthCreateAccessToken(
	request: TMDB4AuthCreateAccessTokenRequest,
	readAccessToken: string,
): Promise<TMDB4AuthCreateAccessTokenResponse>

/**
 * This is step #3 from the user [authentication page](https://developer.themoviedb.org/v4/docs/authentication-user).
 *
 * This method will finish the user authentication flow and issue an official user access token. The request token in this request is sent along as part of the `POST` body. You should still use your standard API read access token for authenticating this request.
 *
 * @link https://developer.themoviedb.org/v4/reference/auth-create-access-token
 */
export default function TMDB4AuthCreateAccessToken(
	request: TMDB4AuthCreateAccessTokenRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDB4AuthCreateAccessTokenResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.ACCOUNT4,
		"access_token",
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi, {
			method: "POST",
			rawBody: request.raw_body,
		})
	} else {
		return fetcherOrApi<TMDB4AuthCreateAccessTokenResponse>(url)
	}
}

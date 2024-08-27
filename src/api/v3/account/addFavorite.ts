import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

/**
 * @link https://developer.themoviedb.org/reference/account-add-favorite
 */
export interface TMDBAccountAddFavoriteRequest {
	/**
	 * @type int32
	 */
	account_id: number
	session_id?: string
	raw_body: any
}

type PathParams = {
	account_id: number
}

type QueryParams = {
	session_id?: string
}

/**
 * @link https://developer.themoviedb.org/reference/account-add-favorite
 */
export interface TMDBAccountAddFavoriteResponse {
	/**
	 * @type int
	 * @default 0
	 */
	status_code: number
	status_message: string
}

/**
 * @link https://developer.themoviedb.org/reference/account-add-favorite
 */
export function TMDBAccountAddFavorite(
	request: TMDBAccountAddFavoriteRequest,
	fetcher: Fetcher,
): Promise<TMDBAccountAddFavoriteResponse>
/**
 * @link https://developer.themoviedb.org/reference/account-add-favorite
 */
export function TMDBAccountAddFavorite(
	request: TMDBAccountAddFavoriteRequest,
	readAccessToken: string,
): Promise<TMDBAccountAddFavoriteResponse>

/**
 * @link https://developer.themoviedb.org/reference/account-add-favorite
 */
export default function TMDBAccountAddFavorite(
	request: TMDBAccountAddFavoriteRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBAccountAddFavoriteResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.ACCOUNT,
		"{account_id}/favorite",
		{
			path: {
				account_id: request.account_id,
			},
			query: {
				session_id: request.session_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi, {
			method: "POST",
			rawBody: request.raw_body,
		})
	} else {
		return fetcherOrApi<TMDBAccountAddFavoriteResponse>(url, {
			method: "POST",
			rawBody: request.raw_body,
		})
	}
}

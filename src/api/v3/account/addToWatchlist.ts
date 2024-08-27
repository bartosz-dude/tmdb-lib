import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

/**
 * @link https://developer.themoviedb.org/reference/account-add-to-watchlist
 */
export interface TMDBAccountAddToWatchlistRequest {
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
 * @link https://developer.themoviedb.org/reference/account-add-to-watchlist
 */
export interface TMDBAccountAddToWatchlistResponse {
	/**
	 * @type int
	 * @default 0
	 */
	status_code: number
	status_message: string
}

/**
 * @link https://developer.themoviedb.org/reference/account-add-to-watchlist
 */
export function TMDBAccountAddToWatchlist(
	request: TMDBAccountAddToWatchlistRequest,
	fetcher: Fetcher,
): Promise<TMDBAccountAddToWatchlistResponse>
/**
 * @link https://developer.themoviedb.org/reference/account-add-to-watchlist
 */
export function TMDBAccountAddToWatchlist(
	request: TMDBAccountAddToWatchlistRequest,
	readAccessToken: string,
): Promise<TMDBAccountAddToWatchlistResponse>

/**
 * @link https://developer.themoviedb.org/reference/account-add-to-watchlist
 */
export default function TMDBAccountAddToWatchlist(
	request: TMDBAccountAddToWatchlistRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBAccountAddToWatchlistResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.ACCOUNT,
		"{account_id}/watchlist",
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
		return fetcherOrApi<TMDBAccountAddToWatchlistResponse>(url, {
			method: "POST",
			rawBody: request.raw_body,
		})
	}
}

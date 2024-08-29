import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/account-details
 */
export interface TMDBAccountDetailsRequest {
	/**
	 * @type int32
	 */
	account_id: number
	session_id?: string
}

type PathParams = {
	account_id: number
}

type QueryParams = {
	session_id?: string
}

/**
 * @link https://developer.themoviedb.org/reference/account-details
 */
export interface TMDBAccountDetailsResponse {
	avatar: {
		gravatar: {
			hash: string
		}
		tmdb: {
			avatar_path: string
		}
	}
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	iso_639_1: string
	iso_3166_1: string
	name: string
	/**
	 * @default true
	 */
	include_adult: string
	username: string
}

/**
 * @link https://developer.themoviedb.org/reference/account-details
 */
export function TMDBAccountDetails(
	request: TMDBAccountDetailsRequest,
	fetcher: Fetcher,
): Promise<TMDBAccountDetailsResponse>
/**
 * @link https://developer.themoviedb.org/reference/account-details
 */
export function TMDBAccountDetails(
	request: TMDBAccountDetailsRequest,
	readAccessToken: string,
): Promise<TMDBAccountDetailsResponse>

/**
 * @link https://developer.themoviedb.org/reference/account-details
 */
export default function TMDBAccountDetails(
	request: TMDBAccountDetailsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBAccountDetailsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.ACCOUNT,
		"{account_id}",
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
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBAccountDetailsResponse>(url)
	}
}

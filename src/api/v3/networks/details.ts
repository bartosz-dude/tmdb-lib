import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/network-details
 */
export interface TMDBNetworksDetailsRequest {
	/**
	 * @type int32
	 */
	network_id: number
}

type PathParams = {
	network_id: number
}

type QueryParams = null

/**
 * @link https://developer.themoviedb.org/reference/network-details
 */
export interface TMDBNetworksDetailsResponse {
	headquarters: string
	homepage: string
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	logo_path: string
	name: string
	origin_country: string
}

/**
 * @link https://developer.themoviedb.org/reference/network-details
 */
export function TMDBNetworksDetails(
	request: TMDBNetworksDetailsRequest,
	fetcher: Fetcher,
): Promise<TMDBNetworksDetailsResponse>
/**
 * @link https://developer.themoviedb.org/reference/network-details
 */
export function TMDBNetworksDetails(
	request: TMDBNetworksDetailsRequest,
	readAccessToken: string,
): Promise<TMDBNetworksDetailsResponse>

/**
 * @link https://developer.themoviedb.org/reference/network-details
 */
export default function TMDBNetworksDetails(
	request: TMDBNetworksDetailsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBNetworksDetailsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.NETWORK,
		"{network_id}",
		{
			path: {
				network_id: request.network_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBNetworksDetailsResponse>(url)
	}
}

import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/details-copy
 */
interface TMDBNetworksAlternateNamesRequest {
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
 * @link https://developer.themoviedb.org/reference/details-copy
 */
interface TMDBNetworksAlternateNamesResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	results: {
		name: string
		type: string
	}[]
}

/**
 * Get the alternative names of a network.
 *
 * @link https://developer.themoviedb.org/reference/details-copy
 */
export function TMDBNetworksAlternateNames(
	request: TMDBNetworksAlternateNamesRequest,
	fetcher: Fetcher,
): Promise<TMDBNetworksAlternateNamesResponse>
/**
 * Get the alternative names of a network.
 *
 * @link https://developer.themoviedb.org/reference/details-copy
 */
export function TMDBNetworksAlternateNames(
	request: TMDBNetworksAlternateNamesRequest,
	readAccessToken: string,
): Promise<TMDBNetworksAlternateNamesResponse>

/**
 * Get the alternative names of a network.
 *
 * @link https://developer.themoviedb.org/reference/details-copy
 */
export default function TMDBNetworksAlternateNames(
	request: TMDBNetworksAlternateNamesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBNetworksAlternateNamesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.NETWORK,
		"{network_id}/alternative_names",
		{
			path: {
				network_id: request.network_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBNetworksAlternateNamesResponse>(url)
	}
}

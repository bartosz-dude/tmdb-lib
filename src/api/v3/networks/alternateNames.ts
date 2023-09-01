import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	network_id: number
}

type PathParams = {
	network_id: number
}

type QueryParams = null

interface Response {
	id: number,
	results: {
		name: string,
		type: string
	}[]
}

export function TMDBNetworksAlternateNames(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBNetworksAlternateNames(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBNetworksAlternateNames(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.NETWORK, "{network_id}/alternative_names", {
		path: {
			network_id: request.network_id
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
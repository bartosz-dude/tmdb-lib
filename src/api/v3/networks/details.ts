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
	headquarters: string,
	homepage: string,
	id: number,
	logo_path: string,
	name: string,
	origin_country: string
}

export function TMDBNetworksDetails(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBNetworksDetails(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBNetworksDetails(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.NETWORK, "{network_id}", {
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
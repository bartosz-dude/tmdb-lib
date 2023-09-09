import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	network_id: number
}

interface Response {
	headquarters: string,
	homepage: string,
	id: number,
	logo_path: string,
	name: string,
	origin_country: string
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBNetworksDetails(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBNetworksDetails(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBNetworksDetails(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.NETWORK, "{network_id}", {
		path: {
			network_id: request.network_id
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	network_id: number
}

interface Response {
	id: number,
	logos: {
		aspect_ration: number,
		file_path: string,
		height: number,
		id: string,
		file_type: string,
		vote_average: number,
		vote_count: number,
		width: number
	}[]
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBNetworksImages(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBNetworksImages(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBNetworksImages(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.NETWORK, "{network_id}/images", {
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
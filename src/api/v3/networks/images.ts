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

export function TMDBNetworksImages(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBNetworksImages(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBNetworksImages(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.NETWORK, "{network_id}/images", {
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
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	language?: string,
}

interface Response {
	results: {
		iso_3166_1: string,
		english_name: string,
		native_name: string
	}[]
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBWatchProvidersAvailableRegions(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBWatchProvidersAvailableRegions(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBWatchProvidersAvailableRegions(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.WATCH, "providers/regions", {
		query: request
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
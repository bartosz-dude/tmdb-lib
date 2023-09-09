import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
}

interface Response {
	images: {
		base_url: string,
		secure_base_url: string,
		backdrop_sizes: string[],
		logo_sizes: string[],
		poster_sizes: string[],
		profile_sizes: string[],
		still_sizes: string[]
	},
	change_keys: string[]
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBConfigurationDetails(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBConfigurationDetails(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBConfigurationDetails(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.CONFIGURATION, "")

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
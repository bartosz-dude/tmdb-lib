import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
}

type PathParams = null

type QueryParams = null

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

export function TMDBConfigurationDetails(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBConfigurationDetails(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBConfigurationDetails(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.CONFIGURATION, "")

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
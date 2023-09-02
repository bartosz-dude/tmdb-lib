import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	language?: string,
}

type PathParams = null

type QueryParams = {
	[ key in keyof Request ]: Request[ key ]
}

interface Response {
	results: {
		iso_3166_1: string,
		english_name: string,
		native_name: string
	}[]
}

export function TMDBWatchProvidersAvailableRegions(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBWatchProvidersAvailableRegions(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBWatchProvidersAvailableRegions(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.WATCH, "providers/regions", {
		query: request
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
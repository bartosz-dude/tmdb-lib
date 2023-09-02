import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
}

type PathParams = null

type QueryParams = null

interface Response {
	iso_3166_1: string,
	zones: string[]
}[]

export function TMDBConfigurationTimezones(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBConfigurationTimezones(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBConfigurationTimezones(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.CONFIGURATION, "timezones")

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
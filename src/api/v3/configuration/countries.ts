import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	language?: string
}

type PathParams = null

type QueryParams = {
	language?: string
}

interface Response {
	iso_3166_1: string,
	english_name: string,
	native_name: string
}[]

export function TMDBConfigurationCountries(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBConfigurationCountries(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBConfigurationCountries(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.CONFIGURATION, "countries", {
		query: {
			language: request.language
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
}

type PathParams = null

type QueryParams = null

type Response = string[]

export function TMDBConfigurationPrimaryTranslations(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBConfigurationPrimaryTranslations(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBConfigurationPrimaryTranslations(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.CONFIGURATION, "primary_translations")

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
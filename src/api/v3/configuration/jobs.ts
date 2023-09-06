import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
}

type PathParams = null

type QueryParams = null

interface Response {
	department: string,
	jobs: string[]
}[]

export function TMDBConfigurationJobs(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBConfigurationJobs(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBConfigurationJobs(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.CONFIGURATION, "jobs")

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
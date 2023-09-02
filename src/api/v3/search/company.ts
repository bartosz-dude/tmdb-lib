import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	query: string,
	page?: number
}

type PathParams = null

type QueryParams = {
	[ key in keyof Request ]: Request[ key ]
}

interface Response {
	page: number,
	results: {
		id: number,
		logo_path: string,
		name: string,
		origin_country: string
	}[],
	total_pages: number,
	total_results: number
}

export function TMDBSearchCompany(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBSearchCompany(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBSearchCompany(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.SEARCH, "company", {
		query: request
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
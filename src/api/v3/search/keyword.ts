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
		name: string
	}[],
	total_pages: number,
	total_results: number
}

export function TMDBSearchKeyword(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBSearchKeyword(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBSearchKeyword(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.SEARCH, "keyword", {
		query: request
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
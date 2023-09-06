import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	query: string,
	include_adult?: boolean,
	language?: string,
	page?: number,
	region?: string
}

type PathParams = null

type QueryParams = {
	[ key in keyof Request ]: Request[ key ]
}

interface Response {
	page: number,
	results: {
		adult: boolean,
		backdrop_path: string,
		id: number,
		name: string,
		original_language: string,
		original_name: string,
		overview: string,
		poster_path: string
	}[],
	total_pages: number,
	total_results: number
}

export function TMDBSearchCollection(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBSearchCollection(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBSearchCollection(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.SEARCH, "collection", {
		query: request
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
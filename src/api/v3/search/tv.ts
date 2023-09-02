import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	query: string,
	first_air_date_year?: string,
	include_adult?: boolean,
	language?: string,
	page?: number,
	year?: string
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
		genre_ids: number[]
		id: number,
		origin_country: string[]
		original_language: string,
		original_name: string,
		overview: string,
		popularity: number,
		poster_path: string,
		first_air_date: string,
		name: string,
		vote_average: number,
		vote_count: number
	}[],
	total_pages: number,
	total_results: number
}

export function TMDBSearchTv(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBSearchTv(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBSearchTv(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.SEARCH, "tv", {
		query: request
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
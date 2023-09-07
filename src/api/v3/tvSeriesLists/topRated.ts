import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	language?: string,
	page?: number,
	timezone?: string
}

type PathParams = null

type QueryParams = {
	[ key in keyof Omit<Request, keyof PathParams> ]: Request[ key ]
}


interface Response {
	page: number
	results: {
		backdrop_path: string,
		first_air_date: string,
		genre_ids: number[],
		id: number,
		name: string,
		origin_country: string[],
		original_language: string,
		original_name: string,
		overview: string,
		popularity: number,
		poster_path: string,
		vote_average: number,
		vote_count: number,
	}[],
	total_pages: number,
	total_results: number,
}

export function TMDBTvSeriesListsTopRated(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBTvSeriesListsTopRated(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBTvSeriesListsTopRated(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "top_rated", {
		query: {
			language: request.language,
			page: request.page,
			timezone: request.timezone
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
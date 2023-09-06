import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	movie_id: number,
	language?: string,
	page?: number
}

type PathParams = {
	movie_id: number
}

type QueryParams = {
	[ key in keyof Omit<Request, "movie_id"> ]: Request[ key ]
}


interface Response {
	id: number,
	page: number,
	results: {
		description: string,
		favorite_count: number,
		id: number,
		item_count: number,
		iso_639_1: string,
		list_type: string,
		name: string,
		poster_path: string,
	},
	total_pages: number,
	total_results: number,
}

export function TMDBMovieLists(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBMovieLists(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBMovieLists(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.MOVIE, "{movie_id}/lists", {
		path: {
			movie_id: request.movie_id
		},
		query: {
			language: request.language,
			page: request.page
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
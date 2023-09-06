import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	movie_id: number,
	end_date?: Date,
	page?: string
	start_date?: Date,
}

type PathParams = {
	movie_id: number
}

type QueryParams = {
	[ key in keyof Omit<Request, keyof PathParams> ]: Request[ key ]
}


type Response = any

export function TMDBMovieChanges(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBMovieChanges(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBMovieChanges(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.MOVIE, "{movie_id}/changes", {
		path: {
			movie_id: request.movie_id
		},
		query: {
			end_date: request.end_date,
			page: request.page,
			start_date: request.start_date
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
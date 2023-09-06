import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	movie_id: number,
	country?: string,
}

type PathParams = {
	movie_id: number
}

type QueryParams = {
	[ key in keyof Omit<Request, keyof PathParams> ]: Request[ key ]
}


interface Response {
	id: number,
	titles: {
		iso_3166_1: string,
		title: string,
		type: string,
	}[]
}

export function TMDBMovieAlternativeTitles(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBMovieAlternativeTitles(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBMovieAlternativeTitles(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.MOVIE, "{movie_id}/alternative_titles", {
		path: {
			movie_id: request.movie_id
		},
		query: {
			country: request.country
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
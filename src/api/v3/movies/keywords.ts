import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	movie_id: number,
}

type PathParams = {
	movie_id: number
}

type QueryParams = null


interface Response {
	id: number,
	keywords: {
		id: number,
		name: string
	}[]
}

export function TMDBMovieKeywords(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBMovieKeywords(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBMovieKeywords(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.MOVIE, "{movie_id}/keywords", {
		path: {
			movie_id: request.movie_id
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
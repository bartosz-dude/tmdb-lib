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
	results: {
		iso_3166_1: string,
		release_dates: {
			certification: string,
			descriptors: [],
			iso_639_1: string,
			note: string,
			release_date: string,
			type: number
		}[]
	}[]
}

export function TMDBMovieReleaseDates(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBMovieReleaseDates(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBMovieReleaseDates(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.MOVIE, "{movie_id}/release_dates", {
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
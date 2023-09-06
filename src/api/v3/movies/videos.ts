import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	movie_id: number,
	language?: string
}

type PathParams = {
	movie_id: number
}

type QueryParams = {
	[ key in keyof Omit<Request, "movie_id"> ]: Request[ key ]
}


interface Response {
	id: number,
	results: {
		iso_639_1: string,
		iso_3166_1: string,
		name: string,
		key: string,
		site: string,
		size: number,
		type: string,
		official: boolean,
		published_at: string,
		id: string,
	}[]
}

export function TMDBMovieVideos(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBMovieVideos(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBMovieVideos(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.MOVIE, "{movie_id}/videos", {
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
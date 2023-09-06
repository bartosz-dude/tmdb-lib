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
		author: string,
		author_details: {
			name: string,
			username: string,
			avatar_path: string,
			rating: string,
		},
		content: string,
		created_at: string,
		id: string,
		updated_at: string,
		url: string,
	}[]
	total_pages: number,
	total_results: number,
}

export function TMDBMovieReviews(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBMovieReviews(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBMovieReviews(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.MOVIE, "{movie_id}/reviews", {
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
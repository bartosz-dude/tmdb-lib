import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	movie_id: number,
	guest_session_id?: string,
	session_id?: string,
	raw_body: any
}

type PathParams = {
	movie_id: number
}

type QueryParams = {
	[ key in keyof Omit<Request, (keyof PathParams | "raw_body")> ]: Request[ key ]
}


interface Response {
	status_code: number,
	status_message: string
}

export function TMDBMovieDeleteRating(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBMovieDeleteRating(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBMovieDeleteRating(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.MOVIE, "{movie_id}/rating", {
		path: {
			movie_id: request.movie_id
		},
		query: {
			guest_session_id: request.guest_session_id,
			session_id: request.session_id
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url, { method: "DELETE", rawBody: request.raw_body })
	}
}
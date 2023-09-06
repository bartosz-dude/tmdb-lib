import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	movie_id: number,
	session_id?: string,
	guest_session_id?: string
}

type PathParams = {
	movie_id: number
}

type QueryParams = {
	[ key in keyof Omit<Request, keyof PathParams> ]: Request[ key ]
}


interface Response {
	id: number,
	favorite: boolean,
	rated: {
		value: number,
	}
	watchlist: boolean,
}

export function TMDBMovieAccountStates(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBMovieAccountStates(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBMovieAccountStates(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.MOVIE, "{movie_id}/account_states", {
		path: {
			movie_id: request.movie_id
		},
		query: {
			session_id: request.session_id,
			guest_session_id: request.session_id
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
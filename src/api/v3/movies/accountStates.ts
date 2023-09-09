import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	movie_id: number,
	session_id?: string,
	guest_session_id?: string
}

interface Response {
	id: number,
	favorite: boolean,
	rated: {
		value: number,
	}
	watchlist: boolean,
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBMovieAccountStates(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBMovieAccountStates(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBMovieAccountStates(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
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
		return fetcherOrApi(url)
	}
}
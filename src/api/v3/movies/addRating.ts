import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	movie_id: number,
	guest_session_id?: string,
	session_id?: string,
	raw_body: any
}

interface Response {
	status_code: number,
	status_message: string
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = Omit<OmitRequiredKeys<Request>, "raw_body">

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBMovieAddRating(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBMovieAddRating(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBMovieAddRating(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
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
		return fetcherOrApi(url, { method: "POST", rawBody: request.raw_body })
	}
}
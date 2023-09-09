import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	movie_id: number,
	end_date?: Date,
	page?: string
	start_date?: Date,
}






type Response = any

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBMovieChanges(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBMovieChanges(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBMovieChanges(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
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
		return fetcherOrApi(url)
	}
}
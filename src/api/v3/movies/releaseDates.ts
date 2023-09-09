import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	movie_id: number,
}

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

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBMovieReleaseDates(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBMovieReleaseDates(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBMovieReleaseDates(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.MOVIE, "{movie_id}/release_dates", {
		path: {
			movie_id: request.movie_id
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	movie_id: number,
	language?: string
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

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBMovieVideos(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBMovieVideos(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBMovieVideos(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.MOVIE, "{movie_id}/videos", {
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
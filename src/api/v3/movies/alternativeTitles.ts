import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	movie_id: number,
	country?: string,
}

interface Response {
	id: number,
	titles: {
		iso_3166_1: string,
		title: string,
		type: string,
	}[]
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBMovieAlternativeTitles(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBMovieAlternativeTitles(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBMovieAlternativeTitles(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.MOVIE, "{movie_id}/alternative_titles", {
		path: {
			movie_id: request.movie_id
		},
		query: {
			country: request.country
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
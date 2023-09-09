import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	movie_id: number,
	language?: string,
	page?: number
}

interface Response { // not defined in docs
	page: number,
	results: {
		adult: boolean,
		backdrop_path: string | null,
		id: number,
		title: string,
		original_language: string,
		original_title: string,
		overview: string,
		poster_path: string,
		media_type: string,
		genre_ids: number[],
		popularity: number,
		release_date: string,
		video: boolean,
		vote_average: number,
		vote_count: number
	}[],
	total_pages: number,
	total_results: number
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBMovieRecommendations(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBMovieRecommendations(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBMovieRecommendations(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.MOVIE, "{movie_id}/recommendations", {
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
		return fetcherOrApi(url)
	}
}
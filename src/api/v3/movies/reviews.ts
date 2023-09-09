import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	movie_id: number,
	language?: string,
	page?: number
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

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBMovieReviews(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBMovieReviews(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBMovieReviews(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
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
		return fetcherOrApi(url)
	}
}
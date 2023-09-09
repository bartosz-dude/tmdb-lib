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
		description: string,
		favorite_count: number,
		id: number,
		item_count: number,
		iso_639_1: string,
		list_type: string,
		name: string,
		poster_path: string,
	},
	total_pages: number,
	total_results: number,
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBMovieLists(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBMovieLists(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBMovieLists(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.MOVIE, "{movie_id}/lists", {
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
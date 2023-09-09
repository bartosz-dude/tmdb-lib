import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	query: string,
	include_adult?: boolean,
	language?: string,
	page?: number,
}

interface Response {
	page: number,
	results: {
		adult: boolean,
		backdrop_path: string,
		id: number,
		title: string,
		original_language: string,
		original_title: string,
		overview: string,
		poster_path: string,
		media_type: string,
		genre_ids: number
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

export function TMDBSearchMulti(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBSearchMulti(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBSearchMulti(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.SEARCH, "multi", {
		query: request
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
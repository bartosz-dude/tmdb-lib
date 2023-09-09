import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	query: string,
	first_air_date_year?: string,
	include_adult?: boolean,
	language?: string,
	page?: number,
	year?: string
}

interface Response {
	page: number,
	results: {
		adult: boolean,
		backdrop_path: string,
		genre_ids: number[]
		id: number,
		origin_country: string[]
		original_language: string,
		original_name: string,
		overview: string,
		popularity: number,
		poster_path: string,
		first_air_date: string,
		name: string,
		vote_average: number,
		vote_count: number
	}[],
	total_pages: number,
	total_results: number
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBSearchTv(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBSearchTv(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBSearchTv(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.SEARCH, "tv", {
		query: request
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
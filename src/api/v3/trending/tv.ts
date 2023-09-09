import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	time_window: "day" | "week",
	language?: string,
}

interface Response {
	page: number,
	results: {
		adult: boolean,
		backdrop_path: string,
		id: number,
		name: string,
		original_language: string,
		original_name: string,
		overview: string,
		poster_path: string,
		media_type: string,
		genre_ids: number[],
		popularity: number,
		first_air_date: string,
		vote_average: number,
		vote_count: number,
		origin_country: string[]
	}[],
	total_pages: number,
	total_results: number
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBTrendingTv(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTrendingTv(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTrendingTv(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TRENDING, "tv/{time_window}", {
		path: {
			time_window: request.time_window
		},
		query: {
			language: request.language
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
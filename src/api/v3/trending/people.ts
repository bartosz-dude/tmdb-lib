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
		id: number,
		name: string,
		original_name: string,
		media_type: string,
		popularity: number,
		gender: number,
		known_for_department: string,
		profile_path: string,
		known_for: {
			adult: boolean,
			backdrop_path: string,
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
		}[]
	}[],
	total_pages: number,
	total_results: number
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBTrendingPeople(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTrendingPeople(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTrendingPeople(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TRENDING, "person/{time_window}", {
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
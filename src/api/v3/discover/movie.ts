import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	certification?: string,
	"certification.gte"?: string,
	"certification.lte"?: string,
	certification_country?: string,
	include_adult?: boolean,
	include_video?: boolean,
	language?: string,
	page?: number,
	primary_release_year?: number,
	"primary_release_date.gte"?: Date,
	"primary_release_date.lte"?: Date,
	sort_by?: "popularity.asc" | "popularity.desc" | "revenue.asc" | "revenue.desc" | "primary_release_date.asc" | "primary_release_date.desc" | "vote_average.asc" | "vote_average.desc" | "vote_count.asc" | "vote_count.desc",
	"vote_average.gte"?: number,
	"vote_average.lte"?: number,
	"vote_count.gte"?: number,
	"vote_count.lte"?: number,
	watch_region?: string,
	with_cast?: string,
	with_companies?: string,
	with_crew?: string,
	with_genres?: string,
	with_keywords?: string,
	with_origin_country?: string,
	with_people?: string,
	with_release_type?: string,
	"with_runtime.gte"?: string,
	"with_runtime.lte"?: string,
	with_watch_monetization_types?: string,
	with_watch_providers?: string,
	without_companies?: string,
	without_genres?: string,
	without_keywords?: string,
	without_watch_providers?: string,
	year?: number
}

interface Response {
	page: number,
	results: {
		adult: boolean,
		backdrop_path: string,
		genre_ids: number[],
		id: number,
		original_language: string,
		original_title: string,
		overview: string,
		popularity: number,
		poster_path: string,
		release_date: string,
		title: string,
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

export function TMDBDiscoverMovie(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBDiscoverMovie(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBDiscoverMovie(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.DISCOVER, "movie", {
		query: request
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
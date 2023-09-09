import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	"air_date.gte"?: Date,
	"air_date.lte"?: Date,
	first_air_date_year?: number,
	"first_air_date.gte"?: Date,
	"first_air_date.lte"?: Date,
	include_adult?: boolean,
	include_null_first_air_dates?: boolean,
	language?: string,
	page?: number,
	screened_theatrically?: boolean,
	sort_by?: "popularity.asc" | "popularity.desc" | "revenue.asc" | "revenue.desc" | "primary_release_date.asc" | "primary_release_date.desc" | "vote_average.asc" | "vote_average.desc" | "vote_count.asc" | "vote_count.desc",
	timezone?: string,
	"vote_average.gte"?: number,
	"vote_average.lte"?: number,
	"vote_count.gte"?: number,
	"vote_count.lte"?: number,
	watch_region?: string,
	with_companies?: string,
	with_genres?: string,
	with_keywords?: string,
	with_networks?: string,
	with_origin_country?: string,
	with_original_country?: string,
	"with_runtime.gte"?: string,
	"with_runtime.lte"?: string,
	with_status?: string,
	with_watch_monetization_types?: string,
	with_watch_providers?: string,
	without_companies?: string,
	without_genres?: string,
	without_keywords?: string,
	without_watch_providers?: string,
	with_type?: string
}

interface Response {
	page: number,
	results: {
		backdrop_path: string,
		first_air_date: string,
		genre_ids: number[],
		id: number,
		name: string,
		origin_country: string,
		original_language: string,
		original_name: string,
		overview: string,
		popularity: number,
		poster_path: string,
		vote_average: number,
		vote_count: number
	}[],
	total_pages: number,
	total_results: number
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBDiscoverTv(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBDiscoverTv(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBDiscoverTv(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.DISCOVER, "tv", {
		query: request
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
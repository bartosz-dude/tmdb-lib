import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	language?: string,
	page?: number,
	timezone?: string
}

interface Response {
	page: number
	results: {
		backdrop_path: string,
		first_air_date: string,
		genre_ids: number[],
		id: number,
		name: string,
		origin_country: string[],
		original_language: string,
		original_name: string,
		overview: string,
		popularity: number,
		poster_path: string,
		vote_average: number,
		vote_count: number,
	}[],
	total_pages: number,
	total_results: number,
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBTvSeriesListsOnTheAir(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTvSeriesListsOnTheAir(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTvSeriesListsOnTheAir(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "on_the_air", {
		query: {
			language: request.language,
			page: request.page,
			timezone: request.timezone
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
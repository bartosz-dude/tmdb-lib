import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	series_id: number,
	language?: string,
	page?: number
}

interface Response {
	page: number,
	results: {
		adult: boolean,
		backdrop_path: string,
		genre_ids: number[],
		id: number,
		origin_country: string[],
		original_language: string,
		original_name: string,
		overview: string,
		popularity: number,
		poster_path: string,
		first_air_date: string,
		name: string,
		vote_average: number,
		vote_count: number,
	}[],
	total_pages: number,
	total_results: number,
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBTvSeriesSimilar(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTvSeriesSimilar(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTvSeriesSimilar(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "{series_id}/similar", {
		path: {
			series_id: request.series_id,
		},
		query: {
			language: request.language,
			page: request.page
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
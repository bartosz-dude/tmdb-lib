import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	series_id: number,
	language?: string
}

interface Response {
	cast: {
		adult: boolean,
		gender: number,
		id: number,
		known_for_department: string,
		name: string,
		original_name: string,
		popularity: number,
		profile_path: string,
		roles: {
			credit_id: string,
			character: string,
			episode_count: number
		}[],
		total_episode_count: number,
		order: number,
	}[],
	crew: {
		adult: boolean,
		gender: number,
		id: number,
		known_for_department: string,
		name: string,
		original_name: string,
		popularity: number,
		profile_path: string,
		jobs: {
			credit_id: string,
			job: string,
			episode_count: number
		}[],
		department: string,
		total_episode_count: number
	}[],
	id: number
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBTvSeriesAggregateCredits(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTvSeriesAggregateCredits(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTvSeriesAggregateCredits(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "{series_id}/aggregate_credits", {
		path: {
			series_id: request.series_id
		},
		query: {
			language: request.language
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
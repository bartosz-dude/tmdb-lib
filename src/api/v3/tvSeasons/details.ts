import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	series_id: number,
	season_number: number,
	append_to_response?: string,
	language?: string,
}

interface Response {
	_id: string,
	air_date: string,
	episodes: {
		air_date: string,
		episode_number: number,
		id: number,
		name: string,
		overview: string,
		production_code: string,
		runtime: number,
		season_number: number,
		show_id: number,
		still_path: string,
		vote_average: number,
		vote_count: number,
		crew: {
			department: string,
			job: string,
			credit_id: string,
			adult: boolean,
			gender: number,
			id: number,
			known_for_department: string,
			name: string,
			original_name: string,
			popularity: number,
			profile_path: string,
		}[],
		guest_stars: {
			character: string,
			credit_id: string,
			order: number,
			adult: boolean,
			gender: number,
			id: number,
			known_for_department: string,
			name: string,
			original_name: string,
			popularity: number,
			profile_path: string,
		}[]
	}[],
	name: string,
	overview: string,
	id: number,
	poster_path: string,
	season_number: number,
	vote_average: number
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBTvSeasonsDetails(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTvSeasonsDetails(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTvSeasonsDetails(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "{series_id}/season/{season_number}", {
		path: {
			series_id: request.series_id,
			season_number: request.season_number
		},
		query: {
			append_to_response: request.append_to_response,
			language: request.language
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
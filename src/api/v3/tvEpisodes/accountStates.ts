import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	series_id: number,
	season_number: number,
	episode_number: number,
	session_id?: string,
	guest_session_id?: string,
}

interface Response {
	air_date: string,
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
	episode_number: number,
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
	name: string,
	overview: string,
	id: number,
	production_code: string,
	runtime: number,
	season_number: number,
	show_id: number,
	still_path: string,
	vote_average: number,
	vote_count: number,
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBTvEpisodesAccountStates(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTvEpisodesAccountStates(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTvEpisodesAccountStates(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "{series_id}/season/{season_number}/episode/{episode_number}/account_states", {
		path: {
			series_id: request.series_id,
			season_number: request.season_number,
			episode_number: request.episode_number
		},
		query: {
			session_id: request.session_id,
			guest_session_id: request.guest_session_id
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<DeepReadonly<Response>>(url)
	}
}
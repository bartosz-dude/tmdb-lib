import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	series_id: number,
	season_number: number,
	episode_number: number,
	language?: string,
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
		character: string,
		credit_id: string,
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
		credit_id: string,
		department: string,
		job: string,
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
	id: number
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBTvEpisodesCredits(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTvEpisodesCredits(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTvEpisodesCredits(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "episode/{episode_id}/{series_id}/season/{season_number}/episode/{episode_number}/credits", {
		path: {
			series_id: request.series_id,
			season_number: request.season_number,
			episode_number: request.episode_number
		},
		query: {
			language: request.language
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<DeepReadonly<Response>>(url)
	}
}
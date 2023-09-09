import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	guest_session_id: string,
	language?: string,
	page?: number,
	sort_by?: "created_at.asc" | "created_at.desc"
}

interface Response {
	page: number,
	results: {
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
		rating: number
	}[],
	total_pages: number,
	total_results: number
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBGuestSessionsRatedTvEpisodes(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBGuestSessionsRatedTvEpisodes(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBGuestSessionsRatedTvEpisodes(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.GUEST_SESSION, "{guest_session_id}/rated/tv/episodes", {
		path: {
			guest_session_id: request.guest_session_id
		},
		query: {
			language: request.language,
			page: request.page,
			sort_by: request.sort_by
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
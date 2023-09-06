import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	guest_session_id: string,
	language?: string,
	page?: number,
	sort_by?: "created_at.asc" | "created_at.desc"
}

type PathParams = {
	guest_session_id: string
}

type QueryParams = {
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

export function TMDBGuestSessionsRatedTvEpisodes(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBGuestSessionsRatedTvEpisodes(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBGuestSessionsRatedTvEpisodes(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
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
		return fetcherOrApi<Response>(url)
	}
}
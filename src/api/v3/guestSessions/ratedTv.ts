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
		rating: number
	}[],
	total_pages: number,
	total_results: number
}

export function TMDBGuestSessionsRatedTv(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBGuestSessionsRatedTv(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBGuestSessionsRatedTv(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.GUEST_SESSION, "{guest_session_id}/rated/tv", {
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
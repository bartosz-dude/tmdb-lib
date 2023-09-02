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
		original_language: string,
		original_title: string,
		overview: string,
		popularity: number,
		poster_path: string,
		release_date: string,
		title: string,
		video: boolean,
		vote_average: number,
		vote_count: number,
		rating: number
	}[],
	total_pages: number,
	total_results: number
}

export function TMDBGuestSessionsRatedMovies(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBGuestSessionsRatedMovies(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBGuestSessionsRatedMovies(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.GUEST_SESSION, "{guest_session_id}/rated/movies", {
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
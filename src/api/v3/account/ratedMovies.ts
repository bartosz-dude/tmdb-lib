import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	account_id: number,
	language: string,
	page: number,
	session_id: string,
	sort_by: "created_at.asc" | "created_at.desc"
}

type PathParams = {
	account_id: number
}

type QueryParams = {
	language: string,
	page: number,
	session_id: string,
	sort_by: "created_at.asc" | "created_at.desc"
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
		vote_count: number
	}[],
	total_pages: number,
	total_results: number
}

export function TMDBAccountRatedMovies(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBAccountRatedMovies(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBAccountRatedMovies(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.ACCOUNT, "{account_id}/rated/movies", {
		path: {
			account_id: request.account_id
		},
		query: {
			language: request.language,
			page: request.page,
			session_id: request.session_id,
			sort_by: request.sort_by
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
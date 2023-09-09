import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	account_id: number,
	language?: string,
	page?: number,
	session_id?: string,
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
		vote_count: number
	}[],
	total_pages: number,
	total_results: number
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBAccountWatchlistMovies(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBAccountWatchlistMovies(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBAccountWatchlistMovies(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.ACCOUNT, "{account_id}/watchlist/movies", {
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
		return fetcherOrApi(url)
	}
}
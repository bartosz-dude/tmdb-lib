import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	movie_id: number,
	language?: string,
	page?: number
}

type PathParams = {
	movie_id: number
}

type QueryParams = {
	[ key in keyof Omit<Request, "movie_id"> ]: Request[ key ]
}


interface Response { // not defined in docs
	page: number,
	results: {
		adult: boolean,
		backdrop_path: string | null,
		id: number,
		title: string,
		original_language: string,
		original_title: string,
		overview: string,
		poster_path: string,
		media_type: string,
		genre_ids: number[],
		popularity: number,
		release_date: string,
		video: boolean,
		vote_average: number,
		vote_count: number
	}[],
	total_pages: number,
	total_results: number
}

export function TMDBMovieRecommendations(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBMovieRecommendations(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBMovieRecommendations(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.MOVIE, "{movie_id}/recommendations", {
		path: {
			movie_id: request.movie_id
		},
		query: {
			language: request.language,
			page: request.page
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
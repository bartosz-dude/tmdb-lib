import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/movie-recommendations
 */
export interface TMDBMovieRecommendationsRequest {
	/**
	 * @type int32
	 */
	movie_id: number
	/**
	 * @default "en-US"
	 */
	language?: string
	/**
	 * @type int32
	 * @default 1
	 */
	page?: number
}

type PathParams = {
	movie_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBMovieRecommendationsRequest,
		"movie_id"
	>]: TMDBMovieRecommendationsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/movie-recommendations
 */
export interface TMDBMovieRecommendationsResponse {
	// not defined in docs
	/**
	 * @type int
	 */
	page: number
	results: {
		backdrop_path: string | null
		/**
		 * @type int
		 */
		id: number
		title: string
		original_title: string
		overview: string
		poster_path: string
		media_type: string
		adult: boolean
		original_language: string
		/**
		 * @type int[]
		 */
		genre_ids: number[]
		/**
		 * @type number
		 */
		popularity: number
		release_date: string
		video: boolean
		/**
		 * @type number
		 */
		vote_average: number
		/**
		 * @type int
		 */
		vote_count: number
	}[]
	/**
	 * @type int
	 */
	total_pages: number
	/**
	 * @type int
	 */
	total_results: number
}

/**
 * @link https://developer.themoviedb.org/reference/movie-recommendations
 */
export function TMDBMovieRecommendations(
	request: TMDBMovieRecommendationsRequest,
	fetcher: Fetcher,
): Promise<TMDBMovieRecommendationsResponse>
/**
 * @link https://developer.themoviedb.org/reference/movie-recommendations
 */
export function TMDBMovieRecommendations(
	request: TMDBMovieRecommendationsRequest,
	readAccessToken: string,
): Promise<TMDBMovieRecommendationsResponse>

/**
 * @link https://developer.themoviedb.org/reference/movie-recommendations
 */
export default function TMDBMovieRecommendations(
	request: TMDBMovieRecommendationsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBMovieRecommendationsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.MOVIE,
		"{movie_id}/recommendations",
		{
			path: {
				movie_id: request.movie_id,
			},
			query: {
				language: request.language,
				page: request.page,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBMovieRecommendationsResponse>(url)
	}
}

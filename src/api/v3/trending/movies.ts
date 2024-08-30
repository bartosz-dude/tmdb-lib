import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/trending-movies
 */
export interface TMDBTrendingMoviesRequest {
	time_window: "day" | "week"
	/**
	 * `ISO-639-1` - `ISO-3166-1` code
	 * @default "en-US"
	 */
	language?: string
}

type PathParams = {
	time_window: "day" | "week"
}

type QueryParams = {
	language?: string
}

/**
 * @link https://developer.themoviedb.org/reference/trending-movies
 */
export interface TMDBTrendingMoviesResponse {
	/**
	 * @type int
	 * @default 0
	 */
	page: number
	results: {
		/**
		 * @default true
		 */
		adult: boolean
		backdrop_path: string
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		title: string
		original_language: string
		original_title: string
		overview: string
		poster_path: string
		media_type: string
		/**
		 * @type int[]
		 */
		genre_ids: number[]
		/**
		 * @type int
		 * @default 0
		 */
		popularity: number
		release_date: string
		/**
		 * @default true
		 */
		video: boolean
		/**
		 * @type number
		 * @default 0
		 */
		vote_average: number
		/**
		 * @type int
		 * @default 0
		 */
		vote_count: number
	}[]
	/**
	 * @type int
	 * @default 0
	 */
	total_pages: number
	/**
	 * @type int
	 * @default 0
	 */
	total_results: number
}

/**
 * Get the trending movies on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/trending-movies
 */
export function TMDBTrendingMovies(
	request: TMDBTrendingMoviesRequest,
	fetcher: Fetcher,
): Promise<TMDBTrendingMoviesResponse>
/**
 * Get the trending movies on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/trending-movies
 */
export function TMDBTrendingMovies(
	request: TMDBTrendingMoviesRequest,
	readAccessToken: string,
): Promise<TMDBTrendingMoviesResponse>

/**
 * Get the trending movies on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/trending-movies
 */
export default function TMDBTrendingMovies(
	request: TMDBTrendingMoviesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTrendingMoviesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TRENDING,
		"movie/{time_window}",
		{
			path: {
				time_window: request.time_window,
			},
			query: {
				language: request.language,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBTrendingMoviesResponse>(url)
	}
}

import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/search-movie
 */
export interface TMDBSearchMovieRequest {
	query: string
	/**
	 * @default false
	 */
	include_adult?: boolean
	/**
	 * @default "en-US"
	 */
	language?: string
	primary_release_year?: string
	/**
	 * @type int32
	 * @default 1
	 */
	page?: number
	region?: string
	year?: string
}

type PathParams = null

type QueryParams = {
	[key in keyof TMDBSearchMovieRequest]: TMDBSearchMovieRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/search-movie
 */
export interface TMDBSearchMovieResponse {
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
		 * @type int[]
		 */
		genre_ids: number[]
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		original_language: string
		original_title: string
		overview: string
		/**
		 * @type int
		 * @default 0
		 */
		popularity: number
		poster_path: string
		release_date: string
		title: string
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
 * Search for movies by their original, translated and alternative titles.
 *
 * @link https://developer.themoviedb.org/reference/search-movie
 */
export function TMDBSearchMovie(
	request: TMDBSearchMovieRequest,
	fetcher: Fetcher,
): Promise<TMDBSearchMovieResponse>
/**
 * Search for movies by their original, translated and alternative titles.
 *
 * @link https://developer.themoviedb.org/reference/search-movie
 */
export function TMDBSearchMovie(
	request: TMDBSearchMovieRequest,
	readAccessToken: string,
): Promise<TMDBSearchMovieResponse>

/**
 * Search for movies by their original, translated and alternative titles.
 *
 * @link https://developer.themoviedb.org/reference/search-movie
 */
export default function TMDBSearchMovie(
	request: TMDBSearchMovieRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBSearchMovieResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.SEARCH, "movie", {
		query: request,
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBSearchMovieResponse>(url)
	}
}

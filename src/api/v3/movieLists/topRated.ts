import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/movie-top-rated-list
 */
export interface TMDBMovieListsTopRatedRequest {
	/**
	 * @default "en-US"
	 */
	language?: string
	/**
	 * @type int32
	 * @default 1
	 */
	page?: number
	/**
	 * ISO-3166-1 code
	 */
	region?: string
}

type PathParams = null

type QueryParams = {
	[key in keyof TMDBMovieListsTopRatedRequest]: TMDBMovieListsTopRatedRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/movie-top-rated-list
 */
export interface TMDBMovieListsTopRatedResponse {
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
		 * @type number
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
 * Get a list of movies ordered by rating.
 *
 * This call is really just a discover call behind the scenes. If you would like to tweak any of the default filters head over and read about [discover](https://developer.themoviedb.org/reference/discover-movie).
 *
 * @link https://developer.themoviedb.org/reference/movie-top-rated-list
 */
export function TMDBMovieListsTopRated(
	request: TMDBMovieListsTopRatedRequest,
	fetcher: Fetcher,
): Promise<TMDBMovieListsTopRatedResponse>
/**
 * Get a list of movies ordered by rating.
 *
 * This call is really just a discover call behind the scenes. If you would like to tweak any of the default filters head over and read about [discover](https://developer.themoviedb.org/reference/discover-movie).
 *
 * @link https://developer.themoviedb.org/reference/movie-top-rated-list
 */
export function TMDBMovieListsTopRated(
	request: TMDBMovieListsTopRatedRequest,
	readAccessToken: string,
): Promise<TMDBMovieListsTopRatedResponse>

/**
 * Get a list of movies ordered by rating.
 *
 * This call is really just a discover call behind the scenes. If you would like to tweak any of the default filters head over and read about [discover](https://developer.themoviedb.org/reference/discover-movie).
 *
 * @link https://developer.themoviedb.org/reference/movie-top-rated-list
 */
export default function TMDBMovieListsTopRated(
	request: TMDBMovieListsTopRatedRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBMovieListsTopRatedResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.MOVIE,
		"top_rated",
		{
			query: {
				language: request.language,
				page: request.page,
				region: request.region,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBMovieListsTopRatedResponse>(url)
	}
}

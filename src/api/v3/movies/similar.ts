import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/movie-similar
 */
export interface TMDBMovieSimilarRequest {
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
		TMDBMovieSimilarRequest,
		"movie_id"
	>]: TMDBMovieSimilarRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/movie-similar
 */
export interface TMDBMovieSimilarResponse {
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
	}
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
 * Get the similar movies based on genres and keywords.
 *
 * This method only looks for other items based on genres and plot keywords. As such, the results found here are not always going to be precise. Use it with that in mind.
 *
 * @link https://developer.themoviedb.org/reference/movie-similar
 */
export function TMDBMovieSimilar(
	request: TMDBMovieSimilarRequest,
	fetcher: Fetcher,
): Promise<TMDBMovieSimilarResponse>
/**
 * Get the similar movies based on genres and keywords.
 *
 * This method only looks for other items based on genres and plot keywords. As such, the results found here are not always going to be precise. Use it with that in mind.
 *
 * @link https://developer.themoviedb.org/reference/movie-similar
 */
export function TMDBMovieSimilar(
	request: TMDBMovieSimilarRequest,
	readAccessToken: string,
): Promise<TMDBMovieSimilarResponse>

/**
 * Get the similar movies based on genres and keywords.
 *
 * This method only looks for other items based on genres and plot keywords. As such, the results found here are not always going to be precise. Use it with that in mind.
 *
 * @link https://developer.themoviedb.org/reference/movie-similar
 */
export default function TMDBMovieSimilar(
	request: TMDBMovieSimilarRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBMovieSimilarResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.MOVIE,
		"{movie_id}/similar",
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
		return fetcherOrApi<TMDBMovieSimilarResponse>(url)
	}
}

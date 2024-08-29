import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/movie-reviews
 */
export interface TMDBMovieReviewsRequest {
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
		TMDBMovieReviewsRequest,
		"movie_id"
	>]: TMDBMovieReviewsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/movie-reviews
 */
export interface TMDBMovieReviewsResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	/**
	 * @type int
	 * @default 0
	 */
	page: number
	results: {
		author: string
		author_details: {
			name: string
			username: string
			avatar_path: string
			rating: string
		}
		content: string
		created_at: string
		id: string
		updated_at: string
		url: string
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
 * Get the user reviews for a movie.
 *
 * @link https://developer.themoviedb.org/reference/movie-reviews
 */
export function TMDBMovieReviews(
	request: TMDBMovieReviewsRequest,
	fetcher: Fetcher,
): Promise<TMDBMovieReviewsResponse>
/**
 * Get the user reviews for a movie.
 *
 * @link https://developer.themoviedb.org/reference/movie-reviews
 */
export function TMDBMovieReviews(
	request: TMDBMovieReviewsRequest,
	readAccessToken: string,
): Promise<TMDBMovieReviewsResponse>

/**
 * Get the user reviews for a movie.
 *
 * @link https://developer.themoviedb.org/reference/movie-reviews
 */
export default function TMDBMovieReviews(
	request: TMDBMovieReviewsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBMovieReviewsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.MOVIE,
		"{movie_id}/reviews",
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
		return fetcherOrApi<TMDBMovieReviewsResponse>(url)
	}
}

import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/tv-episode-delete-rating
 */
export interface TMDBMovieDeleteRatingRequest {
	/**
	 * @type int32
	 */
	movie_id: number
	guest_session_id?: string
	session_id?: string
	raw_body: any
}

type PathParams = {
	movie_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBMovieDeleteRatingRequest,
		keyof PathParams | "raw_body"
	>]: TMDBMovieDeleteRatingRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-episode-delete-rating
 */
export interface TMDBMovieDeleteRatingResponse {
	/**
	 * @type int
	 * @default 0
	 */
	status_code: number
	status_message: string
}

/**
 * Delete your rating on a TV episode.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-delete-rating
 */
export function TMDBMovieDeleteRating(
	request: TMDBMovieDeleteRatingRequest,
	fetcher: Fetcher,
): Promise<TMDBMovieDeleteRatingResponse>
/**
 * Delete your rating on a TV episode.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-delete-rating
 */
export function TMDBMovieDeleteRating(
	request: TMDBMovieDeleteRatingRequest,
	readAccessToken: string,
): Promise<TMDBMovieDeleteRatingResponse>

/**
 * Delete your rating on a TV episode.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-delete-rating
 */
export default function TMDBMovieDeleteRating(
	request: TMDBMovieDeleteRatingRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBMovieDeleteRatingResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.MOVIE,
		"{movie_id}/rating",
		{
			path: {
				movie_id: request.movie_id,
			},
			query: {
				guest_session_id: request.guest_session_id,
				session_id: request.session_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBMovieDeleteRatingResponse>(url, {
			method: "DELETE",
			rawBody: request.raw_body,
		})
	}
}

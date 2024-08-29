import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/movie-add-rating
 */
export interface TMDBMovieAddRatingRequest {
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
		TMDBMovieAddRatingRequest,
		keyof PathParams | "raw_body"
	>]: TMDBMovieAddRatingRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/movie-add-rating
 */
export interface TMDBMovieAddRatingResponse {
	/**
	 * @type int
	 * @default 0
	 */
	status_code: number
	status_message: string
}

/**
 * Rate a movie and save it to your rated list.
 *
 * By default, we will remove a rated item from your watchlist if it's present. This keeps your "watched" and and "want to watch" lists tidy and in sync. You can edit this behavior [here](https://www.themoviedb.org/settings/sharing).
 *
 * @link https://developer.themoviedb.org/reference/movie-add-rating
 */
export function TMDBMovieAddRating(
	request: TMDBMovieAddRatingRequest,
	fetcher: Fetcher,
): Promise<TMDBMovieAddRatingResponse>
/**
 * Rate a movie and save it to your rated list.
 *
 * By default, we will remove a rated item from your watchlist if it's present. This keeps your "watched" and and "want to watch" lists tidy and in sync. You can edit this behavior [here](https://www.themoviedb.org/settings/sharing).
 *
 * @link https://developer.themoviedb.org/reference/movie-add-rating
 */
export function TMDBMovieAddRating(
	request: TMDBMovieAddRatingRequest,
	readAccessToken: string,
): Promise<TMDBMovieAddRatingResponse>

/**
 * Rate a movie and save it to your rated list.
 *
 * By default, we will remove a rated item from your watchlist if it's present. This keeps your "watched" and and "want to watch" lists tidy and in sync. You can edit this behavior [here](https://www.themoviedb.org/settings/sharing).
 *
 * @link https://developer.themoviedb.org/reference/movie-add-rating
 */
export default function TMDBMovieAddRating(
	request: TMDBMovieAddRatingRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBMovieAddRatingResponse> {
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
		return fetcherOrApi<TMDBMovieAddRatingResponse>(url, {
			method: "POST",
			rawBody: request.raw_body,
		})
	}
}

import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/movie-changes
 */
export interface TMDBMovieChangesRequest {
	/**
	 * @type int32
	 */
	movie_id: number
	end_date?: Date
	/**
	 * @type int32
	 * @default 1
	 */
	page?: number
	start_date?: Date
}

type PathParams = {
	movie_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBMovieChangesRequest,
		keyof PathParams
	>]: TMDBMovieChangesRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/movie-changes
 */
export interface TMDBMovieChangesResponse {
	changes: {
		key: string
		items: {
			id: string
			action: string
			time: string
			iso_639_1: string
			iso_3166_1: string
			value: {
				poster: {
					file_path: string
				}
			}
		}[]
	}[]
}

/**
 * Get the recent changes for a movie.
 *
 * Get the changes for a movie. By default only the last 24 hours are returned.
 *
 * You can query up to 14 days in a single query by using the `start_date` and `end_date` query parameters.
 *
 * @link https://developer.themoviedb.org/reference/movie-changes
 */
export function TMDBMovieChanges(
	request: TMDBMovieChangesRequest,
	fetcher: Fetcher,
): Promise<TMDBMovieChangesResponse>
/**
 * Get the recent changes for a movie.
 *
 * Get the changes for a movie. By default only the last 24 hours are returned.
 *
 * You can query up to 14 days in a single query by using the `start_date` and `end_date` query parameters.
 *
 * @link https://developer.themoviedb.org/reference/movie-changes
 */
export function TMDBMovieChanges(
	request: TMDBMovieChangesRequest,
	readAccessToken: string,
): Promise<TMDBMovieChangesResponse>

/**
 * Get the recent changes for a movie.
 *
 * Get the changes for a movie. By default only the last 24 hours are returned.
 *
 * You can query up to 14 days in a single query by using the `start_date` and `end_date` query parameters.
 *
 * @link https://developer.themoviedb.org/reference/movie-changes
 */
export default function TMDBMovieChanges(
	request: TMDBMovieChangesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBMovieChangesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.MOVIE,
		"{movie_id}/changes",
		{
			path: {
				movie_id: request.movie_id,
			},
			query: {
				end_date: request.end_date,
				page: request.page,
				start_date: request.start_date,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBMovieChangesResponse>(url)
	}
}

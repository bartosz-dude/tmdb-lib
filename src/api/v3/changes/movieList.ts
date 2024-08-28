import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

/**
 * @link https://developer.themoviedb.org/reference/changes-movie-list
 */
export interface TMDBChangesMovieListRequest {
	end_date?: Date
	/**
	 * @type int32
	 * @default 1
	 */
	page?: number
	start_date?: Date
}

type PathParams = null

type QueryParams = {
	end_date?: Date
	page?: number
	start_date?: Date
}

/**
 * @link https://developer.themoviedb.org/reference/changes-movie-list
 */
export interface TMDBChangesMovieListResponse {
	results: {
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		/**
		 * @default true
		 */
		adult: boolean
	}[]
	/**
	 * @type int
	 * @default 0
	 */
	page: number
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
 * Get a list of all of the movie ids that have been changed in the past 24 hours.
 *
 * You can query this method up to 14 days at a time. Use the `start_date` and `end_date` query parameters. 100 items are returned per page.
 *
 * @link https://developer.themoviedb.org/reference/changes-movie-list
 */
export function TMDBChangesMovieList(
	request: TMDBChangesMovieListRequest,
	fetcher: Fetcher,
): Promise<TMDBChangesMovieListResponse>
/**
 * Get a list of all of the movie ids that have been changed in the past 24 hours.
 *
 * You can query this method up to 14 days at a time. Use the `start_date` and `end_date` query parameters. 100 items are returned per page.
 *
 * @link https://developer.themoviedb.org/reference/changes-movie-list
 */
export function TMDBChangesMovieList(
	request: TMDBChangesMovieListRequest,
	readAccessToken: string,
): Promise<TMDBChangesMovieListResponse>

/**
 * Get a list of all of the movie ids that have been changed in the past 24 hours.
 *
 * You can query this method up to 14 days at a time. Use the `start_date` and `end_date` query parameters. 100 items are returned per page.
 *
 * @link https://developer.themoviedb.org/reference/changes-movie-list
 */
export default function TMDBChangesMovieList(
	request: TMDBChangesMovieListRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBChangesMovieListResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.MOVIE,
		"changes",
		{
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
		return fetcherOrApi<TMDBChangesMovieListResponse>(url)
	}
}

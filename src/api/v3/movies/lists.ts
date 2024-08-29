import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/movie-lists
 */
export interface TMDBMovieListsRequest {
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
		TMDBMovieListsRequest,
		"movie_id"
	>]: TMDBMovieListsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/movie-lists
 */
export interface TMDBMovieListsResponse {
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
		description: string
		/**
		 * @type int
		 * @default 0
		 */
		favorite_count: number
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		/**
		 * @type int
		 * @default 0
		 */
		item_count: number
		iso_639_1: string
		list_type: string
		name: string
		poster_path: string
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
 * Get the lists that a movie has been added to.
 *
 * @link https://developer.themoviedb.org/reference/movie-lists
 */
export function TMDBMovieLists(
	request: TMDBMovieListsRequest,
	fetcher: Fetcher,
): Promise<TMDBMovieListsResponse>
/**
 * Get the lists that a movie has been added to.
 *
 * @link https://developer.themoviedb.org/reference/movie-lists
 */
export function TMDBMovieLists(
	request: TMDBMovieListsRequest,
	readAccessToken: string,
): Promise<TMDBMovieListsResponse>

/**
 * Get the lists that a movie has been added to.
 *
 * @link https://developer.themoviedb.org/reference/movie-lists
 */
export default function TMDBMovieLists(
	request: TMDBMovieListsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBMovieListsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.MOVIE,
		"{movie_id}/lists",
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
		return fetcherOrApi<TMDBMovieListsResponse>(url)
	}
}

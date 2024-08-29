import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/genre-movie-list
 */
export interface TMDBGenresMovieListRequest {
	/**
	 * @default "en"
	 */
	language?: string
}

type PathParams = null

type QueryParams = {
	language?: string
}

/**
 * @link https://developer.themoviedb.org/reference/genre-movie-list
 */
export interface TMDBGenresMovieListResponse {
	genres: {
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		name: string
	}[]
}

/**
 * Get the list of official genres for movies.
 *
 * @link https://developer.themoviedb.org/reference/genre-movie-list
 */
export function TMDBGenresMovieList(
	request: TMDBGenresMovieListRequest,
	fetcher: Fetcher,
): Promise<TMDBGenresMovieListResponse>
/**
 * Get the list of official genres for movies.
 *
 * @link https://developer.themoviedb.org/reference/genre-movie-list
 */
export function TMDBGenresMovieList(
	request: TMDBGenresMovieListRequest,
	readAccessToken: string,
): Promise<TMDBGenresMovieListResponse>

/**
 * Get the list of official genres for movies.
 *
 * @link https://developer.themoviedb.org/reference/genre-movie-list
 */
export default function TMDBGenresMovieList(
	request: TMDBGenresMovieListRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBGenresMovieListResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.GENRE,
		"movie/list",
		{
			query: {
				language: request.language,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBGenresMovieListResponse>(url)
	}
}

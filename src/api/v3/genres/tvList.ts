import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/genre-tv-list
 */
export interface TMDBGenresTvListRequest {
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
 * @link https://developer.themoviedb.org/reference/genre-tv-list
 */
export interface TMDBGenresTvListResponse {
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
 * Get the list of official genres for TV shows.
 *
 * @link https://developer.themoviedb.org/reference/genre-tv-list
 */
export function TMDBGenresTvList(
	request: TMDBGenresTvListRequest,
	fetcher: Fetcher,
): Promise<TMDBGenresTvListResponse>
/**
 * Get the list of official genres for TV shows.
 *
 * @link https://developer.themoviedb.org/reference/genre-tv-list
 */
export function TMDBGenresTvList(
	request: TMDBGenresTvListRequest,
	readAccessToken: string,
): Promise<TMDBGenresTvListResponse>

/**
 * Get the list of official genres for TV shows.
 *
 * @link https://developer.themoviedb.org/reference/genre-tv-list
 */
export default function TMDBGenresTvList(
	request: TMDBGenresTvListRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBGenresTvListResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.GENRE,
		"tv/list",
		{
			query: {
				language: request.language,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBGenresTvListResponse>(url)
	}
}

import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/movie-latest-id
 */
export interface TMDBMovieLatestRequest {}

type PathParams = null

type QueryParams = null

/**
 * @link https://developer.themoviedb.org/reference/movie-latest-id
 */
export interface TMDBMovieLatestResponse {
	/**
	 * @default true
	 */
	adult: boolean
	backdrop_path: string
	belongs_to_collection: string
	/**
	 * @type int
	 * @default 0
	 */
	budget: number
	genres: []
	homepage: string
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	imdb_id: string
	original_language: string
	original_title: string
	overview: string
	/**
	 * @type number
	 * @default 0
	 */
	popularity: number
	poster_path: string
	production_companies: []
	production_countries: []
	release_date: string
	/**
	 * @type int
	 * @default 0
	 */
	revenue: number
	/**
	 * @type int
	 * @default 0
	 */
	runtime: number
	spoken_languages: []
	status: string
	tagline: string
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
 * Get the newest movie ID.
 *
 * @link https://developer.themoviedb.org/reference/movie-latest-id
 */
export function TMDBMovieLatest(
	request: TMDBMovieLatestRequest,
	fetcher: Fetcher,
): Promise<TMDBMovieLatestResponse>
/**
 * Get the newest movie ID.
 *
 * @link https://developer.themoviedb.org/reference/movie-latest-id
 */
export function TMDBMovieLatest(
	request: TMDBMovieLatestRequest,
	readAccessToken: string,
): Promise<TMDBMovieLatestResponse>

/**
 * Get the newest movie ID.
 *
 * @link https://developer.themoviedb.org/reference/movie-latest-id
 */
export default function TMDBMovieLatest(
	request: TMDBMovieLatestRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBMovieLatestResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.MOVIE, "latest")

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBMovieLatestResponse>(url)
	}
}

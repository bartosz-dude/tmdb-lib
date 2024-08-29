import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/movie-alternative-titles
 */
export interface TMDBMovieAlternativeTitlesRequest {
	/**
	 * @type int32
	 */
	movie_id: number
	/**
	 * specify a ISO-3166-1 value to filter the results
	 */
	country?: string
}

type PathParams = {
	movie_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBMovieAlternativeTitlesRequest,
		keyof PathParams
	>]: TMDBMovieAlternativeTitlesRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/movie-alternative-titles
 */
export interface TMDBMovieAlternativeTitlesResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	titles: {
		iso_3166_1: string
		title: string
		type: string
	}[]
}

/**
 * Get the alternative titles for a movie.
 *
 * @link https://developer.themoviedb.org/reference/movie-alternative-titles
 */
export function TMDBMovieAlternativeTitles(
	request: TMDBMovieAlternativeTitlesRequest,
	fetcher: Fetcher,
): Promise<TMDBMovieAlternativeTitlesResponse>
/**
 * Get the alternative titles for a movie.
 *
 * @link https://developer.themoviedb.org/reference/movie-alternative-titles
 */
export function TMDBMovieAlternativeTitles(
	request: TMDBMovieAlternativeTitlesRequest,
	readAccessToken: string,
): Promise<TMDBMovieAlternativeTitlesResponse>

/**
 * Get the alternative titles for a movie.
 *
 * @link https://developer.themoviedb.org/reference/movie-alternative-titles
 */
export default function TMDBMovieAlternativeTitles(
	request: TMDBMovieAlternativeTitlesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBMovieAlternativeTitlesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.MOVIE,
		"{movie_id}/alternative_titles",
		{
			path: {
				movie_id: request.movie_id,
			},
			query: {
				country: request.country,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBMovieAlternativeTitlesResponse>(url)
	}
}

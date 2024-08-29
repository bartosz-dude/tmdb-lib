import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/movie-translations
 */
export interface TMDBMovieTranslationsRequest {
	/**
	 * @type int32
	 */
	movie_id: number
}

type PathParams = {
	movie_id: number
}

type QueryParams = null

/**
 * @link https://developer.themoviedb.org/reference/movie-translations
 */
export interface TMDBMovieTranslationsResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	translations: {
		iso_3166_1: string
		iso_639_1: string
		name: string
		english_name: string
		data: {
			homepage: string
			overview: string
			/**
			 * @type int
			 * @default 0
			 */
			runtime: number
			tagline: string
			title: string
		}
	}[]
}

/**
 * Get the translations for a movie.
 *
 * Take a read through our [language](https://developer.themoviedb.org/docs/languages) documentation for more information about languages on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/movie-translations
 */
export function TMDBMovieTranslations(
	request: TMDBMovieTranslationsRequest,
	fetcher: Fetcher,
): Promise<TMDBMovieTranslationsResponse>
/**
 * Get the translations for a movie.
 *
 * Take a read through our [language](https://developer.themoviedb.org/docs/languages) documentation for more information about languages on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/movie-translations
 */
export function TMDBMovieTranslations(
	request: TMDBMovieTranslationsRequest,
	readAccessToken: string,
): Promise<TMDBMovieTranslationsResponse>

/**
 * Get the translations for a movie.
 *
 * Take a read through our [language](https://developer.themoviedb.org/docs/languages) documentation for more information about languages on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/movie-translations
 */
export default function TMDBMovieTranslations(
	request: TMDBMovieTranslationsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBMovieTranslationsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.MOVIE,
		"{movie_id}/translations",
		{
			path: {
				movie_id: request.movie_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBMovieTranslationsResponse>(url)
	}
}

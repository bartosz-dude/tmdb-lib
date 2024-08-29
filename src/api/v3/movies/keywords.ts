import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/movie-keywords
 */
export interface TMDBMovieKeywordsRequest {
	movie_id: string
}

type PathParams = {
	movie_id: string
}

type QueryParams = null

/**
 * @link https://developer.themoviedb.org/reference/movie-keywords
 */
export interface TMDBMovieKeywordsResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	keywords: {
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		name: string
	}[]
}

/**
 * @link https://developer.themoviedb.org/reference/movie-keywords
 */
export function TMDBMovieKeywords(
	request: TMDBMovieKeywordsRequest,
	fetcher: Fetcher,
): Promise<TMDBMovieKeywordsResponse>
export function TMDBMovieKeywords(
	request: TMDBMovieKeywordsRequest,
	readAccessToken: string,
): Promise<TMDBMovieKeywordsResponse>

/**
 * @link https://developer.themoviedb.org/reference/movie-keywords
 */
export default function TMDBMovieKeywords(
	request: TMDBMovieKeywordsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBMovieKeywordsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.MOVIE,
		"{movie_id}/keywords",
		{
			path: {
				movie_id: request.movie_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBMovieKeywordsResponse>(url)
	}
}

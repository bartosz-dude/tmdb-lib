import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/movie-external-ids
 */
export interface TMDBMovieExternalIdsRequest {
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
 * @link https://developer.themoviedb.org/reference/movie-external-ids
 */
export interface TMDBMovieExternalIdsResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	imdb_id: string
	wikidata_id: string
	facebook_id: string
	instagram_id: string
	twitter_id: string
}

/**
 * @link https://developer.themoviedb.org/reference/movie-external-ids
 */
export function TMDBMovieExternalIds(
	request: TMDBMovieExternalIdsRequest,
	fetcher: Fetcher,
): Promise<TMDBMovieExternalIdsResponse>
/**
 * @link https://developer.themoviedb.org/reference/movie-external-ids
 */
export function TMDBMovieExternalIds(
	request: TMDBMovieExternalIdsRequest,
	readAccessToken: string,
): Promise<TMDBMovieExternalIdsResponse>

/**
 * @link https://developer.themoviedb.org/reference/movie-external-ids
 */
export default function TMDBMovieExternalIds(
	request: TMDBMovieExternalIdsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBMovieExternalIdsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.MOVIE,
		"{movie_id}/external_ids",
		{
			path: {
				movie_id: request.movie_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBMovieExternalIdsResponse>(url)
	}
}

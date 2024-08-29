import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/movie-release-dates
 */
export interface TMDBMovieReleaseDatesRequest {
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
 * @link https://developer.themoviedb.org/reference/movie-release-dates
 */
export interface TMDBMovieReleaseDatesResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	results: {
		iso_3166_1: string
		release_dates: {
			certification: string
			descriptors: []
			iso_639_1: string
			note: string
			release_date: string
			/**
			 * @type int
			 * @default 0
			 */
			type: number
		}[]
	}[]
}

/**
 * Get the release dates and certifications for a movie.
 *
 * The release types and statuses used on TMDB are the following:
 * | Release              | Type  |
 * |----------------------|-------|
 * | Premiere             |   1   |
 * | Theatrical (limited) |   2   |
 * | Theatrical           |   3   |
 * | Digital              |   4   |
 * | Physical             |   5   |
 * | TV                   |   6   |
 *
 * @link https://developer.themoviedb.org/reference/movie-release-dates
 */
export function TMDBMovieReleaseDates(
	request: TMDBMovieReleaseDatesRequest,
	fetcher: Fetcher,
): Promise<TMDBMovieReleaseDatesResponse>
/**
 * Get the release dates and certifications for a movie.
 *
 * The release types and statuses used on TMDB are the following:
 * | Release              | Type  |
 * |----------------------|-------|
 * | Premiere             |   1   |
 * | Theatrical (limited) |   2   |
 * | Theatrical           |   3   |
 * | Digital              |   4   |
 * | Physical             |   5   |
 * | TV                   |   6   |
 *
 * @link https://developer.themoviedb.org/reference/movie-release-dates
 */
export function TMDBMovieReleaseDates(
	request: TMDBMovieReleaseDatesRequest,
	readAccessToken: string,
): Promise<TMDBMovieReleaseDatesResponse>

/**
 * Get the release dates and certifications for a movie.
 *
 * The release types and statuses used on TMDB are the following:
 * | Release              | Type  |
 * |----------------------|-------|
 * | Premiere             |   1   |
 * | Theatrical (limited) |   2   |
 * | Theatrical           |   3   |
 * | Digital              |   4   |
 * | Physical             |   5   |
 * | TV                   |   6   |
 *
 * @link https://developer.themoviedb.org/reference/movie-release-dates
 */
export default function TMDBMovieReleaseDates(
	request: TMDBMovieReleaseDatesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBMovieReleaseDatesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.MOVIE,
		"{movie_id}/release_dates",
		{
			path: {
				movie_id: request.movie_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBMovieReleaseDatesResponse>(url)
	}
}

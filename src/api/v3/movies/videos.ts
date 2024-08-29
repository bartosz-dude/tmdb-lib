import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/movie-videos
 */
export interface TMDBMovieVideosRequest {
	/**
	 * @type int32
	 */
	movie_id: number
	/**
	 * @default "en-US"
	 */
	language?: string
}

type PathParams = {
	movie_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBMovieVideosRequest,
		"movie_id"
	>]: TMDBMovieVideosRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/movie-videos
 */
export interface TMDBMovieVideosResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	results: {
		iso_639_1: string
		iso_3166_1: string
		name: string
		key: string
		site: string
		/**
		 * @type int
		 * @default 0
		 */
		size: number
		type: string
		/**
		 * @default true
		 */
		official: boolean
		published_at: string
		id: string
	}[]
}

/**
 * @link https://developer.themoviedb.org/reference/movie-videos
 */
export function TMDBMovieVideos(
	request: TMDBMovieVideosRequest,
	fetcher: Fetcher,
): Promise<TMDBMovieVideosResponse>
export function TMDBMovieVideos(
	request: TMDBMovieVideosRequest,
	readAccessToken: string,
): Promise<TMDBMovieVideosResponse>

/**
 * @link https://developer.themoviedb.org/reference/movie-videos
 */
export default function TMDBMovieVideos(
	request: TMDBMovieVideosRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBMovieVideosResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.MOVIE,
		"{movie_id}/videos",
		{
			path: {
				movie_id: request.movie_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBMovieVideosResponse>(url)
	}
}

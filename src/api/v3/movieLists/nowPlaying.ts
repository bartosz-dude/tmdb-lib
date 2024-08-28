import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

/**
 * @link https://developer.themoviedb.org/reference/movie-now-playing-list
 */
export interface TMDBMovieListsNowPlayingRequest {
	/**
	 * @default "en-US"
	 */
	language?: string
	/**
	 * @type int32
	 * @default 1
	 */
	page?: number
	/**
	 * ISO-3166-1 code
	 */
	region?: string
}

type PathParams = null

type QueryParams = {
	[key in keyof TMDBMovieListsNowPlayingRequest]: TMDBMovieListsNowPlayingRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/movie-now-playing-list
 */
export interface TMDBMovieListsNowPlayingResponse {
	dates: {
		maximum: string
		minimum: string
	}
	/**
	 * @type int
	 * @default 0
	 */
	page: number
	results: {
		/**
		 * @default true
		 */
		adult: boolean
		backdrop_path: string
		/**
		 * @type int[]
		 */
		genre_ids: number[]
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		original_language: string
		original_title: string
		overview: string
		/**
		 * @type number
		 * @default 0
		 */
		popularity: number
		poster_path: string
		release_date: string
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
	}[]
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
 * Get a list of movies that are currently in theatres.
 *
 * This call is really just a discover call behind the scenes. If you would like to tweak any of the default filters head over and read about [discover](https://developer.themoviedb.org/reference/discover-movie).
 *
 * @link https://developer.themoviedb.org/reference/movie-now-playing-list
 */
export function TMDBMovieListsNowPlaying(
	request: TMDBMovieListsNowPlayingRequest,
	fetcher: Fetcher,
): Promise<TMDBMovieListsNowPlayingResponse>
/**
 * Get a list of movies that are currently in theatres.
 *
 * This call is really just a discover call behind the scenes. If you would like to tweak any of the default filters head over and read about [discover](https://developer.themoviedb.org/reference/discover-movie).
 *
 * @link https://developer.themoviedb.org/reference/movie-now-playing-list
 */
export function TMDBMovieListsNowPlaying(
	request: TMDBMovieListsNowPlayingRequest,
	readAccessToken: string,
): Promise<TMDBMovieListsNowPlayingResponse>

/**
 * Get a list of movies that are currently in theatres.
 *
 * This call is really just a discover call behind the scenes. If you would like to tweak any of the default filters head over and read about [discover](https://developer.themoviedb.org/reference/discover-movie).
 *
 * @link https://developer.themoviedb.org/reference/movie-now-playing-list
 */
export default function TMDBMovieListsNowPlaying(
	request: TMDBMovieListsNowPlayingRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBMovieListsNowPlayingResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.MOVIE,
		"now_playing",
		{
			query: {
				language: request.language,
				page: request.page,
				region: request.region,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBMovieListsNowPlayingResponse>(url)
	}
}

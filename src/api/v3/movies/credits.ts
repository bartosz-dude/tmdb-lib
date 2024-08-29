import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/movie-credits
 */
export interface TMDBMovieCreditsRequest {
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
		TMDBMovieCreditsRequest,
		keyof PathParams
	>]: TMDBMovieCreditsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/movie-credits
 */
export interface TMDBMovieCreditsResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	cast: {
		/**
		 * @default true
		 */
		adult: boolean
		/**
		 * @type int
		 * @default 0
		 */
		gender: number
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		known_for_department: string
		name: string
		original_name: string
		/**
		 * @type number
		 * @default 0
		 */
		popularity: number
		profile_path: string
		/**
		 * @type int
		 * @default 0
		 */
		cast_id: number
		character: string
		credit_id: string
		/**
		 * @type int
		 * @default 0
		 */
		order: number
	}[]
	crew: {
		/**
		 * @default true
		 */
		adult: boolean
		/**
		 * @type int
		 * @default 0
		 */
		gender: number
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		known_for_department: string
		name: string
		original_name: string
		/**
		 * @type number
		 * @default 0
		 */
		popularity: number
		profile_path: string
		credit_id: string
		department: string
		job: string
	}[]
}

/**
 * @link https://developer.themoviedb.org/reference/movie-credits
 */
export function TMDBMovieCredits(
	request: TMDBMovieCreditsRequest,
	fetcher: Fetcher,
): Promise<TMDBMovieCreditsResponse>
/**
 * @link https://developer.themoviedb.org/reference/movie-credits
 */
export function TMDBMovieCredits(
	request: TMDBMovieCreditsRequest,
	readAccessToken: string,
): Promise<TMDBMovieCreditsResponse>

/**
 * @link https://developer.themoviedb.org/reference/movie-credits
 */
export default function TMDBMovieCredits(
	request: TMDBMovieCreditsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBMovieCreditsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.MOVIE,
		"{movie_id}/credits",
		{
			path: {
				movie_id: request.movie_id,
			},
			query: {
				language: request.language,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBMovieCreditsResponse>(url)
	}
}

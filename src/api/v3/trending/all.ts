import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @type https://developer.themoviedb.org/reference/trending-all
 */
export interface TMDBTrendingAllRequest {
	time_window: "day" | "week"
	/**
	 * `ISO-639-1` - `ISO-3166-1` code
	 * @default "en-US"
	 */
	language?: string
}

type PathParams = {
	time_window: "day" | "week"
}

type QueryParams = {
	language?: string
}

/**
 * @type https://developer.themoviedb.org/reference/trending-all
 */
export interface TMDBTrendingAllResponse {
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
		 * @type int
		 * @default 0
		 */
		id: number
		title: string
		original_language: string
		original_title: string
		overview: string
		poster_path: string
		media_type: string
		/**
		 * @type int[]
		 */
		genre_ids: number[]
		/**
		 * @type number
		 * @default 0
		 */
		popularity: number
		release_date: string
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
 * Get the trending movies, TV shows and people.
 *
 * This call is similar to how the multi search works in the sense that we return multiple media types (movies, TV shows and people) in a single call to get the most trending data on the entirety of TMDB.
 *
 * If you would like to only get the trending data by a specific media type, use one of the specific methods:
 *  1. [Trending movies](https://developer.themoviedb.org/reference/trending-movies)
 *  2. [Trending TV shows](https://developer.themoviedb.org/reference/trending-tv)
 *  3. [Trending people](https://developer.themoviedb.org/reference/trending-people)
 *
 * @type https://developer.themoviedb.org/reference/trending-all
 */
export function TMDBTrendingAll(
	request: TMDBTrendingAllRequest,
	fetcher: Fetcher,
): Promise<TMDBTrendingAllResponse>
/**
 * Get the trending movies, TV shows and people.
 *
 * This call is similar to how the multi search works in the sense that we return multiple media types (movies, TV shows and people) in a single call to get the most trending data on the entirety of TMDB.
 *
 * If you would like to only get the trending data by a specific media type, use one of the specific methods:
 *  1. [Trending movies](https://developer.themoviedb.org/reference/trending-movies)
 *  2. [Trending TV shows](https://developer.themoviedb.org/reference/trending-tv)
 *  3. [Trending people](https://developer.themoviedb.org/reference/trending-people)
 *
 * @type https://developer.themoviedb.org/reference/trending-all
 */
export function TMDBTrendingAll(
	request: TMDBTrendingAllRequest,
	readAccessToken: string,
): Promise<TMDBTrendingAllResponse>

/**
 * Get the trending movies, TV shows and people.
 *
 * This call is similar to how the multi search works in the sense that we return multiple media types (movies, TV shows and people) in a single call to get the most trending data on the entirety of TMDB.
 *
 * If you would like to only get the trending data by a specific media type, use one of the specific methods:
 *  1. [Trending movies](https://developer.themoviedb.org/reference/trending-movies)
 *  2. [Trending TV shows](https://developer.themoviedb.org/reference/trending-tv)
 *  3. [Trending people](https://developer.themoviedb.org/reference/trending-people)
 *
 * @type https://developer.themoviedb.org/reference/trending-all
 */
export default function TMDBTrendingAll(
	request: TMDBTrendingAllRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTrendingAllResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TRENDING,
		"all/{time_window}",
		{
			path: {
				time_window: request.time_window,
			},
			query: {
				language: request.language,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBTrendingAllResponse>(url)
	}
}

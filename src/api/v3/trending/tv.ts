import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/trending-tv
 */
export interface TMDBTrendingTvRequest {
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
 * @link https://developer.themoviedb.org/reference/trending-tv
 */
export interface TMDBTrendingTvResponse {
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
		name: string
		original_language: string
		original_name: string
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
		first_air_date: string
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
		origin_country: string[]
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
 * Get the trending TV shows on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/trending-tv
 */
export function TMDBTrendingTv(
	request: TMDBTrendingTvRequest,
	fetcher: Fetcher,
): Promise<TMDBTrendingTvResponse>
/**
 * Get the trending TV shows on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/trending-tv
 */
export function TMDBTrendingTv(
	request: TMDBTrendingTvRequest,
	readAccessToken: string,
): Promise<TMDBTrendingTvResponse>

/**
 * Get the trending TV shows on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/trending-tv
 */
export default function TMDBTrendingTv(
	request: TMDBTrendingTvRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTrendingTvResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TRENDING,
		"tv/{time_window}",
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
		return fetcherOrApi<TMDBTrendingTvResponse>(url)
	}
}

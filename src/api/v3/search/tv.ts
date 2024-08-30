import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/search-tv
 */
export interface TMDBSearchTvRequest {
	query: string
	/**
	 * Search only the first air date. Valid values are from 1000 to 9999
	 *
	 * @type int32
	 */
	first_air_date_year?: number
	/**
	 * @default false
	 */
	include_adult?: boolean
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
	 * Search the first air date and all episode air dates. Valid values are from 1000 to 9999
	 *
	 * @type int32
	 */
	year?: number
}

type PathParams = null

type QueryParams = {
	[key in keyof TMDBSearchTvRequest]: TMDBSearchTvRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/search-tv
 */
export interface TMDBSearchTvResponse {
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
		origin_country: string[]
		original_language: string
		original_name: string
		overview: string
		/**
		 * @type number
		 * @default 0
		 */
		popularity: number
		poster_path: string
		first_air_date: string
		name: string
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
 * Search for TV shows by their original, translated and also known as names.
 *
 * @link https://developer.themoviedb.org/reference/search-tv
 */
export function TMDBSearchTv(
	request: TMDBSearchTvRequest,
	fetcher: Fetcher,
): Promise<TMDBSearchTvResponse>
/**
 * Search for TV shows by their original, translated and also known as names.
 *
 * @link https://developer.themoviedb.org/reference/search-tv
 */
export function TMDBSearchTv(
	request: TMDBSearchTvRequest,
	readAccessToken: string,
): Promise<TMDBSearchTvResponse>

/**
 * Search for TV shows by their original, translated and also known as names.
 *
 * @link https://developer.themoviedb.org/reference/search-tv
 */
export default function TMDBSearchTv(
	request: TMDBSearchTvRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBSearchTvResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.SEARCH, "tv", {
		query: request,
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBSearchTvResponse>(url)
	}
}

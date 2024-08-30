import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/search-multi
 */
export interface TMDBSearchMultiRequest {
	query: string
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
}

type PathParams = null

type QueryParams = {
	[key in keyof TMDBSearchMultiRequest]: TMDBSearchMultiRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/search-multi
 */
export interface TMDBSearchMultiResponse {
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
		genre_ids: number
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
 * Use multi search when you want to search for movies, TV shows and people in a single request.
 *
 * @link https://developer.themoviedb.org/reference/search-multi
 */
export function TMDBSearchMulti(
	request: TMDBSearchMultiRequest,
	fetcher: Fetcher,
): Promise<TMDBSearchMultiResponse>
/**
 * Use multi search when you want to search for movies, TV shows and people in a single request.
 *
 * @link https://developer.themoviedb.org/reference/search-multi
 */
export function TMDBSearchMulti(
	request: TMDBSearchMultiRequest,
	readAccessToken: string,
): Promise<TMDBSearchMultiResponse>

/**
 * Use multi search when you want to search for movies, TV shows and people in a single request.
 *
 * @link https://developer.themoviedb.org/reference/search-multi
 */
export default function TMDBSearchMulti(
	request: TMDBSearchMultiRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBSearchMultiResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.SEARCH, "multi", {
		query: request,
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBSearchMultiResponse>(url)
	}
}

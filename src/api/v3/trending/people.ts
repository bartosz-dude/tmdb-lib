import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/trending-people
 */
export interface TMDBTrendingPeopleRequest {
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
 * @link https://developer.themoviedb.org/reference/trending-people
 */
export interface TMDBTrendingPeopleResponse {
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
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		name: string
		original_name: string
		media_type: string
		/**
		 * @type number
		 * @default 0
		 */
		popularity: number
		/**
		 * @type int
		 * @default 0
		 */
		gender: number
		known_for_department: string
		profile_path: string
		known_for: {
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
 * Get the trending people on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/trending-people
 */
export function TMDBTrendingPeople(
	request: TMDBTrendingPeopleRequest,
	fetcher: Fetcher,
): Promise<TMDBTrendingPeopleResponse>
/**
 * Get the trending people on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/trending-people
 */
export function TMDBTrendingPeople(
	request: TMDBTrendingPeopleRequest,
	readAccessToken: string,
): Promise<TMDBTrendingPeopleResponse>

/**
 * Get the trending people on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/trending-people
 */
export default function TMDBTrendingPeople(
	request: TMDBTrendingPeopleRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTrendingPeopleResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TRENDING,
		"person/{time_window}",
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
		return fetcherOrApi<TMDBTrendingPeopleResponse>(url)
	}
}

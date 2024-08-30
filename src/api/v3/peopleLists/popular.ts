import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/person-popular-list
 */
export interface TMDBPeopleListsPopularRequest {
	/**
	 * @default "en-US"
	 */
	language: string
	/**
	 * @type int32
	 * @default 1
	 */
	page: number
}

type PathParams = null

type QueryParams = {
	language: string
	page: number
}

/**
 * @link https://developer.themoviedb.org/reference/person-popular-list
 */
export interface TMDBPeopleListsPopularResponse {
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
		gender: number
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		known_for: {
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
			media_type: string
			original_language: string
			original_title: string
			overview: string
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
		known_for_departament: string
		name: string
		/**
		 * @type number
		 * @default 0
		 */
		popularity: number
		profile_path: string
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
 * Get a list of people ordered by popularity.
 *
 * @link https://developer.themoviedb.org/reference/person-popular-list
 */
export function TMDBPeopleListsPopular(
	request: TMDBPeopleListsPopularRequest,
	fetcher: Fetcher,
): Promise<TMDBPeopleListsPopularResponse>
/**
 * Get a list of people ordered by popularity.
 *
 * @link https://developer.themoviedb.org/reference/person-popular-list
 */
export function TMDBPeopleListsPopular(
	request: TMDBPeopleListsPopularRequest,
	readAccessToken: string,
): Promise<TMDBPeopleListsPopularResponse>

/**
 * Get a list of people ordered by popularity.
 *
 * @link https://developer.themoviedb.org/reference/person-popular-list
 */
export default function TMDBPeopleListsPopular(
	request: TMDBPeopleListsPopularRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBPeopleListsPopularResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.PERSON,
		"popular",
		{
			query: {
				language: request.language,
				page: request.page,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBPeopleListsPopularResponse>(url)
	}
}

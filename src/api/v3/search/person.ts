import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/search-person
 */
export interface TMDBSearchPersonRequest {
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
	[key in keyof TMDBSearchPersonRequest]: TMDBSearchPersonRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/search-person
 */
export interface TMDBSearchPersonResponse {
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
		 * | Value | Gender                  |
		 * |-------|-------------------------|
		 * |   0   | Not set / not specified |
		 * |   1   |         Female          |
		 * |   2   |          Male           |
		 * |   3   |       Non-binary        |
		 *
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
		}
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
 * Search for people by their name and also known as names.
 *
 * @link https://developer.themoviedb.org/reference/search-person
 */
export function TMDBSearchPerson(
	request: TMDBSearchPersonRequest,
	fetcher: Fetcher,
): Promise<TMDBSearchPersonResponse>
/**
 * Search for people by their name and also known as names.
 *
 * @link https://developer.themoviedb.org/reference/search-person
 */
export function TMDBSearchPerson(
	request: TMDBSearchPersonRequest,
	readAccessToken: string,
): Promise<TMDBSearchPersonResponse>

/**
 * Search for people by their name and also known as names.
 *
 * @link https://developer.themoviedb.org/reference/search-person
 */
export default function TMDBSearchPerson(
	request: TMDBSearchPersonRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBSearchPersonResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.SEARCH,
		"person",
		{
			query: request,
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBSearchPersonResponse>(url)
	}
}

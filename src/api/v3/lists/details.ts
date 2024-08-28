import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

/**
 * @link https://developer.themoviedb.org/reference/list-details
 */
export interface TMDBListsDetailsRequest {
	/**
	 * @type int32
	 */
	list_id: number
	/**
	 * @default "en_US"
	 */
	language?: string
	/**
	 * @type int32
	 * @default 1
	 */
	page?: number
}

type PathParams = {
	list_id: number
}

type QueryParams = {
	language?: string
}

/**
 * @link https://developer.themoviedb.org/reference/list-details
 */
export interface TMDBListsDetailsResponse {
	created_by: string
	description: string
	/**
	 * @type int
	 */
	favorite_count: number
	id: string
	items: {
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
	item_count: number
	iso_639_1: string
	name: string
	poster_path: string
}

/**
 * @link https://developer.themoviedb.org/reference/list-details
 */
export function TMDBListsDetails(
	request: TMDBListsDetailsRequest,
	fetcher: Fetcher,
): Promise<TMDBListsDetailsResponse>
/**
 * @link https://developer.themoviedb.org/reference/list-details
 */
export function TMDBListsDetails(
	request: TMDBListsDetailsRequest,
	readAccessToken: string,
): Promise<TMDBListsDetailsResponse>

/**
 * @link https://developer.themoviedb.org/reference/list-details
 */
export default function TMDBListsDetails(
	request: TMDBListsDetailsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBListsDetailsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.LIST,
		"{list_id}",
		{
			path: {
				list_id: request.list_id,
			},
			query: {
				language: request.language,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBListsDetailsResponse>(url)
	}
}

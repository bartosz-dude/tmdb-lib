import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

/**
 * @link https://developer.themoviedb.org/reference/collection-details
 */
export interface TMDBCollectionsDetailsRequest {
	/**
	 * @type int32
	 */
	collection_id: number
	/**
	 * @default "en-US"
	 */
	language?: string
}

type PathParams = {
	collection_id: number
}

type QueryParams = {
	language?: string
}

/**
 * @link https://developer.themoviedb.org/reference/collection-details
 */
export interface TMDBCollectionsDetailsResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	name: string
	overview: string
	poster_path: string
	backdrop_path: string
	parts: {
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
		media_type: string
		genre_ids: number[]
		/**
		 * @type number
		 * @default 0
		 */
		popularity: number
		release_date: string
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
}

/**
 * Get collection details by ID.
 *
 * @link https://developer.themoviedb.org/reference/collection-details
 */
export function TMDBCollectionsDetails(
	request: TMDBCollectionsDetailsRequest,
	fetcher: Fetcher,
): Promise<TMDBCollectionsDetailsResponse>
/**
 * Get collection details by ID.
 *
 * @link https://developer.themoviedb.org/reference/collection-details
 */
export function TMDBCollectionsDetails(
	request: TMDBCollectionsDetailsRequest,
	readAccessToken: string,
): Promise<TMDBCollectionsDetailsResponse>

/**
 * Get collection details by ID.
 *
 * @link https://developer.themoviedb.org/reference/collection-details
 */
export default function TMDBCollectionsDetails(
	request: TMDBCollectionsDetailsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBCollectionsDetailsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.COLLECTION,
		"{collection_id}",
		{
			path: {
				collection_id: request.collection_id,
			},
			query: {
				language: request.language,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBCollectionsDetailsResponse>(url)
	}
}

import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/collection-images
 */
export interface TMDBCollectionsImagesRequest {
	/**
	 * @type int32
	 */
	collection_id: number
	/**
	 * specify a comma separated list of ISO-639-1 values to query, for example: `en`,`null`
	 */
	include_image_language?: string
	language?: string
}

type PathParams = {
	collection_id: number
}

type QueryParams = {
	include_image_language?: string
	language?: string
}

/**
 * @link https://developer.themoviedb.org/reference/collection-images
 */
export interface TMDBCollectionsImagesResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	backdrops: {
		/**
		 * @type number
		 * @default 0
		 */
		aspect_ratio: number
		/**
		 * @type int
		 * @default 0
		 */
		height: number
		iso_639_1: string
		file_path: string
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
		/**
		 * @type int
		 * @default 0
		 */
		width: number
	}[]
	posters: {
		/**
		 * @type number
		 * @default 0
		 */
		aspect_ratio: number
		/**
		 * @type int
		 * @default 0
		 */
		height: number
		iso_639_1: string
		file_path: string
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
		/**
		 * @type int
		 * @default 0
		 */
		width: number
	}[]
}

/**
 * Get the images that belong to a collection.
 *
 * This method will return the backdrops and posters that have been added to a collection.
 *
 * If you have a `language` specified, it will act as a filter on the returned items. You can use the `include_image_language` param to query additional languages.
 *
 * @link https://developer.themoviedb.org/reference/collection-images
 */
export function TMDBCollectionsImages(
	request: TMDBCollectionsImagesRequest,
	fetcher: Fetcher,
): Promise<TMDBCollectionsImagesResponse>
/**
 * Get the images that belong to a collection.
 *
 * This method will return the backdrops and posters that have been added to a collection.
 *
 * If you have a `language` specified, it will act as a filter on the returned items. You can use the `include_image_language` param to query additional languages.
 *
 * @link https://developer.themoviedb.org/reference/collection-images
 */
export function TMDBCollectionsImages(
	request: TMDBCollectionsImagesRequest,
	readAccessToken: string,
): Promise<TMDBCollectionsImagesResponse>

/**
 * Get the images that belong to a collection.
 *
 * This method will return the backdrops and posters that have been added to a collection.
 *
 * If you have a `language` specified, it will act as a filter on the returned items. You can use the `include_image_language` param to query additional languages.
 *
 * @link https://developer.themoviedb.org/reference/collection-images
 */
export default function TMDBCollectionsImages(
	request: TMDBCollectionsImagesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBCollectionsImagesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.COLLECTION,
		"{collection_id}/images",
		{
			path: {
				collection_id: request.collection_id,
			},
			query: {
				include_image_language: request.include_image_language,
				language: request.language,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBCollectionsImagesResponse>(url)
	}
}

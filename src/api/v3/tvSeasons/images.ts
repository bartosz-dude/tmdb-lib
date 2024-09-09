import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-season-images
 */
export interface TMDBTvSeasonsImagesRequest {
	/**
	 * @type int32
	 */
	series_id: number
	/**
	 * @type int32
	 */
	season_number: number
	/**
	 * specify a comma separated list of ISO-639-1 values to query, for example: `en,null`
	 */
	include_image_lanugage?: string
	language?: string
}

type PathParams = {
	series_id: number
	season_number: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBTvSeasonsImagesRequest,
		keyof PathParams
	>]: TMDBTvSeasonsImagesRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-season-images
 */
export interface TMDBTvSeasonsImagesResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	posters: {
		/**
		 * @type number
		 * @default 0
		 */
		aspect_ration: number
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
 * Get the images that belong to a TV season.
 *
 * This method will return the posters that have been added to a TV season.
 *
 * If you have a `language` specified, it will act as a filter on the returned items. You can use the `include_image_language` param to query additional languages.
 *
 * @link https://developer.themoviedb.org/reference/tv-season-images
 */
export function TMDBTvSeasonsImages(
	request: TMDBTvSeasonsImagesRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeasonsImagesResponse>
/**
 * Get the images that belong to a TV season.
 *
 * This method will return the posters that have been added to a TV season.
 *
 * If you have a `language` specified, it will act as a filter on the returned items. You can use the `include_image_language` param to query additional languages.
 *
 * @link https://developer.themoviedb.org/reference/tv-season-images
 */
export function TMDBTvSeasonsImages(
	request: TMDBTvSeasonsImagesRequest,
	readAccessToken: string,
): Promise<TMDBTvSeasonsImagesResponse>

/**
 * Get the images that belong to a TV season.
 *
 * This method will return the posters that have been added to a TV season.
 *
 * If you have a `language` specified, it will act as a filter on the returned items. You can use the `include_image_language` param to query additional languages.
 *
 * @link https://developer.themoviedb.org/reference/tv-season-images
 */
export default function TMDBTvSeasonsImages(
	request: TMDBTvSeasonsImagesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeasonsImagesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/season/{season_number}/images",
		{
			path: {
				series_id: request.series_id,
				season_number: request.season_number,
			},
			query: {
				include_image_lanugage: request.include_image_lanugage,
				language: request.language,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBTvSeasonsImagesResponse>(url)
	}
}

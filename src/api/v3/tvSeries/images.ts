import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-series-images
 */
export interface TMDBTvSeriesImagesRequest {
	/**
	 * @type int32
	 */
	series_id: number
	/**
	 * specify a comma separated list of ISO-639-1 values to query, for example: `en,null`
	 */
	include_image_language?: string
	language?: string
}

type PathParams = {
	series_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBTvSeriesImagesRequest,
		keyof PathParams
	>]: TMDBTvSeriesImagesRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-series-images
 */
export interface TMDBTvSeriesImagesResponse {
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
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	logos: {
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
 * Get the images that belong to a TV series.
 *
 * This method will return the backdrops, posters and logos that have been added to a TV show.
 *
 * If you have a `language` specified, it will act as a filter on the returned items. You can use the `include_image_language` param to query additional languages.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-images
 */
export function TMDBTvSeriesImages(
	request: TMDBTvSeriesImagesRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeriesImagesResponse>
/**
 * Get the images that belong to a TV series.
 *
 * This method will return the backdrops, posters and logos that have been added to a TV show.
 *
 * If you have a `language` specified, it will act as a filter on the returned items. You can use the `include_image_language` param to query additional languages.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-images
 */
export function TMDBTvSeriesImages(
	request: TMDBTvSeriesImagesRequest,
	readAccessToken: string,
): Promise<TMDBTvSeriesImagesResponse>

/**
 * Get the images that belong to a TV series.
 *
 * This method will return the backdrops, posters and logos that have been added to a TV show.
 *
 * If you have a `language` specified, it will act as a filter on the returned items. You can use the `include_image_language` param to query additional languages.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-images
 */
export default function TMDBTvSeriesImages(
	request: TMDBTvSeriesImagesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeriesImagesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/images",
		{
			path: {
				series_id: request.series_id,
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
		return fetcherOrApi<TMDBTvSeriesImagesResponse>(url)
	}
}

import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-episode-images
 */
export interface TMDBTvEpisodesImagesRequest {
	/**
	 * @type int32
	 */
	series_id: number
	/**
	 * @type int32
	 */
	season_number: number
	/**
	 * @type int32
	 */
	episode_number: number
	/**
	 * specify a comma separated list of ISO-639-1 values to query, for example: `en,null`
	 */
	include_image_lanugage?: string
	language?: string
}

type PathParams = {
	series_id: number
	season_number: number
	episode_number: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBTvEpisodesImagesRequest,
		keyof PathParams
	>]: TMDBTvEpisodesImagesRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-episode-images
 */
export interface TMDBTvEpisodesImagesResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	/**
	 * @default true
	 */
	stills: {
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
 * Get the images that belong to a TV episode.
 *
 * This method will return the backdrops that have been added to a TV episode.
 *
 * If you have a `language` specified, it will act as a filter on the returned items. You can use the `include_image_language` param to query additional languages.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-images
 */
export function TMDBTvEpisodesImages(
	request: TMDBTvEpisodesImagesRequest,
	fetcher: Fetcher,
): Promise<TMDBTvEpisodesImagesResponse>
/**
 * Get the images that belong to a TV episode.
 *
 * This method will return the backdrops that have been added to a TV episode.
 *
 * If you have a `language` specified, it will act as a filter on the returned items. You can use the `include_image_language` param to query additional languages.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-images
 */
export function TMDBTvEpisodesImages(
	request: TMDBTvEpisodesImagesRequest,
	readAccessToken: string,
): Promise<TMDBTvEpisodesImagesResponse>

/**
 * Get the images that belong to a TV episode.
 *
 * This method will return the backdrops that have been added to a TV episode.
 *
 * If you have a `language` specified, it will act as a filter on the returned items. You can use the `include_image_language` param to query additional languages.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-images
 */
export default function TMDBTvEpisodesImages(
	request: TMDBTvEpisodesImagesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvEpisodesImagesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/season/{season_number}/episode/{episode_number}/images",
		{
			path: {
				season_number: request.season_number,
				episode_number: request.episode_number,
				series_id: request.series_id,
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
		return fetcherOrApi<TMDBTvEpisodesImagesResponse>(url)
	}
}

import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-season-videos
 */
export interface TMDBTvSeasonsVideosRequest {
	/**
	 * @type int32
	 */
	series_id: number
	/**
	 * @type int32
	 */
	season_number: number
	/**
	 * filter the list results by language, supports more than one value by using a comma
	 */
	include_image_lanugage?: string
	/**
	 * @default "en-US"
	 */
	language?: string
}

type PathParams = {
	series_id: number
	season_number: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBTvSeasonsVideosRequest,
		keyof PathParams
	>]: TMDBTvSeasonsVideosRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-season-videos
 */
export interface TMDBTvSeasonsVideosResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	results: {
		iso_639_1: string
		iso_3166_1: string
		name: string
		key: string
		site: string
		/**
		 * @type int
		 * @default 0
		 */
		size: number
		type: string
		/**
		 * @default true
		 */
		official: boolean
		published_at: string
		id: string
	}[]
}

/**
 * Get the videos that belong to a TV season.
 *
 * @link https://developer.themoviedb.org/reference/tv-season-videos
 */
export function TMDBTvSeasonsVideos(
	request: TMDBTvSeasonsVideosRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeasonsVideosResponse>
/**
 * Get the videos that belong to a TV season.
 *
 * @link https://developer.themoviedb.org/reference/tv-season-videos
 */
export function TMDBTvSeasonsVideos(
	request: TMDBTvSeasonsVideosRequest,
	readAccessToken: string,
): Promise<TMDBTvSeasonsVideosResponse>

/**
 * Get the videos that belong to a TV season.
 *
 * @link https://developer.themoviedb.org/reference/tv-season-videos
 */
export default function TMDBTvSeasonsVideos(
	request: TMDBTvSeasonsVideosRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeasonsVideosResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/season/{season_number}/videos",
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
		return fetcherOrApi<TMDBTvSeasonsVideosResponse>(url)
	}
}

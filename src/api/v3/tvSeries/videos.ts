import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-series-videos
 */
export interface TMDBTvSeriesVideosRequest {
	/**
	 * @type int32
	 */
	series_id: number
	/**
	 * filter the list results by language, supports more than one value by using a comma
	 */
	include_video_language: string
	/**
	 * @default "en-US"
	 */
	language: string
}

type PathParams = {
	series_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBTvSeriesVideosRequest,
		keyof PathParams
	>]: TMDBTvSeriesVideosRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-series-videos
 */
export interface TMDBTvSeriesVideosResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	results: {
		iso_639_1: string
		iso_3166_1: TMDB_ISO_3166_1
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
 * Get the videos that belong to a TV show.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-videos
 */
export function TMDBTvSeriesVideos(
	request: TMDBTvSeriesVideosRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeriesVideosResponse>
/**
 * Get the videos that belong to a TV show.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-videos
 */
export function TMDBTvSeriesVideos(
	request: TMDBTvSeriesVideosRequest,
	readAccessToken: string,
): Promise<TMDBTvSeriesVideosResponse>

/**
 * Get the videos that belong to a TV show.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-videos
 */
export default function TMDBTvSeriesVideos(
	request: TMDBTvSeriesVideosRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeriesVideosResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/videos",
		{
			path: {
				series_id: request.series_id,
			},
			query: {
				include_video_language: request.include_video_language,
				language: request.language,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBTvSeriesVideosResponse>(url)
	}
}

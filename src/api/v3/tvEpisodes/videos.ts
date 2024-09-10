import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-episode-videos
 */
export interface TMDBTvEpisodesVideosRequest {
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
		TMDBTvEpisodesVideosRequest,
		keyof PathParams
	>]: TMDBTvEpisodesVideosRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-episode-videos
 */
export interface TMDBTvEpisodesVideosResponse {
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
 * Get the videos that belong to a TV episode.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-videos
 */
export function TMDBTvEpisodesVideos(
	request: TMDBTvEpisodesVideosRequest,
	fetcher: Fetcher,
): Promise<TMDBTvEpisodesVideosResponse>
/**
 * Get the videos that belong to a TV episode.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-videos
 */
export function TMDBTvEpisodesVideos(
	request: TMDBTvEpisodesVideosRequest,
	readAccessToken: string,
): Promise<TMDBTvEpisodesVideosResponse>

/**
 * Get the videos that belong to a TV episode.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-videos
 */
export default function TMDBTvEpisodesVideos(
	request: TMDBTvEpisodesVideosRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvEpisodesVideosResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/season/{season_number}/episode/{episode_number}/videos",
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
		return fetcherOrApi<TMDBTvEpisodesVideosResponse>(url)
	}
}

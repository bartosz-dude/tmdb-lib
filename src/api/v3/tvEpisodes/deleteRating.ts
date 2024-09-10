import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-episode-delete-rating
 */
export interface TMDBTvEpisodesDeleteRatingRequest {
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
	session_id?: string
	guest_session_id?: string
}

type PathParams = {
	series_id: number
	season_number: number
	episode_number: number
}

type QueryParams = Omit<
	{
		[key in keyof Omit<
			TMDBTvEpisodesDeleteRatingRequest,
			keyof PathParams
		>]: TMDBTvEpisodesDeleteRatingRequest[key]
	},
	"raw_body"
>

/**
 * @link https://developer.themoviedb.org/reference/tv-episode-delete-rating
 */
export interface TMDBTvEpisodesDeleteRatingResponse {
	/**
	 * @type int
	 * @default 0
	 */
	status_code: number
	status_message: string
}

/**
 * Delete your rating on a TV episode.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-delete-rating
 */
export function TMDBTvEpisodesDeleteRating(
	request: TMDBTvEpisodesDeleteRatingRequest,
	fetcher: Fetcher,
): Promise<TMDBTvEpisodesDeleteRatingResponse>
/**
 * Delete your rating on a TV episode.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-delete-rating
 */
export function TMDBTvEpisodesDeleteRating(
	request: TMDBTvEpisodesDeleteRatingRequest,
	readAccessToken: string,
): Promise<TMDBTvEpisodesDeleteRatingResponse>

/**
 * Delete your rating on a TV episode.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-delete-rating
 */
export default function TMDBTvEpisodesDeleteRating(
	request: TMDBTvEpisodesDeleteRatingRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvEpisodesDeleteRatingResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/season/{season_number}/episode/{episode_number}/rating",
		{
			path: {
				season_number: request.season_number,
				episode_number: request.episode_number,
				series_id: request.series_id,
			},
			query: {
				guest_session_id: request.guest_session_id,
				session_id: request.session_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi, {
			method: "DELETE",
		})
	} else {
		return fetcherOrApi<TMDBTvEpisodesDeleteRatingResponse>(url, {
			method: "DELETE",
		})
	}
}

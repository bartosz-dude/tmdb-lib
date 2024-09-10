import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-episode-add-rating
 */
export interface TMDBTvEpisodesAddRatingRequest {
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
	raw_body: any
}

type PathParams = {
	series_id: number
	season_number: number
	episode_number: number
}

type QueryParams = Omit<
	{
		[key in keyof Omit<
			TMDBTvEpisodesAddRatingRequest,
			keyof PathParams
		>]: TMDBTvEpisodesAddRatingRequest[key]
	},
	"raw_body"
>

/**
 * @link https://developer.themoviedb.org/reference/tv-episode-add-rating
 */
export interface TMDBTvEpisodesAddRatingResponse {
	/**
	 * @type int
	 * @default 0
	 */
	status_code: number
	status_message: string
}

/**
 * Rate a TV episode and save it to your rated list.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-add-rating
 */
export function TMDBTvEpisodesAddRating(
	request: TMDBTvEpisodesAddRatingRequest,
	fetcher: Fetcher,
): Promise<TMDBTvEpisodesAddRatingResponse>
/**
 * Rate a TV episode and save it to your rated list.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-add-rating
 */
export function TMDBTvEpisodesAddRating(
	request: TMDBTvEpisodesAddRatingRequest,
	readAccessToken: string,
): Promise<TMDBTvEpisodesAddRatingResponse>

/**
 * Rate a TV episode and save it to your rated list.
 *
 * @link https://developer.themoviedb.org/reference/tv-episode-add-rating
 */
export default function TMDBTvEpisodesAddRating(
	request: TMDBTvEpisodesAddRatingRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvEpisodesAddRatingResponse> {
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
			method: "POST",
			rawBody: request.raw_body,
		})
	} else {
		return fetcherOrApi<TMDBTvEpisodesAddRatingResponse>(url, {
			method: "POST",
			rawBody: request.raw_body,
		})
	}
}

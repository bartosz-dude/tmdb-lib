import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-series-delete-rating
 */
export interface TMDBTvSeriesDeleteRatingRequest {
	/**
	 * @type int32
	 */
	series_id: number
	guest_session_id?: string
	session_id?: string
}

type PathParams = {
	series_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBTvSeriesDeleteRatingRequest,
		keyof PathParams
	>]: TMDBTvSeriesDeleteRatingRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-series-delete-rating
 */
export interface TMDBTvSeriesDeleteRatingResponse {
	/**
	 * @type int
	 * @default 0
	 */
	status_code: number
	status_message: string
}

/**
 * @link https://developer.themoviedb.org/reference/tv-series-delete-rating
 */
export function TMDBTvSeriesDeleteRating(
	request: TMDBTvSeriesDeleteRatingRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeriesDeleteRatingResponse>
/**
 * @link https://developer.themoviedb.org/reference/tv-series-delete-rating
 */
export function TMDBTvSeriesDeleteRating(
	request: TMDBTvSeriesDeleteRatingRequest,
	readAccessToken: string,
): Promise<TMDBTvSeriesDeleteRatingResponse>

/**
 * @link https://developer.themoviedb.org/reference/tv-series-delete-rating
 */
export default function TMDBTvSeriesDeleteRating(
	request: TMDBTvSeriesDeleteRatingRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeriesDeleteRatingResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/rating",
		{
			path: {
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
		return fetcherOrApi<TMDBTvSeriesDeleteRatingResponse>(url, {
			method: "DELETE",
		})
	}
}

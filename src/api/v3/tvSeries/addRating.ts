import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-series-add-rating
 */
export interface TMDBTvSeriesAddRatingRequest {
	/**
	 * @type int32
	 */
	series_id: number
	guest_session_id?: string
	session_id?: string
	raw_body: any
}

type PathParams = {
	series_id: number
}

type QueryParams = Omit<
	{
		[key in keyof Omit<
			TMDBTvSeriesAddRatingRequest,
			keyof PathParams
		>]: TMDBTvSeriesAddRatingRequest[key]
	},
	"raw_body"
>

/**
 * @link https://developer.themoviedb.org/reference/tv-series-add-rating
 */
export interface TMDBTvSeriesAddRatingResponse {
	/**
	 * @type int
	 * @default 0
	 */
	status_code: number
	status_message: string
}

/**
 * Rate a TV show and save it to your rated list.
 *
 * By default, we will remove a rated item from your watchlist if it's present. This keeps your "watched" and and "want to watch" lists tidy and in sync. You can edit this behavior [here](https://www.themoviedb.org/settings/sharing).
 *
 * @link https://developer.themoviedb.org/reference/tv-series-add-rating
 */
export function TMDBTvSeriesAddRating(
	request: TMDBTvSeriesAddRatingRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeriesAddRatingResponse>
/**
 * Rate a TV show and save it to your rated list.
 *
 * By default, we will remove a rated item from your watchlist if it's present. This keeps your "watched" and and "want to watch" lists tidy and in sync. You can edit this behavior [here](https://www.themoviedb.org/settings/sharing).
 *
 * @link https://developer.themoviedb.org/reference/tv-series-add-rating
 */
export function TMDBTvSeriesAddRating(
	request: TMDBTvSeriesAddRatingRequest,
	readAccessToken: string,
): Promise<TMDBTvSeriesAddRatingResponse>

/**
 * Rate a TV show and save it to your rated list.
 *
 * By default, we will remove a rated item from your watchlist if it's present. This keeps your "watched" and and "want to watch" lists tidy and in sync. You can edit this behavior [here](https://www.themoviedb.org/settings/sharing).
 *
 * @link https://developer.themoviedb.org/reference/tv-series-add-rating
 */
export default function TMDBTvSeriesAddRating(
	request: TMDBTvSeriesAddRatingRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeriesAddRatingResponse> {
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
			method: "POST",
			rawBody: request.raw_body,
		})
	} else {
		return fetcherOrApi<TMDBTvSeriesAddRatingResponse>(url, {
			method: "POST",
			rawBody: request.raw_body,
		})
	}
}

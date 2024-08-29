import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/guest-session-rated-tv
 */
interface TMDBGuestSessionsRatedTvRequest {
	guest_session_id: string
	/**
	 * @default "en-US"
	 */
	language?: string
	/**
	 * @type int32
	 * @default 1
	 */
	page?: number
	/**
	 * @default "create_at.asc"
	 */
	sort_by?: "created_at.asc" | "created_at.desc"
}

type PathParams = {
	guest_session_id: string
}

type QueryParams = {
	language?: string
	page?: number
	sort_by?: "created_at.asc" | "created_at.desc"
}

/**
 * @link https://developer.themoviedb.org/reference/guest-session-rated-tv
 */
interface TMDBGuestSessionsRatedTvResponse {
	/**
	 * @type int
	 * @default 0
	 */
	page: number
	results: {
		/**
		 * @default true
		 */
		adult: boolean
		backdrop_path: string
		/**
		 * @type int[]
		 */
		genre_ids: number[]
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		origin_country: string[]
		original_language: string
		original_name: string
		overview: string
		/**
		 * @type number
		 * @default 0
		 */
		popularity: number
		poster_path: string
		first_air_date: string
		name: string
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
		 * @type number
		 * @default 0
		 */
		rating: number
	}[]
	/**
	 * @type int
	 * @default 0
	 */
	total_pages: number
	/**
	 * @type int
	 * @default 0
	 */
	total_results: number
}

/**
 * Get the rated TV shows for a guest session.
 *
 * @link https://developer.themoviedb.org/reference/guest-session-rated-tv
 */
export function TMDBGuestSessionsRatedTv(
	request: TMDBGuestSessionsRatedTvRequest,
	fetcher: Fetcher,
): Promise<TMDBGuestSessionsRatedTvResponse>
/**
 * Get the rated TV shows for a guest session.
 *
 * @link https://developer.themoviedb.org/reference/guest-session-rated-tv
 */
export function TMDBGuestSessionsRatedTv(
	request: TMDBGuestSessionsRatedTvRequest,
	readAccessToken: string,
): Promise<TMDBGuestSessionsRatedTvResponse>

/**
 * Get the rated TV shows for a guest session.
 *
 * @link https://developer.themoviedb.org/reference/guest-session-rated-tv
 */
export default function TMDBGuestSessionsRatedTv(
	request: TMDBGuestSessionsRatedTvRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBGuestSessionsRatedTvResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.GUEST_SESSION,
		"{guest_session_id}/rated/tv",
		{
			path: {
				guest_session_id: request.guest_session_id,
			},
			query: {
				language: request.language,
				page: request.page,
				sort_by: request.sort_by,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBGuestSessionsRatedTvResponse>(url)
	}
}

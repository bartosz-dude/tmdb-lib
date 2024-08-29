import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/guest-session-rated-tv-episodes
 */
interface TMDBGuestSessionsRatedTvEpisodesRequest {
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
 * @link https://developer.themoviedb.org/reference/guest-session-rated-tv-episodes
 */
interface TMDBGuestSessionsRatedTvEpisodesResponse {
	/**
	 * @type int
	 * @default 0
	 */
	page: number
	results: {
		air_date: string
		/**
		 * @type int
		 * @default 0
		 */
		episode_number: number
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		name: string
		overview: string
		production_code: string
		/**
		 * @type int
		 * @default 0
		 */
		runtime: number
		/**
		 * @type int
		 * @default 0
		 */
		season_number: number
		/**
		 * @type int
		 * @default 0
		 */
		show_id: number
		still_path: string
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
 * Get the rated TV episodes for a guest session.
 *
 * @link https://developer.themoviedb.org/reference/guest-session-rated-tv-episodes
 */
export function TMDBGuestSessionsRatedTvEpisodes(
	request: TMDBGuestSessionsRatedTvEpisodesRequest,
	fetcher: Fetcher,
): Promise<TMDBGuestSessionsRatedTvEpisodesResponse>
/**
 * Get the rated TV episodes for a guest session.
 *
 * @link https://developer.themoviedb.org/reference/guest-session-rated-tv-episodes
 */
export function TMDBGuestSessionsRatedTvEpisodes(
	request: TMDBGuestSessionsRatedTvEpisodesRequest,
	readAccessToken: string,
): Promise<TMDBGuestSessionsRatedTvEpisodesResponse>

/**
 * Get the rated TV episodes for a guest session.
 *
 * @link https://developer.themoviedb.org/reference/guest-session-rated-tv-episodes
 */
export default function TMDBGuestSessionsRatedTvEpisodes(
	request: TMDBGuestSessionsRatedTvEpisodesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBGuestSessionsRatedTvEpisodesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.GUEST_SESSION,
		"{guest_session_id}/rated/tv/episodes",
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
		return fetcherOrApi<TMDBGuestSessionsRatedTvEpisodesResponse>(url)
	}
}

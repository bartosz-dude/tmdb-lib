import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

/**
 * @link https://developer.themoviedb.org/reference/account-watchlist-movies
 */
export interface TMDBAccountRatedTvEpisodesRequest {
	/**
	 * @type int32
	 */
	account_id: number
	/**
	 * @default "en-US"
	 */
	language?: string
	/**
	 * @type int32
	 * @default 1
	 */
	page?: number
	session_id?: string
	/**
	 * @default "created_at.asc"
	 */
	sort_by?: "created_at.asc" | "created_at.desc"
}

type PathParams = {
	account_id: number
}

type QueryParams = {
	language?: string
	page?: number
	session_id?: string
	sort_by?: "created_at.asc" | "created_at.desc"
}

/**
 * @link https://developer.themoviedb.org/reference/account-watchlist-movies
 */
export interface TMDBAccountRatedTvEpisodesResponse {
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
		runtime: string
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
		 * @type int
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
 * @link https://developer.themoviedb.org/reference/account-watchlist-movies
 */
export function TMDBAccountRatedTvEpisodes(
	request: TMDBAccountRatedTvEpisodesRequest,
	fetcher: Fetcher,
): Promise<TMDBAccountRatedTvEpisodesResponse>
/**
 * @link https://developer.themoviedb.org/reference/account-rated-tv-episodes
 */
export function TMDBAccountRatedTvEpisodes(
	request: TMDBAccountRatedTvEpisodesRequest,
	readAccessToken: string,
): Promise<TMDBAccountRatedTvEpisodesResponse>

/**
 * @link https://developer.themoviedb.org/reference/account-rated-tv-episodes
 */
export default function TMDBAccountRatedTvEpisodes(
	request: TMDBAccountRatedTvEpisodesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBAccountRatedTvEpisodesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.ACCOUNT,
		"{account_id}/rated/tv/episodes",
		{
			path: {
				account_id: request.account_id,
			},
			query: {
				language: request.language,
				page: request.page,
				session_id: request.session_id,
				sort_by: request.sort_by,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBAccountRatedTvEpisodesResponse>(url)
	}
}

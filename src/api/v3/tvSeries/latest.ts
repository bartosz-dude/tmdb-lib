import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-series-latest-id
 */
export interface TMDBTvSeriesLatestRequest {}

type PathParams = {}

type QueryParams = {
	[key in keyof Omit<
		TMDBTvSeriesLatestRequest,
		keyof PathParams
	>]: TMDBTvSeriesLatestRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-series-latest-id
 */
export interface TMDBTvSeriesLatestResponse {
	/**
	 * @default true
	 */
	adult: boolean
	backdrop_path: string
	created_by: []
	episode_run_time: []
	first_air_date: string
	genres: []
	homepage: string
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	/**
	 * @default true
	 */
	in_production: boolean
	languages: []
	last_air_date: string
	last_episode_to_air: {
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		name: string
		overview: string
		/**
		 * @type int
		 * @default 0
		 */
		vote_average: number
		/**
		 * @type int
		 * @default 0
		 */
		vote_count: number
		air_date: string
		/**
		 * @type int
		 * @default 0
		 */
		episode_number: number
		production_code: string
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
	}
	name: string
	next_episode_to_air: string
	networks: []
	/**
	 * @type int
	 * @default 0
	 */
	number_of_episodes: number
	/**
	 * @type int
	 * @default 0
	 */
	number_of_seasons: number
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
	production_companies: []
	production_countries: []
	seasons: {
		air_date: string
		/**
		 * @type int
		 * @default 0
		 */
		episode_count: number
		name: string
		overview: string
		poster_path: string
		/**
		 * @type int
		 * @default 0
		 */
		season_number: number
	}[]
	spoken_languages: []
	status: string
	tagline: string
	type: string
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
}

/**
 * Get the newest TV show ID.
 *
 * This is a live response and will continuously change.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-latest-id
 */
export function TMDBTvSeriesLatest(
	request: TMDBTvSeriesLatestRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeriesLatestResponse>
/**
 * Get the newest TV show ID.
 *
 * This is a live response and will continuously change.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-latest-id
 */
export function TMDBTvSeriesLatest(
	request: TMDBTvSeriesLatestRequest,
	readAccessToken: string,
): Promise<TMDBTvSeriesLatestResponse>

/**
 * Get the newest TV show ID.
 *
 * This is a live response and will continuously change.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-latest-id
 */
export default function TMDBTvSeriesLatest(
	request: TMDBTvSeriesLatestRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeriesLatestResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "latest", {
		path: {},
		query: {},
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBTvSeriesLatestResponse>(url)
	}
}

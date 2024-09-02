import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/tv-series-popular-list
 */
export interface TMDBTvSeriesListsPopularRequest {
	/**
	 * `ISO-639-1` - `ISO-3166-1` code
	 * @default "en-US"
	 */
	language?: string
	/**
	 * @type int32
	 * @default 1
	 */
	page?: number
}

type PathParams = {}

type QueryParams = {
	[key in keyof TMDBTvSeriesListsPopularRequest]: TMDBTvSeriesListsPopularRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-series-popular-list
 */
export interface TMDBTvSeriesListsPopularResponse {
	/**
	 * @type int
	 * @default 0
	 */
	page: number
	results: {
		backdrop_path: string
		first_air_date: string
		/**
		 * @type int[]
		 */
		genre_ids: number[]
		name: string
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
 * Get a list of TV shows ordered by popularity.
 *
 * This call is really just a discover call behind the scenes. If you would like to tweak any of the default filters head over and read about [discover](https://developer.themoviedb.org/reference/discover-tv).
 *
 * @link https://developer.themoviedb.org/reference/tv-series-popular-list
 */
export function TMDBTvSeriesListsPopular(
	request: TMDBTvSeriesListsPopularRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeriesListsPopularResponse>
/**
 * Get a list of TV shows ordered by popularity.
 *
 * This call is really just a discover call behind the scenes. If you would like to tweak any of the default filters head over and read about [discover](https://developer.themoviedb.org/reference/discover-tv).
 *
 * @link https://developer.themoviedb.org/reference/tv-series-popular-list
 */
export function TMDBTvSeriesListsPopular(
	request: TMDBTvSeriesListsPopularRequest,
	readAccessToken: string,
): Promise<TMDBTvSeriesListsPopularResponse>

/**
 * Get a list of TV shows ordered by popularity.
 *
 * This call is really just a discover call behind the scenes. If you would like to tweak any of the default filters head over and read about [discover](https://developer.themoviedb.org/reference/discover-tv).
 *
 * @link https://developer.themoviedb.org/reference/tv-series-popular-list
 */
export default function TMDBTvSeriesListsPopular(
	request: TMDBTvSeriesListsPopularRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeriesListsPopularResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "popular", {
		path: {},
		query: {
			language: request.language,
			page: request.page,
		},
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBTvSeriesListsPopularResponse>(url)
	}
}

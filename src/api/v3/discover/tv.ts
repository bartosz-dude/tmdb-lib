import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

/**
 * @link https://developer.themoviedb.org/reference/discover-tv
 */
export interface TMDBDiscoverTvRequest {
	"air_date.gte"?: Date
	"air_date.lte"?: Date
	/**
	 * @type int32
	 */
	first_air_date_year?: number
	"first_air_date.gte"?: Date
	"first_air_date.lte"?: Date
	/**
	 * @default false
	 */
	include_adult?: boolean
	/**
	 * @default false
	 */
	include_null_first_air_dates?: boolean
	/**
	 * @default "en-US"
	 */
	language?: string
	/**
	 * @type int32
	 * @default 1
	 */
	page?: number
	screened_theatrically?: boolean
	/**
	 * @default "popularity.desc"
	 */
	sort_by?:
		| "popularity.asc"
		| "popularity.desc"
		| "revenue.asc"
		| "revenue.desc"
		| "primary_release_date.asc"
		| "primary_release_date.desc"
		| "vote_average.asc"
		| "vote_average.desc"
		| "vote_count.asc"
		| "vote_count.desc"
	timezone?: string
	/**
	 * @type float
	 */
	"vote_average.gte"?: number
	/**
	 * @type float
	 */
	"vote_average.lte"?: number
	/**
	 * @type float
	 */
	"vote_count.gte"?: number
	/**
	 * @type float
	 */
	"vote_count.lte"?: number
	/**
	 * use in conjunction with `with_watch_monetization_types` or `with_watch_providers`
	 */
	watch_region?: string
	/**
	 * can be a comma (`AND`) or pipe (`OR`) separated query
	 */
	with_companies?: string
	/**
	 * can be a comma (`AND`) or pipe (`OR`) separated query
	 */
	with_genres?: string
	/**
	 * can be a comma (`AND`) or pipe (`OR`) separated query
	 */
	with_keywords?: string
	/**
	 * can be a comma (`AND`) or pipe (`OR`) separated query
	 */
	with_networks?: string
	with_origin_country?: string
	with_original_country?: string
	/**
	 * @type int32
	 */
	"with_runtime.gte"?: number
	/**
	 * @type int32
	 */
	"with_runtime.lte"?: number
	/**
	 * possible values are: [1, 2, 3, 4, 5] can be a comma (`AND`) or pipe (`OR`) separated query, can be used in conjunction with `region`
	 */
	with_status?: string
	/**
	 * possible values are: [flatrate, free, ads, rent, buy] use in conjunction with `watch_region`, can be a comma (`AND`) or pipe (`OR`) separated query
	 */
	with_watch_monetization_types?: string
	/**
	 * use in conjunction with `watch_region`, can be a comma (`AND`) or pipe (`OR`) separated query
	 */
	with_watch_providers?: string
	without_companies?: string
	without_genres?: string
	without_keywords?: string
	without_watch_providers?: string
	/**
	 * possible values are: [1, 2, 3, 4, 5, 6] can be a comma (`AND`) or pipe (`OR`) separated query, can be used in conjunction with `region`
	 */
	with_type?: string
}

type PathParams = null

type QueryParams = {
	[key in keyof TMDBDiscoverTvRequest]: TMDBDiscoverTvRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/discover-tv
 */
export interface TMDBDiscoverTvResponse {
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
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		name: string
		origin_country: string
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
		 * @type number
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
 * Find TV shows using over 30 filters and sort options.
 *
 * ### Advanced Filtering
 * If you specify the region parameter, the regional release date will be used instead of the primary release date. The date returned will be the first date based on your query (ie. if a `with_release_type` is specified). It's important to note the order of the release types that are used. Specifying `2|3` would return the limited theatrical release date as opposed to `3|2` which would return the theatrical date.
 *
 * ### `AND`/`OR` Logic
 * Also note that a number of filters support being comma (`,`) or pipe (`|`) separated. Comma's are treated like an `AND` query while pipe's are treated like an `OR`. This allows for quite complex filtering depending on your desired results.
 *
 * @link https://developer.themoviedb.org/reference/discover-tv
 */
export function TMDBDiscoverTv(
	request: TMDBDiscoverTvRequest,
	fetcher: Fetcher,
): Promise<TMDBDiscoverTvResponse>
/**
 * Find TV shows using over 30 filters and sort options.
 *
 * ### Advanced Filtering
 * If you specify the region parameter, the regional release date will be used instead of the primary release date. The date returned will be the first date based on your query (ie. if a `with_release_type` is specified). It's important to note the order of the release types that are used. Specifying `2|3` would return the limited theatrical release date as opposed to `3|2` which would return the theatrical date.
 *
 * ### `AND`/`OR` Logic
 * Also note that a number of filters support being comma (`,`) or pipe (`|`) separated. Comma's are treated like an `AND` query while pipe's are treated like an `OR`. This allows for quite complex filtering depending on your desired results.
 *
 * @link https://developer.themoviedb.org/reference/discover-tv
 */
export function TMDBDiscoverTv(
	request: TMDBDiscoverTvRequest,
	readAccessToken: string,
): Promise<TMDBDiscoverTvResponse>

/**
 * Find TV shows using over 30 filters and sort options.
 *
 * ### Advanced Filtering
 * If you specify the region parameter, the regional release date will be used instead of the primary release date. The date returned will be the first date based on your query (ie. if a `with_release_type` is specified). It's important to note the order of the release types that are used. Specifying `2|3` would return the limited theatrical release date as opposed to `3|2` which would return the theatrical date.
 *
 * ### `AND`/`OR` Logic
 * Also note that a number of filters support being comma (`,`) or pipe (`|`) separated. Comma's are treated like an `AND` query while pipe's are treated like an `OR`. This allows for quite complex filtering depending on your desired results.
 *
 * @link https://developer.themoviedb.org/reference/discover-tv
 */
export default function TMDBDiscoverTv(
	request: TMDBDiscoverTvRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBDiscoverTvResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.DISCOVER, "tv", {
		query: request,
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBDiscoverTvResponse>(url)
	}
}

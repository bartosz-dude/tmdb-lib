import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

/**
 * @link https://developer.themoviedb.org/reference/discover-movie
 */
export interface TMDBDiscoverMovieRequest {
	/**
	 * use in conjunction with `region`
	 */
	certification?: string
	/**
	 * use in conjunction with `region`
	 */
	"certification.gte"?: string
	/**
	 * use in conjunction with `region`
	 */
	"certification.lte"?: string
	/**
	 * use in conjunction with the `certification`, `certification.gte` and `certification.lte` filters
	 */
	certification_country?: string
	/**
	 * @default false
	 */
	include_adult?: boolean
	/**
	 * @default false
	 */
	include_video?: boolean
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
	 * @type int32
	 */
	primary_release_year?: number
	"primary_release_date.gte"?: Date
	"primary_release_date.lte"?: Date
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
	with_cast?: string
	/**
	 * can be a comma (`AND`) or pipe (`OR`) separated query
	 */
	with_companies?: string
	/**
	 * can be a comma (`AND`) or pipe (`OR`) separated query
	 */
	with_crew?: string
	/**
	 * can be a comma (`AND`) or pipe (`OR`) separated query
	 */
	with_genres?: string
	/**
	 * can be a comma (`AND`) or pipe (`OR`) separated query
	 */
	with_keywords?: string
	with_origin_country?: string
	/**
	 * can be a comma (`AND`) or pipe (`OR`) separated query
	 */
	with_people?: string
	/**
	 * possible values are: [1, 2, 3, 4, 5, 6] can be a comma (`AND`) or pipe (`OR`) separated query, can be used in conjunction with `region`
	 */
	with_release_type?: string
	/**
	 * @type int32
	 */
	"with_runtime.gte"?: number
	/**
	 * @type int32
	 */
	"with_runtime.lte"?: number
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
	 * @type int32
	 */
	year?: number
}

type PathParams = null

type QueryParams = {
	[key in keyof TMDBDiscoverMovieRequest]: TMDBDiscoverMovieRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/discover-movie
 */
export interface TMDBDiscoverMovieResponse {
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
		original_language: string
		original_title: string
		overview: string
		/**
		 * @type number
		 * @default 0
		 */
		popularity: number
		poster_path: string
		release_date: string
		title: string
		/**
		 * @default true
		 */
		video: boolean
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
 * Find movies using over 30 filters and sort options.
 *
 * ### Advanced Filtering
 * If you specify the region parameter, the regional release date will be used instead of the primary release date. The date returned will be the first date based on your query (ie. if a `with_release_type` is specified). It's important to note the order of the release types that are used. Specifying `2|3` would return the limited theatrical release date as opposed to `3|2` which would return the theatrical date.
 *
 * ### `AND`/`OR` Logic
 * Also note that a number of filters support being comma (`,`) or pipe (`|`) separated. Comma's are treated like an `AND` query while pipe's are treated like an `OR`. This allows for quite complex filtering depending on your desired results.
 *
 * @link https://developer.themoviedb.org/reference/discover-movie
 */
export function TMDBDiscoverMovie(
	request: TMDBDiscoverMovieRequest,
	fetcher: Fetcher,
): Promise<TMDBDiscoverMovieResponse>
/**
 * Find movies using over 30 filters and sort options.
 *
 * ### Advanced Filtering
 * If you specify the region parameter, the regional release date will be used instead of the primary release date. The date returned will be the first date based on your query (ie. if a `with_release_type` is specified). It's important to note the order of the release types that are used. Specifying `2|3` would return the limited theatrical release date as opposed to `3|2` which would return the theatrical date.
 *
 * ### `AND`/`OR` Logic
 * Also note that a number of filters support being comma (`,`) or pipe (`|`) separated. Comma's are treated like an `AND` query while pipe's are treated like an `OR`. This allows for quite complex filtering depending on your desired results.
 *
 * @link https://developer.themoviedb.org/reference/discover-movie
 */
export function TMDBDiscoverMovie(
	request: TMDBDiscoverMovieRequest,
	readAccessToken: string,
): Promise<TMDBDiscoverMovieResponse>

/**
 * Find movies using over 30 filters and sort options.
 *
 * ### Advanced Filtering
 * If you specify the region parameter, the regional release date will be used instead of the primary release date. The date returned will be the first date based on your query (ie. if a `with_release_type` is specified). It's important to note the order of the release types that are used. Specifying `2|3` would return the limited theatrical release date as opposed to `3|2` which would return the theatrical date.
 *
 * ### `AND`/`OR` Logic
 * Also note that a number of filters support being comma (`,`) or pipe (`|`) separated. Comma's are treated like an `AND` query while pipe's are treated like an `OR`. This allows for quite complex filtering depending on your desired results.
 *
 * @link https://developer.themoviedb.org/reference/discover-movie
 */
export default function TMDBDiscoverMovie(
	request: TMDBDiscoverMovieRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBDiscoverMovieResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.DISCOVER,
		"movie",
		{
			query: request,
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBDiscoverMovieResponse>(url)
	}
}

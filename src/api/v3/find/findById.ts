import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

type ExternalSource =
	| "imdb_id"
	| "facebook_id"
	| "instagram_id"
	| "tvdb_id"
	| "tiktok_id"
	| "twitter_id"
	| "wikidata_id"
	| "youtube_id"

/**
 * @link https://developer.themoviedb.org/reference/find-by-id
 */
export interface TMDBFingFindByIdRequest {
	external_id: string
	external_source: ExternalSource
	language?: string
}

type PathParams = {
	external_id: string
}

type QueryParams = {
	external_source: ExternalSource
	language?: string
}

/**
 * @link https://developer.themoviedb.org/reference/find-by-id
 */
export interface TMDBFingFindByIdResponse {
	movie_results: {
		/**
		 * @default true
		 */
		adult: boolean
		backdrop_path: string
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		title: string
		original_language: string
		original_title: string
		overview: string
		poster_path: string
		media_type: string
		/**
		 * @type int[]
		 */
		genre_ids: number[]
		/**
		 * @type number
		 * @default 0
		 */
		popularity: number
		release_date: string
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
	// Not defined in docs
	// based on IMDb
	person_results: {
		/**
		 * @type int
		 */
		id: number
		name: string
		original_name: string
		media_type: "person"
		adult: boolean
		/**
		 * @type number
		 */
		popularity: number
		/**
		 * @type int
		 */
		gender: number
		known_for_department: string
		profile_path: string
		known_for: {
			backdrop_path: string
			/**
			 * @type int
			 */
			id: number
			title: string
			original_title: string
			overview: string
			poster_path: string
			media_type: string
			adult: boolean
			original_language: string
			/**
			 * @type int[]
			 */
			genre_ids: number[]
			/**
			 * @type number
			 */
			popularity: number
			release_date: string
			video: boolean
			/**
			 * @type number
			 */
			vote_average: number
			/**
			 * @type int
			 */
			vote_count: number
		}[]
	}[]
	// Not defined in docs
	// based on IMDb
	tv_results: {
		backdrop_path: string
		/**
		 * @type int
		 */
		id: number
		name: string
		original_name: string
		overview: string
		poster_path: string
		media_type: "tv"
		adult: boolean
		original_language: string
		/**
		 * @type int[]
		 */
		genre_ids: number[]
		/**
		 * @type number
		 */
		popularity: number
		first_air_date: string
		/**
		 * @type number
		 */
		vote_average: number
		/**
		 * @type int
		 */
		vote_count: number
		origin_country: string[]
	}[]
	// Not defined in docs
	// based on IMDb
	tv_episodes_results: {
		/**
		 * @type int
		 */
		id: number
		name: string
		overview: string
		media_type: "tv_episode"
		/**
		 * @type number
		 */
		vote_average: number
		/**
		 * @type int
		 */
		vote_count: number
		air_date: string
		/**
		 * @type int
		 */
		episode_number: number
		episode_type: "finale" | "standard"
		production_code: string
		/**
		 * @type number
		 */
		runtime: number
		/**
		 * @type int
		 */
		season_number: number
		/**
		 * @type int
		 */
		show_id: number
		still_path: string
	}[]
	// Not defined in docs
	// based on TheTVDB
	tv_seasons_results: {
		/**
		 * @type int
		 */
		id: number
		name: string
		overview: string
		poster_path: string
		media_type: "tv_season"
		/**
		 * @type number
		 */
		vote_averrage: number
		air_date: string
		/**
		 * @type int
		 */
		season_number: number
		/**
		 * @type int
		 */
		show_id: number
		/**
		 * @type int
		 */
		episode_count: number
	}[]
}

/**
 * Find data by external ID's.
 *
 * The find method makes it easy to search for objects in our database by an external identifier.
 *
 * This method will search all objects (movies, TV shows and people) and return the results in a single response.
 *
 * Check the [docs page](https://developer.themoviedb.org/reference/find-by-id) to see supported external sources.
 *
 * @link https://developer.themoviedb.org/reference/find-by-id
 */
export function TMDBFingFindById(
	request: TMDBFingFindByIdRequest,
	fetcher: Fetcher,
): Promise<TMDBFingFindByIdResponse>
/**
 * Find data by external ID's.
 *
 * The find method makes it easy to search for objects in our database by an external identifier.
 *
 * This method will search all objects (movies, TV shows and people) and return the results in a single response.
 *
 * Check the [docs page](https://developer.themoviedb.org/reference/find-by-id) to see supported external sources.
 *
 * @link https://developer.themoviedb.org/reference/find-by-id
 */
export function TMDBFingFindById(
	request: TMDBFingFindByIdRequest,
	readAccessToken: string,
): Promise<TMDBFingFindByIdResponse>

/**
 * Find data by external ID's.
 *
 * The find method makes it easy to search for objects in our database by an external identifier.
 *
 * This method will search all objects (movies, TV shows and people) and return the results in a single response.
 *
 * Check the [docs page](https://developer.themoviedb.org/reference/find-by-id) to see supported external sources.
 *
 * @link https://developer.themoviedb.org/reference/find-by-id
 */
export default function TMDBFingFindById(
	request: TMDBFingFindByIdRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBFingFindByIdResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.FIND,
		"{external_id}",
		{
			path: {
				external_id: request.external_id,
			},
			query: {
				external_source: request.external_source,
				language: request.language,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBFingFindByIdResponse>(url)
	}
}

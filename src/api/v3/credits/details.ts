import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/credit-details
 */
export interface TMDBCreditsDetailsRequest {
	credit_id: string
}

type PathParams = {
	credit_id: string
}

type QueryParams = null

/**
 * @link https://developer.themoviedb.org/reference/credit-details
 */
export interface TMDBCreditsDetailsResponse {
	credit_type: string
	department: string
	job: string
	media: {
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
		original_language: string
		original_name: string
		overview: string
		poster_path: string
		media_type: string
		/**
		 * @type int[]
		 * @default 0
		 */
		genre_ids: number[]
		/**
		 * @type number
		 * @default 0
		 */
		popularity: number
		first_air_date: string
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
		origin_country: string[]
		character: string
		episodes: []
		seasons: {
			air_date: string
			/**
			 * @type int
			 * @default 0
			 */
			episode_count: number
			/**
			 * @type int
			 * @default 0
			 */
			id: number
			name: string
			overview: string
			poster_path: string
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
		}[]
	}
	media_type: string
	id: string
	person: {
		/**
		 * @default true
		 */
		adult: boolean
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		name: string
		original_name: string
		media_type: string
		/**
		 * @type number
		 * @default 0
		 */
		popularity: number
		/**
		 * @type int
		 * @default 0
		 */
		gender: number
		known_for_department: string
		profile_path: string
	}
}

/**
 * Get a movie or TV credit details by ID.
 *
 * @link https://developer.themoviedb.org/reference/credit-details
 */
export function TMDBCreditsDetails(
	request: TMDBCreditsDetailsRequest,
	fetcher: Fetcher,
): Promise<TMDBCreditsDetailsResponse>
/**
 * Get a movie or TV credit details by ID.
 *
 * @link https://developer.themoviedb.org/reference/credit-details
 */
export function TMDBCreditsDetails(
	request: TMDBCreditsDetailsRequest,
	readAccessToken: string,
): Promise<TMDBCreditsDetailsResponse>

/**
 * Get a movie or TV credit details by ID.
 *
 * @link https://developer.themoviedb.org/reference/credit-details
 */
export default function TMDBCreditsDetails(
	request: TMDBCreditsDetailsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBCreditsDetailsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.CREDIT,
		"{credit_id}",
		{
			path: {
				credit_id: request.credit_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBCreditsDetailsResponse>(url)
	}
}

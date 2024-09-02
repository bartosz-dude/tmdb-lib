import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/person-tv-credits
 */
export interface TMDBPeopleTvCreditsRequest {
	/**
	 * @type int32
	 */
	person_id: number
	/**
	 * @default "en-US"
	 */
	language: string
}

type PathParams = {
	person_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBPeopleTvCreditsRequest,
		keyof PathParams
	>]: TMDBPeopleTvCreditsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/person-tv-credits
 */
export interface TMDBPeopleTvCreditsResponse {
	cast: {
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
		character: string
		credit_id: string
		/**
		 * @type int
		 * @default 0
		 */
		episode_count: number
	}[]
	crew: {
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
		credit_id: string
		department: string
		/**
		 * @type int
		 * @default 0
		 */
		episode_count: number
		/**
		 * @type int
		 * @default 0
		 */
		job: string
	}[]
	/**
	 * @type int
	 * @default 0
	 */
	id: number
}

/**
 * Get the TV credits that belong to a person.
 *
 * @link https://developer.themoviedb.org/reference/person-tv-credits
 */
export function TMDBPeopleTvCredits(
	request: TMDBPeopleTvCreditsRequest,
	fetcher: Fetcher,
): Promise<TMDBPeopleTvCreditsResponse>
/**
 * Get the TV credits that belong to a person.
 *
 * @link https://developer.themoviedb.org/reference/person-tv-credits
 */
export function TMDBPeopleTvCredits(
	request: TMDBPeopleTvCreditsRequest,
	readAccessToken: string,
): Promise<TMDBPeopleTvCreditsResponse>

/**
 * Get the TV credits that belong to a person.
 *
 * @link https://developer.themoviedb.org/reference/person-tv-credits
 */
export default function TMDBPeopleTvCredits(
	request: TMDBPeopleTvCreditsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBPeopleTvCreditsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.PERSON,
		"{person_id}/tv_credits",
		{
			query: {
				language: request.language,
			},
			path: {
				person_id: request.person_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBPeopleTvCreditsResponse>(url)
	}
}

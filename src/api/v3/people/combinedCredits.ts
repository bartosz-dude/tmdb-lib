import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/person-combined-credits
 */
export interface TMDBPeopleCombinedCreditsRequest {
	/**
	 * @type int32
	 */
	person_id: number
	/**
	 * @default "en-US"
	 */
	language?: string
}

type PathParams = {
	person_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBPeopleCombinedCreditsRequest,
		keyof PathParams
	>]: TMDBPeopleCombinedCreditsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/person-combined-credits
 */
export interface TMDBPeopleCombinedCreditsResponse {
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
		character: string
		credit_id: string
		/**
		 * @type int
		 * @default 0
		 */
		order: number
		media_type: string
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
		character: string
		credit_id: string
		/**
		 * @type int
		 * @default 0
		 */
		order: number
		media_type: string
	}[]
	/**
	 * @type int
	 * @default 0
	 */
	id: number
}

/**
 * Get the combined movie and TV credits that belong to a person.
 *
 * @link https://developer.themoviedb.org/reference/person-combined-credits
 */
export function TMDBPeopleCombinedCredits(
	request: TMDBPeopleCombinedCreditsRequest,
	fetcher: Fetcher,
): Promise<TMDBPeopleCombinedCreditsResponse>
/**
 * Get the combined movie and TV credits that belong to a person.
 *
 * @link https://developer.themoviedb.org/reference/person-combined-credits
 */
export function TMDBPeopleCombinedCredits(
	request: TMDBPeopleCombinedCreditsRequest,
	readAccessToken: string,
): Promise<TMDBPeopleCombinedCreditsResponse>

/**
 * Get the combined movie and TV credits that belong to a person.
 *
 * @link https://developer.themoviedb.org/reference/person-combined-credits
 */
export default function TMDBPeopleCombinedCredits(
	request: TMDBPeopleCombinedCreditsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBPeopleCombinedCreditsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.PERSON,
		"popular",
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
		return fetcherOrApi<TMDBPeopleCombinedCreditsResponse>(url)
	}
}

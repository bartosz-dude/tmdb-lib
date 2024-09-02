import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/person-movie-credits
 */
export interface TMDBPeopleMovieCreditsRequest {
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
		TMDBPeopleMovieCreditsRequest,
		keyof PathParams
	>]: TMDBPeopleMovieCreditsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/person-movie-credits
 */
export interface TMDBPeopleMovieCreditsResponse {
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
		credit_id: string
		/**
		 * @type int
		 * @default 0
		 */
		department: number
		job: string
	}[]
	/**
	 * @type int
	 * @default 0
	 */
	id: number
}

/**
 * Get the movie credits for a person.
 *
 * @link https://developer.themoviedb.org/reference/person-movie-credits
 */
export function TMDBPeopleMovieCredits(
	request: TMDBPeopleMovieCreditsRequest,
	fetcher: Fetcher,
): Promise<TMDBPeopleMovieCreditsResponse>
/**
 * Get the movie credits for a person.
 *
 * @link https://developer.themoviedb.org/reference/person-movie-credits
 */
export function TMDBPeopleMovieCredits(
	request: TMDBPeopleMovieCreditsRequest,
	readAccessToken: string,
): Promise<TMDBPeopleMovieCreditsResponse>

/**
 * Get the movie credits for a person.
 *
 * @link https://developer.themoviedb.org/reference/person-movie-credits
 */
export default function TMDBPeopleMovieCredits(
	request: TMDBPeopleMovieCreditsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBPeopleMovieCreditsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.PERSON,
		"{person_id}/movie_credits",
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
		return fetcherOrApi<TMDBPeopleMovieCreditsResponse>(url)
	}
}

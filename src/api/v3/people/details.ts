import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser, { appendedResponseNormalizer } from "../../../parsers"
import { URLPaths } from "../../../tmdb"
import type {
	TMDBPeopleChangesRequest,
	TMDBPeopleChangesResponse,
} from "./changes"
import type {
	TMDBPeopleCombinedCreditsRequest,
	TMDBPeopleCombinedCreditsResponse,
} from "./combinedCredits"
import type {
	TMDBPeopleExternalIdsRequest,
	TMDBPeopleExternalIdsResponse,
} from "./externalIds"
import type {
	TMDBPeopleImagesRequest,
	TMDBPeopleImagesResponse,
} from "./images"
import type {
	TMDBPeopleMovieCreditsRequest,
	TMDBPeopleMovieCreditsResponse,
} from "./movieCredits"
import type {
	TMDBPeopleTranslationsRequest,
	TMDBPeopleTranslationsResponse,
} from "./translations"
import type {
	TMDBPeopleTvCreditsRequest,
	TMDBPeopleTvCreditsResponse,
} from "./tvCredits"

/**
 * @link https://developer.themoviedb.org/reference/person-details
 */
export interface TMDBPeopleDetailsRequest {
	/**
	 * @type int32
	 */
	person_id: number
	// TODO fill in when rest of the endpoints are complete
	/**
	 * comma separated list of endpoints within this namespace, 20 items max
	 */
	append_to_response?:
		| string
		| {
				/**
				 * Get the recent changes for a person.
				 *
				 * Get the changes for a person. By default only the last 24 hours are returned.
				 *
				 * You can query up to 14 days in a single query by using the `start_date` and `end_date` query parameters.
				 *
				 * @link https://developer.themoviedb.org/reference/person-changes
				 */
				changes?: OmitPersonId<TMDBPeopleChangesRequest>
				/**
				 * Get the combined movie and TV credits that belong to a person.
				 *
				 * @link https://developer.themoviedb.org/reference/person-combined-credits
				 */
				combined_credits?: OmitPersonId<TMDBPeopleCombinedCreditsRequest>
				/**
				 * Get the external ID's that belong to a person.
				 *
				 * @link https://developer.themoviedb.org/reference/person-external-ids
				 */
				external_ids?: OmitPersonId<TMDBPeopleExternalIdsRequest>
				/**
				 * Get the profile images that belong to a person.
				 *
				 * This method will return the profile images that have been added to a person.
				 *
				 * @link https://developer.themoviedb.org/reference/person-images
				 */
				images?: OmitPersonId<TMDBPeopleImagesRequest>
				/**
				 * Get the movie credits for a person.
				 *
				 * @link https://developer.themoviedb.org/reference/person-movie-credits
				 */
				movie_credits?: OmitPersonId<TMDBPeopleMovieCreditsRequest>
				/**
				 * Get the TV credits that belong to a person.
				 *
				 * @link https://developer.themoviedb.org/reference/person-tv-credits
				 */
				tv_credits?: OmitPersonId<TMDBPeopleTvCreditsRequest>
				/**
				 * Get the translations that belong to a person.
				 *
				 * Take a read through our [language](https://developer.themoviedb.org/docs/languages) documentation for more information about languages on TMDB.
				 *
				 * @link https://developer.themoviedb.org/reference/translations
				 */
				translations?: OmitPersonId<TMDBPeopleTranslationsRequest>
		  }
	/**
	 * @default "en-US"
	 */
	language?: string
	/**
	 * @type int32
	 * @default 1
	 */
}

type OmitPersonId<T> = Omit<T, "person_id">

type PathParams = {
	person_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBPeopleDetailsRequest,
		keyof PathParams
	>]: TMDBPeopleDetailsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/person-details
 */
export interface TMDBPeopleDetailsResponse {
	/**
	 * @default true
	 */
	adult: boolean
	also_known_as: string[]
	biography: string
	birthday: string
	deathday: string
	/**
	 *
	 * | Value | Gender                  |
	 * |-------|-------------------------|
	 * |   0   | Not set / not specified |
	 * |   1   |         Female          |
	 * |   2   |          Male           |
	 * |   3   |       Non-binary        |
	 *
	 * @type int
	 * @default 0
	 */
	gender: number
	homepage: string
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	imdb_id: string
	known_for_department: string
	name: string
	place_of_birth: string
	/**
	 * @type number
	 * @default 0
	 */
	popularity: number
	profile_path: string
	/**
	 * Requires `changes` added to `append_to_response`
	 */
	changes?: OmitId<TMDBPeopleChangesResponse>
	/**
	 * Requires `combined_credits` added to `append_to_response`
	 */
	combined_credits?: OmitId<TMDBPeopleCombinedCreditsResponse>
	/**
	 * Requires `external_ids` added to `append_to_response`
	 */
	external_ids?: OmitId<TMDBPeopleExternalIdsResponse>
	/**
	 * Requires `images` added to `append_to_response`
	 */
	images?: OmitId<TMDBPeopleImagesResponse>
	/**
	 * Requires `movie_credits` added to `append_to_response`
	 */
	movie_credits?: OmitId<TMDBPeopleMovieCreditsResponse>
	/**
	 * Requires `tv_credits` added to `append_to_response`
	 */
	tv_credits?: OmitId<TMDBPeopleTvCreditsResponse>
	/**
	 * Requires `translations` added to `append_to_response`
	 */
	translations?: OmitId<TMDBPeopleTranslationsResponse>
}

type OmitId<T> = Omit<T, "id">

/**
 * Query the top level details of a person.
 *
 * This method supports using append_to_response. Read more about this [here](https://developer.themoviedb.org/docs/append-to-response).
 *
 * @link https://developer.themoviedb.org/reference/person-details
 */
export function TMDBPeopleDetails(
	request: TMDBPeopleDetailsRequest,
	fetcher: Fetcher,
): Promise<TMDBPeopleDetailsResponse>
/**
 * Query the top level details of a person.
 *
 * This method supports using append_to_response. Read more about this [here](https://developer.themoviedb.org/docs/append-to-response).
 *
 * @link https://developer.themoviedb.org/reference/person-details
 */
export function TMDBPeopleDetails(
	request: TMDBPeopleDetailsRequest,
	readAccessToken: string,
): Promise<TMDBPeopleDetailsResponse>

/**
 * Query the top level details of a person.
 *
 * This method supports using append_to_response. Read more about this [here](https://developer.themoviedb.org/docs/append-to-response).
 *
 * @link https://developer.themoviedb.org/reference/person-details
 */
export default function TMDBPeopleDetails(
	request: TMDBPeopleDetailsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBPeopleDetailsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.PERSON,
		"popular",
		{
			query: {
				language: request.language,
				append_to_response: request.append_to_response,
			},
			path: {
				person_id: request.person_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return appendedResponseNormalizer(TMDBFetcher(url, fetcherOrApi))
	} else {
		return appendedResponseNormalizer(
			fetcherOrApi<TMDBPeopleDetailsResponse>(url),
		)
	}
}

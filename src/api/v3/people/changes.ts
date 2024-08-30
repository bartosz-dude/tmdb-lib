import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/person-changes
 */
export interface TMDBPeopleChangesRequest {
	/**
	 * @type int32
	 */
	person_id: number
	end_date?: Date
	/**
	 * @type int32
	 * @default 1
	 */
	page?: number
	start_date?: Date
}

type PathParams = {
	person_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBPeopleChangesRequest,
		keyof PathParams
	>]: TMDBPeopleChangesRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/person-changes
 */
export interface TMDBPeopleChangesResponse {
	changes: {
		key: string
		id: string
		action: string
		iso_639_1: string
		iso_3166_1: TMDB_ISO_3166_1
		value: string
	}[]
}

/**
 * Get the recent changes for a person.
 *
 * Get the changes for a person. By default only the last 24 hours are returned.
 *
 * You can query up to 14 days in a single query by using the `start_date` and `end_date` query parameters.
 *
 * @link https://developer.themoviedb.org/reference/person-changes
 */
export function TMDBPeopleChanges(
	request: TMDBPeopleChangesRequest,
	fetcher: Fetcher,
): Promise<TMDBPeopleChangesResponse>
/**
 * Get the recent changes for a person.
 *
 * Get the changes for a person. By default only the last 24 hours are returned.
 *
 * You can query up to 14 days in a single query by using the `start_date` and `end_date` query parameters.
 *
 * @link https://developer.themoviedb.org/reference/person-changes
 */
export function TMDBPeopleChanges(
	request: TMDBPeopleChangesRequest,
	readAccessToken: string,
): Promise<TMDBPeopleChangesResponse>

/**
 * Get the recent changes for a person.
 *
 * Get the changes for a person. By default only the last 24 hours are returned.
 *
 * You can query up to 14 days in a single query by using the `start_date` and `end_date` query parameters.
 *
 * @link https://developer.themoviedb.org/reference/person-changes
 */
export default function TMDBPeopleChanges(
	request: TMDBPeopleChangesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBPeopleChangesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.PERSON,
		"popular",
		{
			query: {
				page: request.page,
				end_date: request.end_date,
				start_date: request.start_date,
			},
			path: {
				person_id: request.person_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBPeopleChangesResponse>(url)
	}
}

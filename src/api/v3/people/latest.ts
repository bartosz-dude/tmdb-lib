import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/person-latest-id
 */
export interface TMDBPeopleLatestRequest {}

type PathParams = {}

type QueryParams = {
	[key in keyof Omit<
		TMDBPeopleLatestRequest,
		keyof PathParams
	>]: TMDBPeopleLatestRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/person-latest-id
 */
export interface TMDBPeopleLatestResponse {
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
}

/**
 * Get the newest created person. This is a live response and will continuously change.
 *
 * @link https://developer.themoviedb.org/reference/person-latest-id
 */
export function TMDBPeopleLatest(
	request: TMDBPeopleLatestRequest,
	fetcher: Fetcher,
): Promise<TMDBPeopleLatestResponse>
/**
 * Get the newest created person. This is a live response and will continuously change.
 *
 * @link https://developer.themoviedb.org/reference/person-latest-id
 */
export function TMDBPeopleLatest(
	request: TMDBPeopleLatestRequest,
	readAccessToken: string,
): Promise<TMDBPeopleLatestResponse>

/**
 * Get the newest created person. This is a live response and will continuously change.
 *
 * @link https://developer.themoviedb.org/reference/person-latest-id
 */
export default function TMDBPeopleLatest(
	request: TMDBPeopleLatestRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBPeopleLatestResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.PERSON,
		"popular",
		{
			query: {},
			path: {},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBPeopleLatestResponse>(url)
	}
}

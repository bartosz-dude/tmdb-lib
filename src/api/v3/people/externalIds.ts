import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/person-external-ids
 */
export interface TMDBPeopleExternalIdsRequest {
	/**
	 * @type int32
	 */
	person_id: number
}

type PathParams = {
	person_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBPeopleExternalIdsRequest,
		keyof PathParams
	>]: TMDBPeopleExternalIdsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/person-external-ids
 */
export interface TMDBPeopleExternalIdsResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	freebase_mid: string
	freebase_id: string
	imdb_id: string
	/**
	 * @type int
	 * @default 0
	 */
	tvrage_id: number
	wikidata_id: string
	facebook_id: string
	instagram_id: string
	tiktok_id: string
	twitter_id: string
	youtube_id: string
}

/**
 * Get the external ID's that belong to a person.
 *
 * @link https://developer.themoviedb.org/reference/person-external-ids
 */
export function TMDBPeopleExternalIds(
	request: TMDBPeopleExternalIdsRequest,
	fetcher: Fetcher,
): Promise<TMDBPeopleExternalIdsResponse>
/**
 * Get the external ID's that belong to a person.
 *
 * @link https://developer.themoviedb.org/reference/person-external-ids
 */
export function TMDBPeopleExternalIds(
	request: TMDBPeopleExternalIdsRequest,
	readAccessToken: string,
): Promise<TMDBPeopleExternalIdsResponse>

/**
 * Get the external ID's that belong to a person.
 *
 * @link https://developer.themoviedb.org/reference/person-external-ids
 */
export default function TMDBPeopleExternalIds(
	request: TMDBPeopleExternalIdsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBPeopleExternalIdsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.PERSON,
		"popular",
		{
			query: {},
			path: {
				person_id: request.person_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBPeopleExternalIdsResponse>(url)
	}
}

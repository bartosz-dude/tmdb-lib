import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/changes-people-list
 */
export interface TMDBChangesPeopleListRequest {
	end_date?: Date
	/**
	 * @type int32
	 * @default 1
	 */
	page?: number
	start_date?: Date
}

type PathParams = null

type QueryParams = {
	end_date?: Date
	page?: number
	start_date?: Date
}

/**
 * @link https://developer.themoviedb.org/reference/changes-people-list
 */
export interface TMDBChangesPeopleListResponse {
	results: {
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		/**
		 * @default true
		 */
		adult: boolean
	}[]
	/**
	 * @type int
	 * @default 0
	 */
	page: number
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
 * You can query this method up to 14 days at a time. Use the `start_date` and `end_date` query parameters. 100 items are returned per page.
 *
 * @link https://developer.themoviedb.org/reference/changes-people-list
 */
export function TMDBChangesPeopleList(
	request: TMDBChangesPeopleListRequest,
	fetcher: Fetcher,
): Promise<TMDBChangesPeopleListResponse>
/**
 * You can query this method up to 14 days at a time. Use the `start_date` and `end_date` query parameters. 100 items are returned per page.
 *
 * @link https://developer.themoviedb.org/reference/changes-people-list
 */
export function TMDBChangesPeopleList(
	request: TMDBChangesPeopleListRequest,
	readAccessToken: string,
): Promise<TMDBChangesPeopleListResponse>

/**
 * You can query this method up to 14 days at a time. Use the `start_date` and `end_date` query parameters. 100 items are returned per page.
 *
 * @link https://developer.themoviedb.org/reference/changes-people-list
 */
export default function TMDBChangesPeopleList(
	request: TMDBChangesPeopleListRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBChangesPeopleListResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.PERSON,
		"changes",
		{
			query: {
				end_date: request.end_date,
				page: request.page,
				start_date: request.start_date,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBChangesPeopleListResponse>(url)
	}
}

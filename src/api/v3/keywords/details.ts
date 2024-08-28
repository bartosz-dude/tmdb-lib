import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

/**
 * @link https://developer.themoviedb.org/reference/keyword-details
 */
export interface TMDBKeywordsDetailsRequest {
	/**
	 * @type int32
	 */
	keyword_id: number
}

type PathParams = {
	keyword_id: number
}

type QueryParams = null

/**
 * @link https://developer.themoviedb.org/reference/keyword-details
 */
export interface TMDBKeywordsDetailsResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	name: string
}

/**
 * @link https://developer.themoviedb.org/reference/keyword-details
 */
export function TMDBKeywordsDetails(
	request: TMDBKeywordsDetailsRequest,
	fetcher: Fetcher,
): Promise<TMDBKeywordsDetailsResponse>
/**
 * @link https://developer.themoviedb.org/reference/keyword-details
 */
export function TMDBKeywordsDetails(
	request: TMDBKeywordsDetailsRequest,
	readAccessToken: string,
): Promise<TMDBKeywordsDetailsResponse>

/**
 * @link https://developer.themoviedb.org/reference/keyword-details
 */
export default function TMDBKeywordsDetails(
	request: TMDBKeywordsDetailsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBKeywordsDetailsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.KEYWORD,
		"{keyword_id}",
		{
			path: {
				keyword_id: request.keyword_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBKeywordsDetailsResponse>(url)
	}
}

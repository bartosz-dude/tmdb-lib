import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/company-alternative-names
 */
export interface TMDBCompaniesAlternativeNamesRequest {
	/**
	 * @type int32
	 */
	company_id: number
}

type PathParams = {
	company_id: number
}

type QueryParams = null

/**
 * @link https://developer.themoviedb.org/reference/company-alternative-names
 */
export interface TMDBCompaniesAlternativeNamesResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	results: {
		name: string
		type: string
	}[]
}

/**
 * Get the company details by ID.
 *
 * @link https://developer.themoviedb.org/reference/company-alternative-names
 */
export function TMDBCompaniesAlternativeNames(
	request: TMDBCompaniesAlternativeNamesRequest,
	fetcher: Fetcher,
): Promise<TMDBCompaniesAlternativeNamesResponse>
/**
 * Get the company details by ID.
 *
 * @link https://developer.themoviedb.org/reference/company-alternative-names
 */
export function TMDBCompaniesAlternativeNames(
	request: TMDBCompaniesAlternativeNamesRequest,
	readAccessToken: string,
): Promise<TMDBCompaniesAlternativeNamesResponse>

/**
 * Get the company details by ID.
 *
 * @link https://developer.themoviedb.org/reference/company-alternative-names
 */
export default function TMDBCompaniesAlternativeNames(
	request: TMDBCompaniesAlternativeNamesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBCompaniesAlternativeNamesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.COMPANY,
		"{company_id}/alternative_names",
		{
			path: {
				company_id: request.company_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBCompaniesAlternativeNamesResponse>(url)
	}
}

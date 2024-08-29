import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/company-details
 */
export interface TMDBCompaniesDetailsRequest {
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
 * @link https://developer.themoviedb.org/reference/company-details
 */
export interface TMDBCompaniesDetailsResponse {
	description: string
	headquarters: string
	homepage: string
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	logo_path: string
	name: string
	origin_country: string
	parent_company: string
}

/**
 * Get the company details by ID.
 *
 * @link https://developer.themoviedb.org/reference/company-details
 */
export function TMDBCompaniesDetails(
	request: TMDBCompaniesDetailsRequest,
	fetcher: Fetcher,
): Promise<TMDBCompaniesDetailsResponse>
/**
 * Get the company details by ID.
 *
 * @link https://developer.themoviedb.org/reference/company-details
 */
export function TMDBCompaniesDetails(
	request: TMDBCompaniesDetailsRequest,
	readAccessToken: string,
): Promise<TMDBCompaniesDetailsResponse>

/**
 * Get the company details by ID.
 *
 * @link https://developer.themoviedb.org/reference/company-details
 */
export default function TMDBCompaniesDetails(
	request: TMDBCompaniesDetailsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBCompaniesDetailsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.COMPANY,
		"{company_id}",
		{
			path: {
				company_id: request.company_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBCompaniesDetailsResponse>(url)
	}
}

import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/search-company
 */
export interface TMDBSearchCompanyRequest {
	query: string
	/**
	 * @type int32
	 * @default 1
	 */
	page?: number
}

type PathParams = null

type QueryParams = {
	[key in keyof TMDBSearchCompanyRequest]: TMDBSearchCompanyRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/search-company
 */
export interface TMDBSearchCompanyResponse {
	/**
	 * @type int
	 * @default 0
	 */
	page: number
	results: {
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		logo_path: string
		name: string
		origin_country: string
	}[]
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
 * Search for companies by their original and alternative names.
 *
 * @link https://developer.themoviedb.org/reference/search-company
 */
export function TMDBSearchCompany(
	request: TMDBSearchCompanyRequest,
	fetcher: Fetcher,
): Promise<TMDBSearchCompanyResponse>
/**
 * Search for companies by their original and alternative names.
 *
 * @link https://developer.themoviedb.org/reference/search-company
 */
export function TMDBSearchCompany(
	request: TMDBSearchCompanyRequest,
	readAccessToken: string,
): Promise<TMDBSearchCompanyResponse>

/**
 * Search for companies by their original and alternative names.
 *
 * @link https://developer.themoviedb.org/reference/search-company
 */
export default function TMDBSearchCompany(
	request: TMDBSearchCompanyRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBSearchCompanyResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.SEARCH,
		"company",
		{
			query: request,
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBSearchCompanyResponse>(url)
	}
}

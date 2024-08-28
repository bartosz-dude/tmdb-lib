import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

/**
 * @link https://developer.themoviedb.org/reference/configuration-jobs
 */
export interface TMDBConfigurationJobsRequest {}

type PathParams = null

type QueryParams = null

/**
 * @link https://developer.themoviedb.org/reference/configuration-jobs
 */
export type TMDBConfigurationJobsResponse = {
	department: string
	jobs: string[]
}[]

/**
 * Get the list of the jobs and departments we use on TMDB.
 *
 * @see `TMDB_CONFIGURATION.jobs` constant provides the same information as a default request to this endpoint as of 08/2024
 *
 * @link https://developer.themoviedb.org/reference/configuration-jobs
 */
export function TMDBConfigurationJobs(
	request: TMDBConfigurationJobsRequest,
	fetcher: Fetcher,
): Promise<TMDBConfigurationJobsResponse>
/**
 * Get the list of the jobs and departments we use on TMDB.
 *
 * @see `TMDB_CONFIGURATION.jobs` constant provides the same information as a default request to this endpoint as of 08/2024
 *
 * @link https://developer.themoviedb.org/reference/configuration-jobs
 */
export function TMDBConfigurationJobs(
	request: TMDBConfigurationJobsRequest,
	readAccessToken: string,
): Promise<TMDBConfigurationJobsResponse>

/**
 * Get the list of the jobs and departments we use on TMDB.
 *
 * @see `TMDB_CONFIGURATION.jobs` constant provides the same information as a default request to this endpoint as of 08/2024
 *
 * @link https://developer.themoviedb.org/reference/configuration-jobs
 */
export default function TMDBConfigurationJobs(
	request: TMDBConfigurationJobsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBConfigurationJobsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.CONFIGURATION,
		"jobs",
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBConfigurationJobsResponse>(url)
	}
}

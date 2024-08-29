import type {
	TMDB_ISO_3166_1,
	TMDBConfigurationConst,
} from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/movie-watch-providers
 */
export interface TMDBMovieWatchProvidersRequest {
	/**
	 * @type int32
	 */
	movie_id: number
}

type PathParams = {
	movie_id: number
}

type QueryParams = null

/**
 * @link https://developer.themoviedb.org/reference/movie-watch-providers
 */
export interface TMDBMovieWatchProvidersResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	results: Record<TMDB_ISO_3166_1, Providers>
}

interface Providers {
	link: string
	flatrate: WatchProvider[]
	buy?: WatchProvider[]
	rent?: WatchProvider[]
}

interface WatchProvider {
	logo_path: string
	/**
	 * @type int
	 * @default 0
	 */
	provider_id: number
	provider_name: string
	/**
	 * @type int
	 * @default 0
	 */
	display_priority: number
}

/**
 * Get the list of streaming providers we have for a movie.
 *
 * Powered by our partnership with JustWatch, you can query this method to get a list of the streaming/rental/purchase availabilities per country by provider.
 *
 * This is *not* going to return full deep links, but rather, it's just enough information to display what's available where.
 *
 * You can link to the provided TMDB URL to help support TMDB and provide the actual deep links to the content.
 *
 * ### JustWatch Attribution Required
 *
 * In order to use this data you must attribute the source of the data as JustWatch. If we find any usage not complying with these terms we will revoke access to the API.
 *
 * @link https://developer.themoviedb.org/reference/movie-watch-providers
 */
export function TMDBMovieWatchProviders(
	request: TMDBMovieWatchProvidersRequest,
	fetcher: Fetcher,
): Promise<TMDBMovieWatchProvidersResponse>
/**
 * Get the list of streaming providers we have for a movie.
 *
 * Powered by our partnership with JustWatch, you can query this method to get a list of the streaming/rental/purchase availabilities per country by provider.
 *
 * This is *not* going to return full deep links, but rather, it's just enough information to display what's available where.
 *
 * You can link to the provided TMDB URL to help support TMDB and provide the actual deep links to the content.
 *
 * ### JustWatch Attribution Required
 *
 * In order to use this data you must attribute the source of the data as JustWatch. If we find any usage not complying with these terms we will revoke access to the API.
 *
 * @link https://developer.themoviedb.org/reference/movie-watch-providers
 */
export function TMDBMovieWatchProviders(
	request: TMDBMovieWatchProvidersRequest,
	readAccessToken: string,
): Promise<TMDBMovieWatchProvidersResponse>

/**
 * Get the list of streaming providers we have for a movie.
 *
 * Powered by our partnership with JustWatch, you can query this method to get a list of the streaming/rental/purchase availabilities per country by provider.
 *
 * This is *not* going to return full deep links, but rather, it's just enough information to display what's available where.
 *
 * You can link to the provided TMDB URL to help support TMDB and provide the actual deep links to the content.
 *
 * ### JustWatch Attribution Required
 *
 * In order to use this data you must attribute the source of the data as JustWatch. If we find any usage not complying with these terms we will revoke access to the API.
 *
 * @link https://developer.themoviedb.org/reference/movie-watch-providers
 */
export default function TMDBMovieWatchProviders(
	request: TMDBMovieWatchProvidersRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBMovieWatchProvidersResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.MOVIE,
		"{movie_id}/watch/providers",
		{
			path: {
				movie_id: request.movie_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBMovieWatchProvidersResponse>(url)
	}
}

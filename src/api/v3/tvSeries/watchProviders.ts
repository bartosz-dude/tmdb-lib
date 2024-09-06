import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/tv-series-watch-providers
 */
export interface TMDBTvSeriesWatchProvidersRequest {
	/**
	 * @type int32
	 */
	series_id: number
}

type PathParams = {
	series_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBTvSeriesWatchProvidersRequest,
		keyof PathParams
	>]: TMDBTvSeriesWatchProvidersRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-series-watch-providers
 */
export interface TMDBTvSeriesWatchProvidersResponse {
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
 * Get the list of streaming providers we have for a TV show.
 *
 * Powered by our partnership with JustWatch, you can query this method to get a list of the streaming/rental/purchase availabilities per country by provider.
 *
 * This is *not* going to return full deep links, but rather, it's just enough information to display what's available where.
 *
 * You can link to the provided TMDB URL to help support TMDB and provide the actual deep links to the content.
 *
 * > ### JustWatch Attribution Required
 * >
 * > In order to use this data you must attribute the source of the data as JustWatch. If we find any usage not complying with these terms we will revoke access to the API.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-watch-providers
 */
export function TMDBTvSeriesWatchProviders(
	request: TMDBTvSeriesWatchProvidersRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeriesWatchProvidersResponse>
/**
 * Get the list of streaming providers we have for a TV show.
 *
 * Powered by our partnership with JustWatch, you can query this method to get a list of the streaming/rental/purchase availabilities per country by provider.
 *
 * This is *not* going to return full deep links, but rather, it's just enough information to display what's available where.
 *
 * You can link to the provided TMDB URL to help support TMDB and provide the actual deep links to the content.
 *
 * > ### JustWatch Attribution Required
 * >
 * > In order to use this data you must attribute the source of the data as JustWatch. If we find any usage not complying with these terms we will revoke access to the API.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-watch-providers
 */
export function TMDBTvSeriesWatchProviders(
	request: TMDBTvSeriesWatchProvidersRequest,
	readAccessToken: string,
): Promise<TMDBTvSeriesWatchProvidersResponse>

/**
 * Get the list of streaming providers we have for a TV show.
 *
 * Powered by our partnership with JustWatch, you can query this method to get a list of the streaming/rental/purchase availabilities per country by provider.
 *
 * This is *not* going to return full deep links, but rather, it's just enough information to display what's available where.
 *
 * You can link to the provided TMDB URL to help support TMDB and provide the actual deep links to the content.
 *
 * > ### JustWatch Attribution Required
 * >
 * > In order to use this data you must attribute the source of the data as JustWatch. If we find any usage not complying with these terms we will revoke access to the API.
 *
 * @link https://developer.themoviedb.org/reference/tv-series-watch-providers
 */
export default function TMDBTvSeriesWatchProviders(
	request: TMDBTvSeriesWatchProvidersRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeriesWatchProvidersResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/watch/providers",
		{
			path: {
				series_id: request.series_id,
			},
			query: {},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBTvSeriesWatchProvidersResponse>(url)
	}
}

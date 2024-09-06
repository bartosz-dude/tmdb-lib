import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser, { appendedResponseNormalizer } from "../../../parsers"
import type { TMDB_ISO_3166_1 } from "../../../constants"
import type {
	TMDBTvSeriesAggregateCreditsRequest,
	TMDBTvSeriesAggregateCreditsResponse,
} from "./aggregateCredits"
import type { TMDBTvSeriesAlternativeTitlesResponse } from "./alternativeTitles"
import type {
	TMDBTvSeriesChangesRequest,
	TMDBTvSeriesChangesResponse,
} from "./changes"
import type {
	TMDBTvSeriesContentRatingsRequest,
	TMDBTvSeriesContentRatingsResponse,
} from "./contentRatings"
import type {
	TMDBTvSeriesCreditsRequest,
	TMDBTvSeriesCreditsResponse,
} from "./credits"
import type {
	TMDBTvSeriesEpisodeGroupsRequest,
	TMDBTvSeriesEpisodeGroupsResponse,
} from "./episodeGroups"
import type {
	TMDBTvSeriesExternalIdsRequest,
	TMDBTvSeriesExternalIdsResponse,
} from "./externalIds"
import type {
	TMDBTvSeriesImagesRequest,
	TMDBTvSeriesImagesResponse,
} from "./images"
import type {
	TMDBTvSeriesKeywordsRequest,
	TMDBTvSeriesKeywordsResponse,
} from "./keywords"
import type {
	TMDBTvSeriesListsRequest,
	TMDBTvSeriesListsResponse,
} from "./lists"
import type {
	TMDBTvSeriesRecommendationsRequest,
	TMDBTvSeriesRecommendationsResponse,
} from "./recommendations"
import type {
	TMDBTvSeriesReviewsRequest,
	TMDBTvSeriesReviewsResponse,
} from "./reviews"
import type {
	TMDBTvSeriesScreenedTheatricallyRequest,
	TMDBTvSeriesScreenedTheatricallyResponse,
} from "./screenedTheatrically"
import type {
	TMDBTvSeriesSimilarRequest,
	TMDBTvSeriesSimilarResponse,
} from "./similar"
import type {
	TMDBTvSeriesTranslationsRequest,
	TMDBTvSeriesTranslationsResponse,
} from "./translations"
import type {
	TMDBTvSeriesVideosRequest,
	TMDBTvSeriesVideosResponse,
} from "./videos"
import type {
	TMDBTvSeriesWatchProvidersRequest,
	TMDBTvSeriesWatchProvidersResponse,
} from "./watchProviders"

/**
 * @link https://developer.themoviedb.org/reference/tv-series-details
 */
export interface TMDBTvSeriesDetailsRequest {
	/**
	 * @type int32
	 */
	series_id: number
	/**
	 * comma separated list of endpoints within this namespace, 20 items max
	 */
	append_to_response?:
		| string
		| {
				/**
				 * Get the details of a TV show.
				 *
				 * This method supports using `append_to_response`. Read more about this [here](https://developer.themoviedb.org/docs/append-to-response).
				 *
				 * @link https://developer.themoviedb.org/reference/tv-series-details
				 */
				aggregate_credits?: TMDBTvSeriesAggregateCreditsRequest
				/**
				 * Get the alternative titles that have been added to a TV show.
				 *
				 * @link https://developer.themoviedb.org/reference/tv-series-alternative-titles
				 */
				alternative_titles?: TMDBTvSeriesAggregateCreditsRequest
				/**
				 * Get the recent changes for a TV show.
				 *
				 * Get the changes for a TV show. By default only the last 24 hours are returned.
				 *
				 * You can query up to 14 days in a single query by using the `start_date` and `end_date` query parameters.
				 *
				 * TV show changes are a little different than movie changes in that there are some edits on seasons and episodes that will create a top level change entry at the show level. These can be found under the season and episode keys. These keys will contain a `series_id` and `episode_id`. You can use the season changes and episode changes methods to look these up individually.
				 *
				 * @link https://developer.themoviedb.org/reference/tv-series-changes
				 */
				changes?: TMDBTvSeriesChangesRequest
				/**
				 * Get the alternative titles that have been added to a TV show.
				 *
				 * @link https://developer.themoviedb.org/reference/tv-series-alternative-titles
				 */
				content_ratings?: TMDBTvSeriesContentRatingsRequest
				/**
				 * Get the latest season credits of a TV show.
				 *
				 * This is the original TV credits method which returns the ***latest season credit data***. If you would like to request the aggregate view (which is what you see on our website) you should use the [`/aggregate_credits`](https://developer.themoviedb.org/reference/tv-series-aggregate-credits) method.
				 *
				 * @link https://developer.themoviedb.org/reference/tv-series-credits
				 */
				credits?: TMDBTvSeriesCreditsRequest
				/**
				 * Get the episode groups that have been added to a TV show.
				 *
				 * With a group ID you can call the get TV episode group details method.
				 *
				 * @link https://developer.themoviedb.org/reference/tv-series-episode-groups
				 */
				episode_groups?: TMDBTvSeriesEpisodeGroupsRequest
				/**
				 * Get a list of external IDs that have been added to a TV show.
				 *
				 * @link https://developer.themoviedb.org/reference/tv-series-external-ids
				 */
				external_ids?: TMDBTvSeriesExternalIdsRequest
				/**
				 * Get the images that belong to a TV series.
				 *
				 * This method will return the backdrops, posters and logos that have been added to a TV show.
				 *
				 * If you have a `language` specified, it will act as a filter on the returned items. You can use the `include_image_language` param to query additional languages.
				 *
				 * @link https://developer.themoviedb.org/reference/tv-series-images
				 */
				images?: TMDBTvSeriesImagesRequest
				/**
				 * Get a list of keywords that have been added to a TV show.
				 *
				 * @link https://developer.themoviedb.org/reference/tv-series-keywords
				 */
				keywords?: TMDBTvSeriesKeywordsRequest
				/**
				 * Get the lists that a TV series has been added to.
				 *
				 * @link https://developer.themoviedb.org/reference/lists-copy
				 */
				lists?: TMDBTvSeriesListsRequest
				/**
				 * @link https://developer.themoviedb.org/reference/tv-series-recommendations
				 */
				recommendations?: TMDBTvSeriesRecommendationsRequest
				/**
				 * Get the reviews that have been added to a TV show.
				 *
				 * @link https://developer.themoviedb.org/reference/tv-series-reviews
				 */
				reviews?: TMDBTvSeriesReviewsRequest
				/**
				 * Get the seasons and episodes that have screened theatrically.
				 *
				 * @link https://developer.themoviedb.org/reference/tv-series-screened-theatrically
				 */
				screened_theatrically?: TMDBTvSeriesScreenedTheatricallyRequest
				/**
				 * Get the similar TV shows.
				 *
				 * @link https://developer.themoviedb.org/reference/tv-series-similar
				 */
				similar?: TMDBTvSeriesSimilarRequest
				/**
				 * Get the translations that have been added to a TV show.
				 *
				 * Take a read through our [language](https://developer.themoviedb.org/docs/languages) documentation for more information about languages on TMDB.
				 *
				 * @link https://developer.themoviedb.org/reference/tv-series-translations
				 */
				translations?: TMDBTvSeriesTranslationsRequest
				/**
				 * Get the videos that belong to a TV show.
				 *
				 * @link https://developer.themoviedb.org/reference/tv-series-videos
				 */
				videos?: TMDBTvSeriesVideosRequest
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
				"watch/providers"?: TMDBTvSeriesWatchProvidersRequest
		  }
	/**
	 * @default "en-US"
	 */
	language?: string
}

type PathParams = {
	series_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBTvSeriesDetailsRequest,
		keyof PathParams
	>]: TMDBTvSeriesDetailsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-series-details
 */
export interface TMDBTvSeriesDetailsResponse {
	/**
	 * @default true
	 */
	adult: boolean
	backdrop_path: string
	created_by: {
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		credit_id: string
		name: string
		/**
		 * | Value | Gender                  |
		 * |-------|-------------------------|
		 * |   0   | Not set / not specified |
		 * |   1   |         Female          |
		 * |   2   |          Male           |
		 * |   3   |       Non-binary        |
		 * @default 0
		 */
		gender: number
		profile_path: string
	}[]
	/**
	 * @type int[]
	 */
	episode_run_time: number[]
	genres: {
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		name: string
	}[]
	homepage: string
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	/**
	 * @default true
	 */
	in_production: boolean
	last_air_date: {
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		overview: string
		/**
		 * @type number
		 * @default 0
		 */
		vote_average: number
		/**
		 * @type int
		 * @default 0
		 */
		vote_count: number
		air_date: string
		/**
		 * @type int
		 * @default 0
		 */
		episode_number: number
		production_code: string
		/**
		 * @type int
		 * @default 0
		 */
		runtime: number
		/**
		 * @type int
		 * @default 0
		 */
		season_number: number
		/**
		 * @type int
		 * @default 0
		 */
		show_id: number
		still_path: string
	}
	name: string
	next_episode_to_air: string
	networks: {
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
	number_of_episodes: number
	/**
	 * @type int
	 * @default 0
	 */
	number_of_seasons: number
	origin_country: string[]
	original_language: string
	overview: string
	/**
	 * @type number
	 * @default 0
	 */
	popularity: number
	poster_path: string
	production_companies: {
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		logo_path: string
		name: string
		origin_country: string
	}[]
	production_countries: {
		iso_3166_1: TMDB_ISO_3166_1
		name: string
	}[]
	seasons: {
		air_date: string
		/**
		 * @type int
		 * @default 0
		 */
		episode_count: number
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		name: string
		overview: string
		poster_path: string
		/**
		 * @type int
		 * @default 0
		 */
		season_number: number
		/**
		 * @type number
		 * @default 0
		 */
		vote_average: number
	}[]
	spoken_languages: {
		english_name: string
		iso_1639_1: string
		name: string
	}[]
	status: string
	tagline: string
	type: string
	/**
	 * @type number
	 * @default 0
	 */
	vote_average: number
	/**
	 * @type int
	 * @default 0
	 */
	vote_count: number
	/**
	 * Requires `aggregate_credits` added to `append_to_response`
	 */
	aggregate_credits?: TMDBTvSeriesAggregateCreditsResponse
	/**
	 * Requires `alternative_titles` added to `append_to_response`
	 */
	alternative_titles?: TMDBTvSeriesAlternativeTitlesResponse
	/**
	 * Requires `changes` added to `append_to_response`
	 */
	changes?: TMDBTvSeriesChangesResponse
	/**
	 * Requires `content_ratings` added to `append_to_response`
	 */
	content_ratings?: TMDBTvSeriesContentRatingsResponse
	/**
	 * Requires `credits` added to `append_to_response`
	 */
	credits?: TMDBTvSeriesCreditsResponse
	/**
	 * Requires `episode_groups` added to `append_to_response`
	 */
	episode_groups?: TMDBTvSeriesEpisodeGroupsResponse
	/**
	 * Requires `external_ids` added to `append_to_response`
	 */
	external_ids?: TMDBTvSeriesExternalIdsResponse
	/**
	 * Requires `images` added to `append_to_response`
	 */
	images?: TMDBTvSeriesImagesResponse
	/**
	 * Requires `keywords` added to `append_to_response`
	 */
	keywords?: TMDBTvSeriesKeywordsResponse
	/**
	 * Requires `lists` added to `append_to_response`
	 */
	lists?: TMDBTvSeriesListsResponse
	/**
	 * Requires `recommendations` added to `append_to_response`
	 */
	recommendations?: TMDBTvSeriesRecommendationsResponse
	/**
	 * Requires `reviews` added to `append_to_response`
	 */
	reviews?: TMDBTvSeriesReviewsResponse
	/**
	 * Requires `screened_theatrically` added to `append_to_response`
	 */
	screened_theatrically?: TMDBTvSeriesScreenedTheatricallyResponse
	/**
	 * Requires `similar` added to `append_to_response`
	 */
	similar?: TMDBTvSeriesSimilarResponse
	/**
	 * Requires `translations` added to `append_to_response`
	 */
	translations?: TMDBTvSeriesTranslationsResponse
	/**
	 * Requires `videos` added to `append_to_response`
	 */
	videos?: TMDBTvSeriesVideosResponse
	/**
	 * Requires `"watch/providers"` added to `append_to_response`
	 */
	"watch/providers": TMDBTvSeriesWatchProvidersResponse
}

/**
 * Get the details of a TV show.
 *
 * This method supports using `append_to_response`. Read more about this [here](https://developer.themoviedb.org/docs/append-to-response).
 *
 * @link https://developer.themoviedb.org/reference/tv-series-details
 */
export function TMDBTvSeriesDetails(
	request: TMDBTvSeriesDetailsRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeriesDetailsResponse>
/**
 * Get the details of a TV show.
 *
 * This method supports using `append_to_response`. Read more about this [here](https://developer.themoviedb.org/docs/append-to-response).
 *
 * @link https://developer.themoviedb.org/reference/tv-series-details
 */
export function TMDBTvSeriesDetails(
	request: TMDBTvSeriesDetailsRequest,
	readAccessToken: string,
): Promise<TMDBTvSeriesDetailsResponse>

/**
 * Get the details of a TV show.
 *
 * This method supports using `append_to_response`. Read more about this [here](https://developer.themoviedb.org/docs/append-to-response).
 *
 * @link https://developer.themoviedb.org/reference/tv-series-details
 */
export default function TMDBTvSeriesDetails(
	request: TMDBTvSeriesDetailsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeriesDetailsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}",
		{
			path: {
				series_id: request.series_id,
			},
			query: {
				append_to_response: request.append_to_response,
				language: request.language,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return appendedResponseNormalizer(TMDBFetcher(url, fetcherOrApi))
	} else {
		return appendedResponseNormalizer(
			fetcherOrApi<TMDBTvSeriesDetailsResponse>(url),
		)
	}
}

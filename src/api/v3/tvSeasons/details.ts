import type { TMDB_ISO_3166_1 } from "../../../constants"
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser, { appendedResponseNormalizer } from "../../../parsers"
import { URLPaths } from "../../../tmdb"
import type {
	TMDBTvSeasonsAggregateCreditsRequest,
	TMDBTvSeasonsAggregateCreditsResponse,
} from "./aggregateCredits"
import type {
	TMDBTvSeasonsCreditsRequest,
	TMDBTvSeasonsCreditsResponse,
} from "./credits"
import type {
	TMDBTvSeasonsExternalIdsRequest,
	TMDBTvSeasonsExternalIdsResponse,
} from "./externalIds"
import type {
	TMDBTvSeasonsImagesRequest,
	TMDBTvSeasonsImagesResponse,
} from "./images"
import type {
	TMDBTvSeasonsTranslationsRequest,
	TMDBTvSeasonsTranslationsResponse,
} from "./translations"
import type {
	TMDBTvSeasonsVideosRequest,
	TMDBTvSeasonsVideosResponse,
} from "./videos"
import type {
	TMDBTvSeasonsWatchProvidersRequest,
	TMDBTvSeasonsWatchProvidersResponse,
} from "./watchProviders"

/**
 * @link https://developer.themoviedb.org/reference/tv-season-details
 */
export interface TMDBTvSeasonsDetailsRequest {
	/**
	 * @type int32
	 */
	series_id: number
	/**
	 * @type int32
	 */
	season_number: number
	/**
	 * comma separated list of endpoints within this namespace, 20 items ma
	 */
	// TODO add supported endpoints here
	append_to_response?:
		| string
		| {
				/**
				 * Get the rating, watchlist and favorite status.
				 *
				 * @link https://developer.themoviedb.org/reference/tv-season-account-states
				 */
				aggregate_credits?: TMDBTvSeasonsAggregateCreditsRequest
				/**
				 * @link https://developer.themoviedb.org/reference/tv-season-credits
				 */
				credits?: TMDBTvSeasonsCreditsRequest
				/**
				 * Get a list of external IDs that have been added to a TV season.
				 *
				 * @link https://developer.themoviedb.org/reference/tv-season-external-ids
				 */
				external_ids?: TMDBTvSeasonsExternalIdsRequest
				/**
				 * Get the images that belong to a TV season.
				 *
				 * This method will return the posters that have been added to a TV season.
				 *
				 * If you have a `language` specified, it will act as a filter on the returned items. You can use the `include_image_language` param to query additional languages.
				 *
				 * @link https://developer.themoviedb.org/reference/tv-season-images
				 */
				images?: TMDBTvSeasonsImagesRequest
				/**
				 * Get the translations for a TV season.
				 *
				 * Take a read through our [language](https://developer.themoviedb.org/docs/languages) documentation for more information about languages on TMDB.
				 *
				 * @link https://developer.themoviedb.org/reference/tv-season-translations
				 */
				translations?: TMDBTvSeasonsTranslationsRequest
				/**
				 * Get the videos that belong to a TV season.
				 *
				 * @link https://developer.themoviedb.org/reference/tv-season-videos
				 */
				videos?: TMDBTvSeasonsVideosRequest
				/**
				 * Get the list of streaming providers we have for a TV season.
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
				 * @link https://developer.themoviedb.org/reference/tv-season-watch-providers
				 */
				"watch/providers"?: TMDBTvSeasonsWatchProvidersRequest
		  }
	/**
	 * @default "en-US"
	 */
	language?: string
}

type PathParams = {
	series_id: number
	season_number: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBTvSeasonsDetailsRequest,
		keyof PathParams
	>]: TMDBTvSeasonsDetailsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/tv-season-details
 */
export interface TMDBTvSeasonsDetailsResponse {
	_id: string
	air_date: string
	episodes: {
		air_date: string
		/**
		 * @type int
		 * @default 0
		 */
		episode_number: number
		/**
		 * @type int
		 * @default 0
		 */
		id: number
		name: string
		overview: string
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
		crew: {
			department: string
			job: string
			credit_id: string
			/**
			 * @default true
			 */
			adult: boolean
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
			/**
			 * @type int
			 * @default 0
			 */
			id: number
			known_for_department: string
			name: string
			original_name: string
			/**
			 * @type number
			 * @default 0
			 */
			popularity: number
			profile_path: string
		}[]
		guest_starts: {
			character: string
			credit_id: string
			/**
			 * @type int
			 * @default 0
			 */
			order: number
			/**
			 * @default true
			 */
			adult: boolean
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
			/**
			 * @type int
			 * @default 0
			 */
			id: number
			known_for_department: string
			name: string
			original_name: string
			/**
			 * @type number
			 * @default 0
			 */
			popularity: number
			profile_path: string
		}[]
	}[]
	name: string
	overview: string
	/**
	 * @type int
	 * @default 0
	 */
	id: number
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
	/**
	 * Requires `aggregate_credits` added to `append_to_response`
	 */
	aggregate_credits?: TMDBTvSeasonsAggregateCreditsResponse
	/**
	 * Requires `credits` added to `append_to_response`
	 */
	credits?: TMDBTvSeasonsCreditsResponse
	/**
	 * Requires `external_ids` added to `append_to_response`
	 */
	external_ids?: TMDBTvSeasonsExternalIdsResponse
	/**
	 * Requires `images` added to `append_to_response`
	 */
	images?: TMDBTvSeasonsImagesResponse
	/**
	 * Requires `translations` added to `append_to_response`
	 */
	translations?: TMDBTvSeasonsTranslationsResponse
	/**
	 * Requires `videos` added to `append_to_response`
	 */
	videos?: TMDBTvSeasonsVideosResponse
	/**
	 * Requires `"watch/providers"` added to `append_to_response`
	 */
	"watch/providers"?: TMDBTvSeasonsWatchProvidersResponse
}

/**
 * Query the details of a TV season.
 *
 * This method supports using `append_to_response`. Read more about this [here](https://developer.themoviedb.org/docs/append-to-response).
 *
 * @link https://developer.themoviedb.org/reference/tv-season-details
 */
export function TMDBTvSeasonsDetails(
	request: TMDBTvSeasonsDetailsRequest,
	fetcher: Fetcher,
): Promise<TMDBTvSeasonsDetailsResponse>
/**
 * Query the details of a TV season.
 *
 * This method supports using `append_to_response`. Read more about this [here](https://developer.themoviedb.org/docs/append-to-response).
 *
 * @link https://developer.themoviedb.org/reference/tv-season-details
 */
export function TMDBTvSeasonsDetails(
	request: TMDBTvSeasonsDetailsRequest,
	readAccessToken: string,
): Promise<TMDBTvSeasonsDetailsResponse>

/**
 * Query the details of a TV season.
 *
 * This method supports using `append_to_response`. Read more about this [here](https://developer.themoviedb.org/docs/append-to-response).
 *
 * @link https://developer.themoviedb.org/reference/tv-season-details
 */
export default function TMDBTvSeasonsDetails(
	request: TMDBTvSeasonsDetailsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBTvSeasonsDetailsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.TV,
		"{series_id}/season/{season_number}",
		{
			path: {
				series_id: request.series_id,
				season_number: request.season_number,
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
			fetcherOrApi<TMDBTvSeasonsDetailsResponse>(url),
		)
	}
}

import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser, { appendedResponseNormalizer } from "../../../parsers"
import type {
	TMDBMovieAlternativeTitlesRequest,
	TMDBMovieAlternativeTitlesResponse,
} from "./alternativeTitles"
import type {
	TMDBMovieChangesRequest,
	TMDBMovieChangesResponse,
} from "./changes"
import type {
	TMDBMovieCreditsRequest,
	TMDBMovieCreditsResponse,
} from "./credits"
import type {
	TMDBMovieExternalIdsRequest,
	TMDBMovieExternalIdsResponse,
} from "./externalIds"
import type { TMDBMovieImagesRequest, TMDBMovieImagesResponse } from "./images"
import type {
	TMDBMovieKeywordsRequest,
	TMDBMovieKeywordsResponse,
} from "./keywords"
import type { TMDBMovieListsRequest, TMDBMovieListsResponse } from "./lists"
import type {
	TMDBMovieRecommendationsRequest,
	TMDBMovieRecommendationsResponse,
} from "./recommendations"
import type {
	TMDBMovieReleaseDatesRequest,
	TMDBMovieReleaseDatesResponse,
} from "./releaseDates"
import type {
	TMDBMovieReviewsRequest,
	TMDBMovieReviewsResponse,
} from "./reviews"
import type {
	TMDBMovieSimilarRequest,
	TMDBMovieSimilarResponse,
} from "./similar"
import type {
	TMDBMovieTranslationsRequest,
	TMDBMovieTranslationsResponse,
} from "./translations"
import type { TMDBMovieVideosRequest, TMDBMovieVideosResponse } from "./videos"
import type {
	TMDBMovieWatchProvidersRequest,
	TMDBMovieWatchProvidersResponse,
} from "./watchProviders"
import type {
	TMDBMovieAccountStatesRequest,
	TMDBMovieAccountStatesResponse,
} from "./accountStates"

/**
 * @link https://developer.themoviedb.org/reference/movie-details
 */
export interface TMDBMovieDetailsRequest {
	/**
	 * @type int32
	 */
	movie_id: number
	/**
	 * comma separated list of endpoints within this namespace, 20 items max
	 */
	append_to_response?:
		| string
		| {
				/**
				 * Get the rating, watchlist and favorite status of an account.
				 *
				 * @link https://developer.themoviedb.org/reference/movie-account-states
				 */
				account_states?: OmitMovieId<TMDBMovieAccountStatesRequest>
				/**
				 * Get the alternative titles for a movie.
				 *
				 * @link https://developer.themoviedb.org/reference/movie-alternative-titles
				 */
				alternative_titles?: OmitMovieId<TMDBMovieAlternativeTitlesRequest>
				/**
				 * Get the recent changes for a movie.
				 *
				 * Get the changes for a movie. By default only the last 24 hours are returned.
				 *
				 * You can query up to 14 days in a single query by using the `start_date` and `end_date` query parameters.
				 *
				 * @link https://developer.themoviedb.org/reference/movie-changes
				 */
				changes?: OmitMovieId<TMDBMovieChangesRequest>
				/**
				 * @link https://developer.themoviedb.org/reference/movie-credits
				 */
				credits?: OmitMovieId<TMDBMovieCreditsRequest>
				/**
				 * @link https://developer.themoviedb.org/reference/movie-external-ids
				 */
				external_ids?: OmitMovieId<TMDBMovieExternalIdsRequest>
				/**
				 * Get the images that belong to a movie.
				 *
				 * This method will return the backdrops, posters and logos that have been added to a movie.
				 *
				 * If you have a `language` specified, it will act as a filter on the returned items. You can use the `include_image_language` param to query additional languages.
				 *
				 * @link https://developer.themoviedb.org/reference/movie-images
				 */
				images?: OmitMovieId<TMDBMovieImagesRequest>
				/**
				 * @link https://developer.themoviedb.org/reference/movie-keywords
				 */
				keywords?: OmitMovieId<TMDBMovieKeywordsRequest>
				/**
				 * Get the lists that a movie has been added to.
				 *
				 * @link https://developer.themoviedb.org/reference/movie-lists
				 */
				lists?: OmitMovieId<TMDBMovieListsRequest>
				/**
				 * @link https://developer.themoviedb.org/reference/movie-recommendations
				 */
				recommendations?: OmitMovieId<TMDBMovieRecommendationsRequest>
				/**
				 * Get the release dates and certifications for a movie.
				 *
				 * The release types and statuses used on TMDB are the following:
				 * | Release              | Type  |
				 * |----------------------|-------|
				 * | Premiere             |   1   |
				 * | Theatrical (limited) |   2   |
				 * | Theatrical           |   3   |
				 * | Digital              |   4   |
				 * | Physical             |   5   |
				 * | TV                   |   6   |
				 *
				 * @link https://developer.themoviedb.org/reference/movie-release-dates
				 */
				release_dates?: OmitMovieId<TMDBMovieReleaseDatesRequest>
				/**
				 * Get the user reviews for a movie.
				 *
				 * @link https://developer.themoviedb.org/reference/movie-reviews
				 */
				reviews?: OmitMovieId<TMDBMovieReviewsRequest>
				/**
				 * Get the similar movies based on genres and keywords.
				 *
				 * This method only looks for other items based on genres and plot keywords. As such, the results found here are not always going to be precise. Use it with that in mind.
				 *
				 * @link https://developer.themoviedb.org/reference/movie-similar
				 */
				similar?: OmitMovieId<TMDBMovieSimilarRequest>
				/**
				 * Get the translations for a movie.
				 *
				 * Take a read through our [language](https://developer.themoviedb.org/docs/languages) documentation for more information about languages on TMDB.
				 *
				 * @link https://developer.themoviedb.org/reference/movie-translations
				 */
				translations?: OmitMovieId<TMDBMovieTranslationsRequest>
				/**
				 * @link https://developer.themoviedb.org/reference/movie-videos
				 */
				videos?: OmitMovieId<TMDBMovieVideosRequest>
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
				"watch/providers"?: OmitMovieId<TMDBMovieWatchProvidersRequest>
		  }
	/**
	 * @default "en-US"
	 */
	language?: string
}

type OmitMovieId<T> = Omit<T, "movie_id">

type PathParams = {
	movie_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBMovieDetailsRequest,
		keyof PathParams
	>]: TMDBMovieDetailsRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/movie-details
 */
export interface TMDBMovieDetailsResponse {
	/**
	 * @default true
	 */
	adult: boolean
	backdrop_path: string
	// based on response
	belongs_to_collection: {
		/**
		 * @type int
		 */
		id: number
		name: string
		poster_path: string
		backdrop_path: string
	}
	/**
	 * @type int
	 * @default 0
	 */
	budget: number
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
	imdb_id: string
	original_language: string
	original_title: string
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
		iso_3166_1: string
		name: string
	}[]
	release_date: string
	/**
	 * @type int
	 * @default 0
	 */
	revenue: number
	/**
	 * @type int
	 * @default 0
	 */
	runtime: number
	spoken_languages: {
		english_name: string
		iso_639_1: string
		name: string
	}[]
	status: string
	tagline: string
	title: string
	/**
	 * @default true
	 */
	video: boolean
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
	// TODO add other endpoints when using `append_to_response`
	/**
	 * Requires `account_states` added to `append_to_response`
	 */
	account_states?: OmitId<TMDBMovieAccountStatesResponse>
	/**
	 * Requires `alternative_titles` added to `append_to_response`
	 */
	alternative_titles?: OmitId<TMDBMovieAlternativeTitlesResponse>
	/**
	 * Requires `changes` added to `append_to_response`
	 */
	changes?: OmitId<TMDBMovieChangesResponse>
	/**
	 * Requires `credits` added to `append_to_response`
	 */
	credits?: OmitId<TMDBMovieCreditsResponse>
	/**
	 * Requires `external_ids` added to `append_to_response`
	 */
	external_ids?: OmitId<TMDBMovieExternalIdsResponse>
	/**
	 * Requires `images` added to `append_to_response`
	 */
	images?: OmitId<TMDBMovieImagesResponse>
	/**
	 * Requires `keywords` added to `append_to_response`
	 */
	keywords?: OmitId<TMDBMovieKeywordsResponse>
	/**
	 * Requires `keywords` added to `append_to_response`
	 */
	lists?: OmitId<TMDBMovieListsResponse>
	/**
	 * Requires `recommendations` added to `append_to_response`
	 */
	recommendations?: OmitId<TMDBMovieRecommendationsResponse>
	/**
	 * Requires `release_dates` added to `append_to_response`
	 */
	release_dates?: OmitId<TMDBMovieReleaseDatesResponse>
	/**
	 * Requires `reviews` added to `append_to_response`
	 */
	reviews?: OmitId<TMDBMovieReviewsResponse>
	/**
	 * Requires `similar` added to `append_to_response`
	 */
	similar?: OmitId<TMDBMovieSimilarResponse>
	/**
	 * Requires `translations` added to `append_to_response`
	 */
	translations?: OmitId<TMDBMovieTranslationsResponse>
	/**
	 * Requires `videos` added to `append_to_response`
	 */
	videos?: OmitId<TMDBMovieVideosResponse>
	/**
	 * Requires `"watch/providers"` added to `append_to_response`
	 */
	"watch/providers"?: OmitId<TMDBMovieWatchProvidersResponse>
}

type OmitId<T> = Omit<T, "id">

/**
 * Get the top level details of a movie by ID.
 *
 * This method supports using `append_to_response`. Read more about this [here](https://developer.themoviedb.org/docs/append-to-response).
 *
 * @link https://developer.themoviedb.org/reference/movie-details
 */
export function TMDBMovieDetails(
	request: TMDBMovieDetailsRequest,
	fetcher: Fetcher,
): Promise<TMDBMovieDetailsResponse>
/**
 * Get the top level details of a movie by ID.
 *
 * This method supports using `append_to_response`. Read more about this [here](https://developer.themoviedb.org/docs/append-to-response).
 *
 * @link https://developer.themoviedb.org/reference/movie-details
 */
export function TMDBMovieDetails(
	request: TMDBMovieDetailsRequest,
	readAccessToken: string,
): Promise<TMDBMovieDetailsResponse>

/**
 * Get the top level details of a movie by ID.
 *
 * This method supports using `append_to_response`. Read more about this [here](https://developer.themoviedb.org/docs/append-to-response).
 *
 * @link https://developer.themoviedb.org/reference/movie-details
 */
export default function TMDBMovieDetails(
	request: TMDBMovieDetailsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBMovieDetailsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.MOVIE,
		"{movie_id}",
		{
			path: {
				movie_id: request.movie_id,
			},
			query: {
				language: request.language,
				append_to_response: request.append_to_response,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return appendedResponseNormalizer(TMDBFetcher(url, fetcherOrApi))
	} else {
		return appendedResponseNormalizer(
			fetcherOrApi<TMDBMovieDetailsResponse>(url),
		)
	}
}

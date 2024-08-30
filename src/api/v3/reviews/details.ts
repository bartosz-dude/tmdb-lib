import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/review-details
 */
interface TMDBReviewsDetailsRequest {
	review_id: string
}

type PathParams = {
	review_id: string
}

type QueryParams = null

/**
 * @link https://developer.themoviedb.org/reference/review-details
 */
interface TMDBReviewsDetailsResponse {
	id: string
	author: string
	author_details: {
		name: string
		username: string
		avatar_path: string
		/**
		 * @type int
		 * @default 0
		 */
		rating: number
	}
	content: string
	created_at: string
	iso_639_1: string
	/**
	 * @type int
	 * @default 0
	 */
	media_id: number
	media_title: string
	media_type: string
	update_at: string
	url: string
}

/**
 * Retrieve the details of a movie or TV show review.
 *
 * @link https://developer.themoviedb.org/reference/review-details
 */
export function TMDBReviewsDetails(
	request: TMDBReviewsDetailsRequest,
	fetcher: Fetcher,
): Promise<TMDBReviewsDetailsResponse>
/**
 * Retrieve the details of a movie or TV show review.
 *
 * @link https://developer.themoviedb.org/reference/review-details
 */
export function TMDBReviewsDetails(
	request: TMDBReviewsDetailsRequest,
	readAccessToken: string,
): Promise<TMDBReviewsDetailsResponse>

/**
 * Retrieve the details of a movie or TV show review.
 *
 * @link https://developer.themoviedb.org/reference/review-details
 */
export default function TMDBReviewsDetails(
	request: TMDBReviewsDetailsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBReviewsDetailsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.REVIEW,
		"{review_id}",
		{
			path: {
				review_id: request.review_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBReviewsDetailsResponse>(url)
	}
}

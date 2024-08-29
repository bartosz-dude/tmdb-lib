import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/movie-images
 */
export interface TMDBMovieImagesRequest {
	/**
	 * @type int32
	 */
	movie_id: number
	/**
	 * specify a comma separated list of ISO-639-1 values to query, for example: `en`,`null`
	 */
	include_image_language?: string
	language?: string
}

type PathParams = {
	movie_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBMovieImagesRequest,
		keyof PathParams
	>]: TMDBMovieImagesRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/movie-images
 */
export interface TMDBMovieImagesResponse {
	backdrops: {
		/**
		 * @type number
		 * @default 0
		 */
		aspect_ratio: number
		/**
		 * @type int
		 * @default 0
		 */
		height: number
		iso_639_1: string
		file_path: string
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
		 * @type int
		 * @default 0
		 */
		width: number
	}[]
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	logos: {
		/**
		 * @type number
		 * @default 0
		 */
		aspect_ratio: number
		/**
		 * @type int
		 * @default 0
		 */
		height: number
		iso_639_1: string
		file_path: string
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
		 * @type int
		 * @default 0
		 */
		width: number
	}[]
	posters: {
		/**
		 * @type number
		 * @default 0
		 */
		aspect_ratio: number
		/**
		 * @type int
		 * @default 0
		 */
		height: number
		iso_639_1: string
		file_path: string
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
		 * @type int
		 * @default 0
		 */
		width: number
	}[]
}

/**
 * Get the images that belong to a movie.
 *
 * This method will return the backdrops, posters and logos that have been added to a movie.
 *
 * If you have a `language` specified, it will act as a filter on the returned items. You can use the `include_image_language` param to query additional languages.
 *
 * @link https://developer.themoviedb.org/reference/movie-images
 */
export function TMDBMovieImages(
	request: TMDBMovieImagesRequest,
	fetcher: Fetcher,
): Promise<TMDBMovieImagesResponse>
/**
 * Get the images that belong to a movie.
 *
 * This method will return the backdrops, posters and logos that have been added to a movie.
 *
 * If you have a `language` specified, it will act as a filter on the returned items. You can use the `include_image_language` param to query additional languages.
 *
 * @link https://developer.themoviedb.org/reference/movie-images
 */
export function TMDBMovieImages(
	request: TMDBMovieImagesRequest,
	readAccessToken: string,
): Promise<TMDBMovieImagesResponse>

/**
 * Get the images that belong to a movie.
 *
 * This method will return the backdrops, posters and logos that have been added to a movie.
 *
 * If you have a `language` specified, it will act as a filter on the returned items. You can use the `include_image_language` param to query additional languages.
 *
 * @link https://developer.themoviedb.org/reference/movie-images
 */
export default function TMDBMovieImages(
	request: TMDBMovieImagesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBMovieImagesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.MOVIE,
		"{movie_id}/images",
		{
			path: {
				movie_id: request.movie_id,
			},
			query: {
				include_image_language: request.include_image_language,
				language: request.language,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBMovieImagesResponse>(url)
	}
}

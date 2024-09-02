import TMDBFetcher, { Fetcher } from "../../../fetcher"
import TMDBUrlParser from "../../../parsers"
import { URLPaths } from "../../../tmdb"

/**
 * @link https://developer.themoviedb.org/reference/person-images
 */
export interface TMDBPeopleImagesRequest {
	/**
	 * @type int32
	 */
	person_id: number
}

type PathParams = {
	person_id: number
}

type QueryParams = {
	[key in keyof Omit<
		TMDBPeopleImagesRequest,
		keyof PathParams
	>]: TMDBPeopleImagesRequest[key]
}

/**
 * @link https://developer.themoviedb.org/reference/person-images
 */
export interface TMDBPeopleImagesResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	profiles: {
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
		 * @type int
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
 * Get the profile images that belong to a person.
 *
 * This method will return the profile images that have been added to a person.
 *
 * @link https://developer.themoviedb.org/reference/person-images
 */
export function TMDBPeopleImages(
	request: TMDBPeopleImagesRequest,
	fetcher: Fetcher,
): Promise<TMDBPeopleImagesResponse>
/**
 * Get the profile images that belong to a person.
 *
 * This method will return the profile images that have been added to a person.
 *
 * @link https://developer.themoviedb.org/reference/person-images
 */
export function TMDBPeopleImages(
	request: TMDBPeopleImagesRequest,
	readAccessToken: string,
): Promise<TMDBPeopleImagesResponse>

/**
 * Get the profile images that belong to a person.
 *
 * This method will return the profile images that have been added to a person.
 *
 * @link https://developer.themoviedb.org/reference/person-images
 */
export default function TMDBPeopleImages(
	request: TMDBPeopleImagesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBPeopleImagesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.PERSON,
		"{person_id}/images",
		{
			query: {},
			path: {
				person_id: request.person_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBPeopleImagesResponse>(url)
	}
}

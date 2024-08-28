import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

/**
 * @link https://developer.themoviedb.org/reference/collection-translations
 */
export interface TMDBCollectionsTranslationsRequest {
	/**
	 * @type int
	 * @default 0
	 */
	collection_id: number
}

type PathParams = {
	collection_id: number
}

type QueryParams = null

/**
 * @link https://developer.themoviedb.org/reference/collection-translations
 */
export interface TMDBCollectionsTranslationsResponse {
	/**
	 * @type int
	 * @default 0
	 */
	id: number
	translations: {
		iso_3166_1: string
		iso_639_1: string
		name: string
		english_name: string
		data: {
			title: string
			overview: string
			homepage: string
		}
	}[]
}

/**
 * @link https://developer.themoviedb.org/reference/collection-translations
 */
export function TMDBCollectionsTranslations(
	request: TMDBCollectionsTranslationsRequest,
	fetcher: Fetcher,
): Promise<TMDBCollectionsTranslationsResponse>
/**
 * @link https://developer.themoviedb.org/reference/collection-translations
 */
export function TMDBCollectionsTranslations(
	request: TMDBCollectionsTranslationsRequest,
	readAccessToken: string,
): Promise<TMDBCollectionsTranslationsResponse>

/**
 * @link https://developer.themoviedb.org/reference/collection-translations
 */
export default function TMDBCollectionsTranslations(
	request: TMDBCollectionsTranslationsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBCollectionsTranslationsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.COLLECTION,
		"{collection_id}/translations",
		{
			path: {
				collection_id: request.collection_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBCollectionsTranslationsResponse>(url)
	}
}

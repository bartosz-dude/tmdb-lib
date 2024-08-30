import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/alternative-names-copy
 */
interface TMDBNetworksImagesRequest {
	/**
	 * @type int32
	 */
	network_id: number
}

type PathParams = {
	network_id: number
}

type QueryParams = null

interface TMDBNetworksImagesResponse {
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
		aspect_ration: number
		file_path: string
		/**
		 * @type int
		 * @default 0
		 */
		height: number
		id: string
		file_type: string
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
 * Get the TV network logos by id.
 *
 * There are two image formats that are supported for companies, PNG's and SVG's. You can see which type the original file is by looking at the `file_type` field. We prefer SVG's as they are resolution independent and as such, the width and height are only there to reflect the original asset that was uploaded. An SVG can be scaled properly beyond those dimensions if you call them as a PNG.
 *
 * For more information about how SVG's and PNG's can be used, take a read through [this document](https://developer.themoviedb.org/docs/image-basics).
 *
 * @link https://developer.themoviedb.org/reference/alternative-names-copy
 */
export function TMDBNetworksImages(
	request: TMDBNetworksImagesRequest,
	fetcher: Fetcher,
): Promise<TMDBNetworksImagesResponse>
/**
 * Get the TV network logos by id.
 *
 * There are two image formats that are supported for companies, PNG's and SVG's. You can see which type the original file is by looking at the `file_type` field. We prefer SVG's as they are resolution independent and as such, the width and height are only there to reflect the original asset that was uploaded. An SVG can be scaled properly beyond those dimensions if you call them as a PNG.
 *
 * For more information about how SVG's and PNG's can be used, take a read through [this document](https://developer.themoviedb.org/docs/image-basics).
 *
 * @link https://developer.themoviedb.org/reference/alternative-names-copy
 */
export function TMDBNetworksImages(
	request: TMDBNetworksImagesRequest,
	readAccessToken: string,
): Promise<TMDBNetworksImagesResponse>

/**
 * Get the TV network logos by id.
 *
 * There are two image formats that are supported for companies, PNG's and SVG's. You can see which type the original file is by looking at the `file_type` field. We prefer SVG's as they are resolution independent and as such, the width and height are only there to reflect the original asset that was uploaded. An SVG can be scaled properly beyond those dimensions if you call them as a PNG.
 *
 * For more information about how SVG's and PNG's can be used, take a read through [this document](https://developer.themoviedb.org/docs/image-basics).
 *
 * @link https://developer.themoviedb.org/reference/alternative-names-copy
 */
export default function TMDBNetworksImages(
	request: TMDBNetworksImagesRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBNetworksImagesResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.NETWORK,
		"{network_id}/images",
		{
			path: {
				network_id: request.network_id,
			},
		},
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBNetworksImagesResponse>(url)
	}
}

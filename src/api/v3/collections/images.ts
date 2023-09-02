import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	collection_id: number,
	include_image_language?: string,
	language?: string
}

type PathParams = {
	collection_id: number
}

type QueryParams = {
	include_image_language?: string,
	language?: string
}

interface Response {
	id: number,
	backdrops: {
		aspect_ratio: number,
		height: number,
		iso_639_1: string,
		file_path: string,
		vote_average: number,
		vote_count: number,
		width: number
	}[],
	posters: {
		aspect_ratio: number,
		height: number,
		iso_639_1: string,
		file_path: string,
		vote_average: number,
		vote_count: number,
		width: number
	}[]
}

export function TMDBCollectionsImages(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBCollectionsImages(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBCollectionsImages(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.COLLECTION, "{collection_id}/images", {
		path: {
			collection_id: request.collection_id
		},
		query: {
			include_image_language: request.include_image_language,
			language: request.language
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	collection_id: number,
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

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBCollectionsImages(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBCollectionsImages(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBCollectionsImages(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
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
		return fetcherOrApi(url)
	}
}
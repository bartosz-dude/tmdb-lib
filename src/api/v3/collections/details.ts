import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	collection_id: number,
	language?: string
}

interface Response {
	id: number,
	name: string,
	overview: string,
	poster_path: string,
	backdrop_path: string,
	parts: {
		adult: boolean,
		backdrop_path: string,
		id: number,
		title: string,
		original_language: string,
		original_title: string,
		overview: string,
		media_type: string,
		genre_ids: number[],
		popularity: number,
		release_date: string,
		video: boolean,
		vote_average: number,
		vote_count: number
	}[]
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBCollectionsDetails(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBCollectionsDetails(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBCollectionsDetails(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.COLLECTION, "{collection_id}", {
		path: {
			collection_id: request.collection_id
		},
		query: {
			language: request.language
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
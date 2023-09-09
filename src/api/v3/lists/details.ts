import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	list_id: number,
	language?: string
}

interface Response {
	created_by: string,
	description: string,
	favorite_count: number,
	id: string,
	items: {
		adult: boolean,
		backdrop_path: string,
		genre_ids: number[]
		id: number,
		media_type: string,
		original_language: string,
		original_title: string,
		overview: string,
		popularity: number,
		poster_path: string,
		release_date: string,
		title: string,
		video: boolean,
		vote_average: number,
		vote_count: number,
	}[],
	item_count: number,
	iso_639_1: string,
	name: string,
	poster_path: string,
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBListsDetails(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBListsDetails(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBListsDetails(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.LIST, "{list_id}", {
		path: {
			list_id: request.list_id
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
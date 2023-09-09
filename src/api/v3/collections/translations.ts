import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	collection_id: number
}

interface Response {
	id: number,
	translations: {
		iso_3166_1: string
		iso_639_1: string,
		name: string,
		english_name: string,
		data: {
			title: string,
			overview: string,
			homepage: string
		}
	}[]
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBCollectionsTranslations(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBCollectionsTranslations(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBCollectionsTranslations(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.COLLECTION, "{collection_id}/translations", {
		path: {
			collection_id: request.collection_id
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
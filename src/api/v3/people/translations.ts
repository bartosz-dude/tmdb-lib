import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	person_id: number
}

interface Response {
	id: number,
	translations: {
		iso_3166_1: string,
		iso_639_1: string,
		name: string,
		english_name: string,
		data: {
			biography: string
		}
	}[]
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBPeopleTranslations(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBPeopleTranslations(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBPeopleTranslations(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.PERSON, "{person_id}/translations", {
		path: {
			person_id: request.person_id
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
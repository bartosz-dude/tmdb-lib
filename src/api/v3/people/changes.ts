import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	person_id: number,
	end_date?: Date,
	page?: number,
	start_date?: Date
}

interface Response {
	changes: {
		key: string,
		items: {
			id: string,
			action: string,
			time: string,
			iso_639_1: string,
			iso_3166_1: string,
			value: string,
		}[]
	}[]
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBPeopleChanges(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBPeopleChanges(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBPeopleChanges(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.PERSON, "{person_id}/changes", {
		path: {
			person_id: request.person_id
		},
		query: {
			end_date: request.end_date,
			page: request.page,
			start_date: request.start_date
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
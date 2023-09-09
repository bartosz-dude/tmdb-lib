import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	end_date?: Date,
	page?: number,
	start_date?: Date
}

interface Response {
	results: {
		id: number,
		adult: boolean
	}[],
	page: number,
	total_pages: number,
	total_results: number
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBChangesPeopleList(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBChangesPeopleList(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBChangesPeopleList(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.PERSON, "changes", {
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
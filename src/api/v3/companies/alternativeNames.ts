import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	company_id: number
}

interface Response {
	id: number,
	results: {
		name: string,
		type: string
	}[]
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBCompaniesAlternativeNames(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBCompaniesAlternativeNames(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBCompaniesAlternativeNames(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.COMPANY, "{company_id}/alternative_names", {
		path: {
			company_id: request.company_id
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
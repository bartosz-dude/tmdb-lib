import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	company_id: number
}

interface Response {
	description: string,
	headquarters: string,
	homepage: string,
	id: number,
	logo_path: string,
	name: string,
	origin_country: string,
	parent_company: string
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBCompaniesDetails(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBCompaniesDetails(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBCompaniesDetails(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.COMPANY, "{company_id}", {
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
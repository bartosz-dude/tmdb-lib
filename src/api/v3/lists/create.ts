import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	session_id: string,
	raw_body: any
}

interface Response {
	status_message: string,
	success: boolean,
	status_code: number,
	list_id: number
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = Omit<OmitRequiredKeys<Request>, "raw_body">

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBListsCreate(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBListsCreate(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBListsCreate(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.LIST, "", {
		query: {
			session_id: request.session_id
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi, { method: "POST", rawBody: request.raw_body })
	} else {
		return fetcherOrApi(url, { method: "POST", rawBody: request.raw_body })
	}
}
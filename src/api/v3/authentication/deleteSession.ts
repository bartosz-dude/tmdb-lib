import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	raw_body: any
}

interface Response {
	success: boolean
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = Omit<OmitRequiredKeys<Request>, "raw_body">

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBAuthenticationDeleteSession(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBAuthenticationDeleteSession(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBAuthenticationDeleteSession(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.AUTHENTICATION, "session")

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi, { method: "DELETE", rawBody: request.raw_body })
	} else {
		return fetcherOrApi(url, { method: "DELETE", rawBody: request.raw_body })
	}
}
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	raw_body: any
}

interface Response {
	success: boolean,
	expires_at: string,
	request_token: string
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = Omit<OmitRequiredKeys<Request>, "raw_body">

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBAuthenticationCreateSessionWithLogin(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBAuthenticationCreateSessionWithLogin(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBAuthenticationCreateSessionWithLogin(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.AUTHENTICATION, "token/validate_with_login")

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi, { method: "POST", rawBody: request.raw_body })
	} else {
		return fetcherOrApi(url, { method: "POST", rawBody: request.raw_body })
	}
}
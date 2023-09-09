import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {

}

interface Response {
	success: boolean,
	guest_session_id: string,
	expires_at: string
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBAuthenticationCreateGuestSession(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBAuthenticationCreateGuestSession(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBAuthenticationCreateGuestSession(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.AUTHENTICATION, "guest_session/new")

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
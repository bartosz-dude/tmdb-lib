import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {

}

type PathParams = null

type QueryParams = null

interface Response {
	success: boolean,
	guest_session_id: string,
	expires_at: string
}

export function TMDBAuthenticationCreateGuestSession(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBAuthenticationCreateGuestSession(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBAuthenticationCreateGuestSession(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.AUTHENTICATION, "guest_session/new")

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
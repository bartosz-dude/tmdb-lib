import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	raw_body: any
}

type PathParams = null

type QueryParams = null

interface Response {
	success: boolean,
	session_id: string,
}

export function TMDBAuthenticationCreateSessionFromV4Token(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBAuthenticationCreateSessionFromV4Token(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBAuthenticationCreateSessionFromV4Token(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.AUTHENTICATION, "session/convert/4")

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi, { method: "POST", rawBody: request.raw_body })
	} else {
		return fetcherOrApi<Response>(url, { method: "POST", rawBody: request.raw_body })
	}
}
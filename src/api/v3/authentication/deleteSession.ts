import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	raw_body: any
}

type PathParams = null

type QueryParams = null

interface Response {
	success: boolean
}

export function TMDBAuthenticationDeleteSession(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBAuthenticationDeleteSession(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBAuthenticationDeleteSession(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.AUTHENTICATION, "session")

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi, { method: "DELETE", rawBody: request.raw_body })
	} else {
		return fetcherOrApi<Response>(url, { method: "DELETE", rawBody: request.raw_body })
	}
}
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {

}

type PathParams = null

type QueryParams = null

interface Response {
	success: boolean,
	expires_at: string,
	request_token: string
}

export function TMDBAuthenticationCreateRequestToken(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBAuthenticationCreateRequestToken(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBAuthenticationCreateRequestToken(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.AUTHENTICATION, "token/new")

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
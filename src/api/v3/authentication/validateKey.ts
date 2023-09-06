import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {

}

type PathParams = null

type QueryParams = null

interface Response {
	success: boolean,
	status_code: string,
	status_message: string
}

export function TMDBAuthenticationValidateKey(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBAuthenticationValidateKey(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBAuthenticationValidateKey(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.AUTHENTICATION, "")

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
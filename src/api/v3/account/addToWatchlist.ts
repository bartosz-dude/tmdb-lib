import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	account_id: number,
	session_id: string,
	raw_body: any
}

type PathParams = {
	account_id: number
}

type QueryParams = {
	session_id: string
}

interface Response {
	status_code: number,
	status_message: string
}

export function TMDBAccountAddToWatchlist(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBAccountAddToWatchlist(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBAccountAddToWatchlist(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.ACCOUNT, "{account_id}/watchlist", {
		path: {
			account_id: request.account_id
		},
		query: {
			session_id: request.session_id
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi, { method: "POST", rawBody: request.raw_body })
	} else {
		return fetcherOrApi<Response>(url, { method: "POST", rawBody: request.raw_body })
	}
}
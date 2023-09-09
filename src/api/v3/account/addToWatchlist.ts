import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	account_id: number,
	session_id?: string,
	raw_body: any
}

interface Response {
	status_code: number,
	status_message: string
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = Omit<OmitRequiredKeys<Request>, "raw_body">

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBAccountAddToWatchlist(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBAccountAddToWatchlist(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBAccountAddToWatchlist(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
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
		return fetcherOrApi(url, { method: "POST", rawBody: request.raw_body })
	}
}
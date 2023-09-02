import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	list_id: number,
	session_id: string,
	confirm: boolean
}

type PathParams = {
	list_id: number
}

type QueryParams = {
	session_id: string,
	confirm: boolean
}

interface Response {
	status_code: number,
	status_message: string
}

export function TMDBListsClear(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBListsClear(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBListsClear(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.LIST, "{list_id}/clear", {
		path: {
			list_id: request.list_id
		},
		query: {
			session_id: request.session_id,
			confirm: request.confirm
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi, { method: "POST" })
	} else {
		return fetcherOrApi<Response>(url, { method: "POST" })
	}
}
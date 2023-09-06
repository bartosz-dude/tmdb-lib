import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	list_id: number,
	session_id: string,
}

type PathParams = {
	list_id: number
}

type QueryParams = {
	session_id: string
}

interface Response {
	status_code: number,
	status_message: string
}

export function TMDBListsDelete(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBListsDelete(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBListsDelete(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.LIST, "{list_id}", {
		path: {
			list_id: request.list_id
		},
		query: {
			session_id: request.session_id
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi, { method: "DELETE" })
	} else {
		return fetcherOrApi<Response>(url, { method: "DELETE" })
	}
}
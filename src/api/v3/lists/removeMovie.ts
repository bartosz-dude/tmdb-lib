import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	list_id: number,
	session_id: string,
	raw_body: any
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

export function TMDBListsRemoveMovie(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBListsRemoveMovie(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBListsRemoveMovie(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.LIST, "{list_id}/remove_item", {
		path: {
			list_id: request.list_id
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
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	session_id: string,
	raw_body: any
}

type PathParams = null

type QueryParams = {
	session_id: string
}

interface Response {
	status_message: string,
	success: boolean,
	status_code: number,
	list_id: number
}

export function TMDBListsCreate(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBListsCreate(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBListsCreate(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.LIST, "", {
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
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	list_id: number,
	language?: string,
	movie_id?: number
}

type PathParams = {
	list_id: number
}

type QueryParams = {
	language?: string
	movie_id?: number
}

interface Response {
	id: number,
	item_present: boolean
}

export function TMDBListsCheckItemStatus(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBListsCheckItemStatus(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBListsCheckItemStatus(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.LIST, "{list_id}/item_status", {
		path: {
			list_id: request.list_id
		},
		query: {
			language: request.language,
			movie_id: request.movie_id
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
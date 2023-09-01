import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	account_id: number,
	session_id: string,
	page: number
}

type PathParams = {
	account_id: number
}

type QueryParams = {
	session_id: string,
	page: number
}

interface Response {
	avatar: {
		gravatar: {
			hash: string
		},
		tmdb: {
			avatar_path: string
		}
	}
	id: number,
	iso_639_1: string,
	iso_3166_1: string,
	name: string,
	include_adult: string,
	username: string
}

export function TMDBAccountLists(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBAccountLists(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBAccountLists(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.ACCOUNT, "{account_id}/lists", {
		path: {
			account_id: request.account_id
		},
		query: {
			session_id: request.session_id,
			page: request.page
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
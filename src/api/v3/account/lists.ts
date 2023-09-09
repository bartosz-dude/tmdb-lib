import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	account_id: number,
	session_id?: string,
	page?: number
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

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBAccountLists(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBAccountLists(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBAccountLists(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
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
		return fetcherOrApi(url)
	}
}
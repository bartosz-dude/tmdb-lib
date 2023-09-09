import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly, Merge } from "../../../utilityTypes"

interface Request {
	list_id: number,
	session_id: string,
}

interface Response {
	status_code: number,
	status_message: string
}

type PathParams = Omit<OmitOptionalKeys<Request>, "session_id">
type QueryParams = Merge<OmitRequiredKeys<Request>, { session_id: string }>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBListsDelete(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBListsDelete(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBListsDelete(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
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
		return fetcherOrApi(url, { method: "DELETE" })
	}
}
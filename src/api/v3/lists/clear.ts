import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly, Merge } from "../../../utilityTypes"

interface Request {
	list_id: number,
	session_id: string,
	confirm: boolean
}

interface Response {
	status_code: number,
	status_message: string
}

type PathParams = Omit<OmitOptionalKeys<Request>, "session_id" | "confirm">
type QueryParams = Merge<OmitRequiredKeys<Request>, { session_id: string, confirm: boolean }>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBListsClear(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBListsClear(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBListsClear(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
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
		return fetcherOrApi(url, { method: "POST" })
	}
}
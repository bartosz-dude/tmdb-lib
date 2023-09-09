import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	series_id: number,
	session_id?: string,
	guest_session_id?: string,
	raw_body: any,
}

interface Response {
	status_code: number,
	status_message: string
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = Omit<OmitRequiredKeys<Request>, "raw_body">

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBTvSeriesAddRating(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTvSeriesAddRating(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTvSeriesAddRating(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "{series_id}/rating", {
		path: {
			series_id: request.series_id,
		},
		query: {
			session_id: request.session_id,
			guest_session_id: request.guest_session_id
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi, { method: "POST", rawBody: request.raw_body })
	} else {
		return fetcherOrApi(url, { method: "POST", rawBody: request.raw_body })
	}
}
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	series_id: number
}

interface Response {
	id: number,
	results: {
		name: string,
		id: number
	}[]
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBTvSeriesKeywords(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTvSeriesKeywords(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTvSeriesKeywords(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "{series_id}/keywords", {
		path: {
			series_id: request.series_id
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
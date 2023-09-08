import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys } from "../../../utilityTypes"

interface Request {
	series_id: number
}

interface Response {
	id: number,
	results: {
		iso_3166_1: string,
		title: string,
		type: string,
	}[]
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<Readonly<Response>>

export function TMDBTvSeriesAlternativeTitles(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTvSeriesAlternativeTitles(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTvSeriesAlternativeTitles(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "{series_id}/alternative_titles", {
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
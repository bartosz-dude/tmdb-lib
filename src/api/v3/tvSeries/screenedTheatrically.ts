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
		id: number,
		episode_number: number,
		season_number: number,
	}[]
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<Readonly<Response>>

export function TMDBTvSeriesScreenedTheatrically(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTvSeriesScreenedTheatrically(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTvSeriesScreenedTheatrically(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "{series_id}/screened_theatrically", {
		path: {
			series_id: request.series_id,
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
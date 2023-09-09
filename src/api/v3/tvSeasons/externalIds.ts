import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	series_id: number,
	season_number: number,
}

interface Response {
	id: number,
	freebase_mid: string,
	freebase_id: string,
	tvdb_id: number,
	tvrage_id: string,
	wikidata_id: string,
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBTvSeasonsExternalIds(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTvSeasonsExternalIds(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTvSeasonsExternalIds(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "{series_id}/season/{season_number}/external_ids", {
		path: {
			series_id: request.series_id,
			season_number: request.season_number
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
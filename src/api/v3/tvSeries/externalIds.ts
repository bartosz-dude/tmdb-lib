import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys } from "../../../utilityTypes"

interface Request {
	series_id: number
}

interface Response {
	id: number,
	imdb_id: string,
	freebase_mid: string,
	freebase_id: string,
	tvdb_id: number,
	tvrage_id: number,
	wikidata_id: string,
	facebook_id: string,
	instagram_id: string,
	twitter_id: string,
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<Readonly<Response>>

export function TMDBTvSeriesExternalIds(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTvSeriesExternalIds(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTvSeriesExternalIds(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "{series_id}/external_ids", {
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
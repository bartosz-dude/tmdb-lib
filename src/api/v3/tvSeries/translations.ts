import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys } from "../../../utilityTypes"

interface Request {
	series_id: number
}

interface Response {
	id: number,
	translations: {
		iso_3166_1: string,
		iso_639_1: string,
		name: string,
		english_name: string,
		data: {
			name: string,
			overview: string,
			homepage: string,
			tagline: string,
		}
	}[]
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<Readonly<Response>>

export function TMDBTvSeriesTranslations(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTvSeriesTranslations(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTvSeriesTranslations(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "{series_id}/translations", {
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
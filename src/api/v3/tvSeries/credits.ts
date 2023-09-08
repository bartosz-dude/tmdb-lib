import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys } from "../../../utilityTypes"

interface Request {
	series_id: number,
	language?: string,
}

interface Response {
	cast: {
		adult: boolean,
		gender: number,
		id: number,
		known_for_department: string,
		name: string,
		original_name: string,
		popularity: number,
		profile_path: string,
		character: string,
		credit_id: string,
		order: number,
	}[],
	crew: {
		adult: boolean,
		gender: number,
		id: number,
		known_for_department: string,
		name: string,
		original_name: string,
		popularity: number,
		profile_path: string,
		credit_id: string,
		department: string,
		job: string
	}[],
	id: number
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<Readonly<Response>>

export function TMDBTvSeriesCredits(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTvSeriesCredits(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTvSeriesCredits(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "{series_id}/credits", {
		path: {
			series_id: request.series_id,
		},
		query: {
			language: request.language
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys } from "../../../utilityTypes"

interface Request {
	series_id: number,
	end_date?: string,
	page?: number,
	start_date?: string,
}

interface Response {
	changes: {
		key: string,
		items: {
			id: string,
			action: string,
			time: string,
			value: {
				episode_id: number,
				episode_number: number,
			}
		}[]
	}[]
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<Readonly<Response>>

export function TMDBTvSeasonsChanges(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTvSeasonsChanges(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTvSeasonsChanges(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "{series_id}/season/changes", {
		path: {
			series_id: request.series_id
		},
		query: {
			end_date: request.end_date,
			page: request.page,
			start_date: request.start_date
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
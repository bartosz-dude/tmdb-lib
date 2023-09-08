import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	series_id: number,
	end_date?: string,
	page?: number,
	start_date?: string
}

interface Response {
	changes: {
		key: string,
		items: {
			id: string,
			action: string,
			time: string,
			iso_639_1: string,
			iso_3166_1: string,
			value: {
				poster: {
					file_path: string,
					iso_639_1: string
				}
			},
			original_value: {
				poster: {
					file_path: string,
					iso_639_1: string
				}
			}
		}[]
	}[]
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBTvSeriesChanges(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTvSeriesChanges(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTvSeriesChanges(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "{series_id}/changes", {
		path: {
			series_id: request.series_id,
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
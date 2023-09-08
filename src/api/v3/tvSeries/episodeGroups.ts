import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys } from "../../../utilityTypes"

interface Request {
	series_id: number
}

interface Response {
	results: {
		description: string,
		episode_count: number,
		group_count: number,
		id: string,
		name: string,
		network: {
			id: number,
			logo_path: string,
			name: string,
			origin_country: string,
		},
		type: number
	}[],
	id: number
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<Readonly<Response>>

export function TMDBTvSeriesEpisodeGroups(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTvSeriesEpisodeGroups(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTvSeriesEpisodeGroups(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "{series_id}/episode_groups", {
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
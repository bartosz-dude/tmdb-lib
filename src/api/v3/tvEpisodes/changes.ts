import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	episode_id: number,
	end_date?: string, // not in path params in docs
	start_date?: string, // not in path params in docs
}

interface Response {
	changes: {
		key: string,
		items: {
			id: string,
			action: string,
			time: string,
			value: string
		}[]
	}[]
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBTvEpisodesChanges(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTvEpisodesChanges(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTvEpisodesChanges(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "episode/{episode_id}/changes", {
		path: {
			episode_id: request.episode_id,
		},
		query: {
			end_date: request.end_date,
			start_date: request.start_date
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<DeepReadonly<Response>>(url)
	}
}
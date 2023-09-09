import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	tv_episode_group_id: string
}

interface Response {
	description: string,
	episode_count: number,
	group_count: number,
	groups: {
		id: string,
		name: string,
		order: number,
		episodes: {
			air_date: string,
			episode_number: number,
			id: number,
			name: string,
			overview: string,
			production_code: string,
			runtime: string,
			season_number: number,
			show_id: number,
			still_path: string,
			vote_average: number,
			vote_count: number,
			order: number
		}[],
		locked: boolean
	},
	id: string,
	name: string,
	network: {
		id: number,
		logo_path: string,
		name: string,
		origin_country: string
	},
	type: number
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBTvEpisodeGroupsDetails(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTvEpisodeGroupsDetails(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTvEpisodeGroupsDetails(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "episode_group/{tv_episode_group_id}", {
		path: request
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
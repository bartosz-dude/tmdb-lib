import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
}

interface Response {
	adult: boolean,
	backdrop_path: string,
	created_by: [],
	episode_run_time: [],
	first_air_date: string,
	genres: [],
	homepage: string,
	id: number,
	in_production: boolean,
	languages: [],
	last_air_date: string,
	last_episode_to_air: {
		id: number,
		name: string,
		overview: string,
		vote_average: number,
		vote_count: number,
		air_date: string,
		episode_number: number,
		production_code: string,
		runtime: string,
		season_number: number,
		show_id: number,
		still_path: string,
	},
	name: string,
	next_episode_to_air: string,
	networks: []
	number_of_episodes: number,
	number_of_seasons: number,
	origin_country: string[],
	original_language: string,
	original_name: string,
	overview: string,
	popularity: number,
	poster_path: string,
	production_companies: []
	production_countries: [],
	seasons: {
		air_date: string,
		episode_count: number,
		id: number,
		name: string,
		overview: string,
		poster_path: string,
		season_number: number,
	}[],
	spoken_languages: [],
	status: string,
	tagline: string,
	type: string,
	vote_average: number,
	vote_count: number,
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBTvSeriesLatest(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTvSeriesLatest(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTvSeriesLatest(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "latest")

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
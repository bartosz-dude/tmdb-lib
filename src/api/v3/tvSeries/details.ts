import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	series_id: number,
	append_to_response?: string,
	language?: string
}

interface Response {
	adult: boolean,
	backdrop_path: string,
	created_by: {
		id: number,
		credit_id: string,
		name: string,
		gender: number,
		profile_path: string,
	}[],
	episode_run_time: number[],
	first_air_date: string[],
	genres: {
		id: number,
		name: string
	}[],
	homepage: string,
	id: number,
	in_production: boolean,
	languages: string[],
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
		runtime: number,
		season_number: number,
		show_id: number,
		still_path: string,
	}[],
	name: string,
	next_episode_to_air: string,
	networks: {
		id: number,
		logo_path: string,
		name: string,
		origin_country: string,
	}[],
	number_of_episodes: number,
	number_of_seasons: number,
	origin_country: string[],
	original_language: string,
	original_name: string,
	overview: string,
	popularity: number,
	poster_path: string,
	production_companies: {
		id: number,
		logo_path: string,
		name: string,
		origin_country: string,
	}[],
	production_countries: {
		iso_3166_1: string,
		name: string,
	}[],
	seasons: {
		air_date: string,
		episode_count: number,
		id: number,
		name: string,
		overview: string,
		poster_path: string,
		season_number: number,
		vote_average: number,
	}[],
	spoken_languages: {
		english_name: string,
		iso_639_1: string,
		name: string,
	}[],
	status: string,
	tagline: string,
	type: string,
	vote_average: number,
	vote_count: number,
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBTvSeriesDetails(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTvSeriesDetails(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTvSeriesDetails(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "{series_id}", {
		path: {
			series_id: request.series_id,
		},
		query: {
			language: request.language,
			append_to_response: request.append_to_response
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
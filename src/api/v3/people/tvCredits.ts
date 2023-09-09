import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	person_id: number,
	language?: string
}

interface Response {
	cast: {
		adult: boolean,
		backdrop_path: string,
		genre_ids: number[],
		id: number,
		origin_country: string[],
		original_language: string,
		original_name: string,
		overview: string,
		popularity: number,
		poster_path: string,
		first_air_date: string,
		name: string,
		vote_average: number,
		vote_count: number,
		character: string,
		credit_id: string,
		episode_count: number,
	}[],
	crew: {
		adult: boolean,
		backdrop_path: string,
		genre_ids: number[]
		id: number,
		origin_country: string[],
		original_language: string,
		original_name: string,
		overview: string,
		popularity: number,
		poster_path: string,
		first_air_date: string,
		name: string,
		vote_average: number,
		vote_count: number,
		credit_id: string,
		department: string,
		episode_count: number,
		job: string,
	}[],
	id: number
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBPeopleTvCredits(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBPeopleTvCredits(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBPeopleTvCredits(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.PERSON, "{person_id}/tv_credits", {
		path: {
			person_id: request.person_id
		},
		query: {
			language: request.language
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
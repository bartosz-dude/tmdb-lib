import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	person_id: number,
	language?: string
}

type PathParams = {
	person_id: number
}

type QueryParams = {
	[ key in keyof Omit<Request, keyof PathParams> ]: Request[ key ]
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

export function TMDBPeopleTvCredits(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBPeopleTvCredits(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBPeopleTvCredits(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
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
		return fetcherOrApi<Response>(url)
	}
}
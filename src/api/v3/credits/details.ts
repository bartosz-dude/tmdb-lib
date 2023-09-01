import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	credit_id: number
}

type PathParams = {
	credit_id: number
}

type QueryParams = null

interface Response {
	credit_type: string,
	department: string,
	job: string,
	media: {
		adult: boolean,
		backdrop_path: string,
		id: number,
		original_language: string,
		original_name: string,
		overview: string,
		poster_path: string,
		media_type: string,
		genre_ids: number[],
		popularity: number,
		first_air_date: string,
		vote_average: number,
		vote_count: number,
		origin_country: string[],
		character: string,
		episodes: [],
		seasons: {
			air_date: string,
			episode_count: number,
			id: number,
			name: string,
			overview: string,
			poster_path: string,
			season_number: number,
			show_id: number
		}[]
	}
	media_type: string,
	id: string,
	person: {
		adult: boolean,
		id: number,
		name: string,
		original_name: string,
		media_type: string,
		popularity: number,
		gender: number,
		known_for_department: string,
		profile_path: string
	}
}

export function TMDBCreditsDetails(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBCreditsDetails(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBCreditsDetails(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.CREDIT, "{credit_id}", {
		path: {
			credit_id: request.credit_id
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	query: string,
	include_adult?: boolean,
	language?: string,
	page?: number,
}

type PathParams = null

type QueryParams = {
	[ key in keyof Request ]: Request[ key ]
}

interface Response {
	page: number,
	results: {
		adult: boolean,
		gender: number,
		id: number,
		known_for_department: string,
		name: string,
		original_name: string,
		popularity: number,
		profile_path: string,
		known_for: {
			adult: boolean,
			backdrop_path: string,
			id: number
			title: string,
			original_language: string,
			original_title: string,
			overview: string,
			poster_path: string,
			media_type: string,
			genre_ids: number[]
			popularity: number,
			release_date: string,
			video: boolean,
			vote_average: number,
			vote_count: number
		}
	}[],
	total_pages: number,
	total_results: number
}

export function TMDBSearchPerson(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBSearchPerson(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBSearchPerson(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.SEARCH, "person", {
		query: request
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	language: string,
	page: number
}

type PathParams = null

type QueryParams = {
	language: string,
	page: number
}

interface Response {
	page: number,
	results: {
		adult: boolean,
		gender: number,
		id: number,
		known_for: {
			adult: boolean,
			backdrop_path: string,
			genre_ids: number[],
			id: number,
			media_type: string,
			original_language: string,
			original_title: string,
			overview: string,
			poster_path: string,
			release_date: string,
			title: string,
			video: boolean,
			vote_average: number,
			vote_count: number
		}[],
		known_for_departament: string,
		name: string,
		popularity: number,
		profile_path: string
	}[],
	total_pages: number,
	total_results: number
}

export function TMDBPeopleListsPopular(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBPeopleListsPopular(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBPeopleListsPopular(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.PERSON, "popular", {
		query: {
			language: request.language,
			page: request.page
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
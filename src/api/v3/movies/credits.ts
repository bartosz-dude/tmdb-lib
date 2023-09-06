import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	movie_id: number,
	language?: string,
}

type PathParams = {
	movie_id: number
}

type QueryParams = {
	[ key in keyof Omit<Request, keyof PathParams> ]: Request[ key ]
}


interface Response {
	id: number,
	cast: {
		adult: boolean,
		gender: number,
		id: number,
		known_for_department: string,
		name: string,
		original_name: string,
		popularity: number,
		profile_path: string,
		cast_id: number,
		character: string,
		credit_id: string,
		order: number,
	}[],
	crew: {
		adult: boolean,
		gender: number,
		id: number,
		known_for_department: string,
		name: string,
		original_name: string,
		popularity: number,
		profile_path: string,
		credit_id: string,
		department: string,
		job: string,
	}[]
}

export function TMDBMovieCredits(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBMovieCredits(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBMovieCredits(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.MOVIE, "{movie_id}/credits", {
		path: {
			movie_id: request.movie_id
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
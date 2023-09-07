import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	person_id: number,
	append_to_response?: string,
	language?: string
}

type PathParams = {
	person_id: number
}

type QueryParams = {
	[ key in keyof Omit<Request, keyof PathParams> ]: Request[ key ]
}


interface Response {
	adult: boolean,
	also_known_as: string[],
	biography: string,
	birthday: string,
	deathday: string,
	gender: number,
	homepage: string,
	id: number,
	imdb_id: string,
	known_for_department: string,
	name: string,
	place_of_birth: string,
	popularity: number,
	profile_path: string,
}

export function TMDBPeopleDetails(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBPeopleDetails(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBPeopleDetails(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.PERSON, "{person_id}", {
		path: {
			person_id: request.person_id
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
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	person_id: number,
	end_date?: Date,
	page?: number,
	start_date?: Date
}

type PathParams = {
	person_id: number
}

type QueryParams = {
	[ key in keyof Omit<Request, keyof PathParams> ]: Request[ key ]
}


interface Response {
	changes: {
		key: string,
		items: {
			id: string,
			action: string,
			time: string,
			iso_639_1: string,
			iso_3166_1: string,
			value: string,
		}[]
	}[]
}

export function TMDBPeopleChanges(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBPeopleChanges(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBPeopleChanges(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.PERSON, "{person_id}/changes", {
		path: {
			person_id: request.person_id
		},
		query: {
			end_date: request.end_date,
			page: request.page,
			start_date: request.start_date
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
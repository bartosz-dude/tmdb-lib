import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	person_id: number
}

type PathParams = {
	person_id: number
}

type QueryParams = null


interface Response {
	id: number,
	translations: {
		iso_3166_1: string,
		iso_639_1: string,
		name: string,
		english_name: string,
		data: {
			biography: string
		}
	}[]
}

export function TMDBPeopleTranslations(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBPeopleTranslations(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBPeopleTranslations(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.PERSON, "{person_id}/translations", {
		path: {
			person_id: request.person_id
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
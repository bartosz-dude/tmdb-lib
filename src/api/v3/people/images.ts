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

}

export function TMDBPeopleImages(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBPeopleImages(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBPeopleImages(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.PERSON, "{person_id}/images", {
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
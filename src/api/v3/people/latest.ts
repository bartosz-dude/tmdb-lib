import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {

}

type PathParams = null

type QueryParams = null


interface Response {
	adult: boolean,
	also_known_as: []
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

export function TMDBPeopleLatest(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBPeopleLatest(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBPeopleLatest(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.PERSON, "latest")

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {

}

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

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBPeopleLatest(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBPeopleLatest(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBPeopleLatest(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.PERSON, "latest")

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	person_id: number
}

interface Response {
	id: number,
	freebase_mid: string,
	freebase_id: string,
	imdb_id: string,
	tvrage_id: number,
	wikidata_id: string,
	facebook_id: string,
	instagram_id: string,
	tiktok_id: string,
	twitter_id: string,
	youtube_id: string,
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBPeopleExternalIds(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBPeopleExternalIds(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBPeopleExternalIds(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.PERSON, "{person_id}/external_ids", {
		path: {
			person_id: request.person_id
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
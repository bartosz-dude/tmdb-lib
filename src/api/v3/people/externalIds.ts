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

export function TMDBPeopleExternalIds(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBPeopleExternalIds(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBPeopleExternalIds(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.PERSON, "{person_id}/external_ids", {
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
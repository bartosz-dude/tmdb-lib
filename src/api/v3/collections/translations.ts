import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	collection_id: number
}

type PathParams = {
	collection_id: number
}

type QueryParams = null

interface Response {
	id: number,
	translations: {
		iso_3166_1: string
		iso_639_1: string,
		name: string,
		english_name: string,
		data: {
			title: string,
			overview: string,
			homepage: string
		}
	}[]
}

export function TMDBCollectionsTranslations(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBCollectionsTranslations(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBCollectionsTranslations(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.COLLECTION, "{collection_id}/translations", {
		path: {
			collection_id: request.collection_id
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
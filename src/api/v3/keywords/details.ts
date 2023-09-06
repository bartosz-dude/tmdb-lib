import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	keyword_id: string
}

type PathParams = {
	keyword_id: string
}

type QueryParams = null

interface Response {
	id: number,
	name: string
}

export function TMDBKeywordsDetails(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBKeywordsDetails(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBKeywordsDetails(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.KEYWORD, "{keyword_id}", {
		path: {
			keyword_id: request.keyword_id
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
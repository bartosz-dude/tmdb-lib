import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	company_id: number
}

type PathParams = {
	company_id: number
}

type QueryParams = null

interface Response {
	id: number,
	results: {
		name: string,
		type: string
	}[]
}

export function TMDBCompaniesAlternativeNames(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBCompaniesAlternativeNames(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBCompaniesAlternativeNames(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.COMPANY, "{company_id}/alternative_names", {
		path: {
			company_id: request.company_id
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
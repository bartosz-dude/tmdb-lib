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
	description: string,
	headquarters: string,
	homepage: string,
	id: number,
	logo_path: string,
	name: string,
	origin_country: string,
	parent_company: string
}

export function TMDBCompaniesDetails(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBCompaniesDetails(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBCompaniesDetails(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.COMPANY, "{company_id}", {
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
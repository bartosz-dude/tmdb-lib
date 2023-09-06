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
	logos: {
		aspect_ratio: number,
		file_path: string,
		height: number,
		id: string,
		file_type: string,
		vote_average: number,
		vote_count: number,
		width: number
	}[]
}

export function TMDBCompaniesImages(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBCompaniesImages(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBCompaniesImages(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.COMPANY, "{company_id}/images", {
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
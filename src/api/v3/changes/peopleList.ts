import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	end_date?: Date,
	page?: number,
	start_date?: Date
}

type PathParams = null

type QueryParams = {
	end_date?: Date,
	page?: number,
	start_date?: Date
}

interface Response {
	results: {
		id: number,
		adult: boolean
	}[],
	page: number,
	total_pages: number,
	total_results: number
}

export function TMDBChangesPeopleList(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBChangesPeopleList(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBChangesPeopleList(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.PERSON, "changes", {
		query: {
			end_date: request.end_date,
			page: request.page,
			start_date: request.start_date
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
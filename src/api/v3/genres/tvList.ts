import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	language?: string
}

type PathParams = null

type QueryParams = {
	language?: string
}

interface Response {
	genres: {
		id: number,
		name: string
	}[]
}

export function TMDBGenresTvList(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBGenresTvList(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBGenresTvList(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.GENRE, "tv/list", {
		query: {
			language: request.language
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
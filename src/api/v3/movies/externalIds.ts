import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	movie_id: number
}

type PathParams = {
	movie_id: number
}

type QueryParams = null


interface Response {
	id: number,
	imdb_id: string,
	wikidata_id: string,
	facebook_id: string,
	instagram_id: string,
	twitter_id: string,
}

export function TMDBMovieExternalIds(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBMovieExternalIds(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBMovieExternalIds(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.MOVIE, "{movie_id}/external_ids", {
		path: {
			movie_id: request.movie_id
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
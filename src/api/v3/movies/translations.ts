import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	movie_id: number,
}

type PathParams = {
	movie_id: number
}

type QueryParams = null


interface Response {
	id: number,
	translations: {
		iso_3166_1: string,
		iso_639_1: string,
		name: string,
		english_name: string,
		data: {
			homepage: string,
			overview: string,
			runtime: number,
			tagline: string,
			title: string,
		}
	}[]
}

export function TMDBMovieTranslations(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBMovieTranslations(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBMovieTranslations(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.MOVIE, "{movie_id}/translations", {
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
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	movie_id: number,
}

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

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBMovieTranslations(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBMovieTranslations(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBMovieTranslations(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.MOVIE, "{movie_id}/translations", {
		path: {
			movie_id: request.movie_id
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
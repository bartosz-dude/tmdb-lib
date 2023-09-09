import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	movie_id: number,
	append_to_response?: string,
	language?: string
}

interface Response {
	adult: boolean,
	backdrop_path: string,
	belongs_to_collection: string,
	budget: number,
	genres: {
		id: number,
		name: string
	}[],
	homepage: string,
	id: number,
	imdb_id: string,
	original_language: string,
	original_title: string,
	overview: string,
	popularity: number,
	poster_path: string,
	production_companies: {
		id: number,
		logo_path: string,
		name: string,
		origin_country: string,
	}[],
	production_countries: {
		iso_3166_1: string,
		name: string,
	}[],
	release_date: string,
	revenue: number,
	runtime: number,
	spoken_languages: {
		english_name: string,
		iso_639_1: string,
		name: string,
	}[],
	status: string,
	tagline: string,
	title: string,
	video: boolean,
	vote_average: number,
	vote_count: number,
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBMovieDetails(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBMovieDetails(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBMovieDetails(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.MOVIE, "{movie_id}", {
		path: {
			movie_id: request.movie_id
		},
		query: {
			language: request.language,
			append_to_response: request.append_to_response
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
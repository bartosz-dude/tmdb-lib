import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	
}

type PathParams = null

type QueryParams = null


interface Response {
	adult: boolean,
backdrop_path: string,
belongs_to_collection: string,
budget: number,
genres: [],
homepage: string,
id: number,
imdb_id: string,
original_language: string,
original_title: string,
overview: string,
popularity: number,
poster_path: string,
production_companies: [],
production_countries: [],
release_date: string,
revenue: number,
runtime: number,
spoken_languages: [],
status: string,
tagline: string,
title: string,
video: boolean,
vote_average: number,
vote_count: number,
}

export function TMDBMovieLatest(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBMovieLatest(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBMovieLatest(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.MOVIE, "latest")

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
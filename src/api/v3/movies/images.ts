import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	movie_id: number,
	include_image_language?: string,
	language?: string
}

type PathParams = {
	movie_id: number
}

type QueryParams = {
	[ key in keyof Omit<Request, keyof PathParams> ]: Request[ key ]
}


interface Response {
	backdrops: {
		aspect_ratio: number,
		height: number,
		iso_639_1: string,
		file_path: string,
		vote_average: number,
		vote_count: number,
		width: number,
	}[],
	id: number,
	logos: {
		aspect_ratio: number,
		height: number,
		iso_639_1: string,
		file_path: string,
		vote_average: number,
		vote_count: number,
		width: number,
	}[],
	posters: {
		aspect_ratio: number,
		height: number,
		iso_639_1: string,
		file_path: string,
		vote_average: number,
		vote_count: number,
		width: number,
	}[]
}

export function TMDBMovieImages(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBMovieImages(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBMovieImages(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.MOVIE, "{movie_id}/images", {
		path: {
			movie_id: request.movie_id
		},
		query: {
			include_image_language: request.include_image_language,
			language: request.language
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
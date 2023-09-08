import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys } from "../../../utilityTypes"

interface Request {
	series_id: number,
	include_image_language?: string,
	language?: string
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

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<Readonly<Response>>

export function TMDBTvSeriesImages(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTvSeriesImages(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTvSeriesImages(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "{series_id}/images", {
		path: {
			series_id: request.series_id,
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
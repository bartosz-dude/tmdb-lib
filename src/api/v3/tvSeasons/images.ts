import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	series_id: number,
	season_number: number,
	include_image_language?: string,
	language?: string,
}

interface Response {
	id: string,
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

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBTvSeasonsImages(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTvSeasonsImages(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTvSeasonsImages(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "{series_id}/season/{season_number}/images", {
		path: {
			series_id: request.series_id,
			season_number: request.season_number
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
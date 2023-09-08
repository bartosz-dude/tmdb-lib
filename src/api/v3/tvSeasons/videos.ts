import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys } from "../../../utilityTypes"

interface Request {
	series_id: number,
	season_number: number,
	include_video_language?: string,
	language?: string,
}

interface Response {
	id: string,
	results: {
		iso_639_1: string,
		iso_3166_1: string,
		name: string,
		key: string,
		site: string,
		size: number,
		type: string,
		official: boolean,
		published_at: string,
		id: string,
	}[]
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<Readonly<Response>>

export function TMDBTvSeasonsVideos(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTvSeasonsVideos(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTvSeasonsVideos(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "{series_id}/season/{season_number}/videos", {
		path: {
			series_id: request.series_id,
			season_number: request.season_number
		},
		query: {
			include_video_language: request.include_video_language,
			language: request.language
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
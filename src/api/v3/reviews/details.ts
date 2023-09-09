import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	review_id: string
}

interface Response {
	id: string,
	author: string,
	author_details: {
		name: string,
		username: string,
		avatar_path: string,
		rating: string
	},
	content: string,
	created_at: string,
	iso_639_1: string,
	media_id: string,
	media_title: string,
	media_type: string,
	update_at: string,
	url: string
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBReviewsDetails(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBReviewsDetails(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBReviewsDetails(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.REVIEW, "{review_id}", {
		path: {
			review_id: request.review_id
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

interface Request {
	review_id: string
}

type PathParams = {
	review_id: string
}

type QueryParams = null

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

export function TMDBReviewsDetails(request: Request, fetcher: Fetcher): Promise<Response>
export function TMDBReviewsDetails(request: Request, readAccessToken: string): Promise<Response>

export default function TMDBReviewsDetails(request: Request, fetcherOrApi: Fetcher | string): Promise<Response> {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.REVIEW, "{review_id}", {
		path: {
			review_id: request.review_id
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
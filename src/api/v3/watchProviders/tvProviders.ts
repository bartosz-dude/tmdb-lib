import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {
	language?: string,
	watch_region?: string
}

interface Response {
	results: {
		display_priorities: {
			CA: number,
			AE: number,
			AR: number,
			AT: number,
			AU: number,
			BE: number,
			BO: number,
			BR: number,
			BG: number,
			CH: number,
			CL: number,
			CO: number,
			CR: number,
			CZ: number,
			DE: number,
			DK: number,
			EC: number,
			EE: number,
			EG: number,
			ES: number,
			FI: number,
			FR: number,
			GB: number,
			GR: number,
			GT: number,
			HK: number,
			HN: number,
			HU: number,
			ID: number,
			IE: number,
			IN: number,
			IT: number,
			JP: number,
			LT: number,
			LV: number,
			MX: number,
			MY: number,
			NL: number,
			NO: number,
			NZ: number,
			PE: number,
			PH: number,
			PL: number,
			PT: number,
			PY: number,
			RU: number,
			SA: number,
			SE: number,
			SG: number,
			SK: number,
			TH: number,
			TR: number,
			TW: number,
			US: number,
			VE: number,
			ZA: number,
			SI: number,
			CV: number,
			GH: number,
			MU: number,
			MZ: number,
			UG: number,
			IL: number
		}
		display_priority: number,
		logo_path: string,
		provider_name: string,
		provider_id: number
	}[]
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBWatchProvidersTvProviders(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBWatchProvidersTvProviders(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBWatchProvidersTvProviders(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.WATCH, "providers/tv", {
		query: request
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
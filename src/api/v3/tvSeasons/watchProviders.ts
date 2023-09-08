import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys } from "../../../utilityTypes"

interface Request {
	series_id: number,
	season_number: number,
	language?: string,
}

interface Response {
	id: number,
	results: {
		AE: Links,
		AL: Links,
		AR: Links,
		AT: Links,
		AU: Links,
		BA: Links,
		BB: Links,
		BE: Links,
		BG: Links,
		BH: Links,
		BO: Links,
		BR: Links,
		BS: Links,
		CA: Links,
		CH: Links,
		CL: Links,
		CO: Links,
		CR: Links,
		CV: Links,
		CZ: Links,
		DE: Links,
		DK: Links,
		DO: Links,
		EC: Links,
		EE: Links,
		EG: Links,
		ES: Links,
		FI: Links,
		FJ: Links,
		FR: Links,
		GB: Links,
		GF: Links,
		GI: Links,
		GR: Links,
		GT: Links,
		HK: Links,
		HN: Links,
		HR: Links,
		HU: Links,
		ID: Links,
		IE: Links,
		IL: Links,
		IN: Links,
		IQ: Links,
		IS: Links,
		IT: Links,
		JM: Links,
		JO: Links,
		JP: Links,
		KR: Links,
		KW: Links,
		LB: Links,
		LI: Links,
		LT: Links,
		LV: Links,
		MD: Links,
		MK: Links,
		MT: Links,
		MU: Links,
		MX: Links,
		MY: Links,
		MZ: Links,
		NL: Links,
		NO: Links,
		NZ: Links,
		OM: Links,
		PA: Links,
		PE: Links,
		PH: Links,
		PK: Links,
		PL: Links,
		PS: Links,
		PT: Links,
		PY: Links,
		QA: Links,
		RO: Links,
		RS: Links,
		RU: Links,
		SA: Links,
		SE: Links,
		SG: Links,
		SI: Links,
		SK: Links,
		SM: Links,
		SV: Links,
		TH: Links,
		TR: Links,
		TT: Links,
		TW: Links,
		UG: Links,
		US: Links,
		UY: Links,
		VE: Links,
		YE: Links,
		ZA: Links,
	}
}

interface Links {
	link: string,
	flatrate: {
		logo_path: string,
		provider_id: number,
		provider_name: string,
		display_priority: number,
	}[]
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<Readonly<Response>>

export function TMDBTvSeasonsWatchProviders(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBTvSeasonsWatchProviders(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBTvSeasonsWatchProviders(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.TV, "{series_id}/season/{season_number}/watch/providers", {
		path: {
			series_id: request.series_id,
			season_number: request.season_number
		},
		query: {
			language: request.language
		}
	})

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<Response>(url)
	}
}
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"
import { OmitOptionalKeys, OmitRequiredKeys, DeepReadonly } from "../../../utilityTypes"

interface Request {

}





type Certifications = Certification[]

interface Certification {
	certification: string,
	meaning: string,
	order: number
}

interface Response {
	certifications: {
		AU: Certifications,
		BG: Certifications,
		BR: Certifications,
		CA: Certifications,
		"CA-QC": Certifications,
		DE: Certifications,
		DK: Certifications,
		ES: Certifications,
		FI: Certifications,
		FR: Certifications,
		GB: Certifications,
		HU: Certifications,
		IN: Certifications,
		IT: Certifications,
		LT: Certifications,
		MY: Certifications,
		NL: Certifications,
		NO: Certifications,
		NZ: Certifications,
		PH: Certifications,
		PT: Certifications,
		RU: Certifications,
		SE: Certifications,
		US: Certifications,
		KR: Certifications,
		SK: Certifications,
		TH: Certifications,
		MX: Certifications,
		ID: Certifications,
		TR: Certifications,
		AR: Certifications,
		GR: Certifications,
		TW: Certifications,
		ZA: Certifications,
		SG: Certifications,
		IE: Certifications,
		PR: Certifications,
		JP: Certifications,
		VI: Certifications,
		CH: Certifications,
		IL: Certifications,
		HK: Certifications,
		MO: Certifications,
		LV: Certifications,
		LU: Certifications
	}
}

type PathParams = OmitOptionalKeys<Request>
type QueryParams = OmitRequiredKeys<Request>

type ReturnResponse = Promise<DeepReadonly<Response>>

export function TMDBCertificationTvCertifications(request: Request, fetcher: Fetcher): ReturnResponse
export function TMDBCertificationTvCertifications(request: Request, readAccessToken: string): ReturnResponse

export default function TMDBCertificationTvCertifications(request: Request, fetcherOrApi: Fetcher | string): ReturnResponse {
	const url = TMDBUrlParser<PathParams, QueryParams>(URLPaths.CERTIFICATION, "tv/list")

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi(url)
	}
}
import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../parsers"

/**
 * @link https://developer.themoviedb.org/reference/certification-movie-list
 */
export interface TMDBCertificationMovieCertificationsRequest {}

type PathParams = null

type QueryParams = null

type Certifications = Certification[]

interface Certification {
	certification: string
	meaning: string
	/**
	 * @type int
	 * @default 0
	 */
	order: number
}

/**
 * @link https://developer.themoviedb.org/reference/certification-movie-list
 */
export interface TMDBCertificationMovieCertificationsResponse {
	certifications: {
		AU: Certifications
		BG: Certifications
		BR: Certifications
		CA: Certifications
		"CA-QC": Certifications
		DE: Certifications
		DK: Certifications
		ES: Certifications
		FI: Certifications
		FR: Certifications
		GB: Certifications
		HU: Certifications
		IN: Certifications
		IT: Certifications
		LT: Certifications
		MY: Certifications
		NL: Certifications
		NO: Certifications
		NZ: Certifications
		PH: Certifications
		PT: Certifications
		RU: Certifications
		SE: Certifications
		US: Certifications
		KR: Certifications
		SK: Certifications
		TH: Certifications
		MX: Certifications
		ID: Certifications
		TR: Certifications
		AR: Certifications
		GR: Certifications
		TW: Certifications
		ZA: Certifications
		SG: Certifications
		IE: Certifications
		PR: Certifications
		JP: Certifications
		VI: Certifications
		CH: Certifications
		IL: Certifications
		HK: Certifications
		MO: Certifications
		LV: Certifications
		LU: Certifications
	}
}

/**
 * Get an up to date list of the officially supported movie certifications on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/certification-movie-list
 */
export function TMDBCertificationMovieCertifications(
	request: TMDBCertificationMovieCertificationsRequest,
	fetcher: Fetcher,
): Promise<TMDBCertificationMovieCertificationsResponse>
/**
 * Get an up to date list of the officially supported movie certifications on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/certification-movie-list
 */
export function TMDBCertificationMovieCertifications(
	request: TMDBCertificationMovieCertificationsRequest,
	readAccessToken: string,
): Promise<TMDBCertificationMovieCertificationsResponse>

/**
 * Get an up to date list of the officially supported movie certifications on TMDB.
 *
 * @link https://developer.themoviedb.org/reference/certification-movie-list
 */
export default function TMDBCertificationMovieCertifications(
	request: TMDBCertificationMovieCertificationsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBCertificationMovieCertificationsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.CERTIFICATION,
		"movie/list",
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBCertificationMovieCertificationsResponse>(url)
	}
}

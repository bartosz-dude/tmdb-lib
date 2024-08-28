import { TMDBCertificationMovieCertifications } from "./movieCertifications"
import { TMDBCertificationTvCertifications } from "./tvCertifications"

const TMDBCertifications = {
	/**
	 * Get an up to date list of the officially supported movie certifications on TMDB.
	 *
	 * @link https://developer.themoviedb.org/reference/certification-movie-list
	 */
	movieCertifications: TMDBCertificationMovieCertifications,
	/**
	 * @link https://developer.themoviedb.org/reference/certifications-tv-list
	 */
	tvCertifications: TMDBCertificationTvCertifications,
}

export default TMDBCertifications

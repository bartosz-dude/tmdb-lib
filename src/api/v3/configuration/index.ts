import { TMDBConfigurationCountries } from "./countries"
import { TMDBConfigurationDetails } from "./details"
import { TMDBConfigurationJobs } from "./jobs"
import { TMDBConfigurationLanguages } from "./languages"
import { TMDBConfigurationPrimaryTranslations } from "./primaryTranslations"
import { TMDBConfigurationTimezones } from "./timezones"

/**
 * @see `TMDB_CONFIGURATION` constant provides the same information as default requests to endpoints in this category as of 08/2024
 */
const TMDBConfiguration = {
	/**
	 * Query the API configuration details.
	 *
	 * The data returned here in the configuration endpoint is designed to provide some of the required information you'll need as you integrate our API.
	 *
	 * For example, you can get a list of valid image sizes and the valid image address.
	 *
	 * @see `TMDB_CONFIGURATION.details` constant provides the same information as a default request to this endpoint as of 08/2024
	 *
	 * @link https://developer.themoviedb.org/reference/configuration-details
	 */
	details: TMDBConfigurationDetails,
	/**
	 * Get the list of countries (ISO 3166-1 tags) used throughout TMDB.
	 *
	 * @see `TMDB_CONFIGURATION.countries` constant provides the same information as a default request to this endpoint as of 08/2024
	 *
	 * @link https://developer.themoviedb.org/reference/configuration-countries
	 */
	countries: TMDBConfigurationCountries,
	/**
	 * Get the list of the jobs and departments we use on TMDB.
	 *
	 * @see `TMDB_CONFIGURATION.jobs` constant provides the same information as a default request to this endpoint as of 08/2024
	 *
	 * @link https://developer.themoviedb.org/reference/configuration-jobs
	 */
	jobs: TMDBConfigurationJobs,
	/**
	 * Get the list of languages (ISO 639-1 tags) used throughout TMDB.
	 *
	 * @see `TMDB_CONFIGURATION.languages` constant provides the same information as a default request to this endpoint as of 08/2024
	 *
	 * @link https://developer.themoviedb.org/reference/configuration-languages
	 */
	languages: TMDBConfigurationLanguages,
	/**
	 * Get a list of the officially supported translations on TMDB.
	 *
	 * While it's technically possible to add a translation in any one of the [languages](https://developer.themoviedb.org/reference/configuration-languages) we have added to TMDB (we don't restrict content), the ones listed in this method are the ones we also support for localizing the website with which means they are "primary" translations.
	 *
	 * These are all specified as [IETF tags](https://en.wikipedia.org/wiki/IETF_language_tag) to identify the languages we use on TMDB. There is one exception which is [image languages](https://developer.themoviedb.org/docs/image-languages). They are currently only designated by a ISO-639-1 tag. This is a planned upgrade for the future.
	 *
	 * We're always open to adding more if you think one should be added. You can ask about getting a new primary translation added by posting on [the forums](https://www.themoviedb.org/talk/category/5047954b760ee3369b000001).
	 *
	 * One more thing to mention, these are the translations that map to our website translation project. You can view and contribute to that project [here](https://app.localeapp.com/projects/8267).
	 *
	 * @see `TMDB_CONFIGURATION.primaryTranslations` constant provides the same information as a default request to this endpoint as of 08/2024
	 *
	 * @link https://developer.themoviedb.org/reference/configuration-primary-translations
	 */
	primaryTranslations: TMDBConfigurationPrimaryTranslations,
	/**
	 * Get the list of timezones used throughout TMDB.
	 *
	 * @see `TMDB_CONFIGURATION.timezones` constant provides the same information as a default request to this endpoint as of 08/2024
	 *
	 * @link https://developer.themoviedb.org/reference/configuration-timezones
	 */
	timezones: TMDBConfigurationTimezones,
}

export default TMDBConfiguration

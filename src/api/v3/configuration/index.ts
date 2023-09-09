import TMDBConfigurationCountries from "./countries";
import TMDBConfigurationDetails from "./details";
import TMDBConfigurationJobs from "./jobs";
import TMDBConfigurationLanguages from "./languages";
import TMDBConfigurationPrimaryTranslations from "./primaryTranslations";
import TMDBConfigurationTimezones from "./timezones";

export namespace TMDBConfiguration {
	export const details = TMDBConfigurationDetails
	export const countries = TMDBConfigurationCountries
	export const jobs = TMDBConfigurationJobs
	export const languages = TMDBConfigurationLanguages
	export const primaryTranslations = TMDBConfigurationPrimaryTranslations
	export const timezones = TMDBConfigurationTimezones
}
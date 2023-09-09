import { TMDBConfigurationCountries } from "./countries";
import { TMDBConfigurationDetails } from "./details";
import { TMDBConfigurationJobs } from "./jobs";
import { TMDBConfigurationLanguages } from "./languages";
import { TMDBConfigurationPrimaryTranslations } from "./primaryTranslations";
import { TMDBConfigurationTimezones } from "./timezones";

export const TMDBConfiguration = {
	details: TMDBConfigurationDetails,
	countries: TMDBConfigurationCountries,
	jobs: TMDBConfigurationJobs,
	languages: TMDBConfigurationLanguages,
	primaryTranslations: TMDBConfigurationPrimaryTranslations,
	timezones: TMDBConfigurationTimezones
}
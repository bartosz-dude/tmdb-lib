import TMDBFetcher, { Fetcher } from "../../../fetcher"
import { URLPaths } from "../../../tmdb"
import TMDBUrlParser from "../../../urlParser"

/**
 * @link https://developer.themoviedb.org/reference/configuration-primary-translations
 */
export interface TMDBConfigurationPrimaryTranslationsRequest {}

type PathParams = null

type QueryParams = null

/**
 * @link https://developer.themoviedb.org/reference/configuration-primary-translations
 */
export type TMDBConfigurationPrimaryTranslationsResponse = string[]

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
export function TMDBConfigurationPrimaryTranslations(
	request: TMDBConfigurationPrimaryTranslationsRequest,
	fetcher: Fetcher,
): Promise<TMDBConfigurationPrimaryTranslationsResponse>
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
export function TMDBConfigurationPrimaryTranslations(
	request: TMDBConfigurationPrimaryTranslationsRequest,
	readAccessToken: string,
): Promise<TMDBConfigurationPrimaryTranslationsResponse>

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
export default function TMDBConfigurationPrimaryTranslations(
	request: TMDBConfigurationPrimaryTranslationsRequest,
	fetcherOrApi: Fetcher | string,
): Promise<TMDBConfigurationPrimaryTranslationsResponse> {
	const url = TMDBUrlParser<PathParams, QueryParams>(
		URLPaths.CONFIGURATION,
		"primary_translations",
	)

	if (typeof fetcherOrApi == "string") {
		return TMDBFetcher(url, fetcherOrApi)
	} else {
		return fetcherOrApi<TMDBConfigurationPrimaryTranslationsResponse>(url)
	}
}

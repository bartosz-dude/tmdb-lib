import TMDBTvSeasonsAccountStates from "./accountStates"
import TMDBTvSeasonsAggregateCredits from "./aggregateCredits"
import TMDBTvSeasonsChanges from "./changes"
import TMDBTvSeasonsCredits from "./credits"
import TMDBTvSeasonsDetails from "./details"
import TMDBTvSeasonsExternalIds from "./externalIds"
import TMDBTvSeasonsImages from "./images"
import TMDBTvSeasonsTranslations from "./translations"
import TMDBTvSeasonsVideos from "./videos"
import TMDBTvSeasonsWatchProviders from "./watchProviders"

const TMDBTvSeasons = {
	/**
	 * Query the details of a TV season.
	 *
	 * This method supports using `append_to_response`. Read more about this [here](https://developer.themoviedb.org/docs/append-to-response).
	 *
	 * @link https://developer.themoviedb.org/reference/tv-season-details
	 */
	details: TMDBTvSeasonsDetails,
	/**
	 * Get the rating, watchlist and favorite status.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-season-account-states
	 */
	accountStates: TMDBTvSeasonsAccountStates,
	/**
	 * Get the rating, watchlist and favorite status.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-season-account-states
	 */
	aggregateCredits: TMDBTvSeasonsAggregateCredits,
	/**
	 * Get the recent changes for a TV season.
	 *
	 * Get the changes for a TV season. By default only the last 24 hours are returned.
	 *
	 * You can query up to 14 days in a single query by using the start_date and end_date query parameters.
	 *
	 * TV season changes are a little different than movie changes in that there are some edits on episodes that will create a top level change entry at the season level. These can be found under the episode keys. These keys will contain a `episode_id`. You can use the episode changes methods to look these up individually.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-season-changes-by-id
	 */
	changes: TMDBTvSeasonsChanges,
	/**
	 * @link https://developer.themoviedb.org/reference/tv-season-credits
	 */
	credits: TMDBTvSeasonsCredits,
	/**
	 * Get a list of external IDs that have been added to a TV season.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-season-external-ids
	 */
	externalIds: TMDBTvSeasonsExternalIds,
	/**
	 * Get the images that belong to a TV season.
	 *
	 * This method will return the posters that have been added to a TV season.
	 *
	 * If you have a `language` specified, it will act as a filter on the returned items. You can use the `include_image_language` param to query additional languages.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-season-images
	 */
	images: TMDBTvSeasonsImages,
	/**
	 * Get the translations for a TV season.
	 *
	 * Take a read through our [language](https://developer.themoviedb.org/docs/languages) documentation for more information about languages on TMDB.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-season-translations
	 */
	translations: TMDBTvSeasonsTranslations,
	/**
	 * Get the videos that belong to a TV season.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-season-videos
	 */
	videos: TMDBTvSeasonsVideos,
	/**
	 * Get the list of streaming providers we have for a TV season.
	 *
	 * Powered by our partnership with JustWatch, you can query this method to get a list of the streaming/rental/purchase availabilities per country by provider.
	 *
	 * This is *not* going to return full deep links, but rather, it's just enough information to display what's available where.
	 *
	 * You can link to the provided TMDB URL to help support TMDB and provide the actual deep links to the content.
	 *
	 * > ### JustWatch Attribution Required
	 * >
	 * > In order to use this data you must attribute the source of the data as JustWatch. If we find any usage not complying with these terms we will revoke access to the API.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-season-watch-providers
	 */
	watchProviders: TMDBTvSeasonsWatchProviders,
}

export default TMDBTvSeasons

import TMDBTvSeriesAccountStates from "./accountStates"
import TMDBTvSeriesAddRating from "./addRating"
import TMDBTvSeriesAggregateCredits from "./aggregateCredits"
import TMDBTvSeriesAlternativeTitles from "./alternativeTitles"
import TMDBTvSeriesChanges from "./changes"
import TMDBTvSeriesContentRatings from "./contentRatings"
import TMDBTvSeriesCredits from "./credits"
import TMDBTvSeriesDeleteRating from "./deleteRating"
import TMDBTvSeriesDetails from "./details"
import TMDBTvSeriesEpisodeGroups from "./episodeGroups"
import TMDBTvSeriesExternalIds from "./externalIds"
import TMDBTvSeriesImages from "./images"
import TMDBTvSeriesKeywords from "./keywords"
import TMDBTvSeriesLatest from "./latest"
import TMDBTvSeriesLists from "./lists"
import TMDBTvSeriesRecommendations from "./recommendations"
import TMDBTvSeriesReviews from "./reviews"
import TMDBTvSeriesScreenedTheatrically from "./screenedTheatrically"
import TMDBTvSeriesSimilar from "./similar"
import TMDBTvSeriesTranslations from "./translations"
import TMDBTvSeriesVideos from "./videos"
import TMDBTvSeriesWatchProviders from "./watchProviders"

const TMDBTvSeries = {
	/**
	 * Get the details of a TV show.
	 *
	 * This method supports using `append_to_response`. Read more about this [here](https://developer.themoviedb.org/docs/append-to-response).
	 *
	 * @link https://developer.themoviedb.org/reference/tv-series-details
	 */
	details: TMDBTvSeriesDetails,
	/**
	 * Get the rating, watchlist and favorite status.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-series-account-states
	 */
	accountStates: TMDBTvSeriesAccountStates,
	/**
	 * Get the aggregate credits (cast and crew) that have been added to a TV show.
	 *
	 * This call differs from the main credits call in that it does not return the newest season. Instead, it is a view of all the entire cast & crew for all episodes belonging to a TV show.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-series-aggregate-credits
	 */
	aggregateCredits: TMDBTvSeriesAggregateCredits,
	/**
	 * Get the alternative titles that have been added to a TV show.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-series-alternative-titles
	 */
	alternativeTitles: TMDBTvSeriesAlternativeTitles,
	/**
	 * Get the recent changes for a TV show.
	 *
	 * Get the changes for a TV show. By default only the last 24 hours are returned.
	 *
	 * You can query up to 14 days in a single query by using the `start_date` and `end_date` query parameters.
	 *
	 * TV show changes are a little different than movie changes in that there are some edits on seasons and episodes that will create a top level change entry at the show level. These can be found under the season and episode keys. These keys will contain a `series_id` and `episode_id`. You can use the season changes and episode changes methods to look these up individually.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-series-changes
	 */
	changes: TMDBTvSeriesChanges,
	/**
	 * Get the alternative titles that have been added to a TV show.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-series-alternative-titles
	 */
	contentRatings: TMDBTvSeriesContentRatings,
	/**
	 * Get the latest season credits of a TV show.
	 *
	 * This is the original TV credits method which returns the ***latest season credit data***. If you would like to request the aggregate view (which is what you see on our website) you should use the [`/aggregate_credits`](https://developer.themoviedb.org/reference/tv-series-aggregate-credits) method.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-series-credits
	 */
	credits: TMDBTvSeriesCredits,
	/**
	 * Get the episode groups that have been added to a TV show.
	 *
	 * With a group ID you can call the get TV episode group details method.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-series-episode-groups
	 */
	episodeGroups: TMDBTvSeriesEpisodeGroups,
	/**
	 * Get a list of external IDs that have been added to a TV show.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-series-external-ids
	 */
	externalIds: TMDBTvSeriesExternalIds,
	/**
	 * Get the images that belong to a TV series.
	 *
	 * This method will return the backdrops, posters and logos that have been added to a TV show.
	 *
	 * If you have a `language` specified, it will act as a filter on the returned items. You can use the `include_image_language` param to query additional languages.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-series-images
	 */
	images: TMDBTvSeriesImages,
	/**
	 * Get a list of keywords that have been added to a TV show.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-series-keywords
	 */
	keywords: TMDBTvSeriesKeywords,
	/**
	 * Get the newest TV show ID.
	 *
	 * This is a live response and will continuously change.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-series-latest-id
	 */
	latest: TMDBTvSeriesLatest,
	/**
	 * Get the lists that a TV series has been added to.
	 *
	 * @link https://developer.themoviedb.org/reference/lists-copy
	 */
	lists: TMDBTvSeriesLists,
	/**
	 * @link https://developer.themoviedb.org/reference/tv-series-recommendations
	 */
	recommendations: TMDBTvSeriesRecommendations,
	/**
	 * Get the reviews that have been added to a TV show.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-series-reviews
	 */
	reviews: TMDBTvSeriesReviews,
	/**
	 * Get the seasons and episodes that have screened theatrically.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-series-screened-theatrically
	 */
	screenedTheatrically: TMDBTvSeriesScreenedTheatrically,
	/**
	 * Get the similar TV shows.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-series-similar
	 */
	similar: TMDBTvSeriesSimilar,
	/**
	 * Get the translations that have been added to a TV show.
	 *
	 * Take a read through our [language](https://developer.themoviedb.org/docs/languages) documentation for more information about languages on TMDB.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-series-translations
	 */
	translations: TMDBTvSeriesTranslations,
	/**
	 * Get the videos that belong to a TV show.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-series-videos
	 */
	videos: TMDBTvSeriesVideos,
	/**
	 * Get the list of streaming providers we have for a TV show.
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
	 * @link https://developer.themoviedb.org/reference/tv-series-watch-providers
	 */
	watchProviders: TMDBTvSeriesWatchProviders,
	/**
	 * Rate a TV show and save it to your rated list.
	 *
	 * By default, we will remove a rated item from your watchlist if it's present. This keeps your "watched" and and "want to watch" lists tidy and in sync. You can edit this behavior [here](https://www.themoviedb.org/settings/sharing).
	 *
	 * @link https://developer.themoviedb.org/reference/tv-series-add-rating
	 */
	addRating: TMDBTvSeriesAddRating,
	/**
	 * @link https://developer.themoviedb.org/reference/tv-series-delete-rating
	 */
	deleteRating: TMDBTvSeriesDeleteRating,
}

export default TMDBTvSeries

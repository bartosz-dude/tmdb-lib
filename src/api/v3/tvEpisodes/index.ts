import TMDBTvEpisodesAccountStates from "./accountStates"
import TMDBTvEpisodesAddRating from "./addRating"
import TMDBTvEpisodesChanges from "./changes"
import TMDBTvEpisodesCredits from "./credits"
import TMDBTvEpisodesDeleteRating from "./deleteRating"
import TMDBTvEpisodesDetails from "./details"
import TMDBTvEpisodesExternalIds from "./externalIds"
import TMDBTvEpisodesImages from "./images"
import TMDBTvEpisodesTranslations from "./translations"
import TMDBTvEpisodesVideos from "./videos"

const TMDBTvEpisodes = {
	/**
	 * Query the details of a TV episode.
	 *
	 * This method supports using `append_to_response`. Read more about this [here](https://developer.themoviedb.org/docs/append-to-response).
	 *
	 * @link https://developer.themoviedb.org/reference/tv-episode-details
	 */
	details: TMDBTvEpisodesDetails,
	/**
	 * Get the rating, watchlist and favorite status.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-episode-account-states
	 */
	accountStates: TMDBTvEpisodesAccountStates,
	/**
	 * Get the recent changes for a TV episode.
	 *
	 * Get the changes for a TV episode. By default only the last 24 hours are returned.
	 *
	 * You can query up to 14 days in a single query by using the `start_date` and `end_date` query parameters.
	 *
	 * TV episode changes are a little different than movie changes in that there are some edits on episodes that will create a top level change entry at the season level. These can be found under the episode keys. These keys will contain a `episode_id`. You can use the episode changes methods to look these up individually.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-episode-changes-by-id
	 */
	changes: TMDBTvEpisodesChanges,
	/**
	 * @link https://developer.themoviedb.org/reference/tv-episode-credits
	 */
	credits: TMDBTvEpisodesCredits,
	/**
	 * Get a list of external IDs that have been added to a TV episode.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-episode-external-ids
	 */
	externalIds: TMDBTvEpisodesExternalIds,
	/**
	 * Get the images that belong to a TV episode.
	 *
	 * This method will return the backdrops that have been added to a TV episode.
	 *
	 * If you have a `language` specified, it will act as a filter on the returned items. You can use the `include_image_language` param to query additional languages.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-episode-images
	 */
	images: TMDBTvEpisodesImages,
	/**
	 * Get the translations that have been added to a TV episode.
	 *
	 * Take a read through our [language](https://developer.themoviedb.org/docs/languages) documentation for more information about languages on TMDB.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-episode-translations
	 */
	translations: TMDBTvEpisodesTranslations,
	/**
	 * Get the videos that belong to a TV episode.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-episode-videos
	 */
	videos: TMDBTvEpisodesVideos,
	/**
	 * Rate a TV episode and save it to your rated list.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-episode-add-rating
	 */
	addRating: TMDBTvEpisodesAddRating,
	/**
	 * Delete your rating on a TV episode.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-episode-delete-rating
	 */
	deleteRating: TMDBTvEpisodesDeleteRating,
}

export default TMDBTvEpisodes

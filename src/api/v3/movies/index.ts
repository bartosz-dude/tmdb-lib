import { TMDBMovieAccountStates } from "./accountStates"
import { TMDBMovieAddRating } from "./addRating"
import { TMDBMovieAlternativeTitles } from "./alternativeTitles"
import { TMDBMovieChanges } from "./changes"
import { TMDBMovieCredits } from "./credits"
import { TMDBMovieDeleteRating } from "./deleteRating"
import { TMDBMovieDetails } from "./details"
import { TMDBMovieExternalIds } from "./externalIds"
import { TMDBMovieImages } from "./images"
import { TMDBMovieKeywords } from "./keywords"
import { TMDBMovieLatest } from "./latest"
import { TMDBMovieLists } from "./lists"
import { TMDBMovieRecommendations } from "./recommendations"
import { TMDBMovieReleaseDates } from "./releaseDates"
import { TMDBMovieReviews } from "./reviews"
import { TMDBMovieSimilar } from "./similar"
import { TMDBMovieTranslations } from "./translations"
import { TMDBMovieVideos } from "./videos"
import { TMDBMovieWatchProviders } from "./watchProviders"

const TMDBMovies = {
	/**
	 * Get the top level details of a movie by ID.
	 *
	 * This method supports using `append_to_response`. Read more about this [here](https://developer.themoviedb.org/docs/append-to-response).
	 *
	 * @link https://developer.themoviedb.org/reference/movie-details
	 */
	details: TMDBMovieDetails,
	/**
	 * Get the rating, watchlist and favorite status of an account.
	 *
	 * @link https://developer.themoviedb.org/reference/movie-account-states
	 */
	accountStates: TMDBMovieAccountStates,
	/**
	 * Get the alternative titles for a movie.
	 *
	 * @link https://developer.themoviedb.org/reference/movie-alternative-titles
	 */
	alternativeTitles: TMDBMovieAlternativeTitles,
	/**
	 * Get the recent changes for a movie.
	 *
	 * Get the changes for a movie. By default only the last 24 hours are returned.
	 *
	 * You can query up to 14 days in a single query by using the `start_date` and `end_date` query parameters.
	 *
	 * @link https://developer.themoviedb.org/reference/movie-changes
	 */
	changes: TMDBMovieChanges,
	/**
	 * @link https://developer.themoviedb.org/reference/movie-credits
	 */
	credits: TMDBMovieCredits,
	/**
	 * @link https://developer.themoviedb.org/reference/movie-external-ids
	 */
	externalIds: TMDBMovieExternalIds,
	/**
	 * Get the images that belong to a movie.
	 *
	 * This method will return the backdrops, posters and logos that have been added to a movie.
	 *
	 * If you have a `language` specified, it will act as a filter on the returned items. You can use the `include_image_language` param to query additional languages.
	 *
	 * @link https://developer.themoviedb.org/reference/movie-images
	 */
	images: TMDBMovieImages,
	/**
	 * @link https://developer.themoviedb.org/reference/movie-keywords
	 */
	keywords: TMDBMovieKeywords,
	/**
	 * Get the newest movie ID.
	 *
	 * @link https://developer.themoviedb.org/reference/movie-latest-id
	 */
	latest: TMDBMovieLatest,
	/**
	 * Get the lists that a movie has been added to.
	 *
	 * @link https://developer.themoviedb.org/reference/movie-lists
	 */
	lists: TMDBMovieLists,
	/**
	 * @link https://developer.themoviedb.org/reference/movie-recommendations
	 */
	recommendations: TMDBMovieRecommendations,
	/**
	 * Get the release dates and certifications for a movie.
	 *
	 * The release types and statuses used on TMDB are the following:
	 * | Release              | Type  |
	 * |----------------------|-------|
	 * | Premiere             |   1   |
	 * | Theatrical (limited) |   2   |
	 * | Theatrical           |   3   |
	 * | Digital              |   4   |
	 * | Physical             |   5   |
	 * | TV                   |   6   |
	 *
	 * @link https://developer.themoviedb.org/reference/movie-release-dates
	 */
	releaseDates: TMDBMovieReleaseDates,
	/**
	 * Get the user reviews for a movie.
	 *
	 * @link https://developer.themoviedb.org/reference/movie-reviews
	 */
	reviews: TMDBMovieReviews,
	/**
	 * Get the similar movies based on genres and keywords.
	 *
	 * This method only looks for other items based on genres and plot keywords. As such, the results found here are not always going to be precise. Use it with that in mind.
	 *
	 * @link https://developer.themoviedb.org/reference/movie-similar
	 */
	similar: TMDBMovieSimilar,
	/**
	 * Get the translations for a movie.
	 *
	 * Take a read through our [language](https://developer.themoviedb.org/docs/languages) documentation for more information about languages on TMDB.
	 *
	 * @link https://developer.themoviedb.org/reference/movie-translations
	 */
	translations: TMDBMovieTranslations,
	/**
	 * @link https://developer.themoviedb.org/reference/movie-videos
	 */
	videos: TMDBMovieVideos,
	/**
	 * Get the list of streaming providers we have for a movie.
	 *
	 * Powered by our partnership with JustWatch, you can query this method to get a list of the streaming/rental/purchase availabilities per country by provider.
	 *
	 * This is *not* going to return full deep links, but rather, it's just enough information to display what's available where.
	 *
	 * You can link to the provided TMDB URL to help support TMDB and provide the actual deep links to the content.
	 *
	 * ### JustWatch Attribution Required
	 *
	 * In order to use this data you must attribute the source of the data as JustWatch. If we find any usage not complying with these terms we will revoke access to the API.
	 *
	 * @link https://developer.themoviedb.org/reference/movie-watch-providers
	 */
	watchProviders: TMDBMovieWatchProviders,
	/**
	 * Rate a movie and save it to your rated list.
	 *
	 * By default, we will remove a rated item from your watchlist if it's present. This keeps your "watched" and and "want to watch" lists tidy and in sync. You can edit this behavior [here](https://www.themoviedb.org/settings/sharing).
	 *
	 * @link https://developer.themoviedb.org/reference/movie-add-rating
	 */
	addRating: TMDBMovieAddRating,
	/**
	 * Delete your rating on a TV episode.
	 *
	 * @link https://developer.themoviedb.org/reference/tv-episode-delete-rating
	 */
	deleteRating: TMDBMovieDeleteRating,
}

export default TMDBMovies

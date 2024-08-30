import TMDBPeopleChanges from "./changes"
import TMDBPeopleCombinedCredits from "./combinedCredits"
import TMDBPeopleDetails from "./details"
import TMDBPeopleExternalIds from "./externalIds"
import TMDBPeopleImages from "./images"
import TMDBPeopleLatest from "./latest"
import TMDBPeopleMovieCredits from "./movieCredits"
import TMDBPeopleTranslations from "./translations"
import TMDBPeopleTvCredits from "./tvCredits"

const TMDBPeople = {
	/**
	 * Query the top level details of a person.
	 *
	 * This method supports using append_to_response. Read more about this [here](https://developer.themoviedb.org/docs/append-to-response).
	 *
	 * @link https://developer.themoviedb.org/reference/person-details
	 */
	details: TMDBPeopleDetails,
	/**
	 * Get the recent changes for a person.
	 *
	 * Get the changes for a person. By default only the last 24 hours are returned.
	 *
	 * You can query up to 14 days in a single query by using the `start_date` and `end_date` query parameters.
	 *
	 * @link https://developer.themoviedb.org/reference/person-changes
	 */
	changes: TMDBPeopleChanges,
	/**
	 * Get the combined movie and TV credits that belong to a person.
	 *
	 * @link https://developer.themoviedb.org/reference/person-combined-credits
	 */
	combinedCredits: TMDBPeopleCombinedCredits,
	/**
	 * Get the external ID's that belong to a person.
	 *
	 * @link https://developer.themoviedb.org/reference/person-external-ids
	 */
	externalIds: TMDBPeopleExternalIds,
	/**
	 * Get the profile images that belong to a person.
	 *
	 * This method will return the profile images that have been added to a person.
	 *
	 * @link https://developer.themoviedb.org/reference/person-images
	 */
	images: TMDBPeopleImages,
	/**
	 * Get the newest created person. This is a live response and will continuously change.
	 *
	 * @link https://developer.themoviedb.org/reference/person-latest-id
	 */
	latest: TMDBPeopleLatest,
	/**
	 * Get the movie credits for a person.
	 *
	 * @link https://developer.themoviedb.org/reference/person-movie-credits
	 */
	movieCredits: TMDBPeopleMovieCredits,
	/**
	 * Get the TV credits that belong to a person.
	 *
	 * @link https://developer.themoviedb.org/reference/person-tv-credits
	 */
	tvCredits: TMDBPeopleTvCredits,
	/**
	 * Get the translations that belong to a person.
	 *
	 * Take a read through our [language](https://developer.themoviedb.org/docs/languages) documentation for more information about languages on TMDB.
	 *
	 * @link https://developer.themoviedb.org/reference/translations
	 */
	translations: TMDBPeopleTranslations,
}

export default TMDBPeople

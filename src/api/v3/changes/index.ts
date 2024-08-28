import { TMDBChangesMovieList } from "./movieList"
import { TMDBChangesPeopleList } from "./peopleList"
import { TMDBChangesTvList } from "./tvList"

const TMDBChanges = {
	/**
	 * Get a list of all of the movie ids that have been changed in the past 24 hours.
	 *
	 * You can query this method up to 14 days at a time. Use the `start_date` and `end_date` query parameters. 100 items are returned per page.
	 *
	 * @link https://developer.themoviedb.org/reference/changes-movie-list
	 */
	movieList: TMDBChangesMovieList,
	/**
	 * You can query this method up to 14 days at a time. Use the `start_date` and `end_date` query parameters. 100 items are returned per page.
	 *
	 * @link https://developer.themoviedb.org/reference/changes-people-list
	 */
	peopleList: TMDBChangesPeopleList,
	/**
	 * You can query this method up to 14 days at a time. Use the `start_date` and `end_date` query parameters. 100 items are returned per page.
	 *
	 * @link https://developer.themoviedb.org/reference/changes-tv-list
	 */
	tvList: TMDBChangesTvList,
}

export default TMDBChanges

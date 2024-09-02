import TMDBTvSeriesListsAiringToday from "./airingToday"
import TMDBTvSeriesListsOnTheAir from "./onTheAir"
import TMDBTvSeriesListsPopular from "./popular"
import TMDBTvSeriesListsTopRated from "./topRated"

const TMDBTvSeriesLists = {
	/**
	 * Get a list of TV shows airing today.
	 *
	 * This call is really just a discover call behind the scenes. If you would like to tweak any of the default filters head over and read about [discover](https://developer.themoviedb.org/reference/discover-tv).
	 *
	 * @link https://developer.themoviedb.org/reference/tv-series-airing-today-list
	 */
	airingToday: TMDBTvSeriesListsAiringToday,
	/**
	 * Get a list of TV shows that air in the next 7 days.
	 *
	 * This call is really just a discover call behind the scenes. If you would like to tweak any of the default filters head over and read about [discover](https://developer.themoviedb.org/reference/discover-tv).
	 *
	 * @link https://developer.themoviedb.org/reference/tv-series-on-the-air-list
	 */
	onTheAir: TMDBTvSeriesListsOnTheAir,
	/**
	 * Get a list of TV shows ordered by popularity.
	 *
	 * This call is really just a discover call behind the scenes. If you would like to tweak any of the default filters head over and read about [discover](https://developer.themoviedb.org/reference/discover-tv).
	 *
	 * @link https://developer.themoviedb.org/reference/tv-series-popular-list
	 */
	popular: TMDBTvSeriesListsPopular,
	/**
	 * Get a list of TV shows ordered by rating.
	 *
	 * This call is really just a discover call behind the scenes. If you would like to tweak any of the default filters head over and read about [discover](https://developer.themoviedb.org/reference/discover-tv).
	 *
	 * @link https://developer.themoviedb.org/reference/tv-series-top-rated-list
	 */
	topRated: TMDBTvSeriesListsTopRated,
}

export default TMDBTvSeriesLists

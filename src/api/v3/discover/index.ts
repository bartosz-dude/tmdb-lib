import { TMDBDiscoverMovie } from "./movie"
import { TMDBDiscoverTv } from "./tv"

const TMDBDiscover = {
	/**
	 * Find movies using over 30 filters and sort options.
	 *
	 * ### Advanced Filtering
	 * If you specify the region parameter, the regional release date will be used instead of the primary release date. The date returned will be the first date based on your query (ie. if a `with_release_type` is specified). It's important to note the order of the release types that are used. Specifying `2|3` would return the limited theatrical release date as opposed to `3|2` which would return the theatrical date.
	 *
	 * ### `AND`/`OR` Logic
	 * Also note that a number of filters support being comma (`,`) or pipe (`|`) separated. Comma's are treated like an `AND` query while pipe's are treated like an `OR`. This allows for quite complex filtering depending on your desired results.
	 *
	 * @link https://developer.themoviedb.org/reference/discover-movie
	 */
	movie: TMDBDiscoverMovie,
	/**
	 * Find TV shows using over 30 filters and sort options.
	 *
	 * ### Advanced Filtering
	 * If you specify the region parameter, the regional release date will be used instead of the primary release date. The date returned will be the first date based on your query (ie. if a `with_release_type` is specified). It's important to note the order of the release types that are used. Specifying `2|3` would return the limited theatrical release date as opposed to `3|2` which would return the theatrical date.
	 *
	 * ### `AND`/`OR` Logic
	 * Also note that a number of filters support being comma (`,`) or pipe (`|`) separated. Comma's are treated like an `AND` query while pipe's are treated like an `OR`. This allows for quite complex filtering depending on your desired results.
	 *
	 * @link https://developer.themoviedb.org/reference/discover-tv
	 */
	tv: TMDBDiscoverTv,
}

export default TMDBDiscover

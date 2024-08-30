import { TMDBSearchCollection } from "./collection"
import { TMDBSearchCompany } from "./company"
import { TMDBSearchKeyword } from "./keyword"
import { TMDBSearchMovie } from "./movie"
import { TMDBSearchMulti } from "./multi"
import { TMDBSearchPerson } from "./person"
import { TMDBSearchTv } from "./tv"

const TMDBSearch = {
	/**
	 * Search for collections by their original, translated and alternative names.
	 *
	 * @link https://developer.themoviedb.org/reference/search-collection
	 */
	collection: TMDBSearchCollection,
	/**
	 * Search for companies by their original and alternative names.
	 *
	 * @link https://developer.themoviedb.org/reference/search-company
	 */
	company: TMDBSearchCompany,
	/**
	 * Search for keywords by their name.
	 *
	 * @link https://developer.themoviedb.org/reference/search-company
	 */
	keyword: TMDBSearchKeyword,
	/**
	 * Search for movies by their original, translated and alternative titles.
	 *
	 * @link https://developer.themoviedb.org/reference/search-movie
	 */
	movie: TMDBSearchMovie,
	/**
	 * Use multi search when you want to search for movies, TV shows and people in a single request.
	 *
	 * @link https://developer.themoviedb.org/reference/search-multi
	 */
	multi: TMDBSearchMulti,
	/**
	 * Search for people by their name and also known as names.
	 *
	 * @link https://developer.themoviedb.org/reference/search-person
	 */
	person: TMDBSearchPerson,
	/**
	 * Search for TV shows by their original, translated and also known as names.
	 *
	 * @link https://developer.themoviedb.org/reference/search-tv
	 */
	tv: TMDBSearchTv,
}

export default TMDBSearch

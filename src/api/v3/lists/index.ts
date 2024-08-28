import { TMDBListsAddMovie } from "./addMovie"
import { TMDBListsCheckItemStatus } from "./checkItemStatus"
import { TMDBListsClear } from "./clear"
import { TMDBListsCreate } from "./create"
import { TMDBListsDelete } from "./delete"
import { TMDBListsDetails } from "./details"
import { TMDBListsRemoveMovie } from "./removeMovie"

const TMDBLists = {
	/**
	 * Add a movie to a list.
	 *
	 * @link https://developer.themoviedb.org/reference/list-add-movie
	 */
	addMovie: TMDBListsAddMovie,
	/**
	 * Use this method to check if an item has already been added to the list.
	 *
	 * @link https://developer.themoviedb.org/reference/list-check-item-status
	 */
	checkItemStatus: TMDBListsCheckItemStatus,
	/**
	 * Clear all items from a list.
	 *
	 * @link https://developer.themoviedb.org/reference/list-clear
	 */
	clear: TMDBListsClear,
	/**
	 * @link https://developer.themoviedb.org/reference/list-create
	 */
	create: TMDBListsCreate,
	/**
	 * Delete a list.
	 *
	 * @link https://developer.themoviedb.org/reference/list-delete
	 */
	delete: TMDBListsDelete,
	/**
	 * @link https://developer.themoviedb.org/reference/list-details
	 */
	details: TMDBListsDetails,
	/**
	 * Remove a movie from a list.
	 *
	 * @link https://developer.themoviedb.org/reference/list-remove-movie
	 */
	removeMovie: TMDBListsRemoveMovie,
}

export default TMDBLists

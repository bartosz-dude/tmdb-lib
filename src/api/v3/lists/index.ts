import TMDBListsAddMovie from "./addMovie";
import TMDBListsCheckItemStatus from "./checkItemStatus";
import TMDBListsClear from "./clear";
import TMDBListsCreate from "./create";
import TMDBListsDelete from "./delete";
import TMDBListsDetails from "./details";
import TMDBListsRemoveMovie from "./removeMovie";

export namespace TMDBLists {
	export const addMovie = TMDBListsAddMovie
	export const checkItemStatus = TMDBListsCheckItemStatus
	export const clear = TMDBListsClear
	export const create = TMDBListsCreate
	export const deleteList = TMDBListsDelete
	export const details = TMDBListsDetails
	export const removeMovie = TMDBListsRemoveMovie
}
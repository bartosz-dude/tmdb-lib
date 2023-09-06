import { TMDBListsAddMovie } from "./addMovie";
import { TMDBListsCheckItemStatus } from "./checkItemStatus";
import { TMDBListsClear } from "./clear";
import { TMDBListsCreate } from "./create";
import { TMDBListsDelete } from "./delete";
import { TMDBListsDetails } from "./details";
import { TMDBListsRemoveMovie } from "./removeMovie";

export const TMDBLists = {
	addMovie: TMDBListsAddMovie,
	checkItemStatus: TMDBListsCheckItemStatus,
	clear: TMDBListsClear,
	create: TMDBListsCreate,
	delete: TMDBListsDelete,
	details: TMDBListsDetails,
	removeMovie: TMDBListsRemoveMovie
}
import TMDBSearchCollection from "./collection";
import TMDBSearchCompany from "./company";
import TMDBSearchKeyword from "./keyword";
import TMDBSearchMovie from "./movie";
import TMDBSearchMulti from "./multi";
import TMDBSearchPerson from "./person";
import TMDBSearchTv from "./tv";

export namespace TMDBSearch {
	export const collection = TMDBSearchCollection
	export const company = TMDBSearchCompany
	export const keyword = TMDBSearchKeyword
	export const movie = TMDBSearchMovie
	export const multi = TMDBSearchMulti
	export const person = TMDBSearchPerson
	export const tv = TMDBSearchTv
}
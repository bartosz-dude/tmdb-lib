import { TMDBSearchCollection } from "./collection";
import { TMDBSearchCompany } from "./company";
import { TMDBSearchKeyword } from "./keyword";
import { TMDBSearchMovie } from "./movie";
import { TMDBSearchMulti } from "./multi";
import { TMDBSearchPerson } from "./person";
import { TMDBSearchTv } from "./tv";

export const TMDBSearch = {
	collection: TMDBSearchCollection,
	company: TMDBSearchCompany,
	keyword: TMDBSearchKeyword,
	movie: TMDBSearchMovie,
	multi: TMDBSearchMulti,
	person: TMDBSearchPerson,
	tv: TMDBSearchTv
}
import { TMDBTvSeriesListsAiringToday } from "./airingToday";
import { TMDBTvSeriesListsOnTheAir } from "./onTheAir";
import { TMDBTvSeriesListsPopular } from "./popular";
import { TMDBTvSeriesListsTopRated } from "./topRated";

export const TMDBTvSeriesLists = {
	airingToday: TMDBTvSeriesListsAiringToday,
	onTheAir: TMDBTvSeriesListsOnTheAir,
	popular: TMDBTvSeriesListsPopular,
	topRated: TMDBTvSeriesListsTopRated
}
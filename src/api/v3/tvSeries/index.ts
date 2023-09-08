import { TMDBTvSeriesAggregateCredits } from "./AggregateCredits";
import { TMDBTvSeriesImages } from "./Images";
import { TMDBTvSeriesAccountStates } from "./accountStates";
import { TMDBTvSeriesAddRating } from "./addRating";
import { TMDBTvSeriesAlternativeTitles } from "./alternativeTitles";
import { TMDBTvSeriesChanges } from "./changes";
import { TMDBTvSeriesContentRatings } from "./contentRatings";
import { TMDBTvSeriesCredits } from "./credits";
import { TMDBTvSeriesDeleteRating } from "./deleteRating";
import { TMDBTvSeriesDetails } from "./details";
import { TMDBTvSeriesEpisodeGroups } from "./episodeGroups";
import { TMDBTvSeriesExternalIds } from "./externalIds";
import { TMDBTvSeriesKeywords } from "./keywords";
import { TMDBTvSeriesLatest } from "./latest";
import { TMDBTvSeriesRecommendations } from "./recommendations";
import { TMDBTvSeriesReviews } from "./reviews";
import { TMDBTvSeriesScreenedTheatrically } from "./screenedTheatrically";
import { TMDBTvSeriesSimilar } from "./similar";
import { TMDBTvSeriesTranslations } from "./translations";
import { TMDBTvSeriesVideos } from "./videos";
import { TMDBTvSeriesWatchProviders } from "./watchProviders";

export const TMDBTvSeries = {
	details: TMDBTvSeriesDetails,
	accountStates: TMDBTvSeriesAccountStates,
	aggregateCredits: TMDBTvSeriesAggregateCredits,
	alternativeTitles: TMDBTvSeriesAlternativeTitles,
	changes: TMDBTvSeriesChanges,
	contentRatings: TMDBTvSeriesContentRatings,
	credits: TMDBTvSeriesCredits,
	episodeGroups: TMDBTvSeriesEpisodeGroups,
	externalIds: TMDBTvSeriesExternalIds,
	images: TMDBTvSeriesImages,
	keywords: TMDBTvSeriesKeywords,
	latest: TMDBTvSeriesLatest,
	recommendations: TMDBTvSeriesRecommendations,
	reviews: TMDBTvSeriesReviews,
	screenedTheatrically: TMDBTvSeriesScreenedTheatrically,
	similar: TMDBTvSeriesSimilar,
	translations: TMDBTvSeriesTranslations,
	videos: TMDBTvSeriesVideos,
	watchProviders: TMDBTvSeriesWatchProviders,
	addRating: TMDBTvSeriesAddRating,
	deleteRating: TMDBTvSeriesDeleteRating
}
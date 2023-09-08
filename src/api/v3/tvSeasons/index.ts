import { TMDBTvSeasonsAccountStates } from "./accountStates";
import { TMDBTvSeasonsAggregateCredits } from "./aggregateCredits";
import { TMDBTvSeasonsChanges } from "./changes";
import { TMDBTvSeasonsCredits } from "./credits";
import { TMDBTvSeasonsDetails } from "./details";
import { TMDBTvSeasonsExternalIds } from "./externalIds";
import { TMDBTvSeasonsImages } from "./images";
import { TMDBTvSeasonsTranslations } from "./translations";
import { TMDBTvSeasonsVideos } from "./videos";
import { TMDBTvSeasonsWatchProviders } from "./watchProviders";

export const TMDBTvSeasons = {
	details: TMDBTvSeasonsDetails,
	accountStates: TMDBTvSeasonsAccountStates,
	aggregateCredits: TMDBTvSeasonsAggregateCredits,
	changes: TMDBTvSeasonsChanges,
	credits: TMDBTvSeasonsCredits,
	externalIds: TMDBTvSeasonsExternalIds,
	images: TMDBTvSeasonsImages,
	translations: TMDBTvSeasonsTranslations,
	videos: TMDBTvSeasonsVideos,
	watchProviders: TMDBTvSeasonsWatchProviders
}
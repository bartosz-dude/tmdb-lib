import { TMDBTvEpisodesAccountStates } from "./accountStates";
import { TMDBTvEpisodesAddRating } from "./addRating";
import { TMDBTvEpisodesChanges } from "./changes";
import { TMDBTvEpisodesCredits } from "./credits";
import { TMDBTvEpisodesDeleteRating } from "./deleteRating";
import { TMDBTvEpisodesDetails } from "./details";
import { TMDBTvEpisodesExternalIds } from "./externalIds";
import { TMDBTvEpisodesImages } from "./images";
import { TMDBTvEpisodesTranslations } from "./translations";

export const TMDBTvEpisodes = {
	details: TMDBTvEpisodesDetails,
	accountStates: TMDBTvEpisodesAccountStates,
	changes: TMDBTvEpisodesChanges,
	credits: TMDBTvEpisodesCredits,
	externalIds: TMDBTvEpisodesExternalIds,
	images: TMDBTvEpisodesImages,
	translations: TMDBTvEpisodesTranslations,
	addRating: TMDBTvEpisodesAddRating,
	deleteRating: TMDBTvEpisodesDeleteRating
}
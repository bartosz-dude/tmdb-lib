import TMDBTvEpisodesAccountStates from "./accountStates";
import TMDBTvEpisodesAddRating from "./addRating";
import TMDBTvEpisodesChanges from "./changes";
import TMDBTvEpisodesCredits from "./credits";
import TMDBTvEpisodesDeleteRating from "./deleteRating";
import TMDBTvEpisodesDetails from "./details";
import TMDBTvEpisodesExternalIds from "./externalIds";
import TMDBTvEpisodesImages from "./images";
import TMDBTvEpisodesTranslations from "./translations";

export namespace TMDBTvEpisodes {
	export const details = TMDBTvEpisodesDetails
	export const accountStates = TMDBTvEpisodesAccountStates
	export const changes = TMDBTvEpisodesChanges
	export const credits = TMDBTvEpisodesCredits
	export const externalIds = TMDBTvEpisodesExternalIds
	export const images = TMDBTvEpisodesImages
	export const translations = TMDBTvEpisodesTranslations
	export const addRating = TMDBTvEpisodesAddRating
	export const deleteRating = TMDBTvEpisodesDeleteRating
}
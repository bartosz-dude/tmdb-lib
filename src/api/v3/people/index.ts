import { TMDBPeopleChanges } from "./changes";
import { TMDBPeopleCombinedCredits } from "./combinedCredits";
import { TMDBPeopleDetails } from "./details";
import { TMDBPeopleExternalIds } from "./externalIds";
import { TMDBPeopleImages } from "./images";
import { TMDBPeopleLatest } from "./latest";
import { TMDBPeopleMovieCredits } from "./movieCredits";
import { TMDBPeopleTranslations } from "./translations";
import { TMDBPeopleTvCredits } from "./tvCredits";

export const TMDBPeople = {
	details: TMDBPeopleDetails,
	changes: TMDBPeopleChanges,
	combinedCredits: TMDBPeopleCombinedCredits,
	externalIds: TMDBPeopleExternalIds,
	images: TMDBPeopleImages,
	latest: TMDBPeopleLatest,
	movieCredits: TMDBPeopleMovieCredits,
	tvCredits: TMDBPeopleTvCredits,
	translations: TMDBPeopleTranslations
}
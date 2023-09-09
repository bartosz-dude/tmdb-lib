import TMDBPeopleChanges from "./changes";
import TMDBPeopleCombinedCredits from "./combinedCredits";
import TMDBPeopleDetails from "./details";
import TMDBPeopleExternalIds from "./externalIds";
import TMDBPeopleImages from "./images";
import TMDBPeopleLatest from "./latest";
import TMDBPeopleMovieCredits from "./movieCredits";
import TMDBPeopleTranslations from "./translations";
import TMDBPeopleTvCredits from "./tvCredits";

export namespace TMDBPeople {
	export const details = TMDBPeopleDetails
	export const changes = TMDBPeopleChanges
	export const combinedCredits = TMDBPeopleCombinedCredits
	export const externalIds = TMDBPeopleExternalIds
	export const images = TMDBPeopleImages
	export const latest = TMDBPeopleLatest
	export const movieCredits = TMDBPeopleMovieCredits
	export const tvCredits = TMDBPeopleTvCredits
	export const translations = TMDBPeopleTranslations
}
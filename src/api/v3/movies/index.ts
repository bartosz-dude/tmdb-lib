import { TMDBMovieAccountStates } from "./accountStates";
import { TMDBMovieAddRating } from "./addRating";
import { TMDBMovieAlternativeTitles } from "./alternativeTitles";
import { TMDBMovieChanges } from "./changes";
import { TMDBMovieCredits } from "./credits";
import { TMDBMovieDeleteRating } from "./deleteRating";
import { TMDBMovieDetails } from "./details";
import { TMDBMovieExternalIds } from "./externalIds";
import { TMDBMovieImages } from "./images";
import { TMDBMovieKeywords } from "./keywords";
import { TMDBMovieLatest } from "./latest";
import { TMDBMovieLists } from "./lists";
import { TMDBMovieRecommendations } from "./recommendations";
import { TMDBMovieReleaseDates } from "./releaseDates";
import { TMDBMovieReviews } from "./reviews";
import { TMDBMovieSimilar } from "./similar";
import { TMDBMovieTranslations } from "./translations";
import { TMDBMovieVideos } from "./videos";
import { TMDBMovieWatchProviders } from "./watchProviders";

export const TMDBMovies = {
	details: TMDBMovieDetails,
	accountStates: TMDBMovieAccountStates,
	alternativeTitles: TMDBMovieAlternativeTitles,
	changes: TMDBMovieChanges,
	credits: TMDBMovieCredits,
	externalIds: TMDBMovieExternalIds,
	images: TMDBMovieImages,
	keywords: TMDBMovieKeywords,
	latest: TMDBMovieLatest,
	lists: TMDBMovieLists,
	recommendations: TMDBMovieRecommendations,
	releaseDates: TMDBMovieReleaseDates,
	reviews: TMDBMovieReviews,
	similar: TMDBMovieSimilar,
	translations: TMDBMovieTranslations,
	videos: TMDBMovieVideos,
	watchProviders: TMDBMovieWatchProviders,
	addRating: TMDBMovieAddRating,
	deleteRating: TMDBMovieDeleteRating
}
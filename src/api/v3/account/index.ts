import TMDBAccountAddFavorite from "./addFavorite";
import TMDBAccountAddToWatchlist from "./addToWatchlist";
import TMDBAccountDetails from "./details";
import TMDBAccountFavoriteMovies from "./favoriteMovies";
import TMDBAccountFavoriteTv from "./favoriteTv";
import TMDBAccountLists from "./lists";
import TMDBAccountRatedMovies from "./ratedMovies";
import TMDBAccountRatedTv from "./ratedTv";
import TMDBAccountRatedTvEpisodes from "./ratedTvEpisodes";
import TMDBAccountWatchlistMovies from "./watchlistMovies";
import TMDBAccountWatchlistTv from "./watchlistTv";

export namespace TMDBAccount {
	export const details = TMDBAccountDetails
	export const addFavorite = TMDBAccountAddFavorite
	export const addToWatchlist = TMDBAccountAddToWatchlist
	export const favoriteMovies = TMDBAccountFavoriteMovies
	export const favoriteTv = TMDBAccountFavoriteTv
	export const lists = TMDBAccountLists
	export const ratedMovies = TMDBAccountRatedMovies
	export const ratedTv = TMDBAccountRatedTv
	export const ratedTvEpisodes = TMDBAccountRatedTvEpisodes
	export const watchlistMovies = TMDBAccountWatchlistMovies
	export const watchlistTv = TMDBAccountWatchlistTv
}
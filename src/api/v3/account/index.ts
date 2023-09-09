import { TMDBAccountAddFavorite } from "./addFavorite";
import { TMDBAccountAddToWatchlist } from "./addToWatchlist";
import { TMDBAccountDetails } from "./details";
import { TMDBAccountFavoriteMovies } from "./favoriteMovies";
import { TMDBAccountFavoriteTv } from "./favoriteTv";
import { TMDBAccountLists } from "./lists";
import { TMDBAccountRatedMovies } from "./ratedMovies";
import { TMDBAccountRatedTv } from "./ratedTv";
import { TMDBAccountRatedTvEpisodes } from "./ratedTvEpisodes";
import { TMDBAccountWatchlistMovies } from "./watchlistMovies";
import { TMDBAccountWatchlistTv } from "./watchlistTv";

export const TMDBAccount = {
	details: TMDBAccountDetails,
	addFavorite: TMDBAccountAddFavorite,
	addToWatchlist: TMDBAccountAddToWatchlist,
	favoriteMovies: TMDBAccountFavoriteMovies,
	favoriteTv: TMDBAccountFavoriteTv,
	lists: TMDBAccountLists,
	ratedMovies: TMDBAccountRatedMovies,
	ratedTv: TMDBAccountRatedTv,
	ratedTvEpisodes: TMDBAccountRatedTvEpisodes,
	watchlistMovies: TMDBAccountWatchlistMovies,
	watchlistTv: TMDBAccountWatchlistTv
}
import { TMDBAccountAddFavorite } from "./addFavorite"
import { TMDBAccountAddToWatchlist } from "./addToWatchlist"
import { TMDBAccountDetails } from "./details"
import { TMDBAccountFavoriteMovies } from "./favoriteMovies"
import { TMDBAccountFavoriteTv } from "./favoriteTv"
import { TMDBAccountLists } from "./lists"
import { TMDBAccountRatedMovies } from "./ratedMovies"
import { TMDBAccountRatedTv } from "./ratedTv"
import { TMDBAccountRatedTvEpisodes } from "./ratedTvEpisodes"
import { TMDBAccountWatchlistMovies } from "./watchlistMovies"
import { TMDBAccountWatchlistTv } from "./watchlistTv"

const TMDBAccount = {
	/**
	 * @link https://developer.themoviedb.org/reference/account-details
	 */
	details: TMDBAccountDetails,
	/**
	 * @link https://developer.themoviedb.org/reference/account-add-favorite
	 */
	addFavorite: TMDBAccountAddFavorite,
	/**
	 * @link https://developer.themoviedb.org/reference/account-add-to-watchlist
	 */
	addToWatchlist: TMDBAccountAddToWatchlist,
	/**
	 * @link https://developer.themoviedb.org/reference/account-get-favorites
	 */
	favoriteMovies: TMDBAccountFavoriteMovies,
	/**
	 * @link https://developer.themoviedb.org/reference/account-favorite-tv
	 */
	favoriteTv: TMDBAccountFavoriteTv,
	/**
	 * @link https://developer.themoviedb.org/reference/account-lists
	 */
	lists: TMDBAccountLists,
	/**
	 * @link https://developer.themoviedb.org/reference/account-rated-movies
	 */
	ratedMovies: TMDBAccountRatedMovies,
	/**
	 * @link https://developer.themoviedb.org/reference/account-favorite-tv
	 */
	ratedTv: TMDBAccountRatedTv,
	/**
	 * @link https://developer.themoviedb.org/reference/account-rated-tv-episodes
	 */
	ratedTvEpisodes: TMDBAccountRatedTvEpisodes,
	/**
	 * @link https://developer.themoviedb.org/reference/account-watchlist-movies
	 */
	watchlistMovies: TMDBAccountWatchlistMovies,
	/**
	 * @link https://developer.themoviedb.org/reference/account-watchlist-tv
	 */
	watchlistTv: TMDBAccountWatchlistTv,
}

export default TMDBAccount

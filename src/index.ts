import TMDBAccount from "./api/v3/account"
import TMDBAuthentication from "./api/v3/authentication"
import TMDBCertifications from "./api/v3/certification"
import TMDBChanges from "./api/v3/changes"
import TMDBCollections from "./api/v3/collections"
import TMDBCompanies from "./api/v3/companies"
import TMDBConfiguration from "./api/v3/configuration"
import TMDBCredits from "./api/v3/credits"
import TMDBDiscover from "./api/v3/discover"
import TMDBFind from "./api/v3/find"
import { TMDBGenres } from "./api/v3/genres"
import { TMDBGuestSessions } from "./api/v3/guestSessions"
import { TMDBKeywords } from "./api/v3/keywords"
import { TMDBLists } from "./api/v3/lists"
import { TMDBMovieLists } from "./api/v3/movieLists"
import { TMDBMovies } from "./api/v3/movies"
import { TMDBNetworks } from "./api/v3/networks/index"
import { TMDBPeopleLists } from "./api/v3/peopleLists"
import { TMDBReviews } from "./api/v3/reviews"
import { TMDBSearch } from "./api/v3/search"
import { TMDBTrending } from "./api/v3/trending"
import { TMDBTvEpisodeGroups } from "./api/v3/tvEpisodeGroups"
import { TMDBWatchProviders } from "./api/v3/watchProviders"
import TMDB4Auth from "./api/v4/auth"
import { TMDB_CONFIGURATION } from "./constants"

/**
 * Wrapper for [TMDB Api](https://developer.themoviedb.org/reference/intro/getting-started)
 *
 * Follows docs structure in organization of methods
 */
export const TMDB = {
	account: TMDBAccount,
	authentication: TMDBAuthentication,
	certifications: TMDBCertifications,
	changes: TMDBChanges,
	collections: TMDBCollections,
	companies: TMDBCompanies,
	/**
	 * @see `TMDB_CONFIGURATION` constant provides the same information as default requests to endpoints in this category as of 08/2024
	 */
	configuration: TMDBConfiguration,
	credits: TMDBCredits,
	discover: TMDBDiscover,
	find: TMDBFind,
	genres: TMDBGenres,
	guestSessions: TMDBGuestSessions,
	keywords: TMDBKeywords,
	lists: TMDBLists,
	movieLists: TMDBMovieLists,
	movies: TMDBMovies,
	networks: TMDBNetworks,
	peopleLists: TMDBPeopleLists,
	search: TMDBSearch,
	trending: TMDBTrending,
	reviews: TMDBReviews,
	tvEpisodeGroups: TMDBTvEpisodeGroups,
	watchProviders: TMDBWatchProviders,
	v4: {
		auth: TMDB4Auth,
	},
}

export default TMDB
export { TMDB_CONFIGURATION }

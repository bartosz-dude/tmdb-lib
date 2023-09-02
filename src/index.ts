import { TMDBAccount } from "./api/v3/account";
import { TMDBAuthentication } from "./api/v3/authentication";
import { TMDBCertifications } from "./api/v3/certification";
import { TMDBChanges } from "./api/v3/changes";
import { TMDBCollections } from "./api/v3/collections";
import { TMDBCredits } from "./api/v3/credits";
import { TMDBNetworks } from "./api/v3/networks/index";
import { TMDBPeopleLists } from "./api/v3/peopleLists";

export const TMDB = {
	account: TMDBAccount,
	authentication: TMDBAuthentication,
	certifications: TMDBCertifications,
	changes: TMDBChanges,
	collections: TMDBCollections,
	credits: TMDBCredits,
	networks: TMDBNetworks,
	peopleLists: TMDBPeopleLists
}
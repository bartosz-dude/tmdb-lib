import { TMDBAccount } from "./api/v3/account";
import { TMDBAuthentication } from "./api/v3/authentication";
import { TMDBCertifications } from "./api/v3/certification";
import { TMDBChanges } from "./api/v3/changes";
import { TMDBCollections } from "./api/v3/collections";
import { TMDBCompanies } from "./api/v3/companies";
import { TMDBConfiguration } from "./api/v3/configuration";
import { TMDBCredits } from "./api/v3/credits";
import { TMDBDiscover } from "./api/v3/discover";
import { TMDBFind } from "./api/v3/find";
import { TMDBNetworks } from "./api/v3/networks/index";
import { TMDBPeopleLists } from "./api/v3/peopleLists";

export const TMDB = {
	account: TMDBAccount,
	authentication: TMDBAuthentication,
	certifications: TMDBCertifications,
	changes: TMDBChanges,
	collections: TMDBCollections,
	companies: TMDBCompanies,
	configuration: TMDBConfiguration,
	credits: TMDBCredits,
	discover: TMDBDiscover,
	find: TMDBFind,
	networks: TMDBNetworks,
	peopleLists: TMDBPeopleLists
}
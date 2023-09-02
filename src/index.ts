import { TMDBAccount } from "./api/v3/account";
import { TMDBAuthentication } from "./api/v3/authentication";
import { TMDBCertifications } from "./api/v3/certification";
import { TMDBCredits } from "./api/v3/credits";
import { TMDBNetworks } from "./api/v3/networks/index";
import { TMDBPeopleLists } from "./api/v3/peopleLists";

export const TMDB = {
	account: TMDBAccount,
	authentication: TMDBAuthentication,
	certifications: TMDBCertifications,
	credits: TMDBCredits,
	networks: TMDBNetworks,
	peopleLists: TMDBPeopleLists
}
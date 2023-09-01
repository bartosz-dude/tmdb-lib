import { TMDBAccount } from "./api/v3/account";
import { TMDBCredits } from "./api/v3/credits";
import { TMDBNetworks } from "./api/v3/networks/index";
import { TMDBPeopleLists } from "./api/v3/peopleLists";

export const TMDB = {
	account: TMDBAccount,
	credits: TMDBCredits,
	networks: TMDBNetworks,
	peopleLists: TMDBPeopleLists
}
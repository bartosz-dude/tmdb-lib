import { TMDBAuthenticationCreateGuestSession } from "./createGuestSession";
import { TMDBAuthenticationCreateRequestToken } from "./createRequestToken";
import { TMDBAuthenticationCreateSession } from "./createSession";
import { TMDBAuthenticationCreateSessionFromV4Token } from "./createSessionFromV4Token";
import { TMDBAuthenticationCreateSessionWithLogin } from "./createSessionWithLogin";
import { TMDBAuthenticationDeleteSession } from "./deleteSession";
import { TMDBAuthenticationValidateKey } from "./validateKey";

export const TMDBAuthentication = {
	createGuestSession: TMDBAuthenticationCreateGuestSession,
	createRequestToken: TMDBAuthenticationCreateRequestToken,
	createSession: TMDBAuthenticationCreateSession,
	createSessionFromV4Token: TMDBAuthenticationCreateSessionFromV4Token,
	createSessionWithLogin: TMDBAuthenticationCreateSessionWithLogin,
	deleteSession: TMDBAuthenticationDeleteSession,
	validateKey: TMDBAuthenticationValidateKey
}
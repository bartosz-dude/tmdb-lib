import TMDBAuthenticationCreateGuestSession from "./createGuestSession";
import TMDBAuthenticationCreateRequestToken from "./createRequestToken";
import TMDBAuthenticationCreateSession from "./createSession";
import TMDBAuthenticationCreateSessionFromV4Token from "./createSessionFromV4Token";
import TMDBAuthenticationCreateSessionWithLogin from "./createSessionWithLogin";
import TMDBAuthenticationDeleteSession from "./deleteSession";
import TMDBAuthenticationValidateKey from "./validateKey";

export namespace TMDBAuthentication {
	export const createGuestSession = TMDBAuthenticationCreateGuestSession
	export const createRequestToken = TMDBAuthenticationCreateRequestToken
	export const createSession = TMDBAuthenticationCreateSession
	export const createSessionFromV4Token = TMDBAuthenticationCreateSessionFromV4Token
	export const createSessionWithLogin = TMDBAuthenticationCreateSessionWithLogin
	export const deleteSession = TMDBAuthenticationDeleteSession
	export const validateKey = TMDBAuthenticationValidateKey
}
import { TMDBAuthenticationCreateGuestSession } from "./createGuestSession"
import { TMDBAuthenticationCreateRequestToken } from "./createRequestToken"
import { TMDBAuthenticationCreateSession } from "./createSession"
import { TMDBAuthenticationCreateSessionFromV4Token } from "./createSessionFromV4Token"
import { TMDBAuthenticationCreateSessionWithLogin } from "./createSessionWithLogin"
import { TMDBAuthenticationDeleteSession } from "./deleteSession"
import { TMDBAuthenticationValidateKey } from "./validateKey"

const TMDBAuthentication = {
	/**
	 * Guest sessions are a special kind of session that give you some of the functionality of an account, but not all. For example, some of the things you can do with a guest session are; maintain a rated list, a watchlist and a favorite list.
	 *
	 * Guest sessions will automatically be deleted if they are not used within 60 minutes of it being issued.
	 *
	 * @link https://developer.themoviedb.org/reference/authentication-create-guest-session
	 */
	createGuestSession: TMDBAuthenticationCreateGuestSession,
	/**
	 * Create an intermediate request token that can be used to validate a TMDB user login. More details about how this works can be found [here](https://developer.themoviedb.org/reference/authentication-how-do-i-generate-a-session-id).
	 *
	 * This is step 1 from the [How do I generate a session id?](https://developer.themoviedb.org/reference/authentication-how-do-i-generate-a-session-id) guide.
	 *
	 * @link https://developer.themoviedb.org/reference/authentication-create-request-token
	 */
	createRequestToken: TMDBAuthenticationCreateRequestToken,
	/**
	 * You can use this method to create a fully valid session ID once a user has validated the request token. More information about how this works can be found here.
	 *
	 * This is step 3 from the [How do I generate a session id?](https://developer.themoviedb.org/reference/authentication-create-session) guide.
	 *
	 * @link https://developer.themoviedb.org/reference/authentication-create-session
	 */
	createSession: TMDBAuthenticationCreateSession,
	/**
	 * Use this method to create a v3 session ID if you already have a valid v4 access token. The v4 token needs to be authenticated by the user. Your standard "read token" will not validate to create a session ID.
	 *
	 * This would replace step 3 from the [How do I generate a session id?](https://developer.themoviedb.org/reference/authentication-how-do-i-generate-a-session-id) guide.
	 *
	 * @link https://developer.themoviedb.org/reference/authentication-create-session-from-v4-token
	 */
	createSessionFromV4Token: TMDBAuthenticationCreateSessionFromV4Token,
	/**
	 * Not all applications have access to a web view so this can be used as a substitute.
	 *
	 * Please note, the preferred method of validating a request token is to have a user authenticate the request via the TMDB website. You can read about that method [here](https://developer.themoviedb.org/reference/authentication-how-do-i-generate-a-session-id).
	 *
	 * If you decide to use this method please **use HTTPS**.
	 *
	 * This would replace step 3 from the [How do I generate a session id?](https://developer.themoviedb.org/reference/authentication-how-do-i-generate-a-session-id) guide.
	 *
	 * @link https://developer.themoviedb.org/reference/authentication-create-session-from-login
	 */
	createSessionWithLogin: TMDBAuthenticationCreateSessionWithLogin,
	/**
	 * @link https://developer.themoviedb.org/reference/authentication-delete-session
	 */
	deleteSession: TMDBAuthenticationDeleteSession,
	/**
	 * Test your API Key to see if it's valid.
	 *
	 * @link https://developer.themoviedb.org/reference/authentication-validate-key
	 */
	validateKey: TMDBAuthenticationValidateKey,
}

export default TMDBAuthentication

import TMDB4AuthCreateAccessToken from "./createAccessToken"
import TMDB4AuthCreateRequestToken from "./createRequestToken"
import TMDB4AuthLogout from "./logout"

const TMDB4Auth = {
	/**
	 * This is step #3 from the user [authentication page](https://developer.themoviedb.org/v4/docs/authentication-user).
	 *
	 * This method will finish the user authentication flow and issue an official user access token. The request token in this request is sent along as part of the `POST` body. You should still use your standard API read access token for authenticating this request.
	 *
	 * @link https://developer.themoviedb.org/v4/reference/auth-create-access-token
	 */
	createAccessToken: TMDB4AuthCreateAccessToken,
	/**
	 * This is step #1 from the user [authentication page](https://developer.themoviedb.org/v4/docs/authentication-user).
	 *
	 * This method generates a new request token that you can ask a user to approve. This is the first step in getting permission from a user to read and write data on their behalf.
	 *
	 * @link https://developer.themoviedb.org/v4/reference/auth-create-request-token
	 */
	createRequestToken: TMDB4AuthCreateRequestToken,
	/**
	 * Log out of a session.
	 *
	 * @link https://developer.themoviedb.org/v4/reference/auth-logout
	 */
	logout: TMDB4AuthLogout,
}

export default TMDB4Auth

import { URLPaths } from "./tmdb"

interface Params {
	[ name: string ]: string | number
}

export default function TMDBUrlParser<PathParams extends (Params | null), QueryParams extends (Params | null)>(tmdbBasePath: Exclude<URLPaths, URLPaths.TMDB>, path: string, params?: { path?: PathParams, query?: QueryParams }): URL {
	let filledPath = path

	console.log(filledPath)
	if (params?.path) {
		const pathParams = Object.entries(params.path)
		if (pathParams.length > 0) {
			pathParams.forEach((param) => {
				filledPath = filledPath.replace(`{${param[ 0 ]}}`, typeof param[ 1 ] == "number" ? param[ 1 ].toString() : param[ 1 ])
			})
		}
	}

	const url = new URL(filledPath, URLPaths.TMDB + tmdbBasePath)

	if (params?.query) {
		const queryParams = Object.entries(params.query)
		if (queryParams.length > 0) {
			queryParams.forEach((param) => {
				if (typeof param[ 1 ] == "number") param[ 1 ] = param[ 1 ].toString()

				url.searchParams.append(...param as [ string, string ])
			})
		}
	}

	return url
}

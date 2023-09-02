import { URLPaths } from "./tmdb"

interface Params {
	[ name: string ]: string | number | boolean | Date
}

export default function TMDBUrlParser<PathParams extends (Params | null), QueryParams extends (Params | null)>(tmdbBasePath: Exclude<URLPaths, URLPaths.TMDB>, path: string, params?: { path?: PathParams, query?: QueryParams }): URL {
	let filledPath = path

	if (params?.path) {
		const pathParams = Object.entries(params.path)
		if (pathParams.length > 0) {
			pathParams.forEach((param) => {
				filledPath = filledPath.replace(`{${param[ 0 ]}}`, (() => {
					switch (typeof param[ 1 ]) {
						// case "string":
						case "number": {
							return param[ 1 ].toString()
						}
						// case "bigint":
						case "boolean": {
							return param[ 1 ] ? "true" : "false"
						}
						// case "symbol":
						// case "undefined":
						case "object": {
							if (param[ 1 ] instanceof Date) {
								return param[ 1 ].toJSON().split("T")[ 0 ]
							}
							return ""
						}
						// case "function":
						default: {
							return param[ 1 ]
						}
					}
				})())
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

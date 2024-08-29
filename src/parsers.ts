import { URLPaths } from "./tmdb"

interface Params {
	[name: string]: string | number | boolean | Date | Appendants
}

export default function TMDBUrlParser<
	PathParams extends Params | null,
	QueryParams extends Params | null,
>(
	tmdbBasePath: Exclude<URLPaths, URLPaths.TMDB>,
	path: string,
	params?: { path?: PathParams; query?: QueryParams },
): URL {
	let filledPath = path

	if (params?.path) {
		const pathParams = Object.entries(params.path)
		if (pathParams.length > 0) {
			pathParams.forEach((param) => {
				filledPath = filledPath.replace(
					`{${param[0]}}`,
					(() => {
						switch (typeof param[1]) {
							// case "string":
							case "number": {
								return param[1].toString()
							}
							// case "bigint":
							case "boolean": {
								return param[1] ? "true" : "false"
							}
							// case "symbol":
							// case "undefined":
							case "object": {
								if (param[1] instanceof Date) {
									return param[1].toJSON().split("T")[0]
								}
								return ""
							}
							// case "function":
							default: {
								return param[1]
							}
						}
					})(),
				)
			})
		}
	}

	const url = new URL(filledPath, URLPaths.TMDB + tmdbBasePath)

	if (params?.query) {
		const queryParams = Object.entries(params.query)
		if (queryParams.length > 0) {
			queryParams.forEach((param) => {
				if (typeof param[1] == "number") param[1] = param[1].toString()

				if (
					param[0] == "append_to_response" &&
					typeof param[1] == "object" &&
					!(param[1] instanceof Date)
				)
					param[1] = appendableRequestParser(param[1])

				url.searchParams.append(...(param as [string, string]))
			})
		}
	}

	return url
}

type Appendants = { [key: string]: object }

export function appendableRequestParser(param: Appendants) {
	let final = ""

	const appendants = Object.entries(param) as [
		endpoint: string,
		queryParams: object,
	][]

	appendants.forEach(([endpoint, queryParams], i, arr) => {
		const encodedQueryParams = Object.entries(queryParams).reduce(
			(prev, [param, val], i) =>
				prev.concat(`${i == 0 ? "?" : "&"}${param}=${encodeURI(val)}`),
			"",
		)

		final += endpoint + encodedQueryParams + (i < arr.length - 1 ? "," : "")
	})

	return final
}

export function appendedResponseNormalizer(response: object) {
	const normalizedEntries = Object.entries(response).map(([field, value]) => {
		if (field.includes("?")) {
			const normalizedField = field.split("?")[0]
			return [normalizedField, value]
		}

		return [field, value]
	})

	return Object.fromEntries(normalizedEntries)
}

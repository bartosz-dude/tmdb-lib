interface NotOKResponse {
	success: false,
	status_code: number,
	status_message: string
}

interface CustomRequest {
	method: "GET" | "POST" | "DELETE",
	rawBody?: any
}

export type Fetcher = <Response>(url: URL, request?: CustomRequest, readAccessToken?: string) => Promise<Response>

export default async function TMDBFetcher<Response>(requestURL: URL, readAccessToken: string, request?: CustomRequest): Promise<Response> {
	const options: RequestInit | undefined = (() => {
		switch (request?.method) {
			case "POST": {
				const post: RequestInit = {
					method: 'POST',
					headers: {
						accept: 'application/json',
						"content-type": 'application/json',
						Authorization: `Bearer ${readAccessToken}`
					},
					body: request.rawBody ? JSON.stringify(request.rawBody) : ""
				}
				return post
			}

			case "DELETE": {
				return undefined
			}

			case "GET":
			default: {
				return {
					method: 'GET',
					headers: {
						accept: 'application/json',
						Authorization: `Bearer ${readAccessToken}`
					}
				}
			}
		}
	})()


	const response = await fetch(requestURL, options)

	if (!response.ok) {
		const notOkResponse = await response.json() as NotOKResponse
		throw new Error(`"TMDB Code: ${notOkResponse.status_code} Message: ${notOkResponse.status_message}`)
	}

	const okResponse = await response.json() as Response

	return okResponse
}
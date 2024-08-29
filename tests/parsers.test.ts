import { describe, expect, test } from "vitest"
import TMDBUrlParser, {
	appendableRequestParser,
	appendedResponseNormalizer,
} from "../src/parsers"
import { URLPaths } from "../src/tmdb"
import { TMDBMovieDetailsRequest } from "../src/api/v3/movies/details"

describe("appendableRequestParser", () => {
	test("single appendant with single param", () => {
		expect(
			appendableRequestParser({
				alternative_titles: {
					country: "AD",
				},
			}),
		).toBe("alternative_titles?country=AD")
	})

	test("single appendant with multiple params", () => {
		expect(
			appendableRequestParser({
				images: {
					include_image_language: "en",
					language: "en-US",
				},
			}),
		).toBe("images?include_image_language=en&language=en-US")
	})

	test("multiple appendants with single param", () => {
		expect(
			appendableRequestParser({
				alternative_titles: {
					country: "AD",
				},
				images: {
					language: "en-US",
				},
			}),
		).toBe("alternative_titles?country=AD,images?language=en-US")
	})

	test("multiple appendants with multiple amounts of params", () => {
		expect(
			appendableRequestParser({
				alternative_titles: {
					country: "AD",
				},
				images: {
					include_image_language: "en",
					language: "en-US",
				},
			}),
		).toBe(
			"alternative_titles?country=AD,images?include_image_language=en&language=en-US",
		)
	})
})

describe("TMDBUrlParser", () => {
	test("append_to_response with string", () => {
		expect(
			TMDBUrlParser<
				{
					movie_id: number
				},
				{
					[key in keyof Omit<
						TMDBMovieDetailsRequest,
						keyof {
							movie_id: number
						}
					>]: TMDBMovieDetailsRequest[key]
				}
			>(URLPaths.MOVIE, "{movie_id}", {
				path: {
					movie_id: 755812,
				},
				query: {
					append_to_response: "lists",
				},
			}).toString(),
		).toBe("https://api.themoviedb.org/3/movie/755812?append_to_response=lists")
	})

	test("append_to_response with single appendant in object form", () => {
		expect(
			TMDBUrlParser<
				{
					movie_id: number
				},
				{
					[key in keyof Omit<
						TMDBMovieDetailsRequest,
						keyof {
							movie_id: number
						}
					>]: TMDBMovieDetailsRequest[key]
				}
			>(URLPaths.MOVIE, "{movie_id}", {
				path: {
					movie_id: 755812,
				},
				query: {
					append_to_response: {
						lists: {
							language: "en-US",
							page: 1,
						},
					},
				},
			}).toString(),
		).toBe(
			"https://api.themoviedb.org/3/movie/755812?append_to_response=lists%3Flanguage%3Den-US%26page%3D1",
		)
	})

	test("append_to_response with multiple appendants in object form", () => {
		expect(
			TMDBUrlParser<
				{
					movie_id: number
				},
				{
					[key in keyof Omit<
						TMDBMovieDetailsRequest,
						keyof {
							movie_id: number
						}
					>]: TMDBMovieDetailsRequest[key]
				}
			>(URLPaths.MOVIE, "{movie_id}", {
				path: {
					movie_id: 755812,
				},
				query: {
					append_to_response: {
						lists: {
							language: "en-US",
							page: 1,
						},
						images: {
							include_image_language: "en",
							language: "en-US",
						},
					},
				},
			}).toString(),
		).toBe(
			"https://api.themoviedb.org/3/movie/755812?append_to_response=lists%3Flanguage%3Den-US%26page%3D1%2Cimages%3Finclude_image_language%3Den%26language%3Den-US",
		)
	})
})

describe("appendedResponseNormalizer", () => {
	test("no fields to normalize", () => {
		expect(
			appendedResponseNormalizer({
				status: "Released",
				tagline: "New city. Same duty.",
				title: "Miraculous World: New York, United HeroeZ",
				video: false,
			}),
		).toMatchObject({
			status: "Released",
			tagline: "New city. Same duty.",
			title: "Miraculous World: New York, United HeroeZ",
			video: false,
		})
	})

	test("one field to normalize", () => {
		expect(
			appendedResponseNormalizer({
				status: "Released",
				tagline: "New city. Same duty.",
				title: "Miraculous World: New York, United HeroeZ",
				video: false,
				"lists?language=en-US&page=1": null,
			}),
		).toMatchObject({
			status: "Released",
			tagline: "New city. Same duty.",
			title: "Miraculous World: New York, United HeroeZ",
			video: false,
			lists: null,
		})
	})

	test("multiple fields to normalize", () => {
		expect(
			appendedResponseNormalizer({
				status: "Released",
				tagline: "New city. Same duty.",
				title: "Miraculous World: New York, United HeroeZ",
				video: false,
				"lists?language=en-US&page=1": null,
				"images?include_image_language=en&language=en-US": "a",
			}),
		).toMatchObject({
			status: "Released",
			tagline: "New city. Same duty.",
			title: "Miraculous World: New York, United HeroeZ",
			video: false,
			lists: null,
			images: "a",
		})
	})
})

import { TMDBFingFindById } from "./findById"

const TMDBFind = {
	/**
	 * Find data by external ID's.
	 *
	 * The find method makes it easy to search for objects in our database by an external identifier.
	 *
	 * This method will search all objects (movies, TV shows and people) and return the results in a single response.
	 *
	 * Check the [docs page](https://developer.themoviedb.org/reference/find-by-id) to see supported external sources.
	 *
	 * @link https://developer.themoviedb.org/reference/find-by-id
	 */
	findById: TMDBFingFindById,
}

export default TMDBFind

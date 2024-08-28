import { TMDBCollectionsDetails } from "./details"
import { TMDBCollectionsImages } from "./images"
import { TMDBCollectionsTranslations } from "./translations"

const TMDBCollections = {
	/**
	 * Get collection details by ID.
	 *
	 * @link https://developer.themoviedb.org/reference/collection-details
	 */
	details: TMDBCollectionsDetails,
	/**
	 * Get the images that belong to a collection.
	 *
	 * This method will return the backdrops and posters that have been added to a collection.
	 *
	 * If you have a `language` specified, it will act as a filter on the returned items. You can use the `include_image_language` param to query additional languages.
	 *
	 * @link https://developer.themoviedb.org/reference/collection-images
	 */
	images: TMDBCollectionsImages,
	/**
	 * @link https://developer.themoviedb.org/reference/collection-translations
	 */
	translations: TMDBCollectionsTranslations,
}

export default TMDBCollections

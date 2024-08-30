import { TMDBNetworksAlternateNames } from "./alternateNames"
import { TMDBNetworksDetails } from "./details"
import { TMDBNetworksImages } from "./images"

const TMDBNetworks = {
	/**
	 * @link https://developer.themoviedb.org/reference/network-details
	 */
	details: TMDBNetworksDetails,
	/**
	 * Get the alternative names of a network.
	 *
	 * @link https://developer.themoviedb.org/reference/details-copy
	 */
	alternateNames: TMDBNetworksAlternateNames,
	/**
	 * Get the TV network logos by id.
	 *
	 * There are two image formats that are supported for companies, PNG's and SVG's. You can see which type the original file is by looking at the `file_type` field. We prefer SVG's as they are resolution independent and as such, the width and height are only there to reflect the original asset that was uploaded. An SVG can be scaled properly beyond those dimensions if you call them as a PNG.
	 *
	 * For more information about how SVG's and PNG's can be used, take a read through [this document](https://developer.themoviedb.org/docs/image-basics).
	 *
	 * @link https://developer.themoviedb.org/reference/alternative-names-copy
	 */
	images: TMDBNetworksImages,
}

export default TMDBNetworks

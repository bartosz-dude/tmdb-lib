/**
 * Constant containing all responses to endpoints of configuration category in [TMDB Api](https://developer.themoviedb.org/reference/intro/getting-started)
 *
 * These responses are provided as of 08/2024
 *
 * If this constant does not match the actual current responses, please [post an issue here](https://github.com/bartosz-dude/tmdb-lib-js/issues).
 */
export const TMDB_CONFIGURATION = Object.freeze({
	details: {
		images: Object.freeze({
			base_url: "http://image.tmdb.org/t/p/",
			secure_base_url: "https://image.tmdb.org/t/p/",
			backdrop_sizes: Object.freeze([ "w300", "w780", "w1280", "original" ]),
			logo_sizes: Object.freeze([
				"w45",
				"w92",
				"w154",
				"w185",
				"w300",
				"w500",
				"original",
			]),
			poster_sizes: Object.freeze([
				"w92",
				"w154",
				"w185",
				"w342",
				"w500",
				"w780",
				"original",
			]),
			profile_sizes: Object.freeze([ "w45", "w185", "h632", "original" ]),
			still_sizes: Object.freeze([ "w92", "w185", "w300", "original" ]),
		}),
		change_keys: Object.freeze([
			"adult",
			"air_date",
			"also_known_as",
			"alternative_titles",
			"biography",
			"birthday",
			"budget",
			"cast",
			"certifications",
			"character_names",
			"created_by",
			"crew",
			"deathday",
			"episode",
			"episode_number",
			"episode_run_time",
			"freebase_id",
			"freebase_mid",
			"general",
			"genres",
			"guest_stars",
			"homepage",
			"images",
			"imdb_id",
			"languages",
			"name",
			"network",
			"origin_country",
			"original_name",
			"original_title",
			"overview",
			"parts",
			"place_of_birth",
			"plot_keywords",
			"production_code",
			"production_companies",
			"production_countries",
			"releases",
			"revenue",
			"runtime",
			"season",
			"season_number",
			"season_regular",
			"spoken_languages",
			"status",
			"tagline",
			"title",
			"translations",
			"tvdb_id",
			"tvrage_id",
			"type",
			"video",
			"videos",
		]),
	},
	countries: Object.freeze([
		Object.freeze({
			iso_3166_1: "AD",
			english_name: "Andorra",
			native_name: "Andorra",
		}),
		Object.freeze({
			iso_3166_1: "AE",
			english_name: "United Arab Emirates",
			native_name: "United Arab Emirates",
		}),
		Object.freeze({
			iso_3166_1: "AF",
			english_name: "Afghanistan",
			native_name: "Afghanistan",
		}),
		Object.freeze({
			iso_3166_1: "AG",
			english_name: "Antigua and Barbuda",
			native_name: "Antigua & Barbuda",
		}),
		Object.freeze({
			iso_3166_1: "AI",
			english_name: "Anguilla",
			native_name: "Anguilla",
		}),
		Object.freeze({
			iso_3166_1: "AL",
			english_name: "Albania",
			native_name: "Albania",
		}),
		Object.freeze({
			iso_3166_1: "AM",
			english_name: "Armenia",
			native_name: "Armenia",
		}),
		Object.freeze({
			iso_3166_1: "AN",
			english_name: "Netherlands Antilles",
			native_name: "Netherlands Antilles",
		}),
		Object.freeze({
			iso_3166_1: "AO",
			english_name: "Angola",
			native_name: "Angola",
		}),
		Object.freeze({
			iso_3166_1: "AQ",
			english_name: "Antarctica",
			native_name: "Antarctica",
		}),
		Object.freeze({
			iso_3166_1: "AR",
			english_name: "Argentina",
			native_name: "Argentina",
		}),
		Object.freeze({
			iso_3166_1: "AS",
			english_name: "American Samoa",
			native_name: "American Samoa",
		}),
		Object.freeze({
			iso_3166_1: "AT",
			english_name: "Austria",
			native_name: "Austria",
		}),
		Object.freeze({
			iso_3166_1: "AU",
			english_name: "Australia",
			native_name: "Australia",
		}),
		Object.freeze({
			iso_3166_1: "AW",
			english_name: "Aruba",
			native_name: "Aruba",
		}),
		Object.freeze({
			iso_3166_1: "AZ",
			english_name: "Azerbaijan",
			native_name: "Azerbaijan",
		}),
		Object.freeze({
			iso_3166_1: "BA",
			english_name: "Bosnia and Herzegovina",
			native_name: "Bosnia & Herzegovina",
		}),
		Object.freeze({
			iso_3166_1: "BB",
			english_name: "Barbados",
			native_name: "Barbados",
		}),
		Object.freeze({
			iso_3166_1: "BD",
			english_name: "Bangladesh",
			native_name: "Bangladesh",
		}),
		Object.freeze({
			iso_3166_1: "BE",
			english_name: "Belgium",
			native_name: "Belgium",
		}),
		Object.freeze({
			iso_3166_1: "BF",
			english_name: "Burkina Faso",
			native_name: "Burkina Faso",
		}),
		Object.freeze({
			iso_3166_1: "BG",
			english_name: "Bulgaria",
			native_name: "Bulgaria",
		}),
		Object.freeze({
			iso_3166_1: "BH",
			english_name: "Bahrain",
			native_name: "Bahrain",
		}),
		Object.freeze({
			iso_3166_1: "BI",
			english_name: "Burundi",
			native_name: "Burundi",
		}),
		Object.freeze({
			iso_3166_1: "BJ",
			english_name: "Benin",
			native_name: "Benin",
		}),
		Object.freeze({
			iso_3166_1: "BM",
			english_name: "Bermuda",
			native_name: "Bermuda",
		}),
		Object.freeze({
			iso_3166_1: "BN",
			english_name: "Brunei Darussalam",
			native_name: "Brunei",
		}),
		Object.freeze({
			iso_3166_1: "BO",
			english_name: "Bolivia",
			native_name: "Bolivia",
		}),
		Object.freeze({
			iso_3166_1: "BR",
			english_name: "Brazil",
			native_name: "Brazil",
		}),
		Object.freeze({
			iso_3166_1: "BS",
			english_name: "Bahamas",
			native_name: "Bahamas",
		}),
		Object.freeze({
			iso_3166_1: "BT",
			english_name: "Bhutan",
			native_name: "Bhutan",
		}),
		Object.freeze({
			iso_3166_1: "BU",
			english_name: "Burma",
			native_name: "Burma",
		}),
		Object.freeze({
			iso_3166_1: "BV",
			english_name: "Bouvet Island",
			native_name: "Bouvet Island",
		}),
		Object.freeze({
			iso_3166_1: "BW",
			english_name: "Botswana",
			native_name: "Botswana",
		}),
		Object.freeze({
			iso_3166_1: "BY",
			english_name: "Belarus",
			native_name: "Belarus",
		}),
		Object.freeze({
			iso_3166_1: "BZ",
			english_name: "Belize",
			native_name: "Belize",
		}),
		Object.freeze({
			iso_3166_1: "CA",
			english_name: "Canada",
			native_name: "Canada",
		}),
		Object.freeze({
			iso_3166_1: "CC",
			english_name: "Cocos  Islands",
			native_name: "Cocos (Keeling) Islands",
		}),
		Object.freeze({
			iso_3166_1: "CD",
			english_name: "Congo",
			native_name: "Democratic Republic of the Congo (Kinshasa)",
		}),
		Object.freeze({
			iso_3166_1: "CF",
			english_name: "Central African Republic",
			native_name: "Central African Republic",
		}),
		Object.freeze({
			iso_3166_1: "CG",
			english_name: "Congo",
			native_name: "Republic of the Congo (Brazzaville)",
		}),
		Object.freeze({
			iso_3166_1: "CH",
			english_name: "Switzerland",
			native_name: "Switzerland",
		}),
		Object.freeze({
			iso_3166_1: "CI",
			english_name: "Cote D'Ivoire",
			native_name: "Côte d’Ivoire",
		}),
		Object.freeze({
			iso_3166_1: "CK",
			english_name: "Cook Islands",
			native_name: "Cook Islands",
		}),
		Object.freeze({
			iso_3166_1: "CL",
			english_name: "Chile",
			native_name: "Chile",
		}),
		Object.freeze({
			iso_3166_1: "CM",
			english_name: "Cameroon",
			native_name: "Cameroon",
		}),
		Object.freeze({
			iso_3166_1: "CN",
			english_name: "China",
			native_name: "China",
		}),
		Object.freeze({
			iso_3166_1: "CO",
			english_name: "Colombia",
			native_name: "Colombia",
		}),
		Object.freeze({
			iso_3166_1: "CR",
			english_name: "Costa Rica",
			native_name: "Costa Rica",
		}),
		Object.freeze({
			iso_3166_1: "CS",
			english_name: "Serbia and Montenegro",
			native_name: "Serbia and Montenegro",
		}),
		Object.freeze({
			iso_3166_1: "CU",
			english_name: "Cuba",
			native_name: "Cuba",
		}),
		Object.freeze({
			iso_3166_1: "CV",
			english_name: "Cape Verde",
			native_name: "Cape Verde",
		}),
		Object.freeze({
			iso_3166_1: "CX",
			english_name: "Christmas Island",
			native_name: "Christmas Island",
		}),
		Object.freeze({
			iso_3166_1: "CY",
			english_name: "Cyprus",
			native_name: "Cyprus",
		}),
		Object.freeze({
			iso_3166_1: "CZ",
			english_name: "Czech Republic",
			native_name: "Czech Republic",
		}),
		Object.freeze({
			iso_3166_1: "DE",
			english_name: "Germany",
			native_name: "Germany",
		}),
		Object.freeze({
			iso_3166_1: "DJ",
			english_name: "Djibouti",
			native_name: "Djibouti",
		}),
		Object.freeze({
			iso_3166_1: "DK",
			english_name: "Denmark",
			native_name: "Denmark",
		}),
		Object.freeze({
			iso_3166_1: "DM",
			english_name: "Dominica",
			native_name: "Dominica",
		}),
		Object.freeze({
			iso_3166_1: "DO",
			english_name: "Dominican Republic",
			native_name: "Dominican Republic",
		}),
		Object.freeze({
			iso_3166_1: "DZ",
			english_name: "Algeria",
			native_name: "Algeria",
		}),
		Object.freeze({
			iso_3166_1: "EC",
			english_name: "Ecuador",
			native_name: "Ecuador",
		}),
		Object.freeze({
			iso_3166_1: "EE",
			english_name: "Estonia",
			native_name: "Estonia",
		}),
		Object.freeze({
			iso_3166_1: "EG",
			english_name: "Egypt",
			native_name: "Egypt",
		}),
		Object.freeze({
			iso_3166_1: "EH",
			english_name: "Western Sahara",
			native_name: "Western Sahara",
		}),
		Object.freeze({
			iso_3166_1: "ER",
			english_name: "Eritrea",
			native_name: "Eritrea",
		}),
		Object.freeze({
			iso_3166_1: "ES",
			english_name: "Spain",
			native_name: "Spain",
		}),
		Object.freeze({
			iso_3166_1: "ET",
			english_name: "Ethiopia",
			native_name: "Ethiopia",
		}),
		Object.freeze({
			iso_3166_1: "FI",
			english_name: "Finland",
			native_name: "Finland",
		}),
		Object.freeze({
			iso_3166_1: "FJ",
			english_name: "Fiji",
			native_name: "Fiji",
		}),
		Object.freeze({
			iso_3166_1: "FK",
			english_name: "Falkland Islands",
			native_name: "Falkland Islands",
		}),
		Object.freeze({
			iso_3166_1: "FM",
			english_name: "Micronesia",
			native_name: "Micronesia",
		}),
		Object.freeze({
			iso_3166_1: "FO",
			english_name: "Faeroe Islands",
			native_name: "Faroe Islands",
		}),
		Object.freeze({
			iso_3166_1: "FR",
			english_name: "France",
			native_name: "France",
		}),
		Object.freeze({
			iso_3166_1: "GA",
			english_name: "Gabon",
			native_name: "Gabon",
		}),
		Object.freeze({
			iso_3166_1: "GB",
			english_name: "United Kingdom",
			native_name: "United Kingdom",
		}),
		Object.freeze({
			iso_3166_1: "GD",
			english_name: "Grenada",
			native_name: "Grenada",
		}),
		Object.freeze({
			iso_3166_1: "GE",
			english_name: "Georgia",
			native_name: "Georgia",
		}),
		Object.freeze({
			iso_3166_1: "GF",
			english_name: "French Guiana",
			native_name: "French Guiana",
		}),
		Object.freeze({
			iso_3166_1: "GH",
			english_name: "Ghana",
			native_name: "Ghana",
		}),
		Object.freeze({
			iso_3166_1: "GI",
			english_name: "Gibraltar",
			native_name: "Gibraltar",
		}),
		Object.freeze({
			iso_3166_1: "GL",
			english_name: "Greenland",
			native_name: "Greenland",
		}),
		Object.freeze({
			iso_3166_1: "GM",
			english_name: "Gambia",
			native_name: "Gambia",
		}),
		Object.freeze({
			iso_3166_1: "GN",
			english_name: "Guinea",
			native_name: "Guinea",
		}),
		Object.freeze({
			iso_3166_1: "GP",
			english_name: "Guadaloupe",
			native_name: "Guadeloupe",
		}),
		Object.freeze({
			iso_3166_1: "GQ",
			english_name: "Equatorial Guinea",
			native_name: "Equatorial Guinea",
		}),
		Object.freeze({
			iso_3166_1: "GR",
			english_name: "Greece",
			native_name: "Greece",
		}),
		Object.freeze({
			iso_3166_1: "GS",
			english_name: "South Georgia and the South Sandwich Islands",
			native_name: "South Georgia & South Sandwich Islands",
		}),
		Object.freeze({
			iso_3166_1: "GT",
			english_name: "Guatemala",
			native_name: "Guatemala",
		}),
		Object.freeze({
			iso_3166_1: "GU",
			english_name: "Guam",
			native_name: "Guam",
		}),
		Object.freeze({
			iso_3166_1: "GW",
			english_name: "Guinea-Bissau",
			native_name: "Guinea-Bissau",
		}),
		Object.freeze({
			iso_3166_1: "GY",
			english_name: "Guyana",
			native_name: "Guyana",
		}),
		Object.freeze({
			iso_3166_1: "HK",
			english_name: "Hong Kong",
			native_name: "Hong Kong SAR China",
		}),
		Object.freeze({
			iso_3166_1: "HM",
			english_name: "Heard and McDonald Islands",
			native_name: "Heard & McDonald Islands",
		}),
		Object.freeze({
			iso_3166_1: "HN",
			english_name: "Honduras",
			native_name: "Honduras",
		}),
		Object.freeze({
			iso_3166_1: "HR",
			english_name: "Croatia",
			native_name: "Croatia",
		}),
		Object.freeze({
			iso_3166_1: "HT",
			english_name: "Haiti",
			native_name: "Haiti",
		}),
		Object.freeze({
			iso_3166_1: "HU",
			english_name: "Hungary",
			native_name: "Hungary",
		}),
		Object.freeze({
			iso_3166_1: "ID",
			english_name: "Indonesia",
			native_name: "Indonesia",
		}),
		Object.freeze({
			iso_3166_1: "IE",
			english_name: "Ireland",
			native_name: "Ireland",
		}),
		Object.freeze({
			iso_3166_1: "IL",
			english_name: "Israel",
			native_name: "Israel",
		}),
		Object.freeze({
			iso_3166_1: "IN",
			english_name: "India",
			native_name: "India",
		}),
		Object.freeze({
			iso_3166_1: "IO",
			english_name: "British Indian Ocean Territory",
			native_name: "British Indian Ocean Territory",
		}),
		Object.freeze({
			iso_3166_1: "IQ",
			english_name: "Iraq",
			native_name: "Iraq",
		}),
		Object.freeze({
			iso_3166_1: "IR",
			english_name: "Iran",
			native_name: "Iran",
		}),
		Object.freeze({
			iso_3166_1: "IS",
			english_name: "Iceland",
			native_name: "Iceland",
		}),
		Object.freeze({
			iso_3166_1: "IT",
			english_name: "Italy",
			native_name: "Italy",
		}),
		Object.freeze({
			iso_3166_1: "JM",
			english_name: "Jamaica",
			native_name: "Jamaica",
		}),
		Object.freeze({
			iso_3166_1: "JO",
			english_name: "Jordan",
			native_name: "Jordan",
		}),
		Object.freeze({
			iso_3166_1: "JP",
			english_name: "Japan",
			native_name: "Japan",
		}),
		Object.freeze({
			iso_3166_1: "KE",
			english_name: "Kenya",
			native_name: "Kenya",
		}),
		Object.freeze({
			iso_3166_1: "KG",
			english_name: "Kyrgyz Republic",
			native_name: "Kyrgyzstan",
		}),
		Object.freeze({
			iso_3166_1: "KH",
			english_name: "Cambodia",
			native_name: "Cambodia",
		}),
		Object.freeze({
			iso_3166_1: "KI",
			english_name: "Kiribati",
			native_name: "Kiribati",
		}),
		Object.freeze({
			iso_3166_1: "KM",
			english_name: "Comoros",
			native_name: "Comoros",
		}),
		Object.freeze({
			iso_3166_1: "KN",
			english_name: "St. Kitts and Nevis",
			native_name: "St. Kitts & Nevis",
		}),
		Object.freeze({
			iso_3166_1: "KP",
			english_name: "North Korea",
			native_name: "North Korea",
		}),
		Object.freeze({
			iso_3166_1: "KR",
			english_name: "South Korea",
			native_name: "South Korea",
		}),
		Object.freeze({
			iso_3166_1: "KW",
			english_name: "Kuwait",
			native_name: "Kuwait",
		}),
		Object.freeze({
			iso_3166_1: "KY",
			english_name: "Cayman Islands",
			native_name: "Cayman Islands",
		}),
		Object.freeze({
			iso_3166_1: "KZ",
			english_name: "Kazakhstan",
			native_name: "Kazakhstan",
		}),
		Object.freeze({
			iso_3166_1: "LA",
			english_name: "Lao People's Democratic Republic",
			native_name: "Laos",
		}),
		Object.freeze({
			iso_3166_1: "LB",
			english_name: "Lebanon",
			native_name: "Lebanon",
		}),
		Object.freeze({
			iso_3166_1: "LC",
			english_name: "St. Lucia",
			native_name: "St. Lucia",
		}),
		Object.freeze({
			iso_3166_1: "LI",
			english_name: "Liechtenstein",
			native_name: "Liechtenstein",
		}),
		Object.freeze({
			iso_3166_1: "LK",
			english_name: "Sri Lanka",
			native_name: "Sri Lanka",
		}),
		Object.freeze({
			iso_3166_1: "LR",
			english_name: "Liberia",
			native_name: "Liberia",
		}),
		Object.freeze({
			iso_3166_1: "LS",
			english_name: "Lesotho",
			native_name: "Lesotho",
		}),
		Object.freeze({
			iso_3166_1: "LT",
			english_name: "Lithuania",
			native_name: "Lithuania",
		}),
		Object.freeze({
			iso_3166_1: "LU",
			english_name: "Luxembourg",
			native_name: "Luxembourg",
		}),
		Object.freeze({
			iso_3166_1: "LV",
			english_name: "Latvia",
			native_name: "Latvia",
		}),
		Object.freeze({
			iso_3166_1: "LY",
			english_name: "Libyan Arab Jamahiriya",
			native_name: "Libya",
		}),
		Object.freeze({
			iso_3166_1: "MA",
			english_name: "Morocco",
			native_name: "Morocco",
		}),
		Object.freeze({
			iso_3166_1: "MC",
			english_name: "Monaco",
			native_name: "Monaco",
		}),
		Object.freeze({
			iso_3166_1: "MD",
			english_name: "Moldova",
			native_name: "Moldova",
		}),
		Object.freeze({
			iso_3166_1: "ME",
			english_name: "Montenegro",
			native_name: "Montenegro",
		}),
		Object.freeze({
			iso_3166_1: "MG",
			english_name: "Madagascar",
			native_name: "Madagascar",
		}),
		Object.freeze({
			iso_3166_1: "MH",
			english_name: "Marshall Islands",
			native_name: "Marshall Islands",
		}),
		Object.freeze({
			iso_3166_1: "MK",
			english_name: "Macedonia",
			native_name: "Macedonia",
		}),
		Object.freeze({
			iso_3166_1: "ML",
			english_name: "Mali",
			native_name: "Mali",
		}),
		Object.freeze({
			iso_3166_1: "MM",
			english_name: "Myanmar",
			native_name: "Myanmar (Burma)",
		}),
		Object.freeze({
			iso_3166_1: "MN",
			english_name: "Mongolia",
			native_name: "Mongolia",
		}),
		Object.freeze({
			iso_3166_1: "MO",
			english_name: "Macao",
			native_name: "Macau SAR China",
		}),
		Object.freeze({
			iso_3166_1: "MP",
			english_name: "Northern Mariana Islands",
			native_name: "Northern Mariana Islands",
		}),
		Object.freeze({
			iso_3166_1: "MQ",
			english_name: "Martinique",
			native_name: "Martinique",
		}),
		Object.freeze({
			iso_3166_1: "MR",
			english_name: "Mauritania",
			native_name: "Mauritania",
		}),
		Object.freeze({
			iso_3166_1: "MS",
			english_name: "Montserrat",
			native_name: "Montserrat",
		}),
		Object.freeze({
			iso_3166_1: "MT",
			english_name: "Malta",
			native_name: "Malta",
		}),
		Object.freeze({
			iso_3166_1: "MU",
			english_name: "Mauritius",
			native_name: "Mauritius",
		}),
		Object.freeze({
			iso_3166_1: "MV",
			english_name: "Maldives",
			native_name: "Maldives",
		}),
		Object.freeze({
			iso_3166_1: "MW",
			english_name: "Malawi",
			native_name: "Malawi",
		}),
		Object.freeze({
			iso_3166_1: "MX",
			english_name: "Mexico",
			native_name: "Mexico",
		}),
		Object.freeze({
			iso_3166_1: "MY",
			english_name: "Malaysia",
			native_name: "Malaysia",
		}),
		Object.freeze({
			iso_3166_1: "MZ",
			english_name: "Mozambique",
			native_name: "Mozambique",
		}),
		Object.freeze({
			iso_3166_1: "NA",
			english_name: "Namibia",
			native_name: "Namibia",
		}),
		Object.freeze({
			iso_3166_1: "NC",
			english_name: "New Caledonia",
			native_name: "New Caledonia",
		}),
		Object.freeze({
			iso_3166_1: "NE",
			english_name: "Niger",
			native_name: "Niger",
		}),
		Object.freeze({
			iso_3166_1: "NF",
			english_name: "Norfolk Island",
			native_name: "Norfolk Island",
		}),
		Object.freeze({
			iso_3166_1: "NG",
			english_name: "Nigeria",
			native_name: "Nigeria",
		}),
		Object.freeze({
			iso_3166_1: "NI",
			english_name: "Nicaragua",
			native_name: "Nicaragua",
		}),
		Object.freeze({
			iso_3166_1: "NL",
			english_name: "Netherlands",
			native_name: "Netherlands",
		}),
		Object.freeze({
			iso_3166_1: "NO",
			english_name: "Norway",
			native_name: "Norway",
		}),
		Object.freeze({
			iso_3166_1: "NP",
			english_name: "Nepal",
			native_name: "Nepal",
		}),
		Object.freeze({
			iso_3166_1: "NR",
			english_name: "Nauru",
			native_name: "Nauru",
		}),
		Object.freeze({
			iso_3166_1: "NU",
			english_name: "Niue",
			native_name: "Niue",
		}),
		Object.freeze({
			iso_3166_1: "NZ",
			english_name: "New Zealand",
			native_name: "New Zealand",
		}),
		Object.freeze({
			iso_3166_1: "OM",
			english_name: "Oman",
			native_name: "Oman",
		}),
		Object.freeze({
			iso_3166_1: "PA",
			english_name: "Panama",
			native_name: "Panama",
		}),
		Object.freeze({
			iso_3166_1: "PE",
			english_name: "Peru",
			native_name: "Peru",
		}),
		Object.freeze({
			iso_3166_1: "PF",
			english_name: "French Polynesia",
			native_name: "French Polynesia",
		}),
		Object.freeze({
			iso_3166_1: "PG",
			english_name: "Papua New Guinea",
			native_name: "Papua New Guinea",
		}),
		Object.freeze({
			iso_3166_1: "PH",
			english_name: "Philippines",
			native_name: "Philippines",
		}),
		Object.freeze({
			iso_3166_1: "PK",
			english_name: "Pakistan",
			native_name: "Pakistan",
		}),
		Object.freeze({
			iso_3166_1: "PL",
			english_name: "Poland",
			native_name: "Poland",
		}),
		Object.freeze({
			iso_3166_1: "PM",
			english_name: "St. Pierre and Miquelon",
			native_name: "St. Pierre & Miquelon",
		}),
		Object.freeze({
			iso_3166_1: "PN",
			english_name: "Pitcairn Island",
			native_name: "Pitcairn Islands",
		}),
		Object.freeze({
			iso_3166_1: "PR",
			english_name: "Puerto Rico",
			native_name: "Puerto Rico",
		}),
		Object.freeze({
			iso_3166_1: "PS",
			english_name: "Palestinian Territory",
			native_name: "Palestinian Territories",
		}),
		Object.freeze({
			iso_3166_1: "PT",
			english_name: "Portugal",
			native_name: "Portugal",
		}),
		Object.freeze({
			iso_3166_1: "PW",
			english_name: "Palau",
			native_name: "Palau",
		}),
		Object.freeze({
			iso_3166_1: "PY",
			english_name: "Paraguay",
			native_name: "Paraguay",
		}),
		Object.freeze({
			iso_3166_1: "QA",
			english_name: "Qatar",
			native_name: "Qatar",
		}),
		Object.freeze({
			iso_3166_1: "RE",
			english_name: "Reunion",
			native_name: "Réunion",
		}),
		Object.freeze({
			iso_3166_1: "RO",
			english_name: "Romania",
			native_name: "Romania",
		}),
		Object.freeze({
			iso_3166_1: "RS",
			english_name: "Serbia",
			native_name: "Serbia",
		}),
		Object.freeze({
			iso_3166_1: "RU",
			english_name: "Russia",
			native_name: "Russia",
		}),
		Object.freeze({
			iso_3166_1: "RW",
			english_name: "Rwanda",
			native_name: "Rwanda",
		}),
		Object.freeze({
			iso_3166_1: "SA",
			english_name: "Saudi Arabia",
			native_name: "Saudi Arabia",
		}),
		Object.freeze({
			iso_3166_1: "SB",
			english_name: "Solomon Islands",
			native_name: "Solomon Islands",
		}),
		Object.freeze({
			iso_3166_1: "SC",
			english_name: "Seychelles",
			native_name: "Seychelles",
		}),
		Object.freeze({
			iso_3166_1: "SD",
			english_name: "Sudan",
			native_name: "Sudan",
		}),
		Object.freeze({
			iso_3166_1: "SE",
			english_name: "Sweden",
			native_name: "Sweden",
		}),
		Object.freeze({
			iso_3166_1: "SG",
			english_name: "Singapore",
			native_name: "Singapore",
		}),
		Object.freeze({
			iso_3166_1: "SH",
			english_name: "St. Helena",
			native_name: "St. Helena",
		}),
		Object.freeze({
			iso_3166_1: "SI",
			english_name: "Slovenia",
			native_name: "Slovenia",
		}),
		Object.freeze({
			iso_3166_1: "SJ",
			english_name: "Svalbard & Jan Mayen Islands",
			native_name: "Svalbard & Jan Mayen",
		}),
		Object.freeze({
			iso_3166_1: "SK",
			english_name: "Slovakia",
			native_name: "Slovakia",
		}),
		Object.freeze({
			iso_3166_1: "SL",
			english_name: "Sierra Leone",
			native_name: "Sierra Leone",
		}),
		Object.freeze({
			iso_3166_1: "SM",
			english_name: "San Marino",
			native_name: "San Marino",
		}),
		Object.freeze({
			iso_3166_1: "SN",
			english_name: "Senegal",
			native_name: "Senegal",
		}),
		Object.freeze({
			iso_3166_1: "SO",
			english_name: "Somalia",
			native_name: "Somalia",
		}),
		Object.freeze({
			iso_3166_1: "SR",
			english_name: "Suriname",
			native_name: "Suriname",
		}),
		Object.freeze({
			iso_3166_1: "SS",
			english_name: "South Sudan",
			native_name: "South Sudan",
		}),
		Object.freeze({
			iso_3166_1: "ST",
			english_name: "Sao Tome and Principe",
			native_name: "São Tomé & Príncipe",
		}),
		Object.freeze({
			iso_3166_1: "SU",
			english_name: "Soviet Union",
			native_name: "Soviet Union",
		}),
		Object.freeze({
			iso_3166_1: "SV",
			english_name: "El Salvador",
			native_name: "El Salvador",
		}),
		Object.freeze({
			iso_3166_1: "SY",
			english_name: "Syrian Arab Republic",
			native_name: "Syria",
		}),
		Object.freeze({
			iso_3166_1: "SZ",
			english_name: "Swaziland",
			native_name: "Eswatini (Swaziland)",
		}),
		Object.freeze({
			iso_3166_1: "TC",
			english_name: "Turks and Caicos Islands",
			native_name: "Turks & Caicos Islands",
		}),
		Object.freeze({
			iso_3166_1: "TD",
			english_name: "Chad",
			native_name: "Chad",
		}),
		Object.freeze({
			iso_3166_1: "TF",
			english_name: "French Southern Territories",
			native_name: "French Southern Territories",
		}),
		Object.freeze({
			iso_3166_1: "TG",
			english_name: "Togo",
			native_name: "Togo",
		}),
		Object.freeze({
			iso_3166_1: "TH",
			english_name: "Thailand",
			native_name: "Thailand",
		}),
		Object.freeze({
			iso_3166_1: "TJ",
			english_name: "Tajikistan",
			native_name: "Tajikistan",
		}),
		Object.freeze({
			iso_3166_1: "TK",
			english_name: "Tokelau",
			native_name: "Tokelau",
		}),
		Object.freeze({
			iso_3166_1: "TL",
			english_name: "Timor-Leste",
			native_name: "Timor-Leste",
		}),
		Object.freeze({
			iso_3166_1: "TM",
			english_name: "Turkmenistan",
			native_name: "Turkmenistan",
		}),
		Object.freeze({
			iso_3166_1: "TN",
			english_name: "Tunisia",
			native_name: "Tunisia",
		}),
		Object.freeze({
			iso_3166_1: "TO",
			english_name: "Tonga",
			native_name: "Tonga",
		}),
		Object.freeze({
			iso_3166_1: "TP",
			english_name: "East Timor",
			native_name: "East Timor",
		}),
		Object.freeze({
			iso_3166_1: "TR",
			english_name: "Turkey",
			native_name: "Turkey",
		}),
		Object.freeze({
			iso_3166_1: "TT",
			english_name: "Trinidad and Tobago",
			native_name: "Trinidad & Tobago",
		}),
		Object.freeze({
			iso_3166_1: "TV",
			english_name: "Tuvalu",
			native_name: "Tuvalu",
		}),
		Object.freeze({
			iso_3166_1: "TW",
			english_name: "Taiwan",
			native_name: "Taiwan",
		}),
		Object.freeze({
			iso_3166_1: "TZ",
			english_name: "Tanzania",
			native_name: "Tanzania",
		}),
		Object.freeze({
			iso_3166_1: "UA",
			english_name: "Ukraine",
			native_name: "Ukraine",
		}),
		Object.freeze({
			iso_3166_1: "UG",
			english_name: "Uganda",
			native_name: "Uganda",
		}),
		Object.freeze({
			iso_3166_1: "UM",
			english_name: "United States Minor Outlying Islands",
			native_name: "U.S. Outlying Islands",
		}),
		Object.freeze({
			iso_3166_1: "US",
			english_name: "United States of America",
			native_name: "United States",
		}),
		Object.freeze({
			iso_3166_1: "UY",
			english_name: "Uruguay",
			native_name: "Uruguay",
		}),
		Object.freeze({
			iso_3166_1: "UZ",
			english_name: "Uzbekistan",
			native_name: "Uzbekistan",
		}),
		Object.freeze({
			iso_3166_1: "VA",
			english_name: "Holy See",
			native_name: "Vatican City",
		}),
		Object.freeze({
			iso_3166_1: "VC",
			english_name: "St. Vincent and the Grenadines",
			native_name: "St. Vincent & Grenadines",
		}),
		Object.freeze({
			iso_3166_1: "VE",
			english_name: "Venezuela",
			native_name: "Venezuela",
		}),
		Object.freeze({
			iso_3166_1: "VG",
			english_name: "British Virgin Islands",
			native_name: "British Virgin Islands",
		}),
		Object.freeze({
			iso_3166_1: "VI",
			english_name: "US Virgin Islands",
			native_name: "U.S. Virgin Islands",
		}),
		Object.freeze({
			iso_3166_1: "VN",
			english_name: "Vietnam",
			native_name: "Vietnam",
		}),
		Object.freeze({
			iso_3166_1: "VU",
			english_name: "Vanuatu",
			native_name: "Vanuatu",
		}),
		Object.freeze({
			iso_3166_1: "WF",
			english_name: "Wallis and Futuna Islands",
			native_name: "Wallis & Futuna",
		}),
		Object.freeze({
			iso_3166_1: "WS",
			english_name: "Samoa",
			native_name: "Samoa",
		}),
		Object.freeze({
			iso_3166_1: "XC",
			english_name: "Czechoslovakia",
			native_name: "Czechoslovakia",
		}),
		Object.freeze({
			iso_3166_1: "XG",
			english_name: "East Germany",
			native_name: "East Germany",
		}),
		Object.freeze({
			iso_3166_1: "XI",
			english_name: "Northern Ireland",
			native_name: "Northern Ireland",
		}),
		Object.freeze({
			iso_3166_1: "XK",
			english_name: "Kosovo",
			native_name: "Kosovo",
		}),
		Object.freeze({
			iso_3166_1: "YE",
			english_name: "Yemen",
			native_name: "Yemen",
		}),
		Object.freeze({
			iso_3166_1: "YT",
			english_name: "Mayotte",
			native_name: "Mayotte",
		}),
		Object.freeze({
			iso_3166_1: "YU",
			english_name: "Yugoslavia",
			native_name: "Yugoslavia",
		}),
		Object.freeze({
			iso_3166_1: "ZA",
			english_name: "South Africa",
			native_name: "South Africa",
		}),
		Object.freeze({
			iso_3166_1: "ZM",
			english_name: "Zambia",
			native_name: "Zambia",
		}),
		Object.freeze({
			iso_3166_1: "ZR",
			english_name: "Zaire",
			native_name: "Zaire",
		}),
		Object.freeze({
			iso_3166_1: "ZW",
			english_name: "Zimbabwe",
			native_name: "Zimbabwe",
		}),
	]),
	jobs: Object.freeze([
		Object.freeze({
			department: "Crew",
			jobs: [
				"Special Effects",
				"Post Production Supervisor",
				"Second Unit",
				"Choreographer",
				"Stunts",
				"Stunt Coordinator",
				"Special Effects Coordinator",
				"Supervising Technical Director",
				"Supervising Animator",
				"Production Artist",
				"Sequence Lead",
				"Second Film Editor",
				"Temp Music Editor",
				"Temp Sound Editor",
				"Sequence Supervisor",
				"Software Team Lead",
				"Software Engineer",
				"Documentation & Support",
				"Machinist",
				"Photoscience Manager",
				"Department Administrator",
				"Schedule Coordinator",
				"Supervisor of Production Resources",
				"Production Office Assistant",
				"Information Systems Manager",
				"Systems Administrators & Support",
				"Projection",
				"Post Production Assistant",
				"Sound Design Assistant",
				"Mix Technician",
				"Motion Actor",
				"Sets & Props Supervisor",
				"Compositor",
				"Tattooist",
				"Sets & Props Artist",
				"Motion Capture Artist",
				"Sequence Artist",
				"Mixing Engineer",
				"Special Sound Effects",
				"Post-Production Manager",
				"Dialect Coach",
				"Picture Car Coordinator",
				"Cableman",
				"Set Production Assistant",
				"Video Assist Operator",
				"Unit Publicist",
				"Set Medic",
				"Stand In",
				"Transportation Coordinator",
				"Transportation Captain",
				"Post Production Consulting",
				"Production Intern",
				"Utility Stunts",
				"Actor's Assistant",
				"Set Production Intern",
				"Production Controller",
				"Studio Teacher",
				"Chef",
				"Craft Service",
				"Scenic Artist",
				"Propmaker",
				"Prop Maker",
				"Transportation Co-Captain",
				"Driver",
				"Security",
				"Second Unit Cinematographer",
				"Loader",
				"Manager of Operations",
				"Quality Control Supervisor",
				"Legal Services",
				"Public Relations",
				"Score Engineer",
				"Translator",
				"Title Graphics",
				"Telecine Colorist",
				"Animatronic and Prosthetic Effects",
				"Martial Arts Choreographer",
				"Cinematography",
				"Steadycam",
				"Executive Visual Effects Producer",
				"Visual Effects Design Consultant",
				"Digital Effects Supervisor",
				"Digital Producer",
				"CG Supervisor",
				"Visual Effects Art Director",
				"Visual Effects Editor",
				"Executive in Charge of Finance",
				"Associate Choreographer",
				"Makeup Effects",
				"Treatment",
				"Dramaturgy",
				"Lighting Camera",
				"Technical Supervisor",
				"CGI Supervisor",
				"Creative Consultant",
				"Script",
				"Executive Music Producer",
				"Commissioning Editor",
				"Additional Writing",
				"Additional Music",
				"Poem",
				"Thanks",
				"Creator",
				"Additional Dialogue",
				"Video Game",
				"Graphic Novel Illustrator",
				"Other",
				"Series Writer",
				"Radio Play",
				"Armorer",
				"Carpenter",
				"Editorial Staff",
				"Aerial Coordinator",
				"Animal Coordinator",
				"Animal Wrangler",
				"Animatronics Designer",
				"Drone Operator",
				"In Memory Of",
				"Pilot",
				"Presenter",
				"Animatronics Supervisor",
				"Armory Coordinator",
				"Digital Effects Producer",
				"Fight Choreographer",
				"Marine Coordinator",
				"Pyrotechnician",
				"Techno Crane Operator",
				"Acting Double",
				"Additional Script Supervisor",
				"Administrative Assistant",
				"Assistant Chef",
				"Assistant Craft Service",
				"Assistant Picture Car Coordinator",
				"Assistant Script",
				"Assistant Vehicles Coordinator",
				"Base Camp Operator",
				"Captain Driver",
				"Cast Driver",
				"Catering",
				"Catering Head Chef",
				"Chaperone",
				"Chaperone Tutor",
				"Charge Scenic Artist",
				"Child Wrangler",
				"Clearances Coordinator",
				"Clearances Consultant",
				"Dialogue Coach",
				"Digital Supervisor",
				"Director of Communications",
				"File Footage",
				"Film Processor",
				"Floor Runner",
				"Generator Operator",
				"Head Driver",
				"Health and Safety",
				"Interactive Manager",
				"Intern",
				"Key Scenic Artist",
				"Key Special Effects",
				"Logistics Coordinator",
				"Marine Pilot",
				"Master at Arms",
				"Medical Consultant",
				"Military Consultant",
				"Playback Coordinator",
				"Police Consultant",
				"Post Production Scripts",
				"Receptionist",
				"Scientific Consultant",
				"Security Coordinator",
				"Series Publicist",
				"Set Runner",
				"Special Effects Assistant",
				"Special Effects Best Boy",
				"Special Effects Manager",
				"Special Effects Technician",
				"Specialized Driver",
				"Sponsorship Coordinator",
				"Sponsorship Director",
				"Stunt Double",
				"Stunt Driver",
				"Supervising Armorer",
				"Technical Advisor",
				"Transcriptions",
				"Unit Medic",
				"Vehicles Coordinator",
				"Vehicles Wrangler",
				"Weapons Master",
				"Weapons Wrangler",
			],
		}),
		Object.freeze({
			department: "Directing",
			jobs: [
				"Director",
				"Script Supervisor",
				"Other",
				"Layout",
				"Script Coordinator",
				"Special Guest Director",
				"Assistant Director",
				"Co-Director",
				"Continuity",
				"First Assistant Director",
				"Second Assistant Director",
				"Third Assistant Director",
				"Action Director",
				"Additional Second Assistant Director",
				"Additional Third Assistant Director",
				"Assistant Director Trainee",
				"Crowd Assistant Director",
				"Field Director",
				"First Assistant Director (Prep)",
				"First Assistant Director Trainee",
				"Insert Unit Director",
				"Insert Unit First Assistant Director",
				"Second Assistant Director Trainee",
				"Second Second Assistant Director",
				"Second Unit Director",
				"Second Unit First Assistant Director",
				"Series Director",
				"Stage Director",
			],
		}),
		Object.freeze({
			department: "Actors",
			jobs: [ "Actor", "Stunt Double", "Voice", "Cameo", "Special Guest" ],
		}),
		Object.freeze({
			department: "Art",
			jobs: [
				"Production Design",
				"Art Direction",
				"Set Decoration",
				"Set Designer",
				"Conceptual Design",
				"Interior Designer",
				"Settings",
				"Assistant Art Director",
				"Art Department Coordinator",
				"Assistant Property Master",
				"Other",
				"Art Department Manager",
				"Sculptor",
				"Art Department Assistant",
				"Background Designer",
				"Co-Art Director",
				"Set Decoration Buyer",
				"Production Illustrator",
				"Standby Painter",
				"Property Master",
				"Location Scout",
				"Supervising Art Director",
				"Leadman",
				"Greensman",
				"Gun Wrangler",
				"Construction Coordinator",
				"Construction Foreman",
				"Lead Painter",
				"Sign Painter",
				"Painter",
				"Assistant Set Dresser",
				"Conceptual Illustrator",
				"Draughtsman",
				"Lead Set Dresser",
				"Prop Designer",
				"Set Decorating Coordinator",
				"Set Dresser",
				"Storyboard Designer",
				"Title Designer",
				"Additional Construction",
				"Additional Construction Grip",
				"Additional Key Construction Grip",
				"Additional Set Dresser",
				"Additional Storyboarding",
				"Art Department Trainee",
				"Art Designer",
				"Art Direction Intern",
				"Assistant Decorator",
				"Assistant Director of Photography",
				"Assistant Production Design",
				"Assistant Set Decoration Buyer",
				"Assistant Set Decoration",
				"Assistant Set Designer",
				"Assistant Set Propsman",
				"Concept Artist",
				"Construction Buyer",
				"Construction Grip",
				"Construction Manager",
				"Creative Director",
				"Daily Grip",
				"Decorator",
				"Digital Storyboarding",
				"Dressing Prop",
				"First Assistant Art Direction",
				"First Assistant Property Master",
				"Graphic Designer",
				"Head Carpenter",
				"Head Decorator",
				"Head Designer",
				"Head Greensman",
				"Helping Hand",
				"Key Carpenter",
				"Key Construction Grip",
				"Key Set Painter",
				"Main Title Designer",
				"On Set Computer Graphics",
				"On Set Key Props",
				"On Set Props",
				"Opening Title Sequence",
				"Original Series Design",
				"Paint Coordinator",
				"Petty Cash Buyer",
				"Property Builder",
				"Property Buyer",
				"Property Graphic Designer",
				"Props",
				"Runner Art Department",
				"Second Assistant Art Director",
				"Set Dressing Buyer",
				"Set Painter",
				"Set Propsman",
				"Set Supervisor",
				"Set Buyer",
				"Shop Electric",
				"Special Props",
				"Standby Art Director",
				"Standby Carpenter",
				"Standby Property Master",
				"Storyboard Artist",
				"Storyboard Assistant",
				"Supervising Carpenter",
				"Swing",
				"Textile Artist",
				"Title Illustration",
				"Web Designer",
			],
		}),
		Object.freeze({
			department: "Visual Effects",
			jobs: [
				"Animation",
				"Visual Effects",
				"Chief Technician / Stop-Motion Expert",
				"Creature Design",
				"Shading",
				"Modeling",
				"CG Painter",
				"Visual Development",
				"Animation Manager",
				"Animation Director",
				"Fix Animator",
				"Animation Department Coordinator",
				"Animation Fix Coordinator",
				"Animation Production Assistant",
				"Visual Effects Supervisor",
				"Mechanical & Creature Designer",
				"Battle Motion Coordinator",
				"Animation Supervisor",
				"VFX Supervisor",
				"Cloth Setup",
				"VFX Artist",
				"CG Engineer",
				"24 Frame Playback",
				"Imaging Science",
				"I/O Supervisor",
				"Visual Effects Producer",
				"VFX Production Coordinator",
				"I/O Manager",
				"Additional Effects Development",
				"Color Designer",
				"Simulation & Effects Production Assistant",
				"Simulation & Effects Artist",
				"Pyrotechnic Supervisor",
				"Special Effects Supervisor",
				"3D Supervisor",
				"3D Director",
				"Digital Compositor",
				"Visual Effects Coordinator",
				"VFX Editor",
				"2D Artist",
				"2D Supervisor",
				"3D Animator",
				"3D Artist",
				"3D Coordinator",
				"3D Generalist",
				"3D Modeller",
				"3D Sequence Supervisor",
				"3D Tracking Layout",
				"CG Animator",
				"CGI Director",
				"Character Designer",
				"Character Modelling Supervisor",
				"Creature Technical Director",
				"Digital Effects Producer",
				"Key Animation",
				"Lead Animator",
				"Lead Character Designer",
				"Matchmove Supervisor",
				"Mechanical Designer",
				"Opening/Ending Animation",
				"Pre-Visualization Supervisor",
				"Roto Supervisor",
				"Stereoscopic Coordinator",
				"VFX Director of Photography",
				"VFX Lighting Artist",
				"Visual Effects Designer",
				"Visual Effects Technical Director",
				"2D Sequence Supervisor",
				"Additional Visual Effects",
				"Animation Coordinator",
				"Animation Technical Director",
				"CG Artist",
				"Compositing Artist",
				"Compositing Lead",
				"Compositing Supervisor",
				"Creature Effects Technical Director",
				"Cyber Scanning Supervisor",
				"Digital Film Recording",
				"Director of Previsualization",
				"Effects Supervisor",
				"Generalist",
				"Head of Animation",
				"Layout Supervisor",
				"Lead Creature Designer",
				"Matte Painter",
				"Modelling Supervisor",
				"Pipeline Technical Director",
				"Photo Retouching",
				"Pre-Visualization Coordinator",
				"Rotoscoping Artist",
				"Senior Animator",
				"Senior Generalist",
				"Senior Modeller",
				"Senior Visual Effects Supervisor",
				"Smoke Artist",
				"Stereoscopic Supervisor",
				"Stereoscopic Technical Director",
				"Supervising Animation Director",
				"Visual Effects Assistant Editor",
				"Visual Effects Camera",
				"Visual Effects Compositor",
				"Visual Effects Director",
				"Visual Effects Lineup",
				"Visual Effects Production Assistant",
				"Visual Effects Production Manager",
			],
		}),
		Object.freeze({
			department: "Writing",
			jobs: [
				"Screenplay",
				"Author",
				"Novel",
				"Characters",
				"Theatre Play",
				"Adaptation",
				"Dialogue",
				"Writer",
				"Other",
				"Storyboard",
				"Original Story",
				"Scenario Writer",
				"Screenstory",
				"Musical",
				"Idea",
				"Story",
				"Creative Producer",
				"Teleplay",
				"Opera",
				"Co-Writer",
				"Book",
				"Comic Book",
				"Short Story",
				"Series Composition",
				"Script Editor",
				"Script Consultant",
				"Story Editor",
				"Executive Story Editor",
				"Graphic Novel",
				"Head of Story",
				"Junior Story Editor",
				"Lyricist",
				"Original Concept",
				"Original Film Writer",
				"Original Series Creator",
				"Senior Story Editor",
				"Staff Writer",
				"Story Artist",
				"Story Consultant",
				"Story Coordinator",
				"Story Developer",
				"Story Manager",
				"Story Supervisor",
				"Writers' Assistant",
				"Writers' Production",
			],
		}),
		Object.freeze({
			department: "Costume & Make-Up",
			jobs: [
				"Costume Design",
				"Makeup Artist",
				"Hairstylist",
				"Set Dressing Artist",
				"Set Dressing Supervisor",
				"Set Dressing Manager",
				"Set Dressing Production Assistant",
				"Facial Setup Artist",
				"Hair Setup",
				"Costume Supervisor",
				"Set Costumer",
				"Makeup Department Head",
				"Wigmaker",
				"Shoe Design",
				"Other",
				"Co-Costume Designer",
				"Hair Department Head",
				"Hair Designer",
				"Makeup Designer",
				"Assistant Costume Designer",
				"Prosthetic Supervisor",
				"Seamstress",
				"Key Hair Stylist",
				"Ager/Dyer",
				"Costume Consultant",
				"Costume Coordinator",
				"Costume Illustrator",
				"Hair Supervisor",
				"Key Costumer",
				"Key Makeup Artist",
				"Key Set Costumer",
				"Makeup Effects Designer",
				"Makeup Supervisor",
				"Prosthetic Designer",
				"Prosthetic Makeup Artist",
				"Tailor",
				"Tattoo Designer",
				"Wardrobe Supervisor",
				"Wig Designer",
				"Additional Hairstylist",
				"Additional Wardrobe Assistant",
				"Assistant Hairstylist",
				"Assistant Hairdresser",
				"Assistant Makeup Artist",
				"Contact Lens Designer",
				"Contact Lens Painter",
				"Contact Lens Technician",
				"Costume Assistant",
				"Costume Mistress",
				"Costume Designer",
				"Costume Set Supervisor",
				"Costume Standby",
				"Costumer",
				"Daily Makeup & Hair",
				"Daily Wardrobe",
				"Dresser",
				"Extras Dresser",
				"Extras Makeup Artist",
				"First Assistant Hairstylist",
				"First Assistant Makeup Artist",
				"Hair Assistant",
				"Hairdresser",
				"Key Dresser",
				"Key Hairdresser",
				"Lead Costumer",
				"Makeup & Hair",
				"Makeup & Hair Assistant",
				"Makeup Trainee",
				"On Set Dresser",
				"Principal Costumer",
				"Prosthetics",
				"Prosthetics Painter",
				"Prosthetics Sculptor",
				"Special Effects Key Makeup Artist",
				"Special Effects Makeup Artist",
				"Truck Costumer",
				"Truck Supervisor",
				"Wardrobe Assistant",
				"Wardrobe Coordinator",
				"Wardrobe Designer",
				"Wardrobe Intern",
				"Wardrobe Master",
				"Wardrobe Specialized Technician",
			],
		}),
		Object.freeze({
			department: "Lighting",
			jobs: [
				"Lighting Technician",
				"Best Boy Electric",
				"Gaffer",
				"Rigging Gaffer",
				"Lighting Supervisor",
				"Lighting Manager",
				"Directing Lighting Artist",
				"Master Lighting Artist",
				"Lighting Artist",
				"Lighting Coordinator",
				"Lighting Production Assistant",
				"Best Boy Electrician",
				"Electrician",
				"Rigging Grip",
				"Other",
				"Chief Lighting Technician",
				"Lighting Director",
				"Rigging Supervisor",
				"Underwater Gaffer",
				"Additional Gaffer",
				"Additional Lighting Technician",
				"Assistant Chief Lighting Technician",
				"Assistant Electrician",
				"Assistant Gaffer",
				"Best Boy Lighting Technician",
				"Daily Electrics",
				"Genetator Operator",
				"Key Rigging Grip",
				"Lighting Design",
				"Lighting Programmer",
				"O.B. Lighting",
				"Standby Rigger",
			],
		}),
		Object.freeze({
			department: "Production",
			jobs: [
				"Producer",
				"Executive Producer",
				"Casting",
				"Production Manager",
				"Unit Production Manager",
				"Line Producer",
				"Location Manager",
				"Other",
				"Production Supervisor",
				"Production Accountant",
				"Production Office Coordinator",
				"Finance",
				"Executive Consultant",
				"Character Technical Supervisor",
				"Development Manager",
				"Administration",
				"Executive In Charge Of Post Production",
				"Production Director",
				"Executive In Charge Of Production",
				"Publicist",
				"Associate Producer",
				"Co-Producer",
				"Co-Executive Producer",
				"Casting Associate",
				"Researcher",
				"Production Coordinator",
				"Consulting Producer",
				"Supervising Producer",
				"Senior Executive Consultant",
				"Unit Manager",
				"ADR Voice Casting",
				"Assistant Production Coordinator",
				"Assistant Production Manager",
				"Casting Assistant",
				"Casting Consultant",
				"Coordinating Producer",
				"Local Casting",
				"Script Researcher",
				"Accountant",
				"Accounting Clerk Assistant",
				"Accounting Supervisor",
				"Accounting Trainee",
				"Additional Casting",
				"Additional Production Assistant",
				"Additional Post-Production Supervisor",
				"Art Department Production Assistant",
				"Assistant Accountant",
				"Assistant Extras Casting",
				"Assistant Location Manager",
				"Assistant Unit Manager",
				"Attorney",
				"Background Casting Director",
				"Back-up Set Production Assistant",
				"Back-up Truck Production Assistant",
				"Broadcast Producer",
				"Business Affairs Coordinator",
				"Casting Coordinator",
				"Casting Director",
				"Casting Producer",
				"Casting Researcher",
				"Consulting Accountant",
				"Contract Manager",
				"Controller",
				"Data Management Technician",
				"Delegated Producer",
				"Development Producer",
				"Director of Operations",
				"Executive Assistant",
				"Executive Co-Producer",
				"Executive Producer's Assistant",
				"Extras Casting",
				"Extras Casting Assistant",
				"Extras Casting Coordinator",
				"Feature Finishing Producer",
				"Finishing Producer",
				"First Assistant Accountant",
				"First Assistant Production Coordinator",
				"General Manager",
				"Grip Production Assistant",
				"Head of Production",
				"Head of Programming",
				"Head of Research",
				"Human Resources",
				"Insert Unit Location Manager",
				"Key Accountant",
				"Key Art Production Assistant",
				"Key Grip Production Assistant",
				"Key Production Assistant",
				"Key Set Production Assistant",
				"Locale Casting Director",
				"Location Assistant",
				"Location Casting",
				"Location Coordinator",
				"Location Production Assistant",
				"Musical Casting",
				"Original Casting",
				"Payroll Accountant",
				"Post Coordinator",
				"Post Producer",
				"Post Production Accountant",
				"Post Production Coordinator",
				"Post Production Producer",
				"Post Production Technical Engineer",
				"Producer's Assistant",
				"Production Assistant",
				"Production Consultant",
				"Production Designer",
				"Production Driver",
				"Production Executive",
				"Production Runner",
				"Production Secretary",
				"Production Trainee",
				"Research Assistant",
				"Second Assistant Accountant",
				"Second Assistant Production Coordinator",
				"Second Assistant Unit Manager",
				"Second Unit Location Manager",
				"Street Casting",
				"Trainee Production Coordinator",
				"Travel Coordinator",
				"Truck Production Assistant",
				"Unit Swing",
			],
		}),
		Object.freeze({
			department: "Editing",
			jobs: [
				"Editor",
				"Supervising Film Editor",
				"Additional Editing",
				"Editorial Manager",
				"First Assistant Editor",
				"Additional Editorial Assistant",
				"Editorial Coordinator",
				"Editorial Production Assistant",
				"Editorial Services",
				"Archival Footage Coordinator",
				"Archival Footage Research",
				"Color Timer",
				"Digital Intermediate",
				"Other",
				"Assistant Editor",
				"Associate Editor",
				"Co-Editor",
				"Negative Cutter",
				"3D Digital Colorist",
				"3D Editor",
				"Additional Colorist",
				"Additional Editor",
				"Assistant Picture Editor",
				"Atmos Editor",
				"Color Assistant",
				"Color Grading",
				"Colorist",
				"Consulting Editor",
				"Dailies Manager",
				"Dailies Operator",
				"Dailies Technician",
				"Digital Color Timer",
				"Digital Colorist",
				"Digital Conform Editor",
				"Digital Intermediate Assistant",
				"Digital Intermediate Colorist",
				"Digital Intermediate Data Wrangler",
				"Digital Intermediate Editor",
				"Digital Intermediate Producer",
				"Editorial Consultant",
				"EPK Editor",
				"First Assistant Picture Editor",
				"Lead Editor",
				"Online Editor",
				"Project Manager",
				"Senior Colorist",
				"Senior Digital Intermediate Colorist",
				"Stereoscopic Editor",
				"Supervising Editor",
			],
		}),
		Object.freeze({
			department: "Camera",
			jobs: [
				"Director of Photography",
				"Underwater Camera",
				"Camera Operator",
				"Still Photographer",
				"Camera Department Manager",
				"Camera Supervisor",
				"Camera Technician",
				"Other",
				"Grip",
				"Steadicam Operator",
				"Additional Camera",
				"Camera Intern",
				"Additional Photography",
				"Helicopter Camera",
				"First Assistant Camera",
				"Additional Still Photographer",
				"Aerial Camera",
				"Aerial Camera Technician",
				"Aerial Director of Photography",
				"Camera Loader",
				"Dolly Grip",
				"Epk Camera Operator",
				"Key Grip",
				"Russian Arm Operator",
				"Second Unit Director of Photography",
				"Ultimate Arm Operator",
				"Underwater Director of Photography",
				'"A" Camera Operator',
				'"B" Camera Operator',
				'"C" Camera Operator',
				'"D" Camera Operator',
				"Additional Director of Photography",
				"Additional First Assistant Camera",
				"Additional Grip",
				"Additional Key Grip",
				"Additional Second Assistant Camera",
				"Additional Set Photographer",
				"Additional Underwater Photography",
				"Assistant Camera",
				"Assistant Grip",
				"Best Boy Grip",
				"BTS Footage",
				"BTS Photographer",
				"BTS Videographer",
				"Camera Car",
				"Camera Department Production Assistant",
				"Camera Production Assistant",
				"Camera Trainee",
				"Camera Truck",
				"Clapper Loader",
				"Data Wrangler",
				"Digital Imaging Technician",
				"Drone Cinematographer",
				"Drone Pilot",
				"Epk Director",
				"Epk Producer",
				'First Assistant "A" Camera',
				'First Assistant "B" Camera',
				'First Assistant "C" Camera',
				'First Assistant "D" Camera',
				"First Company Grip",
				"Focus Puller",
				"Head of Layout",
				"Jimmy Jib Operator",
				"Libra Head Technician",
				"Phantom Operator",
				"Red Technician",
				'Second Assistant "A" Camera',
				'Second Assistant "B" Camera',
				'Second Assistant "C" Camera',
				'Second Assistant "D" Camera',
				"Second Assistant Camera",
				"Second Company Grip",
				"Set Photographer",
				'Third Assistant "A" Camera',
				'Third Assistant "B" Camera',
				'Third Assistant "C" Camera',
				'Third Assistant "D" Camera',
				"Third Assistant Camera",
				"Underwater Epk Photographer",
				"Underwater Stills Photographer",
				"Videojournalist",
				"Video Report",
			],
		}),
		Object.freeze({
			department: "Sound",
			jobs: [
				"Original Music Composer",
				"Sound Designer",
				"Sound Editor",
				"Sound Director",
				"Sound Mixer",
				"Music Editor",
				"Sound Effects Editor",
				"Production Sound Mixer",
				"Additional Soundtrack",
				"Supervising Sound Editor",
				"Supervising Sound Effects Editor",
				"Sound Re-Recording Mixer",
				"Recording Supervision",
				"Boom Operator",
				"Sound Montage Associate",
				"Songs",
				"Music",
				"ADR & Dubbing",
				"Sound Recordist",
				"Sound Engineer",
				"Foley",
				"Dialogue Editor",
				"Additional Music Supervisor",
				"First Assistant Sound Editor",
				"Scoring Mixer",
				"Dolby Consultant",
				"Other",
				"Music Director",
				"Orchestrator",
				"Vocal Coach",
				"Music Supervisor",
				"Sound",
				"Musician",
				"Additional Sound Re-Recording Mixer",
				"Additional Sound Re-Recordist",
				"ADR Editor",
				"ADR Supervisor",
				"Apprentice Sound Editor",
				"Assistant Music Supervisor",
				"Assistant Sound Editor",
				"Conductor",
				"Foley Editor",
				"Music Programmer",
				"Music Score Producer",
				"Playback Singer",
				"Sound Effects",
				"Sound Effects Designer",
				"Supervising ADR Editor",
				"Supervising Dialogue Editor",
				"Supervising Music Editor",
				"Theme Song Performance",
				"Utility Sound",
				"Additional Production Sound Mixer",
				"ADR Editor",
				"ADR Engineer",
				"ADR Coordinator",
				"ADR Mixer",
				"ADR Post Producer",
				"ADR Recording Engineer",
				"ADR Recordist",
				"Assistant Dialogue Editor",
				"Assistant Foley Artist",
				"Assistant Sound Designer",
				"Assistant Sound Engineer",
				"Audio Post Coordinator",
				"Digital Foley Artist",
				"Foley Artist",
				"Foley Mixer",
				"Foley Recording Engineer",
				"Foley Recordist",
				"Foley Supervisor",
				"Joint ADR Mixer",
				"Keyboard Programmer",
				"Location Sound Assistant",
				"Location Sound Mixer",
				"Location Sound Recordist",
				"Loop Group Coordinator",
				"Main Title Theme Composer",
				"Music Arranger",
				"Music Co-Supervisor",
				"Music Consultant",
				"Music Coordinator",
				"Music Producer",
				"Music Sound Design and Processing",
				"Music Supervision Assistant",
				"O.B. Sound",
				"Second Assistant Sound",
				"Sound Assistant",
				"Sound Mix Technician",
				"Sound Post Production Coordinator",
				"Sound Post Supervisor",
				"Sound Re-Recording Assistant",
				"Sound Supervisor",
				"Sound Technical Supervisor",
				"Vocals",
			],
		}),
	]),
	languages: Object.freeze([
		Object.freeze({
			iso_639_1: "xx",
			english_name: "No Language",
			name: "No Language"
		}),
		Object.freeze({
			iso_639_1: "aa",
			english_name: "Afar",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "af",
			english_name: "Afrikaans",
			name: "Afrikaans"
		}),
		Object.freeze({
			iso_639_1: "ak",
			english_name: "Akan",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "an",
			english_name: "Aragonese",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "as",
			english_name: "Assamese",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "av",
			english_name: "Avaric",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "ae",
			english_name: "Avestan",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "ay",
			english_name: "Aymara",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "az",
			english_name: "Azerbaijani",
			name: "Azərbaycan"
		}),
		Object.freeze({
			iso_639_1: "ba",
			english_name: "Bashkir",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "bm",
			english_name: "Bambara",
			name: "Bamanankan"
		}),
		Object.freeze({
			iso_639_1: "bi",
			english_name: "Bislama",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "bo",
			english_name: "Tibetan",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "br",
			english_name: "Breton",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "ca",
			english_name: "Catalan",
			name: "Català"
		}),
		Object.freeze({
			iso_639_1: "cs",
			english_name: "Czech",
			name: "Český"
		}),
		Object.freeze({
			iso_639_1: "ce",
			english_name: "Chechen",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "cu",
			english_name: "Slavic",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "cv",
			english_name: "Chuvash",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "kw",
			english_name: "Cornish",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "co",
			english_name: "Corsican",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "cr",
			english_name: "Cree",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "cy",
			english_name: "Welsh",
			name: "Cymraeg"
		}),
		Object.freeze({
			iso_639_1: "da",
			english_name: "Danish",
			name: "Dansk"
		}),
		Object.freeze({
			iso_639_1: "de",
			english_name: "German",
			name: "Deutsch"
		}),
		Object.freeze({
			iso_639_1: "dv",
			english_name: "Divehi",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "dz",
			english_name: "Dzongkha",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "eo",
			english_name: "Esperanto",
			name: "Esperanto"
		}),
		Object.freeze({
			iso_639_1: "et",
			english_name: "Estonian",
			name: "Eesti"
		}),
		Object.freeze({
			iso_639_1: "eu",
			english_name: "Basque",
			name: "euskera"
		}),
		Object.freeze({
			iso_639_1: "fo",
			english_name: "Faroese",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "fj",
			english_name: "Fijian",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "fi",
			english_name: "Finnish",
			name: "suomi"
		}),
		Object.freeze({
			iso_639_1: "fr",
			english_name: "French",
			name: "Français"
		}),
		Object.freeze({
			iso_639_1: "fy",
			english_name: "Frisian",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "ff",
			english_name: "Fulah",
			name: "Fulfulde"
		}),
		Object.freeze({
			iso_639_1: "gd",
			english_name: "Gaelic",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "ga",
			english_name: "Irish",
			name: "Gaeilge"
		}),
		Object.freeze({
			iso_639_1: "gl",
			english_name: "Galician",
			name: "Galego"
		}),
		Object.freeze({
			iso_639_1: "gv",
			english_name: "Manx",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "gn",
			english_name: "Guarani",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "gu",
			english_name: "Gujarati",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "ht",
			english_name: "Haitian; Haitian Creole",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "ha",
			english_name: "Hausa",
			name: "Hausa"
		}),
		Object.freeze({
			iso_639_1: "sh",
			english_name: "Serbo-Croatian",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "hz",
			english_name: "Herero",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "ho",
			english_name: "Hiri Motu",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "hr",
			english_name: "Croatian",
			name: "Hrvatski"
		}),
		Object.freeze({
			iso_639_1: "hu",
			english_name: "Hungarian",
			name: "Magyar"
		}),
		Object.freeze({
			iso_639_1: "ig",
			english_name: "Igbo",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "io",
			english_name: "Ido",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "ii",
			english_name: "Yi",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "iu",
			english_name: "Inuktitut",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "ie",
			english_name: "Interlingue",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "ia",
			english_name: "Interlingua",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "id",
			english_name: "Indonesian",
			name: "Bahasa indonesia"
		}),
		Object.freeze({
			iso_639_1: "ik",
			english_name: "Inupiaq",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "is",
			english_name: "Icelandic",
			name: "Íslenska"
		}),
		Object.freeze({
			iso_639_1: "it",
			english_name: "Italian",
			name: "Italiano"
		}),
		Object.freeze({
			iso_639_1: "jv",
			english_name: "Javanese",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "ja",
			english_name: "Japanese",
			name: "日本語"
		}),
		Object.freeze({
			iso_639_1: "kl",
			english_name: "Kalaallisut",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "kn",
			english_name: "Kannada",
			name: "?????"
		}),
		Object.freeze({
			iso_639_1: "ks",
			english_name: "Kashmiri",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "kr",
			english_name: "Kanuri",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "kk",
			english_name: "Kazakh",
			name: "қазақ"
		}),
		Object.freeze({
			iso_639_1: "km",
			english_name: "Khmer",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "ki",
			english_name: "Kikuyu",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "rw",
			english_name: "Kinyarwanda",
			name: "Kinyarwanda"
		}),
		Object.freeze({
			iso_639_1: "ky",
			english_name: "Kirghiz",
			name: "??????"
		}),
		Object.freeze({
			iso_639_1: "kv",
			english_name: "Komi",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "kg",
			english_name: "Kongo",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "ko",
			english_name: "Korean",
			name: "한국어/조선말"
		}),
		Object.freeze({
			iso_639_1: "kj",
			english_name: "Kuanyama",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "ku",
			english_name: "Kurdish",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "lo",
			english_name: "Lao",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "la",
			english_name: "Latin",
			name: "Latin"
		}),
		Object.freeze({
			iso_639_1: "lv",
			english_name: "Latvian",
			name: "Latviešu"
		}),
		Object.freeze({
			iso_639_1: "li",
			english_name: "Limburgish",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "ln",
			english_name: "Lingala",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "lt",
			english_name: "Lithuanian",
			name: "Lietuvių"
		}),
		Object.freeze({
			iso_639_1: "lb",
			english_name: "Letzeburgesch",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "lu",
			english_name: "Luba-Katanga",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "lg",
			english_name: "Ganda",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "mh",
			english_name: "Marshall",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "ml",
			english_name: "Malayalam",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "mr",
			english_name: "Marathi",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "mg",
			english_name: "Malagasy",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "mt",
			english_name: "Maltese",
			name: "Malti"
		}),
		Object.freeze({
			iso_639_1: "mo",
			english_name: "Moldavian",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "mn",
			english_name: "Mongolian",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "mi",
			english_name: "Maori",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "ms",
			english_name: "Malay",
			name: "Bahasa melayu"
		}),
		Object.freeze({
			iso_639_1: "my",
			english_name: "Burmese",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "na",
			english_name: "Nauru",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "nv",
			english_name: "Navajo",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "nr",
			english_name: "Ndebele",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "nd",
			english_name: "Ndebele",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "ng",
			english_name: "Ndonga",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "ne",
			english_name: "Nepali",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "nl",
			english_name: "Dutch",
			name: "Nederlands"
		}),
		Object.freeze({
			iso_639_1: "nn",
			english_name: "Norwegian Nynorsk",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "nb",
			english_name: "Norwegian Bokmål",
			name: "Bokmål"
		}),
		Object.freeze({
			iso_639_1: "no",
			english_name: "Norwegian",
			name: "Norsk"
		}),
		Object.freeze({
			iso_639_1: "ny",
			english_name: "Chichewa; Nyanja",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "oc",
			english_name: "Occitan",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "oj",
			english_name: "Ojibwa",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "or",
			english_name: "Oriya",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "om",
			english_name: "Oromo",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "os",
			english_name: "Ossetian; Ossetic",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "pi",
			english_name: "Pali",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "pl",
			english_name: "Polish",
			name: "Polski"
		}),
		Object.freeze({
			iso_639_1: "pt",
			english_name: "Portuguese",
			name: "Português"
		}),
		Object.freeze({
			iso_639_1: "qu",
			english_name: "Quechua",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "rm",
			english_name: "Raeto-Romance",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "ro",
			english_name: "Romanian",
			name: "Română"
		}),
		Object.freeze({
			iso_639_1: "rn",
			english_name: "Rundi",
			name: "Kirundi"
		}),
		Object.freeze({
			iso_639_1: "ru",
			english_name: "Russian",
			name: "Pусский"
		}),
		Object.freeze({
			iso_639_1: "sg",
			english_name: "Sango",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "sa",
			english_name: "Sanskrit",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "si",
			english_name: "Sinhalese",
			name: "සිංහල"
		}),
		Object.freeze({
			iso_639_1: "sk",
			english_name: "Slovak",
			name: "Slovenčina"
		}),
		Object.freeze({
			iso_639_1: "sl",
			english_name: "Slovenian",
			name: "Slovenščina"
		}),
		Object.freeze({
			iso_639_1: "se",
			english_name: "Northern Sami",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "sm",
			english_name: "Samoan",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "sn",
			english_name: "Shona",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "sd",
			english_name: "Sindhi",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "so",
			english_name: "Somali",
			name: "Somali"
		}),
		Object.freeze({
			iso_639_1: "st",
			english_name: "Sotho",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "es",
			english_name: "Spanish",
			name: "Español"
		}),
		Object.freeze({
			iso_639_1: "sq",
			english_name: "Albanian",
			name: "shqip"
		}),
		Object.freeze({
			iso_639_1: "sc",
			english_name: "Sardinian",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "sr",
			english_name: "Serbian",
			name: "Srpski"
		}),
		Object.freeze({
			iso_639_1: "ss",
			english_name: "Swati",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "su",
			english_name: "Sundanese",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "sw",
			english_name: "Swahili",
			name: "Kiswahili"
		}),
		Object.freeze({
			iso_639_1: "sv",
			english_name: "Swedish",
			name: "svenska"
		}),
		Object.freeze({
			iso_639_1: "ty",
			english_name: "Tahitian",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "ta",
			english_name: "Tamil",
			name: "தமிழ்"
		}),
		Object.freeze({
			iso_639_1: "tt",
			english_name: "Tatar",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "te",
			english_name: "Telugu",
			name: "తెలుగు"
		}),
		Object.freeze({
			iso_639_1: "tg",
			english_name: "Tajik",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "tl",
			english_name: "Tagalog",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "th",
			english_name: "Thai",
			name: "ภาษาไทย"
		}),
		Object.freeze({
			iso_639_1: "ti",
			english_name: "Tigrinya",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "to",
			english_name: "Tonga",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "tn",
			english_name: "Tswana",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "ts",
			english_name: "Tsonga",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "tk",
			english_name: "Turkmen",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "tr",
			english_name: "Turkish",
			name: "Türkçe"
		}),
		Object.freeze({
			iso_639_1: "tw",
			english_name: "Twi",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "ug",
			english_name: "Uighur",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "uk",
			english_name: "Ukrainian",
			name: "Український"
		}),
		Object.freeze({
			iso_639_1: "ur",
			english_name: "Urdu",
			name: "اردو"
		}),
		Object.freeze({
			iso_639_1: "uz",
			english_name: "Uzbek",
			name: "ozbek"
		}),
		Object.freeze({
			iso_639_1: "ve",
			english_name: "Venda",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "vi",
			english_name: "Vietnamese",
			name: "Tiếng Việt"
		}),
		Object.freeze({
			iso_639_1: "vo",
			english_name: "Volapük",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "wa",
			english_name: "Walloon",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "wo",
			english_name: "Wolof",
			name: "Wolof"
		}),
		Object.freeze({
			iso_639_1: "xh",
			english_name: "Xhosa",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "yi",
			english_name: "Yiddish",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "za",
			english_name: "Zhuang",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "zu",
			english_name: "Zulu",
			name: "isiZulu"
		}),
		Object.freeze({
			iso_639_1: "ab",
			english_name: "Abkhazian",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "zh",
			english_name: "Mandarin",
			name: "普通话"
		}),
		Object.freeze({
			iso_639_1: "ps",
			english_name: "Pushto",
			name: "پښتو"
		}),
		Object.freeze({
			iso_639_1: "am",
			english_name: "Amharic",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "ar",
			english_name: "Arabic",
			name: "العربية"
		}),
		Object.freeze({
			iso_639_1: "bg",
			english_name: "Bulgarian",
			name: "български език"
		}),
		Object.freeze({
			iso_639_1: "cn",
			english_name: "Cantonese",
			name: "广州话 / 廣州話"
		}),
		Object.freeze({
			iso_639_1: "mk",
			english_name: "Macedonian",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "el",
			english_name: "Greek",
			name: "ελληνικά"
		}),
		Object.freeze({
			iso_639_1: "fa",
			english_name: "Persian",
			name: "فارسی"
		}),
		Object.freeze({
			iso_639_1: "he",
			english_name: "Hebrew",
			name: "עִבְרִית"
		}),
		Object.freeze({
			iso_639_1: "hi",
			english_name: "Hindi",
			name: "हिन्दी"
		}),
		Object.freeze({
			iso_639_1: "hy",
			english_name: "Armenian",
			name: ""
		}),
		Object.freeze({
			iso_639_1: "en",
			english_name: "English",
			name: "English"
		}),
		Object.freeze({
			iso_639_1: "ee",
			english_name: "Ewe",
			name: "Èʋegbe"
		}),
		Object.freeze({
			iso_639_1: "ka",
			english_name: "Georgian",
			name: "ქართული"
		}),
		Object.freeze({
			iso_639_1: "pa",
			english_name: "Punjabi",
			name: "ਪੰਜਾਬੀ"
		}),
		Object.freeze({
			iso_639_1: "bn",
			english_name: "Bengali",
			name: "বাংলা"
		}),
		Object.freeze({
			iso_639_1: "bs",
			english_name: "Bosnian",
			name: "Bosanski"
		}),
		Object.freeze({
			iso_639_1: "ch",
			english_name: "Chamorro",
			name: "Finu' Chamorro"
		}),
		Object.freeze({
			iso_639_1: "be",
			english_name: "Belarusian",
			name: "беларуская мова"
		}),
		Object.freeze({
			iso_639_1: "yo",
			english_name: "Yoruba",
			name: "Èdè Yorùbá"
		})
	]),
	primaryTranslations: Object.freeze([
		"af-ZA",
		"ar-AE",
		"ar-BH",
		"ar-EG",
		"ar-IQ",
		"ar-JO",
		"ar-LY",
		"ar-MA",
		"ar-QA",
		"ar-SA",
		"ar-TD",
		"ar-YE",
		"be-BY",
		"bg-BG",
		"bn-BD",
		"br-FR",
		"ca-AD",
		"ca-ES",
		"ch-GU",
		"cs-CZ",
		"cy-GB",
		"da-DK",
		"de-AT",
		"de-CH",
		"de-DE",
		"el-CY",
		"el-GR",
		"en-AG",
		"en-AU",
		"en-BB",
		"en-BZ",
		"en-CA",
		"en-CM",
		"en-GB",
		"en-GG",
		"en-GH",
		"en-GI",
		"en-GY",
		"en-IE",
		"en-JM",
		"en-KE",
		"en-LC",
		"en-MW",
		"en-NZ",
		"en-PG",
		"en-TC",
		"en-US",
		"en-ZM",
		"en-ZW",
		"eo-EO",
		"es-AR",
		"es-CL",
		"es-DO",
		"es-EC",
		"es-ES",
		"es-GQ",
		"es-GT",
		"es-HN",
		"es-MX",
		"es-NI",
		"es-PA",
		"es-PE",
		"es-PY",
		"es-SV",
		"es-UY",
		"et-EE",
		"eu-ES",
		"fa-IR",
		"fi-FI",
		"fr-BF",
		"fr-CA",
		"fr-CD",
		"fr-CI",
		"fr-FR",
		"fr-GF",
		"fr-GP",
		"fr-MC",
		"fr-ML",
		"fr-MU",
		"fr-PF",
		"ga-IE",
		"gd-GB",
		"gl-ES",
		"he-IL",
		"hi-IN",
		"hr-HR",
		"hu-HU",
		"id-ID",
		"it-IT",
		"it-VA",
		"ja-JP",
		"ka-GE",
		"kk-KZ",
		"kn-IN",
		"ko-KR",
		"ku-TR",
		"ky-KG",
		"lt-LT",
		"lv-LV",
		"ml-IN",
		"mr-IN",
		"ms-MY",
		"ms-SG",
		"nb-NO",
		"nl-BE",
		"nl-NL",
		"no-NO",
		"pa-IN",
		"pl-PL",
		"pt-AO",
		"pt-BR",
		"pt-MZ",
		"pt-PT",
		"ro-MD",
		"ro-RO",
		"ru-RU",
		"si-LK",
		"sk-SK",
		"sl-SI",
		"so-SO",
		"sq-AL",
		"sq-XK",
		"sr-ME",
		"sr-RS",
		"sv-SE",
		"sw-TZ",
		"ta-IN",
		"te-IN",
		"th-TH",
		"tl-PH",
		"tr-TR",
		"uk-UA",
		"ur-PK",
		"uz-UZ",
		"vi-VN",
		"zh-CN",
		"zh-HK",
		"zh-SG",
		"zh-TW",
		"zu-ZA"
	]),
	timezones: Object.freeze([
		Object.freeze({
			"iso_3166_1": "AD",
			"zones": [
				"Europe/Andorra"
			]
		}),
		Object.freeze({
			"iso_3166_1": "AE",
			"zones": [
				"Asia/Dubai"
			]
		}),
		Object.freeze({
			"iso_3166_1": "AF",
			"zones": [
				"Asia/Kabul"
			]
		}),
		Object.freeze({
			"iso_3166_1": "AG",
			"zones": [
				"America/Puerto_Rico"
			]
		}),
		Object.freeze({
			"iso_3166_1": "AI",
			"zones": [
				"America/Puerto_Rico"
			]
		}),
		Object.freeze({
			"iso_3166_1": "AL",
			"zones": [
				"Europe/Tirane"
			]
		}),
		Object.freeze({
			"iso_3166_1": "AM",
			"zones": [
				"Asia/Yerevan"
			]
		}),
		Object.freeze({
			"iso_3166_1": "AO",
			"zones": [
				"Africa/Lagos"
			]
		}),
		Object.freeze({
			"iso_3166_1": "AQ",
			"zones": [
				"Antarctica/Casey",
				"Antarctica/Davis",
				"Antarctica/Mawson",
				"Antarctica/Palmer",
				"Antarctica/Rothera",
				"Antarctica/Troll",
				"Antarctica/Vostok",
				"Pacific/Auckland",
				"Pacific/Port_Moresby",
				"Asia/Riyadh"
			]
		}),
		Object.freeze({
			"iso_3166_1": "AR",
			"zones": [
				"America/Argentina/Buenos_Aires",
				"America/Argentina/Cordoba",
				"America/Argentina/Salta",
				"America/Argentina/Jujuy",
				"America/Argentina/Tucuman",
				"America/Argentina/Catamarca",
				"America/Argentina/La_Rioja",
				"America/Argentina/San_Juan",
				"America/Argentina/Mendoza",
				"America/Argentina/San_Luis",
				"America/Argentina/Rio_Gallegos",
				"America/Argentina/Ushuaia"
			]
		}),
		Object.freeze({
			"iso_3166_1": "AS",
			"zones": [
				"Pacific/Pago_Pago"
			]
		}),
		Object.freeze({
			"iso_3166_1": "AT",
			"zones": [
				"Europe/Vienna"
			]
		}),
		Object.freeze({
			"iso_3166_1": "AU",
			"zones": [
				"Australia/Lord_Howe",
				"Antarctica/Macquarie",
				"Australia/Hobart",
				"Australia/Melbourne",
				"Australia/Sydney",
				"Australia/Broken_Hill",
				"Australia/Brisbane",
				"Australia/Lindeman",
				"Australia/Adelaide",
				"Australia/Darwin",
				"Australia/Perth",
				"Australia/Eucla"
			]
		}),
		Object.freeze({
			"iso_3166_1": "AW",
			"zones": [
				"America/Puerto_Rico"
			]
		}),
		Object.freeze({
			"iso_3166_1": "AX",
			"zones": [
				"Europe/Helsinki"
			]
		}),
		Object.freeze({
			"iso_3166_1": "AZ",
			"zones": [
				"Asia/Baku"
			]
		}),
		Object.freeze({
			"iso_3166_1": "BA",
			"zones": [
				"Europe/Belgrade"
			]
		}),
		Object.freeze({
			"iso_3166_1": "BB",
			"zones": [
				"America/Barbados"
			]
		}),
		Object.freeze({
			"iso_3166_1": "BD",
			"zones": [
				"Asia/Dhaka"
			]
		}),
		Object.freeze({
			"iso_3166_1": "BE",
			"zones": [
				"Europe/Brussels"
			]
		}),
		Object.freeze({
			"iso_3166_1": "BF",
			"zones": [
				"Africa/Abidjan"
			]
		}),
		Object.freeze({
			"iso_3166_1": "BG",
			"zones": [
				"Europe/Sofia"
			]
		}),
		Object.freeze({
			"iso_3166_1": "BH",
			"zones": [
				"Asia/Qatar"
			]
		}),
		Object.freeze({
			"iso_3166_1": "BI",
			"zones": [
				"Africa/Maputo"
			]
		}),
		Object.freeze({
			"iso_3166_1": "BJ",
			"zones": [
				"Africa/Lagos"
			]
		}),
		Object.freeze({
			"iso_3166_1": "BL",
			"zones": [
				"America/Puerto_Rico"
			]
		}),
		Object.freeze({
			"iso_3166_1": "BM",
			"zones": [
				"Atlantic/Bermuda"
			]
		}),
		Object.freeze({
			"iso_3166_1": "BN",
			"zones": [
				"Asia/Kuching"
			]
		}),
		Object.freeze({
			"iso_3166_1": "BO",
			"zones": [
				"America/La_Paz"
			]
		}),
		Object.freeze({
			"iso_3166_1": "BQ",
			"zones": [
				"America/Puerto_Rico"
			]
		}),
		Object.freeze({
			"iso_3166_1": "BR",
			"zones": [
				"America/Noronha",
				"America/Belem",
				"America/Fortaleza",
				"America/Recife",
				"America/Araguaina",
				"America/Maceio",
				"America/Bahia",
				"America/Sao_Paulo",
				"America/Campo_Grande",
				"America/Cuiaba",
				"America/Santarem",
				"America/Porto_Velho",
				"America/Boa_Vista",
				"America/Manaus",
				"America/Eirunepe",
				"America/Rio_Branco"
			]
		}),
		Object.freeze({
			"iso_3166_1": "BS",
			"zones": [
				"America/Toronto"
			]
		}),
		Object.freeze({
			"iso_3166_1": "BT",
			"zones": [
				"Asia/Thimphu"
			]
		}),
		Object.freeze({
			"iso_3166_1": "BV",
			"zones": []
		}),
		Object.freeze({
			"iso_3166_1": "BW",
			"zones": [
				"Africa/Maputo"
			]
		}),
		Object.freeze({
			"iso_3166_1": "BY",
			"zones": [
				"Europe/Minsk"
			]
		}),
		Object.freeze({
			"iso_3166_1": "BZ",
			"zones": [
				"America/Belize"
			]
		}),
		Object.freeze({
			"iso_3166_1": "CA",
			"zones": [
				"America/St_Johns",
				"America/Halifax",
				"America/Glace_Bay",
				"America/Moncton",
				"America/Goose_Bay",
				"America/Toronto",
				"America/Iqaluit",
				"America/Winnipeg",
				"America/Resolute",
				"America/Rankin_Inlet",
				"America/Regina",
				"America/Swift_Current",
				"America/Edmonton",
				"America/Cambridge_Bay",
				"America/Inuvik",
				"America/Dawson_Creek",
				"America/Fort_Nelson",
				"America/Whitehorse",
				"America/Dawson",
				"America/Vancouver",
				"America/Panama",
				"America/Puerto_Rico",
				"America/Phoenix"
			]
		}),
		Object.freeze({
			"iso_3166_1": "CC",
			"zones": [
				"Asia/Yangon"
			]
		}),
		Object.freeze({
			"iso_3166_1": "CD",
			"zones": [
				"Africa/Maputo",
				"Africa/Lagos"
			]
		}),
		Object.freeze({
			"iso_3166_1": "CF",
			"zones": [
				"Africa/Lagos"
			]
		}),
		Object.freeze({
			"iso_3166_1": "CG",
			"zones": [
				"Africa/Lagos"
			]
		}),
		Object.freeze({
			"iso_3166_1": "CH",
			"zones": [
				"Europe/Zurich"
			]
		}),
		Object.freeze({
			"iso_3166_1": "CI",
			"zones": [
				"Africa/Abidjan"
			]
		}),
		Object.freeze({
			"iso_3166_1": "CK",
			"zones": [
				"Pacific/Rarotonga"
			]
		}),
		Object.freeze({
			"iso_3166_1": "CL",
			"zones": [
				"America/Santiago",
				"America/Punta_Arenas",
				"Pacific/Easter"
			]
		}),
		Object.freeze({
			"iso_3166_1": "CM",
			"zones": [
				"Africa/Lagos"
			]
		}),
		Object.freeze({
			"iso_3166_1": "CN",
			"zones": [
				"Asia/Shanghai",
				"Asia/Urumqi"
			]
		}),
		Object.freeze({
			"iso_3166_1": "CO",
			"zones": [
				"America/Bogota"
			]
		}),
		Object.freeze({
			"iso_3166_1": "CR",
			"zones": [
				"America/Costa_Rica"
			]
		}),
		Object.freeze({
			"iso_3166_1": "CU",
			"zones": [
				"America/Havana"
			]
		}),
		Object.freeze({
			"iso_3166_1": "CV",
			"zones": [
				"Atlantic/Cape_Verde"
			]
		}),
		Object.freeze({
			"iso_3166_1": "CW",
			"zones": [
				"America/Puerto_Rico"
			]
		}),
		Object.freeze({
			"iso_3166_1": "CX",
			"zones": [
				"Asia/Bangkok"
			]
		}),
		Object.freeze({
			"iso_3166_1": "CY",
			"zones": [
				"Asia/Nicosia",
				"Asia/Famagusta"
			]
		}),
		Object.freeze({
			"iso_3166_1": "CZ",
			"zones": [
				"Europe/Prague"
			]
		}),
		Object.freeze({
			"iso_3166_1": "DE",
			"zones": [
				"Europe/Berlin",
				"Europe/Zurich"
			]
		}),
		Object.freeze({
			"iso_3166_1": "DJ",
			"zones": [
				"Africa/Nairobi"
			]
		}),
		Object.freeze({
			"iso_3166_1": "DK",
			"zones": [
				"Europe/Berlin"
			]
		}),
		Object.freeze({
			"iso_3166_1": "DM",
			"zones": [
				"America/Puerto_Rico"
			]
		}),
		Object.freeze({
			"iso_3166_1": "DO",
			"zones": [
				"America/Santo_Domingo"
			]
		}),
		Object.freeze({
			"iso_3166_1": "DZ",
			"zones": [
				"Africa/Algiers"
			]
		}),
		Object.freeze({
			"iso_3166_1": "EC",
			"zones": [
				"America/Guayaquil",
				"Pacific/Galapagos"
			]
		}),
		Object.freeze({
			"iso_3166_1": "EE",
			"zones": [
				"Europe/Tallinn"
			]
		}),
		Object.freeze({
			"iso_3166_1": "EG",
			"zones": [
				"Africa/Cairo"
			]
		}),
		Object.freeze({
			"iso_3166_1": "EH",
			"zones": [
				"Africa/El_Aaiun"
			]
		}),
		Object.freeze({
			"iso_3166_1": "ER",
			"zones": [
				"Africa/Nairobi"
			]
		}),
		Object.freeze({
			"iso_3166_1": "ES",
			"zones": [
				"Europe/Madrid",
				"Africa/Ceuta",
				"Atlantic/Canary"
			]
		}),
		Object.freeze({
			"iso_3166_1": "ET",
			"zones": [
				"Africa/Nairobi"
			]
		}),
		Object.freeze({
			"iso_3166_1": "FI",
			"zones": [
				"Europe/Helsinki"
			]
		}),
		Object.freeze({
			"iso_3166_1": "FJ",
			"zones": [
				"Pacific/Fiji"
			]
		}),
		Object.freeze({
			"iso_3166_1": "FK",
			"zones": [
				"Atlantic/Stanley"
			]
		}),
		Object.freeze({
			"iso_3166_1": "FM",
			"zones": [
				"Pacific/Kosrae",
				"Pacific/Port_Moresby",
				"Pacific/Guadalcanal"
			]
		}),
		Object.freeze({
			"iso_3166_1": "FO",
			"zones": [
				"Atlantic/Faroe"
			]
		}),
		Object.freeze({
			"iso_3166_1": "FR",
			"zones": [
				"Europe/Paris"
			]
		}),
		Object.freeze({
			"iso_3166_1": "GA",
			"zones": [
				"Africa/Lagos"
			]
		}),
		Object.freeze({
			"iso_3166_1": "GB",
			"zones": [
				"Europe/London"
			]
		}),
		Object.freeze({
			"iso_3166_1": "GD",
			"zones": [
				"America/Puerto_Rico"
			]
		}),
		Object.freeze({
			"iso_3166_1": "GE",
			"zones": [
				"Asia/Tbilisi"
			]
		}),
		Object.freeze({
			"iso_3166_1": "GF",
			"zones": [
				"America/Cayenne"
			]
		}),
		Object.freeze({
			"iso_3166_1": "GG",
			"zones": [
				"Europe/London"
			]
		}),
		Object.freeze({
			"iso_3166_1": "GH",
			"zones": [
				"Africa/Abidjan"
			]
		}),
		Object.freeze({
			"iso_3166_1": "GI",
			"zones": [
				"Europe/Gibraltar"
			]
		}),
		Object.freeze({
			"iso_3166_1": "GL",
			"zones": [
				"America/Nuuk",
				"America/Danmarkshavn",
				"America/Scoresbysund",
				"America/Thule"
			]
		}),
		Object.freeze({
			"iso_3166_1": "GM",
			"zones": [
				"Africa/Abidjan"
			]
		}),
		Object.freeze({
			"iso_3166_1": "GN",
			"zones": [
				"Africa/Abidjan"
			]
		}),
		Object.freeze({
			"iso_3166_1": "GP",
			"zones": [
				"America/Puerto_Rico"
			]
		}),
		Object.freeze({
			"iso_3166_1": "GQ",
			"zones": [
				"Africa/Lagos"
			]
		}),
		Object.freeze({
			"iso_3166_1": "GR",
			"zones": [
				"Europe/Athens"
			]
		}),
		Object.freeze({
			"iso_3166_1": "GS",
			"zones": [
				"Atlantic/South_Georgia"
			]
		}),
		Object.freeze({
			"iso_3166_1": "GT",
			"zones": [
				"America/Guatemala"
			]
		}),
		Object.freeze({
			"iso_3166_1": "GU",
			"zones": [
				"Pacific/Guam"
			]
		}),
		Object.freeze({
			"iso_3166_1": "GW",
			"zones": [
				"Africa/Bissau"
			]
		}),
		Object.freeze({
			"iso_3166_1": "GY",
			"zones": [
				"America/Guyana"
			]
		}),
		Object.freeze({
			"iso_3166_1": "HK",
			"zones": [
				"Asia/Hong_Kong"
			]
		}),
		Object.freeze({
			"iso_3166_1": "HM",
			"zones": []
		}),
		Object.freeze({
			"iso_3166_1": "HN",
			"zones": [
				"America/Tegucigalpa"
			]
		}),
		Object.freeze({
			"iso_3166_1": "HR",
			"zones": [
				"Europe/Belgrade"
			]
		}),
		Object.freeze({
			"iso_3166_1": "HT",
			"zones": [
				"America/Port-au-Prince"
			]
		}),
		Object.freeze({
			"iso_3166_1": "HU",
			"zones": [
				"Europe/Budapest"
			]
		}),
		Object.freeze({
			"iso_3166_1": "ID",
			"zones": [
				"Asia/Jakarta",
				"Asia/Pontianak",
				"Asia/Makassar",
				"Asia/Jayapura"
			]
		}),
		Object.freeze({
			"iso_3166_1": "IE",
			"zones": [
				"Europe/Dublin"
			]
		}),
		Object.freeze({
			"iso_3166_1": "IL",
			"zones": [
				"Asia/Jerusalem"
			]
		}),
		Object.freeze({
			"iso_3166_1": "IM",
			"zones": [
				"Europe/London"
			]
		}),
		Object.freeze({
			"iso_3166_1": "IN",
			"zones": [
				"Asia/Kolkata"
			]
		}),
		Object.freeze({
			"iso_3166_1": "IO",
			"zones": [
				"Indian/Chagos"
			]
		}),
		Object.freeze({
			"iso_3166_1": "IQ",
			"zones": [
				"Asia/Baghdad"
			]
		}),
		Object.freeze({
			"iso_3166_1": "IR",
			"zones": [
				"Asia/Tehran"
			]
		}),
		Object.freeze({
			"iso_3166_1": "IS",
			"zones": [
				"Africa/Abidjan"
			]
		}),
		Object.freeze({
			"iso_3166_1": "IT",
			"zones": [
				"Europe/Rome"
			]
		}),
		Object.freeze({
			"iso_3166_1": "JE",
			"zones": [
				"Europe/London"
			]
		}),
		Object.freeze({
			"iso_3166_1": "JM",
			"zones": [
				"America/Jamaica"
			]
		}),
		Object.freeze({
			"iso_3166_1": "JO",
			"zones": [
				"Asia/Amman"
			]
		}),
		Object.freeze({
			"iso_3166_1": "JP",
			"zones": [
				"Asia/Tokyo"
			]
		}),
		Object.freeze({
			"iso_3166_1": "KE",
			"zones": [
				"Africa/Nairobi"
			]
		}),
		Object.freeze({
			"iso_3166_1": "KG",
			"zones": [
				"Asia/Bishkek"
			]
		}),
		Object.freeze({
			"iso_3166_1": "KH",
			"zones": [
				"Asia/Bangkok"
			]
		}),
		Object.freeze({
			"iso_3166_1": "KI",
			"zones": [
				"Pacific/Tarawa",
				"Pacific/Kanton",
				"Pacific/Kiritimati"
			]
		}),
		Object.freeze({
			"iso_3166_1": "KM",
			"zones": [
				"Africa/Nairobi"
			]
		}),
		Object.freeze({
			"iso_3166_1": "KN",
			"zones": [
				"America/Puerto_Rico"
			]
		}),
		Object.freeze({
			"iso_3166_1": "KP",
			"zones": [
				"Asia/Pyongyang"
			]
		}),
		Object.freeze({
			"iso_3166_1": "KR",
			"zones": [
				"Asia/Seoul"
			]
		}),
		Object.freeze({
			"iso_3166_1": "KW",
			"zones": [
				"Asia/Riyadh"
			]
		}),
		Object.freeze({
			"iso_3166_1": "KY",
			"zones": [
				"America/Panama"
			]
		}),
		Object.freeze({
			"iso_3166_1": "KZ",
			"zones": [
				"Asia/Almaty",
				"Asia/Qyzylorda",
				"Asia/Qostanay",
				"Asia/Aqtobe",
				"Asia/Aqtau",
				"Asia/Atyrau",
				"Asia/Oral"
			]
		}),
		Object.freeze({
			"iso_3166_1": "LA",
			"zones": [
				"Asia/Bangkok"
			]
		}),
		Object.freeze({
			"iso_3166_1": "LB",
			"zones": [
				"Asia/Beirut"
			]
		}),
		Object.freeze({
			"iso_3166_1": "LC",
			"zones": [
				"America/Puerto_Rico"
			]
		}),
		Object.freeze({
			"iso_3166_1": "LI",
			"zones": [
				"Europe/Zurich"
			]
		}),
		Object.freeze({
			"iso_3166_1": "LK",
			"zones": [
				"Asia/Colombo"
			]
		}),
		Object.freeze({
			"iso_3166_1": "LR",
			"zones": [
				"Africa/Monrovia"
			]
		}),
		Object.freeze({
			"iso_3166_1": "LS",
			"zones": [
				"Africa/Johannesburg"
			]
		}),
		Object.freeze({
			"iso_3166_1": "LT",
			"zones": [
				"Europe/Vilnius"
			]
		}),
		Object.freeze({
			"iso_3166_1": "LU",
			"zones": [
				"Europe/Brussels"
			]
		}),
		Object.freeze({
			"iso_3166_1": "LV",
			"zones": [
				"Europe/Riga"
			]
		}),
		Object.freeze({
			"iso_3166_1": "LY",
			"zones": [
				"Africa/Tripoli"
			]
		}),
		Object.freeze({
			"iso_3166_1": "MA",
			"zones": [
				"Africa/Casablanca"
			]
		}),
		Object.freeze({
			"iso_3166_1": "MC",
			"zones": [
				"Europe/Paris"
			]
		}),
		Object.freeze({
			"iso_3166_1": "MD",
			"zones": [
				"Europe/Chisinau"
			]
		}),
		Object.freeze({
			"iso_3166_1": "ME",
			"zones": [
				"Europe/Belgrade"
			]
		}),
		Object.freeze({
			"iso_3166_1": "MF",
			"zones": [
				"America/Puerto_Rico"
			]
		}),
		Object.freeze({
			"iso_3166_1": "MG",
			"zones": [
				"Africa/Nairobi"
			]
		}),
		Object.freeze({
			"iso_3166_1": "MH",
			"zones": [
				"Pacific/Kwajalein",
				"Pacific/Tarawa"
			]
		}),
		Object.freeze({
			"iso_3166_1": "MK",
			"zones": [
				"Europe/Belgrade"
			]
		}),
		Object.freeze({
			"iso_3166_1": "ML",
			"zones": [
				"Africa/Abidjan"
			]
		}),
		Object.freeze({
			"iso_3166_1": "MM",
			"zones": [
				"Asia/Yangon"
			]
		}),
		Object.freeze({
			"iso_3166_1": "MN",
			"zones": [
				"Asia/Ulaanbaatar",
				"Asia/Hovd",
				"Asia/Choibalsan"
			]
		}),
		Object.freeze({
			"iso_3166_1": "MO",
			"zones": [
				"Asia/Macau"
			]
		}),
		Object.freeze({
			"iso_3166_1": "MP",
			"zones": [
				"Pacific/Guam"
			]
		}),
		Object.freeze({
			"iso_3166_1": "MQ",
			"zones": [
				"America/Martinique"
			]
		}),
		Object.freeze({
			"iso_3166_1": "MR",
			"zones": [
				"Africa/Abidjan"
			]
		}),
		Object.freeze({
			"iso_3166_1": "MS",
			"zones": [
				"America/Puerto_Rico"
			]
		}),
		Object.freeze({
			"iso_3166_1": "MT",
			"zones": [
				"Europe/Malta"
			]
		}),
		Object.freeze({
			"iso_3166_1": "MU",
			"zones": [
				"Indian/Mauritius"
			]
		}),
		Object.freeze({
			"iso_3166_1": "MV",
			"zones": [
				"Indian/Maldives"
			]
		}),
		Object.freeze({
			"iso_3166_1": "MW",
			"zones": [
				"Africa/Maputo"
			]
		}),
		Object.freeze({
			"iso_3166_1": "MX",
			"zones": [
				"America/Mexico_City",
				"America/Cancun",
				"America/Merida",
				"America/Monterrey",
				"America/Matamoros",
				"America/Chihuahua",
				"America/Ciudad_Juarez",
				"America/Ojinaga",
				"America/Mazatlan",
				"America/Bahia_Banderas",
				"America/Hermosillo",
				"America/Tijuana"
			]
		}),
		Object.freeze({
			"iso_3166_1": "MY",
			"zones": [
				"Asia/Kuching",
				"Asia/Singapore"
			]
		}),
		Object.freeze({
			"iso_3166_1": "MZ",
			"zones": [
				"Africa/Maputo"
			]
		}),
		Object.freeze({
			"iso_3166_1": "NA",
			"zones": [
				"Africa/Windhoek"
			]
		}),
		Object.freeze({
			"iso_3166_1": "NC",
			"zones": [
				"Pacific/Noumea"
			]
		}),
		Object.freeze({
			"iso_3166_1": "NE",
			"zones": [
				"Africa/Lagos"
			]
		}),
		Object.freeze({
			"iso_3166_1": "NF",
			"zones": [
				"Pacific/Norfolk"
			]
		}),
		Object.freeze({
			"iso_3166_1": "NG",
			"zones": [
				"Africa/Lagos"
			]
		}),
		Object.freeze({
			"iso_3166_1": "NI",
			"zones": [
				"America/Managua"
			]
		}),
		Object.freeze({
			"iso_3166_1": "NL",
			"zones": [
				"Europe/Brussels"
			]
		}),
		Object.freeze({
			"iso_3166_1": "NO",
			"zones": [
				"Europe/Berlin"
			]
		}),
		Object.freeze({
			"iso_3166_1": "NP",
			"zones": [
				"Asia/Kathmandu"
			]
		}),
		Object.freeze({
			"iso_3166_1": "NR",
			"zones": [
				"Pacific/Nauru"
			]
		}),
		Object.freeze({
			"iso_3166_1": "NU",
			"zones": [
				"Pacific/Niue"
			]
		}),
		Object.freeze({
			"iso_3166_1": "NZ",
			"zones": [
				"Pacific/Auckland",
				"Pacific/Chatham"
			]
		}),
		Object.freeze({
			"iso_3166_1": "OM",
			"zones": [
				"Asia/Dubai"
			]
		}),
		Object.freeze({
			"iso_3166_1": "PA",
			"zones": [
				"America/Panama"
			]
		}),
		Object.freeze({
			"iso_3166_1": "PE",
			"zones": [
				"America/Lima"
			]
		}),
		Object.freeze({
			"iso_3166_1": "PF",
			"zones": [
				"Pacific/Tahiti",
				"Pacific/Marquesas",
				"Pacific/Gambier"
			]
		}),
		Object.freeze({
			"iso_3166_1": "PG",
			"zones": [
				"Pacific/Port_Moresby",
				"Pacific/Bougainville"
			]
		}),
		Object.freeze({
			"iso_3166_1": "PH",
			"zones": [
				"Asia/Manila"
			]
		}),
		Object.freeze({
			"iso_3166_1": "PK",
			"zones": [
				"Asia/Karachi"
			]
		}),
		Object.freeze({
			"iso_3166_1": "PL",
			"zones": [
				"Europe/Warsaw"
			]
		}),
		Object.freeze({
			"iso_3166_1": "PM",
			"zones": [
				"America/Miquelon"
			]
		}),
		Object.freeze({
			"iso_3166_1": "PN",
			"zones": [
				"Pacific/Pitcairn"
			]
		}),
		Object.freeze({
			"iso_3166_1": "PR",
			"zones": [
				"America/Puerto_Rico"
			]
		}),
		Object.freeze({
			"iso_3166_1": "PS",
			"zones": [
				"Asia/Gaza",
				"Asia/Hebron"
			]
		}),
		Object.freeze({
			"iso_3166_1": "PT",
			"zones": [
				"Europe/Lisbon",
				"Atlantic/Madeira",
				"Atlantic/Azores"
			]
		}),
		Object.freeze({
			"iso_3166_1": "PW",
			"zones": [
				"Pacific/Palau"
			]
		}),
		Object.freeze({
			"iso_3166_1": "PY",
			"zones": [
				"America/Asuncion"
			]
		}),
		Object.freeze({
			"iso_3166_1": "QA",
			"zones": [
				"Asia/Qatar"
			]
		}),
		Object.freeze({
			"iso_3166_1": "RE",
			"zones": [
				"Asia/Dubai"
			]
		}),
		Object.freeze({
			"iso_3166_1": "RO",
			"zones": [
				"Europe/Bucharest"
			]
		}),
		Object.freeze({
			"iso_3166_1": "RS",
			"zones": [
				"Europe/Belgrade"
			]
		}),
		Object.freeze({
			"iso_3166_1": "RU",
			"zones": [
				"Europe/Kaliningrad",
				"Europe/Moscow",
				"Europe/Simferopol",
				"Europe/Kirov",
				"Europe/Volgograd",
				"Europe/Astrakhan",
				"Europe/Saratov",
				"Europe/Ulyanovsk",
				"Europe/Samara",
				"Asia/Yekaterinburg",
				"Asia/Omsk",
				"Asia/Novosibirsk",
				"Asia/Barnaul",
				"Asia/Tomsk",
				"Asia/Novokuznetsk",
				"Asia/Krasnoyarsk",
				"Asia/Irkutsk",
				"Asia/Chita",
				"Asia/Yakutsk",
				"Asia/Khandyga",
				"Asia/Vladivostok",
				"Asia/Ust-Nera",
				"Asia/Magadan",
				"Asia/Sakhalin",
				"Asia/Srednekolymsk",
				"Asia/Kamchatka",
				"Asia/Anadyr"
			]
		}),
		Object.freeze({
			"iso_3166_1": "RW",
			"zones": [
				"Africa/Maputo"
			]
		}),
		Object.freeze({
			"iso_3166_1": "SA",
			"zones": [
				"Asia/Riyadh"
			]
		}),
		Object.freeze({
			"iso_3166_1": "SB",
			"zones": [
				"Pacific/Guadalcanal"
			]
		}),
		Object.freeze({
			"iso_3166_1": "SC",
			"zones": [
				"Asia/Dubai"
			]
		}),
		Object.freeze({
			"iso_3166_1": "SD",
			"zones": [
				"Africa/Khartoum"
			]
		}),
		Object.freeze({
			"iso_3166_1": "SE",
			"zones": [
				"Europe/Berlin"
			]
		}),
		Object.freeze({
			"iso_3166_1": "SG",
			"zones": [
				"Asia/Singapore"
			]
		}),
		Object.freeze({
			"iso_3166_1": "SH",
			"zones": [
				"Africa/Abidjan"
			]
		}),
		Object.freeze({
			"iso_3166_1": "SI",
			"zones": [
				"Europe/Belgrade"
			]
		}),
		Object.freeze({
			"iso_3166_1": "SJ",
			"zones": [
				"Europe/Berlin"
			]
		}),
		Object.freeze({
			"iso_3166_1": "SK",
			"zones": [
				"Europe/Prague"
			]
		}),
		Object.freeze({
			"iso_3166_1": "SL",
			"zones": [
				"Africa/Abidjan"
			]
		}),
		Object.freeze({
			"iso_3166_1": "SM",
			"zones": [
				"Europe/Rome"
			]
		}),
		Object.freeze({
			"iso_3166_1": "SN",
			"zones": [
				"Africa/Abidjan"
			]
		}),
		Object.freeze({
			"iso_3166_1": "SO",
			"zones": [
				"Africa/Nairobi"
			]
		}),
		Object.freeze({
			"iso_3166_1": "SR",
			"zones": [
				"America/Paramaribo"
			]
		}),
		Object.freeze({
			"iso_3166_1": "SS",
			"zones": [
				"Africa/Juba"
			]
		}),
		Object.freeze({
			"iso_3166_1": "ST",
			"zones": [
				"Africa/Sao_Tome"
			]
		}),
		Object.freeze({
			"iso_3166_1": "SV",
			"zones": [
				"America/El_Salvador"
			]
		}),
		Object.freeze({
			"iso_3166_1": "SX",
			"zones": [
				"America/Puerto_Rico"
			]
		}),
		Object.freeze({
			"iso_3166_1": "SY",
			"zones": [
				"Asia/Damascus"
			]
		}),
		Object.freeze({
			"iso_3166_1": "SZ",
			"zones": [
				"Africa/Johannesburg"
			]
		}),
		Object.freeze({
			"iso_3166_1": "TC",
			"zones": [
				"America/Grand_Turk"
			]
		}),
		Object.freeze({
			"iso_3166_1": "TD",
			"zones": [
				"Africa/Ndjamena"
			]
		}),
		Object.freeze({
			"iso_3166_1": "TF",
			"zones": [
				"Asia/Dubai",
				"Indian/Maldives"
			]
		}),
		Object.freeze({
			"iso_3166_1": "TG",
			"zones": [
				"Africa/Abidjan"
			]
		}),
		Object.freeze({
			"iso_3166_1": "TH",
			"zones": [
				"Asia/Bangkok"
			]
		}),
		Object.freeze({
			"iso_3166_1": "TJ",
			"zones": [
				"Asia/Dushanbe"
			]
		}),
		Object.freeze({
			"iso_3166_1": "TK",
			"zones": [
				"Pacific/Fakaofo"
			]
		}),
		Object.freeze({
			"iso_3166_1": "TL",
			"zones": [
				"Asia/Dili"
			]
		}),
		Object.freeze({
			"iso_3166_1": "TM",
			"zones": [
				"Asia/Ashgabat"
			]
		}),
		Object.freeze({
			"iso_3166_1": "TN",
			"zones": [
				"Africa/Tunis"
			]
		}),
		Object.freeze({
			"iso_3166_1": "TO",
			"zones": [
				"Pacific/Tongatapu"
			]
		}),
		Object.freeze({
			"iso_3166_1": "TR",
			"zones": [
				"Europe/Istanbul"
			]
		}),
		Object.freeze({
			"iso_3166_1": "TT",
			"zones": [
				"America/Puerto_Rico"
			]
		}),
		Object.freeze({
			"iso_3166_1": "TV",
			"zones": [
				"Pacific/Tarawa"
			]
		}),
		Object.freeze({
			"iso_3166_1": "TW",
			"zones": [
				"Asia/Taipei"
			]
		}),
		Object.freeze({
			"iso_3166_1": "TZ",
			"zones": [
				"Africa/Nairobi"
			]
		}),
		Object.freeze({
			"iso_3166_1": "UA",
			"zones": [
				"Europe/Kyiv",
				"Europe/Simferopol"
			]
		}),
		Object.freeze({
			"iso_3166_1": "UG",
			"zones": [
				"Africa/Nairobi"
			]
		}),
		Object.freeze({
			"iso_3166_1": "UM",
			"zones": [
				"Pacific/Pago_Pago",
				"Pacific/Tarawa"
			]
		}),
		Object.freeze({
			"iso_3166_1": "US",
			"zones": [
				"America/New_York",
				"America/Detroit",
				"America/Kentucky/Louisville",
				"America/Kentucky/Monticello",
				"America/Indiana/Indianapolis",
				"America/Indiana/Vincennes",
				"America/Indiana/Winamac",
				"America/Indiana/Marengo",
				"America/Indiana/Petersburg",
				"America/Indiana/Vevay",
				"America/Chicago",
				"America/Indiana/Tell_City",
				"America/Indiana/Knox",
				"America/Menominee",
				"America/North_Dakota/Center",
				"America/North_Dakota/New_Salem",
				"America/North_Dakota/Beulah",
				"America/Denver",
				"America/Boise",
				"America/Phoenix",
				"America/Los_Angeles",
				"America/Anchorage",
				"America/Juneau",
				"America/Sitka",
				"America/Metlakatla",
				"America/Yakutat",
				"America/Nome",
				"America/Adak",
				"Pacific/Honolulu"
			]
		}),
		Object.freeze({
			"iso_3166_1": "UY",
			"zones": [
				"America/Montevideo"
			]
		}),
		Object.freeze({
			"iso_3166_1": "UZ",
			"zones": [
				"Asia/Samarkand",
				"Asia/Tashkent"
			]
		}),
		Object.freeze({
			"iso_3166_1": "VA",
			"zones": [
				"Europe/Rome"
			]
		}),
		Object.freeze({
			"iso_3166_1": "VC",
			"zones": [
				"America/Puerto_Rico"
			]
		}),
		Object.freeze({
			"iso_3166_1": "VE",
			"zones": [
				"America/Caracas"
			]
		}),
		Object.freeze({
			"iso_3166_1": "VG",
			"zones": [
				"America/Puerto_Rico"
			]
		}),
		Object.freeze({
			"iso_3166_1": "VI",
			"zones": [
				"America/Puerto_Rico"
			]
		}),
		Object.freeze({
			"iso_3166_1": "VN",
			"zones": [
				"Asia/Ho_Chi_Minh",
				"Asia/Bangkok"
			]
		}),
		Object.freeze({
			"iso_3166_1": "VU",
			"zones": [
				"Pacific/Efate"
			]
		}),
		Object.freeze({
			"iso_3166_1": "WF",
			"zones": [
				"Pacific/Tarawa"
			]
		}),
		Object.freeze({
			"iso_3166_1": "WS",
			"zones": [
				"Pacific/Apia"
			]
		}),
		Object.freeze({
			"iso_3166_1": "YE",
			"zones": [
				"Asia/Riyadh"
			]
		}),
		Object.freeze({
			"iso_3166_1": "YT",
			"zones": [
				"Africa/Nairobi"
			]
		}),
		Object.freeze({
			"iso_3166_1": "ZA",
			"zones": [
				"Africa/Johannesburg"
			]
		}),
		Object.freeze({
			"iso_3166_1": "ZM",
			"zones": [
				"Africa/Maputo"
			]
		}),
		Object.freeze({
			"iso_3166_1": "ZW",
			"zones": [
				"Africa/Maputo"
			]
		})
	])
}) as TMDBConfigurationConst

type TMDBConfigurationConst = Readonly<{
	/**
	 * API configuration details.
	 * 
	 * @link https://developer.themoviedb.org/reference/configuration-details
	 */
	details: Readonly<{
		images: Readonly<{
			base_url: "http://image.tmdb.org/t/p/"
			secure_base_url: "https://image.tmdb.org/t/p/"
			backdrop_sizes: [ "w300", "w780", "w1280", "original" ]
			logo_sizes: [ "w45", "w92", "w154", "w185", "w300", "w500", "original" ]
			poster_sizes: [ "w92", "w154", "w185", "w342", "w500", "w780", "original" ]
			profile_sizes: [ "w45", "w185", "h632", "original" ]
			still_sizes: [ "w92", "w185", "w300", "original" ]
		}>
		change_keys: [
			"adult",
			"air_date",
			"also_known_as",
			"alternative_titles",
			"biography",
			"birthday",
			"budget",
			"cast",
			"certifications",
			"character_names",
			"created_by",
			"crew",
			"deathday",
			"episode",
			"episode_number",
			"episode_run_time",
			"freebase_id",
			"freebase_mid",
			"general",
			"genres",
			"guest_stars",
			"homepage",
			"images",
			"imdb_id",
			"languages",
			"name",
			"network",
			"origin_country",
			"original_name",
			"original_title",
			"overview",
			"parts",
			"place_of_birth",
			"plot_keywords",
			"production_code",
			"production_companies",
			"production_countries",
			"releases",
			"revenue",
			"runtime",
			"season",
			"season_number",
			"season_regular",
			"spoken_languages",
			"status",
			"tagline",
			"title",
			"translations",
			"tvdb_id",
			"tvrage_id",
			"type",
			"video",
			"videos",
		]
	}>
	/**
	 * List of countries (ISO 3166-1 tags) used throughout TMDB.
	 *
	 * uses `"en-US"` as the language
	 *
	 * @link https://developer.themoviedb.org/reference/configuration-countries
	 */
	countries: Readonly<
		[
			Readonly<{
				iso_3166_1: "AD"
				english_name: "Andorra"
				native_name: "Andorra"
			}>,
			Readonly<{
				iso_3166_1: "AE"
				english_name: "United Arab Emirates"
				native_name: "United Arab Emirates"
			}>,
			Readonly<{
				iso_3166_1: "AF"
				english_name: "Afghanistan"
				native_name: "Afghanistan"
			}>,
			Readonly<{
				iso_3166_1: "AG"
				english_name: "Antigua and Barbuda"
				native_name: "Antigua & Barbuda"
			}>,
			Readonly<{
				iso_3166_1: "AI"
				english_name: "Anguilla"
				native_name: "Anguilla"
			}>,
			Readonly<{
				iso_3166_1: "AL"
				english_name: "Albania"
				native_name: "Albania"
			}>,
			Readonly<{
				iso_3166_1: "AM"
				english_name: "Armenia"
				native_name: "Armenia"
			}>,
			Readonly<{
				iso_3166_1: "AN"
				english_name: "Netherlands Antilles"
				native_name: "Netherlands Antilles"
			}>,
			Readonly<{
				iso_3166_1: "AO"
				english_name: "Angola"
				native_name: "Angola"
			}>,
			Readonly<{
				iso_3166_1: "AQ"
				english_name: "Antarctica"
				native_name: "Antarctica"
			}>,
			Readonly<{
				iso_3166_1: "AR"
				english_name: "Argentina"
				native_name: "Argentina"
			}>,
			Readonly<{
				iso_3166_1: "AS"
				english_name: "American Samoa"
				native_name: "American Samoa"
			}>,
			Readonly<{
				iso_3166_1: "AT"
				english_name: "Austria"
				native_name: "Austria"
			}>,
			Readonly<{
				iso_3166_1: "AU"
				english_name: "Australia"
				native_name: "Australia"
			}>,
			Readonly<{
				iso_3166_1: "AW"
				english_name: "Aruba"
				native_name: "Aruba"
			}>,
			Readonly<{
				iso_3166_1: "AZ"
				english_name: "Azerbaijan"
				native_name: "Azerbaijan"
			}>,
			Readonly<{
				iso_3166_1: "BA"
				english_name: "Bosnia and Herzegovina"
				native_name: "Bosnia & Herzegovina"
			}>,
			Readonly<{
				iso_3166_1: "BB"
				english_name: "Barbados"
				native_name: "Barbados"
			}>,
			Readonly<{
				iso_3166_1: "BD"
				english_name: "Bangladesh"
				native_name: "Bangladesh"
			}>,
			Readonly<{
				iso_3166_1: "BE"
				english_name: "Belgium"
				native_name: "Belgium"
			}>,
			Readonly<{
				iso_3166_1: "BF"
				english_name: "Burkina Faso"
				native_name: "Burkina Faso"
			}>,
			Readonly<{
				iso_3166_1: "BG"
				english_name: "Bulgaria"
				native_name: "Bulgaria"
			}>,
			Readonly<{
				iso_3166_1: "BH"
				english_name: "Bahrain"
				native_name: "Bahrain"
			}>,
			Readonly<{
				iso_3166_1: "BI"
				english_name: "Burundi"
				native_name: "Burundi"
			}>,
			Readonly<{
				iso_3166_1: "BJ"
				english_name: "Benin"
				native_name: "Benin"
			}>,
			Readonly<{
				iso_3166_1: "BM"
				english_name: "Bermuda"
				native_name: "Bermuda"
			}>,
			Readonly<{
				iso_3166_1: "BN"
				english_name: "Brunei Darussalam"
				native_name: "Brunei"
			}>,
			Readonly<{
				iso_3166_1: "BO"
				english_name: "Bolivia"
				native_name: "Bolivia"
			}>,
			Readonly<{
				iso_3166_1: "BR"
				english_name: "Brazil"
				native_name: "Brazil"
			}>,
			Readonly<{
				iso_3166_1: "BS"
				english_name: "Bahamas"
				native_name: "Bahamas"
			}>,
			Readonly<{
				iso_3166_1: "BT"
				english_name: "Bhutan"
				native_name: "Bhutan"
			}>,
			Readonly<{
				iso_3166_1: "BU"
				english_name: "Burma"
				native_name: "Burma"
			}>,
			Readonly<{
				iso_3166_1: "BV"
				english_name: "Bouvet Island"
				native_name: "Bouvet Island"
			}>,
			Readonly<{
				iso_3166_1: "BW"
				english_name: "Botswana"
				native_name: "Botswana"
			}>,
			Readonly<{
				iso_3166_1: "BY"
				english_name: "Belarus"
				native_name: "Belarus"
			}>,
			Readonly<{
				iso_3166_1: "BZ"
				english_name: "Belize"
				native_name: "Belize"
			}>,
			Readonly<{
				iso_3166_1: "CA"
				english_name: "Canada"
				native_name: "Canada"
			}>,
			Readonly<{
				iso_3166_1: "CC"
				english_name: "Cocos  Islands"
				native_name: "Cocos (Keeling) Islands"
			}>,
			Readonly<{
				iso_3166_1: "CD"
				english_name: "Congo"
				native_name: "Democratic Republic of the Congo (Kinshasa)"
			}>,
			Readonly<{
				iso_3166_1: "CF"
				english_name: "Central African Republic"
				native_name: "Central African Republic"
			}>,
			Readonly<{
				iso_3166_1: "CG"
				english_name: "Congo"
				native_name: "Republic of the Congo (Brazzaville)"
			}>,
			Readonly<{
				iso_3166_1: "CH"
				english_name: "Switzerland"
				native_name: "Switzerland"
			}>,
			Readonly<{
				iso_3166_1: "CI"
				english_name: "Cote D'Ivoire"
				native_name: "Côte d’Ivoire"
			}>,
			Readonly<{
				iso_3166_1: "CK"
				english_name: "Cook Islands"
				native_name: "Cook Islands"
			}>,
			Readonly<{
				iso_3166_1: "CL"
				english_name: "Chile"
				native_name: "Chile"
			}>,
			Readonly<{
				iso_3166_1: "CM"
				english_name: "Cameroon"
				native_name: "Cameroon"
			}>,
			Readonly<{
				iso_3166_1: "CN"
				english_name: "China"
				native_name: "China"
			}>,
			Readonly<{
				iso_3166_1: "CO"
				english_name: "Colombia"
				native_name: "Colombia"
			}>,
			Readonly<{
				iso_3166_1: "CR"
				english_name: "Costa Rica"
				native_name: "Costa Rica"
			}>,
			Readonly<{
				iso_3166_1: "CS"
				english_name: "Serbia and Montenegro"
				native_name: "Serbia and Montenegro"
			}>,
			Readonly<{
				iso_3166_1: "CU"
				english_name: "Cuba"
				native_name: "Cuba"
			}>,
			Readonly<{
				iso_3166_1: "CV"
				english_name: "Cape Verde"
				native_name: "Cape Verde"
			}>,
			Readonly<{
				iso_3166_1: "CX"
				english_name: "Christmas Island"
				native_name: "Christmas Island"
			}>,
			Readonly<{
				iso_3166_1: "CY"
				english_name: "Cyprus"
				native_name: "Cyprus"
			}>,
			Readonly<{
				iso_3166_1: "CZ"
				english_name: "Czech Republic"
				native_name: "Czech Republic"
			}>,
			Readonly<{
				iso_3166_1: "DE"
				english_name: "Germany"
				native_name: "Germany"
			}>,
			Readonly<{
				iso_3166_1: "DJ"
				english_name: "Djibouti"
				native_name: "Djibouti"
			}>,
			Readonly<{
				iso_3166_1: "DK"
				english_name: "Denmark"
				native_name: "Denmark"
			}>,
			Readonly<{
				iso_3166_1: "DM"
				english_name: "Dominica"
				native_name: "Dominica"
			}>,
			Readonly<{
				iso_3166_1: "DO"
				english_name: "Dominican Republic"
				native_name: "Dominican Republic"
			}>,
			Readonly<{
				iso_3166_1: "DZ"
				english_name: "Algeria"
				native_name: "Algeria"
			}>,
			Readonly<{
				iso_3166_1: "EC"
				english_name: "Ecuador"
				native_name: "Ecuador"
			}>,
			Readonly<{
				iso_3166_1: "EE"
				english_name: "Estonia"
				native_name: "Estonia"
			}>,
			Readonly<{
				iso_3166_1: "EG"
				english_name: "Egypt"
				native_name: "Egypt"
			}>,
			Readonly<{
				iso_3166_1: "EH"
				english_name: "Western Sahara"
				native_name: "Western Sahara"
			}>,
			Readonly<{
				iso_3166_1: "ER"
				english_name: "Eritrea"
				native_name: "Eritrea"
			}>,
			Readonly<{
				iso_3166_1: "ES"
				english_name: "Spain"
				native_name: "Spain"
			}>,
			Readonly<{
				iso_3166_1: "ET"
				english_name: "Ethiopia"
				native_name: "Ethiopia"
			}>,
			Readonly<{
				iso_3166_1: "FI"
				english_name: "Finland"
				native_name: "Finland"
			}>,
			Readonly<{
				iso_3166_1: "FJ"
				english_name: "Fiji"
				native_name: "Fiji"
			}>,
			Readonly<{
				iso_3166_1: "FK"
				english_name: "Falkland Islands"
				native_name: "Falkland Islands"
			}>,
			Readonly<{
				iso_3166_1: "FM"
				english_name: "Micronesia"
				native_name: "Micronesia"
			}>,
			Readonly<{
				iso_3166_1: "FO"
				english_name: "Faeroe Islands"
				native_name: "Faroe Islands"
			}>,
			Readonly<{
				iso_3166_1: "FR"
				english_name: "France"
				native_name: "France"
			}>,
			Readonly<{
				iso_3166_1: "GA"
				english_name: "Gabon"
				native_name: "Gabon"
			}>,
			Readonly<{
				iso_3166_1: "GB"
				english_name: "United Kingdom"
				native_name: "United Kingdom"
			}>,
			Readonly<{
				iso_3166_1: "GD"
				english_name: "Grenada"
				native_name: "Grenada"
			}>,
			Readonly<{
				iso_3166_1: "GE"
				english_name: "Georgia"
				native_name: "Georgia"
			}>,
			Readonly<{
				iso_3166_1: "GF"
				english_name: "French Guiana"
				native_name: "French Guiana"
			}>,
			Readonly<{
				iso_3166_1: "GH"
				english_name: "Ghana"
				native_name: "Ghana"
			}>,
			Readonly<{
				iso_3166_1: "GI"
				english_name: "Gibraltar"
				native_name: "Gibraltar"
			}>,
			Readonly<{
				iso_3166_1: "GL"
				english_name: "Greenland"
				native_name: "Greenland"
			}>,
			Readonly<{
				iso_3166_1: "GM"
				english_name: "Gambia"
				native_name: "Gambia"
			}>,
			Readonly<{
				iso_3166_1: "GN"
				english_name: "Guinea"
				native_name: "Guinea"
			}>,
			Readonly<{
				iso_3166_1: "GP"
				english_name: "Guadaloupe"
				native_name: "Guadeloupe"
			}>,
			Readonly<{
				iso_3166_1: "GQ"
				english_name: "Equatorial Guinea"
				native_name: "Equatorial Guinea"
			}>,
			Readonly<{
				iso_3166_1: "GR"
				english_name: "Greece"
				native_name: "Greece"
			}>,
			Readonly<{
				iso_3166_1: "GS"
				english_name: "South Georgia and the South Sandwich Islands"
				native_name: "South Georgia & South Sandwich Islands"
			}>,
			Readonly<{
				iso_3166_1: "GT"
				english_name: "Guatemala"
				native_name: "Guatemala"
			}>,
			Readonly<{
				iso_3166_1: "GU"
				english_name: "Guam"
				native_name: "Guam"
			}>,
			Readonly<{
				iso_3166_1: "GW"
				english_name: "Guinea-Bissau"
				native_name: "Guinea-Bissau"
			}>,
			Readonly<{
				iso_3166_1: "GY"
				english_name: "Guyana"
				native_name: "Guyana"
			}>,
			Readonly<{
				iso_3166_1: "HK"
				english_name: "Hong Kong"
				native_name: "Hong Kong SAR China"
			}>,
			Readonly<{
				iso_3166_1: "HM"
				english_name: "Heard and McDonald Islands"
				native_name: "Heard & McDonald Islands"
			}>,
			Readonly<{
				iso_3166_1: "HN"
				english_name: "Honduras"
				native_name: "Honduras"
			}>,
			Readonly<{
				iso_3166_1: "HR"
				english_name: "Croatia"
				native_name: "Croatia"
			}>,
			Readonly<{
				iso_3166_1: "HT"
				english_name: "Haiti"
				native_name: "Haiti"
			}>,
			Readonly<{
				iso_3166_1: "HU"
				english_name: "Hungary"
				native_name: "Hungary"
			}>,
			Readonly<{
				iso_3166_1: "ID"
				english_name: "Indonesia"
				native_name: "Indonesia"
			}>,
			Readonly<{
				iso_3166_1: "IE"
				english_name: "Ireland"
				native_name: "Ireland"
			}>,
			Readonly<{
				iso_3166_1: "IL"
				english_name: "Israel"
				native_name: "Israel"
			}>,
			Readonly<{
				iso_3166_1: "IN"
				english_name: "India"
				native_name: "India"
			}>,
			Readonly<{
				iso_3166_1: "IO"
				english_name: "British Indian Ocean Territory"
				native_name: "British Indian Ocean Territory"
			}>,
			Readonly<{
				iso_3166_1: "IQ"
				english_name: "Iraq"
				native_name: "Iraq"
			}>,
			Readonly<{
				iso_3166_1: "IR"
				english_name: "Iran"
				native_name: "Iran"
			}>,
			Readonly<{
				iso_3166_1: "IS"
				english_name: "Iceland"
				native_name: "Iceland"
			}>,
			Readonly<{
				iso_3166_1: "IT"
				english_name: "Italy"
				native_name: "Italy"
			}>,
			Readonly<{
				iso_3166_1: "JM"
				english_name: "Jamaica"
				native_name: "Jamaica"
			}>,
			Readonly<{
				iso_3166_1: "JO"
				english_name: "Jordan"
				native_name: "Jordan"
			}>,
			Readonly<{
				iso_3166_1: "JP"
				english_name: "Japan"
				native_name: "Japan"
			}>,
			Readonly<{
				iso_3166_1: "KE"
				english_name: "Kenya"
				native_name: "Kenya"
			}>,
			Readonly<{
				iso_3166_1: "KG"
				english_name: "Kyrgyz Republic"
				native_name: "Kyrgyzstan"
			}>,
			Readonly<{
				iso_3166_1: "KH"
				english_name: "Cambodia"
				native_name: "Cambodia"
			}>,
			Readonly<{
				iso_3166_1: "KI"
				english_name: "Kiribati"
				native_name: "Kiribati"
			}>,
			Readonly<{
				iso_3166_1: "KM"
				english_name: "Comoros"
				native_name: "Comoros"
			}>,
			Readonly<{
				iso_3166_1: "KN"
				english_name: "St. Kitts and Nevis"
				native_name: "St. Kitts & Nevis"
			}>,
			Readonly<{
				iso_3166_1: "KP"
				english_name: "North Korea"
				native_name: "North Korea"
			}>,
			Readonly<{
				iso_3166_1: "KR"
				english_name: "South Korea"
				native_name: "South Korea"
			}>,
			Readonly<{
				iso_3166_1: "KW"
				english_name: "Kuwait"
				native_name: "Kuwait"
			}>,
			Readonly<{
				iso_3166_1: "KY"
				english_name: "Cayman Islands"
				native_name: "Cayman Islands"
			}>,
			Readonly<{
				iso_3166_1: "KZ"
				english_name: "Kazakhstan"
				native_name: "Kazakhstan"
			}>,
			Readonly<{
				iso_3166_1: "LA"
				english_name: "Lao People's Democratic Republic"
				native_name: "Laos"
			}>,
			Readonly<{
				iso_3166_1: "LB"
				english_name: "Lebanon"
				native_name: "Lebanon"
			}>,
			Readonly<{
				iso_3166_1: "LC"
				english_name: "St. Lucia"
				native_name: "St. Lucia"
			}>,
			Readonly<{
				iso_3166_1: "LI"
				english_name: "Liechtenstein"
				native_name: "Liechtenstein"
			}>,
			Readonly<{
				iso_3166_1: "LK"
				english_name: "Sri Lanka"
				native_name: "Sri Lanka"
			}>,
			Readonly<{
				iso_3166_1: "LR"
				english_name: "Liberia"
				native_name: "Liberia"
			}>,
			Readonly<{
				iso_3166_1: "LS"
				english_name: "Lesotho"
				native_name: "Lesotho"
			}>,
			Readonly<{
				iso_3166_1: "LT"
				english_name: "Lithuania"
				native_name: "Lithuania"
			}>,
			Readonly<{
				iso_3166_1: "LU"
				english_name: "Luxembourg"
				native_name: "Luxembourg"
			}>,
			Readonly<{
				iso_3166_1: "LV"
				english_name: "Latvia"
				native_name: "Latvia"
			}>,
			Readonly<{
				iso_3166_1: "LY"
				english_name: "Libyan Arab Jamahiriya"
				native_name: "Libya"
			}>,
			Readonly<{
				iso_3166_1: "MA"
				english_name: "Morocco"
				native_name: "Morocco"
			}>,
			Readonly<{
				iso_3166_1: "MC"
				english_name: "Monaco"
				native_name: "Monaco"
			}>,
			Readonly<{
				iso_3166_1: "MD"
				english_name: "Moldova"
				native_name: "Moldova"
			}>,
			Readonly<{
				iso_3166_1: "ME"
				english_name: "Montenegro"
				native_name: "Montenegro"
			}>,
			Readonly<{
				iso_3166_1: "MG"
				english_name: "Madagascar"
				native_name: "Madagascar"
			}>,
			Readonly<{
				iso_3166_1: "MH"
				english_name: "Marshall Islands"
				native_name: "Marshall Islands"
			}>,
			Readonly<{
				iso_3166_1: "MK"
				english_name: "Macedonia"
				native_name: "Macedonia"
			}>,
			Readonly<{
				iso_3166_1: "ML"
				english_name: "Mali"
				native_name: "Mali"
			}>,
			Readonly<{
				iso_3166_1: "MM"
				english_name: "Myanmar"
				native_name: "Myanmar (Burma)"
			}>,
			Readonly<{
				iso_3166_1: "MN"
				english_name: "Mongolia"
				native_name: "Mongolia"
			}>,
			Readonly<{
				iso_3166_1: "MO"
				english_name: "Macao"
				native_name: "Macau SAR China"
			}>,
			Readonly<{
				iso_3166_1: "MP"
				english_name: "Northern Mariana Islands"
				native_name: "Northern Mariana Islands"
			}>,
			Readonly<{
				iso_3166_1: "MQ"
				english_name: "Martinique"
				native_name: "Martinique"
			}>,
			Readonly<{
				iso_3166_1: "MR"
				english_name: "Mauritania"
				native_name: "Mauritania"
			}>,
			Readonly<{
				iso_3166_1: "MS"
				english_name: "Montserrat"
				native_name: "Montserrat"
			}>,
			Readonly<{
				iso_3166_1: "MT"
				english_name: "Malta"
				native_name: "Malta"
			}>,
			Readonly<{
				iso_3166_1: "MU"
				english_name: "Mauritius"
				native_name: "Mauritius"
			}>,
			Readonly<{
				iso_3166_1: "MV"
				english_name: "Maldives"
				native_name: "Maldives"
			}>,
			Readonly<{
				iso_3166_1: "MW"
				english_name: "Malawi"
				native_name: "Malawi"
			}>,
			Readonly<{
				iso_3166_1: "MX"
				english_name: "Mexico"
				native_name: "Mexico"
			}>,
			Readonly<{
				iso_3166_1: "MY"
				english_name: "Malaysia"
				native_name: "Malaysia"
			}>,
			Readonly<{
				iso_3166_1: "MZ"
				english_name: "Mozambique"
				native_name: "Mozambique"
			}>,
			Readonly<{
				iso_3166_1: "NA"
				english_name: "Namibia"
				native_name: "Namibia"
			}>,
			Readonly<{
				iso_3166_1: "NC"
				english_name: "New Caledonia"
				native_name: "New Caledonia"
			}>,
			Readonly<{
				iso_3166_1: "NE"
				english_name: "Niger"
				native_name: "Niger"
			}>,
			Readonly<{
				iso_3166_1: "NF"
				english_name: "Norfolk Island"
				native_name: "Norfolk Island"
			}>,
			Readonly<{
				iso_3166_1: "NG"
				english_name: "Nigeria"
				native_name: "Nigeria"
			}>,
			Readonly<{
				iso_3166_1: "NI"
				english_name: "Nicaragua"
				native_name: "Nicaragua"
			}>,
			Readonly<{
				iso_3166_1: "NL"
				english_name: "Netherlands"
				native_name: "Netherlands"
			}>,
			Readonly<{
				iso_3166_1: "NO"
				english_name: "Norway"
				native_name: "Norway"
			}>,
			Readonly<{
				iso_3166_1: "NP"
				english_name: "Nepal"
				native_name: "Nepal"
			}>,
			Readonly<{
				iso_3166_1: "NR"
				english_name: "Nauru"
				native_name: "Nauru"
			}>,
			Readonly<{
				iso_3166_1: "NU"
				english_name: "Niue"
				native_name: "Niue"
			}>,
			Readonly<{
				iso_3166_1: "NZ"
				english_name: "New Zealand"
				native_name: "New Zealand"
			}>,
			Readonly<{
				iso_3166_1: "OM"
				english_name: "Oman"
				native_name: "Oman"
			}>,
			Readonly<{
				iso_3166_1: "PA"
				english_name: "Panama"
				native_name: "Panama"
			}>,
			Readonly<{
				iso_3166_1: "PE"
				english_name: "Peru"
				native_name: "Peru"
			}>,
			Readonly<{
				iso_3166_1: "PF"
				english_name: "French Polynesia"
				native_name: "French Polynesia"
			}>,
			Readonly<{
				iso_3166_1: "PG"
				english_name: "Papua New Guinea"
				native_name: "Papua New Guinea"
			}>,
			Readonly<{
				iso_3166_1: "PH"
				english_name: "Philippines"
				native_name: "Philippines"
			}>,
			Readonly<{
				iso_3166_1: "PK"
				english_name: "Pakistan"
				native_name: "Pakistan"
			}>,
			Readonly<{
				iso_3166_1: "PL"
				english_name: "Poland"
				native_name: "Poland"
			}>,
			Readonly<{
				iso_3166_1: "PM"
				english_name: "St. Pierre and Miquelon"
				native_name: "St. Pierre & Miquelon"
			}>,
			Readonly<{
				iso_3166_1: "PN"
				english_name: "Pitcairn Island"
				native_name: "Pitcairn Islands"
			}>,
			Readonly<{
				iso_3166_1: "PR"
				english_name: "Puerto Rico"
				native_name: "Puerto Rico"
			}>,
			Readonly<{
				iso_3166_1: "PS"
				english_name: "Palestinian Territory"
				native_name: "Palestinian Territories"
			}>,
			Readonly<{
				iso_3166_1: "PT"
				english_name: "Portugal"
				native_name: "Portugal"
			}>,
			Readonly<{
				iso_3166_1: "PW"
				english_name: "Palau"
				native_name: "Palau"
			}>,
			Readonly<{
				iso_3166_1: "PY"
				english_name: "Paraguay"
				native_name: "Paraguay"
			}>,
			Readonly<{
				iso_3166_1: "QA"
				english_name: "Qatar"
				native_name: "Qatar"
			}>,
			Readonly<{
				iso_3166_1: "RE"
				english_name: "Reunion"
				native_name: "Réunion"
			}>,
			Readonly<{
				iso_3166_1: "RO"
				english_name: "Romania"
				native_name: "Romania"
			}>,
			Readonly<{
				iso_3166_1: "RS"
				english_name: "Serbia"
				native_name: "Serbia"
			}>,
			Readonly<{
				iso_3166_1: "RU"
				english_name: "Russia"
				native_name: "Russia"
			}>,
			Readonly<{
				iso_3166_1: "RW"
				english_name: "Rwanda"
				native_name: "Rwanda"
			}>,
			Readonly<{
				iso_3166_1: "SA"
				english_name: "Saudi Arabia"
				native_name: "Saudi Arabia"
			}>,
			Readonly<{
				iso_3166_1: "SB"
				english_name: "Solomon Islands"
				native_name: "Solomon Islands"
			}>,
			Readonly<{
				iso_3166_1: "SC"
				english_name: "Seychelles"
				native_name: "Seychelles"
			}>,
			Readonly<{
				iso_3166_1: "SD"
				english_name: "Sudan"
				native_name: "Sudan"
			}>,
			Readonly<{
				iso_3166_1: "SE"
				english_name: "Sweden"
				native_name: "Sweden"
			}>,
			Readonly<{
				iso_3166_1: "SG"
				english_name: "Singapore"
				native_name: "Singapore"
			}>,
			Readonly<{
				iso_3166_1: "SH"
				english_name: "St. Helena"
				native_name: "St. Helena"
			}>,
			Readonly<{
				iso_3166_1: "SI"
				english_name: "Slovenia"
				native_name: "Slovenia"
			}>,
			Readonly<{
				iso_3166_1: "SJ"
				english_name: "Svalbard & Jan Mayen Islands"
				native_name: "Svalbard & Jan Mayen"
			}>,
			Readonly<{
				iso_3166_1: "SK"
				english_name: "Slovakia"
				native_name: "Slovakia"
			}>,
			Readonly<{
				iso_3166_1: "SL"
				english_name: "Sierra Leone"
				native_name: "Sierra Leone"
			}>,
			Readonly<{
				iso_3166_1: "SM"
				english_name: "San Marino"
				native_name: "San Marino"
			}>,
			Readonly<{
				iso_3166_1: "SN"
				english_name: "Senegal"
				native_name: "Senegal"
			}>,
			Readonly<{
				iso_3166_1: "SO"
				english_name: "Somalia"
				native_name: "Somalia"
			}>,
			Readonly<{
				iso_3166_1: "SR"
				english_name: "Suriname"
				native_name: "Suriname"
			}>,
			Readonly<{
				iso_3166_1: "SS"
				english_name: "South Sudan"
				native_name: "South Sudan"
			}>,
			Readonly<{
				iso_3166_1: "ST"
				english_name: "Sao Tome and Principe"
				native_name: "São Tomé & Príncipe"
			}>,
			Readonly<{
				iso_3166_1: "SU"
				english_name: "Soviet Union"
				native_name: "Soviet Union"
			}>,
			Readonly<{
				iso_3166_1: "SV"
				english_name: "El Salvador"
				native_name: "El Salvador"
			}>,
			Readonly<{
				iso_3166_1: "SY"
				english_name: "Syrian Arab Republic"
				native_name: "Syria"
			}>,
			Readonly<{
				iso_3166_1: "SZ"
				english_name: "Swaziland"
				native_name: "Eswatini (Swaziland)"
			}>,
			Readonly<{
				iso_3166_1: "TC"
				english_name: "Turks and Caicos Islands"
				native_name: "Turks & Caicos Islands"
			}>,
			Readonly<{
				iso_3166_1: "TD"
				english_name: "Chad"
				native_name: "Chad"
			}>,
			Readonly<{
				iso_3166_1: "TF"
				english_name: "French Southern Territories"
				native_name: "French Southern Territories"
			}>,
			Readonly<{
				iso_3166_1: "TG"
				english_name: "Togo"
				native_name: "Togo"
			}>,
			Readonly<{
				iso_3166_1: "TH"
				english_name: "Thailand"
				native_name: "Thailand"
			}>,
			Readonly<{
				iso_3166_1: "TJ"
				english_name: "Tajikistan"
				native_name: "Tajikistan"
			}>,
			Readonly<{
				iso_3166_1: "TK"
				english_name: "Tokelau"
				native_name: "Tokelau"
			}>,
			Readonly<{
				iso_3166_1: "TL"
				english_name: "Timor-Leste"
				native_name: "Timor-Leste"
			}>,
			Readonly<{
				iso_3166_1: "TM"
				english_name: "Turkmenistan"
				native_name: "Turkmenistan"
			}>,
			Readonly<{
				iso_3166_1: "TN"
				english_name: "Tunisia"
				native_name: "Tunisia"
			}>,
			Readonly<{
				iso_3166_1: "TO"
				english_name: "Tonga"
				native_name: "Tonga"
			}>,
			Readonly<{
				iso_3166_1: "TP"
				english_name: "East Timor"
				native_name: "East Timor"
			}>,
			Readonly<{
				iso_3166_1: "TR"
				english_name: "Turkey"
				native_name: "Turkey"
			}>,
			Readonly<{
				iso_3166_1: "TT"
				english_name: "Trinidad and Tobago"
				native_name: "Trinidad & Tobago"
			}>,
			Readonly<{
				iso_3166_1: "TV"
				english_name: "Tuvalu"
				native_name: "Tuvalu"
			}>,
			Readonly<{
				iso_3166_1: "TW"
				english_name: "Taiwan"
				native_name: "Taiwan"
			}>,
			Readonly<{
				iso_3166_1: "TZ"
				english_name: "Tanzania"
				native_name: "Tanzania"
			}>,
			Readonly<{
				iso_3166_1: "UA"
				english_name: "Ukraine"
				native_name: "Ukraine"
			}>,
			Readonly<{
				iso_3166_1: "UG"
				english_name: "Uganda"
				native_name: "Uganda"
			}>,
			Readonly<{
				iso_3166_1: "UM"
				english_name: "United States Minor Outlying Islands"
				native_name: "U.S. Outlying Islands"
			}>,
			Readonly<{
				iso_3166_1: "US"
				english_name: "United States of America"
				native_name: "United States"
			}>,
			Readonly<{
				iso_3166_1: "UY"
				english_name: "Uruguay"
				native_name: "Uruguay"
			}>,
			Readonly<{
				iso_3166_1: "UZ"
				english_name: "Uzbekistan"
				native_name: "Uzbekistan"
			}>,
			Readonly<{
				iso_3166_1: "VA"
				english_name: "Holy See"
				native_name: "Vatican City"
			}>,
			Readonly<{
				iso_3166_1: "VC"
				english_name: "St. Vincent and the Grenadines"
				native_name: "St. Vincent & Grenadines"
			}>,
			Readonly<{
				iso_3166_1: "VE"
				english_name: "Venezuela"
				native_name: "Venezuela"
			}>,
			Readonly<{
				iso_3166_1: "VG"
				english_name: "British Virgin Islands"
				native_name: "British Virgin Islands"
			}>,
			Readonly<{
				iso_3166_1: "VI"
				english_name: "US Virgin Islands"
				native_name: "U.S. Virgin Islands"
			}>,
			Readonly<{
				iso_3166_1: "VN"
				english_name: "Vietnam"
				native_name: "Vietnam"
			}>,
			Readonly<{
				iso_3166_1: "VU"
				english_name: "Vanuatu"
				native_name: "Vanuatu"
			}>,
			Readonly<{
				iso_3166_1: "WF"
				english_name: "Wallis and Futuna Islands"
				native_name: "Wallis & Futuna"
			}>,
			Readonly<{
				iso_3166_1: "WS"
				english_name: "Samoa"
				native_name: "Samoa"
			}>,
			Readonly<{
				iso_3166_1: "XC"
				english_name: "Czechoslovakia"
				native_name: "Czechoslovakia"
			}>,
			Readonly<{
				iso_3166_1: "XG"
				english_name: "East Germany"
				native_name: "East Germany"
			}>,
			Readonly<{
				iso_3166_1: "XI"
				english_name: "Northern Ireland"
				native_name: "Northern Ireland"
			}>,
			Readonly<{
				iso_3166_1: "XK"
				english_name: "Kosovo"
				native_name: "Kosovo"
			}>,
			Readonly<{
				iso_3166_1: "YE"
				english_name: "Yemen"
				native_name: "Yemen"
			}>,
			Readonly<{
				iso_3166_1: "YT"
				english_name: "Mayotte"
				native_name: "Mayotte"
			}>,
			Readonly<{
				iso_3166_1: "YU"
				english_name: "Yugoslavia"
				native_name: "Yugoslavia"
			}>,
			Readonly<{
				iso_3166_1: "ZA"
				english_name: "South Africa"
				native_name: "South Africa"
			}>,
			Readonly<{
				iso_3166_1: "ZM"
				english_name: "Zambia"
				native_name: "Zambia"
			}>,
			Readonly<{
				iso_3166_1: "ZR"
				english_name: "Zaire"
				native_name: "Zaire"
			}>,
			Readonly<{
				iso_3166_1: "ZW"
				english_name: "Zimbabwe"
				native_name: "Zimbabwe"
			}>,
		]
	>
	/**
	 * List of the jobs and departments we use on TMDB.
	 * 
	 * @link https://developer.themoviedb.org/reference/configuration-jobs
	 */
	jobs: Readonly<
		[
			Readonly<{
				department: "Crew"
				jobs: [
					"Special Effects",
					"Post Production Supervisor",
					"Second Unit",
					"Choreographer",
					"Stunts",
					"Stunt Coordinator",
					"Special Effects Coordinator",
					"Supervising Technical Director",
					"Supervising Animator",
					"Production Artist",
					"Sequence Lead",
					"Second Film Editor",
					"Temp Music Editor",
					"Temp Sound Editor",
					"Sequence Supervisor",
					"Software Team Lead",
					"Software Engineer",
					"Documentation & Support",
					"Machinist",
					"Photoscience Manager",
					"Department Administrator",
					"Schedule Coordinator",
					"Supervisor of Production Resources",
					"Production Office Assistant",
					"Information Systems Manager",
					"Systems Administrators & Support",
					"Projection",
					"Post Production Assistant",
					"Sound Design Assistant",
					"Mix Technician",
					"Motion Actor",
					"Sets & Props Supervisor",
					"Compositor",
					"Tattooist",
					"Sets & Props Artist",
					"Motion Capture Artist",
					"Sequence Artist",
					"Mixing Engineer",
					"Special Sound Effects",
					"Post-Production Manager",
					"Dialect Coach",
					"Picture Car Coordinator",
					"Cableman",
					"Set Production Assistant",
					"Video Assist Operator",
					"Unit Publicist",
					"Set Medic",
					"Stand In",
					"Transportation Coordinator",
					"Transportation Captain",
					"Post Production Consulting",
					"Production Intern",
					"Utility Stunts",
					"Actor's Assistant",
					"Set Production Intern",
					"Production Controller",
					"Studio Teacher",
					"Chef",
					"Craft Service",
					"Scenic Artist",
					"Propmaker",
					"Prop Maker",
					"Transportation Co-Captain",
					"Driver",
					"Security",
					"Second Unit Cinematographer",
					"Loader",
					"Manager of Operations",
					"Quality Control Supervisor",
					"Legal Services",
					"Public Relations",
					"Score Engineer",
					"Translator",
					"Title Graphics",
					"Telecine Colorist",
					"Animatronic and Prosthetic Effects",
					"Martial Arts Choreographer",
					"Cinematography",
					"Steadycam",
					"Executive Visual Effects Producer",
					"Visual Effects Design Consultant",
					"Digital Effects Supervisor",
					"Digital Producer",
					"CG Supervisor",
					"Visual Effects Art Director",
					"Visual Effects Editor",
					"Executive in Charge of Finance",
					"Associate Choreographer",
					"Makeup Effects",
					"Treatment",
					"Dramaturgy",
					"Lighting Camera",
					"Technical Supervisor",
					"CGI Supervisor",
					"Creative Consultant",
					"Script",
					"Executive Music Producer",
					"Commissioning Editor",
					"Additional Writing",
					"Additional Music",
					"Poem",
					"Thanks",
					"Creator",
					"Additional Dialogue",
					"Video Game",
					"Graphic Novel Illustrator",
					"Other",
					"Series Writer",
					"Radio Play",
					"Armorer",
					"Carpenter",
					"Editorial Staff",
					"Aerial Coordinator",
					"Animal Coordinator",
					"Animal Wrangler",
					"Animatronics Designer",
					"Drone Operator",
					"In Memory Of",
					"Pilot",
					"Presenter",
					"Animatronics Supervisor",
					"Armory Coordinator",
					"Digital Effects Producer",
					"Fight Choreographer",
					"Marine Coordinator",
					"Pyrotechnician",
					"Techno Crane Operator",
					"Acting Double",
					"Additional Script Supervisor",
					"Administrative Assistant",
					"Assistant Chef",
					"Assistant Craft Service",
					"Assistant Picture Car Coordinator",
					"Assistant Script",
					"Assistant Vehicles Coordinator",
					"Base Camp Operator",
					"Captain Driver",
					"Cast Driver",
					"Catering",
					"Catering Head Chef",
					"Chaperone",
					"Chaperone Tutor",
					"Charge Scenic Artist",
					"Child Wrangler",
					"Clearances Coordinator",
					"Clearances Consultant",
					"Dialogue Coach",
					"Digital Supervisor",
					"Director of Communications",
					"File Footage",
					"Film Processor",
					"Floor Runner",
					"Generator Operator",
					"Head Driver",
					"Health and Safety",
					"Interactive Manager",
					"Intern",
					"Key Scenic Artist",
					"Key Special Effects",
					"Logistics Coordinator",
					"Marine Pilot",
					"Master at Arms",
					"Medical Consultant",
					"Military Consultant",
					"Playback Coordinator",
					"Police Consultant",
					"Post Production Scripts",
					"Receptionist",
					"Scientific Consultant",
					"Security Coordinator",
					"Series Publicist",
					"Set Runner",
					"Special Effects Assistant",
					"Special Effects Best Boy",
					"Special Effects Manager",
					"Special Effects Technician",
					"Specialized Driver",
					"Sponsorship Coordinator",
					"Sponsorship Director",
					"Stunt Double",
					"Stunt Driver",
					"Supervising Armorer",
					"Technical Advisor",
					"Transcriptions",
					"Unit Medic",
					"Vehicles Coordinator",
					"Vehicles Wrangler",
					"Weapons Master",
					"Weapons Wrangler",
				]
			}>,
			Readonly<{
				department: "Directing"
				jobs: [
					"Director",
					"Script Supervisor",
					"Other",
					"Layout",
					"Script Coordinator",
					"Special Guest Director",
					"Assistant Director",
					"Co-Director",
					"Continuity",
					"First Assistant Director",
					"Second Assistant Director",
					"Third Assistant Director",
					"Action Director",
					"Additional Second Assistant Director",
					"Additional Third Assistant Director",
					"Assistant Director Trainee",
					"Crowd Assistant Director",
					"Field Director",
					"First Assistant Director (Prep>",
					"First Assistant Director Trainee",
					"Insert Unit Director",
					"Insert Unit First Assistant Director",
					"Second Assistant Director Trainee",
					"Second Second Assistant Director",
					"Second Unit Director",
					"Second Unit First Assistant Director",
					"Series Director",
					"Stage Director",
				]
			}>,
			Readonly<{
				department: "Actors"
				jobs: [ "Actor", "Stunt Double", "Voice", "Cameo", "Special Guest" ]
			}>,
			Readonly<{
				department: "Art"
				jobs: [
					"Production Design",
					"Art Direction",
					"Set Decoration",
					"Set Designer",
					"Conceptual Design",
					"Interior Designer",
					"Settings",
					"Assistant Art Director",
					"Art Department Coordinator",
					"Assistant Property Master",
					"Other",
					"Art Department Manager",
					"Sculptor",
					"Art Department Assistant",
					"Background Designer",
					"Co-Art Director",
					"Set Decoration Buyer",
					"Production Illustrator",
					"Standby Painter",
					"Property Master",
					"Location Scout",
					"Supervising Art Director",
					"Leadman",
					"Greensman",
					"Gun Wrangler",
					"Construction Coordinator",
					"Construction Foreman",
					"Lead Painter",
					"Sign Painter",
					"Painter",
					"Assistant Set Dresser",
					"Conceptual Illustrator",
					"Draughtsman",
					"Lead Set Dresser",
					"Prop Designer",
					"Set Decorating Coordinator",
					"Set Dresser",
					"Storyboard Designer",
					"Title Designer",
					"Additional Construction",
					"Additional Construction Grip",
					"Additional Key Construction Grip",
					"Additional Set Dresser",
					"Additional Storyboarding",
					"Art Department Trainee",
					"Art Designer",
					"Art Direction Intern",
					"Assistant Decorator",
					"Assistant Director of Photography",
					"Assistant Production Design",
					"Assistant Set Decoration Buyer",
					"Assistant Set Decoration",
					"Assistant Set Designer",
					"Assistant Set Propsman",
					"Concept Artist",
					"Construction Buyer",
					"Construction Grip",
					"Construction Manager",
					"Creative Director",
					"Daily Grip",
					"Decorator",
					"Digital Storyboarding",
					"Dressing Prop",
					"First Assistant Art Direction",
					"First Assistant Property Master",
					"Graphic Designer",
					"Head Carpenter",
					"Head Decorator",
					"Head Designer",
					"Head Greensman",
					"Helping Hand",
					"Key Carpenter",
					"Key Construction Grip",
					"Key Set Painter",
					"Main Title Designer",
					"On Set Computer Graphics",
					"On Set Key Props",
					"On Set Props",
					"Opening Title Sequence",
					"Original Series Design",
					"Paint Coordinator",
					"Petty Cash Buyer",
					"Property Builder",
					"Property Buyer",
					"Property Graphic Designer",
					"Props",
					"Runner Art Department",
					"Second Assistant Art Director",
					"Set Dressing Buyer",
					"Set Painter",
					"Set Propsman",
					"Set Supervisor",
					"Set Buyer",
					"Shop Electric",
					"Special Props",
					"Standby Art Director",
					"Standby Carpenter",
					"Standby Property Master",
					"Storyboard Artist",
					"Storyboard Assistant",
					"Supervising Carpenter",
					"Swing",
					"Textile Artist",
					"Title Illustration",
					"Web Designer",
				]
			}>,
			Readonly<{
				department: "Visual Effects"
				jobs: [
					"Animation",
					"Visual Effects",
					"Chief Technician / Stop-Motion Expert",
					"Creature Design",
					"Shading",
					"Modeling",
					"CG Painter",
					"Visual Development",
					"Animation Manager",
					"Animation Director",
					"Fix Animator",
					"Animation Department Coordinator",
					"Animation Fix Coordinator",
					"Animation Production Assistant",
					"Visual Effects Supervisor",
					"Mechanical & Creature Designer",
					"Battle Motion Coordinator",
					"Animation Supervisor",
					"VFX Supervisor",
					"Cloth Setup",
					"VFX Artist",
					"CG Engineer",
					"24 Frame Playback",
					"Imaging Science",
					"I/O Supervisor",
					"Visual Effects Producer",
					"VFX Production Coordinator",
					"I/O Manager",
					"Additional Effects Development",
					"Color Designer",
					"Simulation & Effects Production Assistant",
					"Simulation & Effects Artist",
					"Pyrotechnic Supervisor",
					"Special Effects Supervisor",
					"3D Supervisor",
					"3D Director",
					"Digital Compositor",
					"Visual Effects Coordinator",
					"VFX Editor",
					"2D Artist",
					"2D Supervisor",
					"3D Animator",
					"3D Artist",
					"3D Coordinator",
					"3D Generalist",
					"3D Modeller",
					"3D Sequence Supervisor",
					"3D Tracking Layout",
					"CG Animator",
					"CGI Director",
					"Character Designer",
					"Character Modelling Supervisor",
					"Creature Technical Director",
					"Digital Effects Producer",
					"Key Animation",
					"Lead Animator",
					"Lead Character Designer",
					"Matchmove Supervisor",
					"Mechanical Designer",
					"Opening/Ending Animation",
					"Pre-Visualization Supervisor",
					"Roto Supervisor",
					"Stereoscopic Coordinator",
					"VFX Director of Photography",
					"VFX Lighting Artist",
					"Visual Effects Designer",
					"Visual Effects Technical Director",
					"2D Sequence Supervisor",
					"Additional Visual Effects",
					"Animation Coordinator",
					"Animation Technical Director",
					"CG Artist",
					"Compositing Artist",
					"Compositing Lead",
					"Compositing Supervisor",
					"Creature Effects Technical Director",
					"Cyber Scanning Supervisor",
					"Digital Film Recording",
					"Director of Previsualization",
					"Effects Supervisor",
					"Generalist",
					"Head of Animation",
					"Layout Supervisor",
					"Lead Creature Designer",
					"Matte Painter",
					"Modelling Supervisor",
					"Pipeline Technical Director",
					"Photo Retouching",
					"Pre-Visualization Coordinator",
					"Rotoscoping Artist",
					"Senior Animator",
					"Senior Generalist",
					"Senior Modeller",
					"Senior Visual Effects Supervisor",
					"Smoke Artist",
					"Stereoscopic Supervisor",
					"Stereoscopic Technical Director",
					"Supervising Animation Director",
					"Visual Effects Assistant Editor",
					"Visual Effects Camera",
					"Visual Effects Compositor",
					"Visual Effects Director",
					"Visual Effects Lineup",
					"Visual Effects Production Assistant",
					"Visual Effects Production Manager",
				]
			}>,
			Readonly<{
				department: "Writing"
				jobs: [
					"Screenplay",
					"Author",
					"Novel",
					"Characters",
					"Theatre Play",
					"Adaptation",
					"Dialogue",
					"Writer",
					"Other",
					"Storyboard",
					"Original Story",
					"Scenario Writer",
					"Screenstory",
					"Musical",
					"Idea",
					"Story",
					"Creative Producer",
					"Teleplay",
					"Opera",
					"Co-Writer",
					"Book",
					"Comic Book",
					"Short Story",
					"Series Composition",
					"Script Editor",
					"Script Consultant",
					"Story Editor",
					"Executive Story Editor",
					"Graphic Novel",
					"Head of Story",
					"Junior Story Editor",
					"Lyricist",
					"Original Concept",
					"Original Film Writer",
					"Original Series Creator",
					"Senior Story Editor",
					"Staff Writer",
					"Story Artist",
					"Story Consultant",
					"Story Coordinator",
					"Story Developer",
					"Story Manager",
					"Story Supervisor",
					"Writers' Assistant",
					"Writers' Production",
				]
			}>,
			Readonly<{
				department: "Costume & Make-Up"
				jobs: [
					"Costume Design",
					"Makeup Artist",
					"Hairstylist",
					"Set Dressing Artist",
					"Set Dressing Supervisor",
					"Set Dressing Manager",
					"Set Dressing Production Assistant",
					"Facial Setup Artist",
					"Hair Setup",
					"Costume Supervisor",
					"Set Costumer",
					"Makeup Department Head",
					"Wigmaker",
					"Shoe Design",
					"Other",
					"Co-Costume Designer",
					"Hair Department Head",
					"Hair Designer",
					"Makeup Designer",
					"Assistant Costume Designer",
					"Prosthetic Supervisor",
					"Seamstress",
					"Key Hair Stylist",
					"Ager/Dyer",
					"Costume Consultant",
					"Costume Coordinator",
					"Costume Illustrator",
					"Hair Supervisor",
					"Key Costumer",
					"Key Makeup Artist",
					"Key Set Costumer",
					"Makeup Effects Designer",
					"Makeup Supervisor",
					"Prosthetic Designer",
					"Prosthetic Makeup Artist",
					"Tailor",
					"Tattoo Designer",
					"Wardrobe Supervisor",
					"Wig Designer",
					"Additional Hairstylist",
					"Additional Wardrobe Assistant",
					"Assistant Hairstylist",
					"Assistant Hairdresser",
					"Assistant Makeup Artist",
					"Contact Lens Designer",
					"Contact Lens Painter",
					"Contact Lens Technician",
					"Costume Assistant",
					"Costume Mistress",
					"Costume Designer",
					"Costume Set Supervisor",
					"Costume Standby",
					"Costumer",
					"Daily Makeup & Hair",
					"Daily Wardrobe",
					"Dresser",
					"Extras Dresser",
					"Extras Makeup Artist",
					"First Assistant Hairstylist",
					"First Assistant Makeup Artist",
					"Hair Assistant",
					"Hairdresser",
					"Key Dresser",
					"Key Hairdresser",
					"Lead Costumer",
					"Makeup & Hair",
					"Makeup & Hair Assistant",
					"Makeup Trainee",
					"On Set Dresser",
					"Principal Costumer",
					"Prosthetics",
					"Prosthetics Painter",
					"Prosthetics Sculptor",
					"Special Effects Key Makeup Artist",
					"Special Effects Makeup Artist",
					"Truck Costumer",
					"Truck Supervisor",
					"Wardrobe Assistant",
					"Wardrobe Coordinator",
					"Wardrobe Designer",
					"Wardrobe Intern",
					"Wardrobe Master",
					"Wardrobe Specialized Technician",
				]
			}>,
			Readonly<{
				department: "Lighting"
				jobs: [
					"Lighting Technician",
					"Best Boy Electric",
					"Gaffer",
					"Rigging Gaffer",
					"Lighting Supervisor",
					"Lighting Manager",
					"Directing Lighting Artist",
					"Master Lighting Artist",
					"Lighting Artist",
					"Lighting Coordinator",
					"Lighting Production Assistant",
					"Best Boy Electrician",
					"Electrician",
					"Rigging Grip",
					"Other",
					"Chief Lighting Technician",
					"Lighting Director",
					"Rigging Supervisor",
					"Underwater Gaffer",
					"Additional Gaffer",
					"Additional Lighting Technician",
					"Assistant Chief Lighting Technician",
					"Assistant Electrician",
					"Assistant Gaffer",
					"Best Boy Lighting Technician",
					"Daily Electrics",
					"Genetator Operator",
					"Key Rigging Grip",
					"Lighting Design",
					"Lighting Programmer",
					"O.B. Lighting",
					"Standby Rigger",
				]
			}>,
			Readonly<{
				department: "Production"
				jobs: [
					"Producer",
					"Executive Producer",
					"Casting",
					"Production Manager",
					"Unit Production Manager",
					"Line Producer",
					"Location Manager",
					"Other",
					"Production Supervisor",
					"Production Accountant",
					"Production Office Coordinator",
					"Finance",
					"Executive Consultant",
					"Character Technical Supervisor",
					"Development Manager",
					"Administration",
					"Executive In Charge Of Post Production",
					"Production Director",
					"Executive In Charge Of Production",
					"Publicist",
					"Associate Producer",
					"Co-Producer",
					"Co-Executive Producer",
					"Casting Associate",
					"Researcher",
					"Production Coordinator",
					"Consulting Producer",
					"Supervising Producer",
					"Senior Executive Consultant",
					"Unit Manager",
					"ADR Voice Casting",
					"Assistant Production Coordinator",
					"Assistant Production Manager",
					"Casting Assistant",
					"Casting Consultant",
					"Coordinating Producer",
					"Local Casting",
					"Script Researcher",
					"Accountant",
					"Accounting Clerk Assistant",
					"Accounting Supervisor",
					"Accounting Trainee",
					"Additional Casting",
					"Additional Production Assistant",
					"Additional Post-Production Supervisor",
					"Art Department Production Assistant",
					"Assistant Accountant",
					"Assistant Extras Casting",
					"Assistant Location Manager",
					"Assistant Unit Manager",
					"Attorney",
					"Background Casting Director",
					"Back-up Set Production Assistant",
					"Back-up Truck Production Assistant",
					"Broadcast Producer",
					"Business Affairs Coordinator",
					"Casting Coordinator",
					"Casting Director",
					"Casting Producer",
					"Casting Researcher",
					"Consulting Accountant",
					"Contract Manager",
					"Controller",
					"Data Management Technician",
					"Delegated Producer",
					"Development Producer",
					"Director of Operations",
					"Executive Assistant",
					"Executive Co-Producer",
					"Executive Producer's Assistant",
					"Extras Casting",
					"Extras Casting Assistant",
					"Extras Casting Coordinator",
					"Feature Finishing Producer",
					"Finishing Producer",
					"First Assistant Accountant",
					"First Assistant Production Coordinator",
					"General Manager",
					"Grip Production Assistant",
					"Head of Production",
					"Head of Programming",
					"Head of Research",
					"Human Resources",
					"Insert Unit Location Manager",
					"Key Accountant",
					"Key Art Production Assistant",
					"Key Grip Production Assistant",
					"Key Production Assistant",
					"Key Set Production Assistant",
					"Locale Casting Director",
					"Location Assistant",
					"Location Casting",
					"Location Coordinator",
					"Location Production Assistant",
					"Musical Casting",
					"Original Casting",
					"Payroll Accountant",
					"Post Coordinator",
					"Post Producer",
					"Post Production Accountant",
					"Post Production Coordinator",
					"Post Production Producer",
					"Post Production Technical Engineer",
					"Producer's Assistant",
					"Production Assistant",
					"Production Consultant",
					"Production Designer",
					"Production Driver",
					"Production Executive",
					"Production Runner",
					"Production Secretary",
					"Production Trainee",
					"Research Assistant",
					"Second Assistant Accountant",
					"Second Assistant Production Coordinator",
					"Second Assistant Unit Manager",
					"Second Unit Location Manager",
					"Street Casting",
					"Trainee Production Coordinator",
					"Travel Coordinator",
					"Truck Production Assistant",
					"Unit Swing",
				]
			}>,
			Readonly<{
				department: "Editing"
				jobs: [
					"Editor",
					"Supervising Film Editor",
					"Additional Editing",
					"Editorial Manager",
					"First Assistant Editor",
					"Additional Editorial Assistant",
					"Editorial Coordinator",
					"Editorial Production Assistant",
					"Editorial Services",
					"Archival Footage Coordinator",
					"Archival Footage Research",
					"Color Timer",
					"Digital Intermediate",
					"Other",
					"Assistant Editor",
					"Associate Editor",
					"Co-Editor",
					"Negative Cutter",
					"3D Digital Colorist",
					"3D Editor",
					"Additional Colorist",
					"Additional Editor",
					"Assistant Picture Editor",
					"Atmos Editor",
					"Color Assistant",
					"Color Grading",
					"Colorist",
					"Consulting Editor",
					"Dailies Manager",
					"Dailies Operator",
					"Dailies Technician",
					"Digital Color Timer",
					"Digital Colorist",
					"Digital Conform Editor",
					"Digital Intermediate Assistant",
					"Digital Intermediate Colorist",
					"Digital Intermediate Data Wrangler",
					"Digital Intermediate Editor",
					"Digital Intermediate Producer",
					"Editorial Consultant",
					"EPK Editor",
					"First Assistant Picture Editor",
					"Lead Editor",
					"Online Editor",
					"Project Manager",
					"Senior Colorist",
					"Senior Digital Intermediate Colorist",
					"Stereoscopic Editor",
					"Supervising Editor",
				]
			}>,
			Readonly<{
				department: "Camera"
				jobs: [
					"Director of Photography",
					"Underwater Camera",
					"Camera Operator",
					"Still Photographer",
					"Camera Department Manager",
					"Camera Supervisor",
					"Camera Technician",
					"Other",
					"Grip",
					"Steadicam Operator",
					"Additional Camera",
					"Camera Intern",
					"Additional Photography",
					"Helicopter Camera",
					"First Assistant Camera",
					"Additional Still Photographer",
					"Aerial Camera",
					"Aerial Camera Technician",
					"Aerial Director of Photography",
					"Camera Loader",
					"Dolly Grip",
					"Epk Camera Operator",
					"Key Grip",
					"Russian Arm Operator",
					"Second Unit Director of Photography",
					"Ultimate Arm Operator",
					"Underwater Director of Photography",
					'"A" Camera Operator',
					'"B" Camera Operator',
					'"C" Camera Operator',
					'"D" Camera Operator',
					"Additional Director of Photography",
					"Additional First Assistant Camera",
					"Additional Grip",
					"Additional Key Grip",
					"Additional Second Assistant Camera",
					"Additional Set Photographer",
					"Additional Underwater Photography",
					"Assistant Camera",
					"Assistant Grip",
					"Best Boy Grip",
					"BTS Footage",
					"BTS Photographer",
					"BTS Videographer",
					"Camera Car",
					"Camera Department Production Assistant",
					"Camera Production Assistant",
					"Camera Trainee",
					"Camera Truck",
					"Clapper Loader",
					"Data Wrangler",
					"Digital Imaging Technician",
					"Drone Cinematographer",
					"Drone Pilot",
					"Epk Director",
					"Epk Producer",
					'First Assistant "A" Camera',
					'First Assistant "B" Camera',
					'First Assistant "C" Camera',
					'First Assistant "D" Camera',
					"First Company Grip",
					"Focus Puller",
					"Head of Layout",
					"Jimmy Jib Operator",
					"Libra Head Technician",
					"Phantom Operator",
					"Red Technician",
					'Second Assistant "A" Camera',
					'Second Assistant "B" Camera',
					'Second Assistant "C" Camera',
					'Second Assistant "D" Camera',
					"Second Assistant Camera",
					"Second Company Grip",
					"Set Photographer",
					'Third Assistant "A" Camera',
					'Third Assistant "B" Camera',
					'Third Assistant "C" Camera',
					'Third Assistant "D" Camera',
					"Third Assistant Camera",
					"Underwater Epk Photographer",
					"Underwater Stills Photographer",
					"Videojournalist",
					"Video Report",
				]
			}>,
			Readonly<{
				department: "Sound"
				jobs: [
					"Original Music Composer",
					"Sound Designer",
					"Sound Editor",
					"Sound Director",
					"Sound Mixer",
					"Music Editor",
					"Sound Effects Editor",
					"Production Sound Mixer",
					"Additional Soundtrack",
					"Supervising Sound Editor",
					"Supervising Sound Effects Editor",
					"Sound Re-Recording Mixer",
					"Recording Supervision",
					"Boom Operator",
					"Sound Montage Associate",
					"Songs",
					"Music",
					"ADR & Dubbing",
					"Sound Recordist",
					"Sound Engineer",
					"Foley",
					"Dialogue Editor",
					"Additional Music Supervisor",
					"First Assistant Sound Editor",
					"Scoring Mixer",
					"Dolby Consultant",
					"Other",
					"Music Director",
					"Orchestrator",
					"Vocal Coach",
					"Music Supervisor",
					"Sound",
					"Musician",
					"Additional Sound Re-Recording Mixer",
					"Additional Sound Re-Recordist",
					"ADR Editor",
					"ADR Supervisor",
					"Apprentice Sound Editor",
					"Assistant Music Supervisor",
					"Assistant Sound Editor",
					"Conductor",
					"Foley Editor",
					"Music Programmer",
					"Music Score Producer",
					"Playback Singer",
					"Sound Effects",
					"Sound Effects Designer",
					"Supervising ADR Editor",
					"Supervising Dialogue Editor",
					"Supervising Music Editor",
					"Theme Song Performance",
					"Utility Sound",
					"Additional Production Sound Mixer",
					"ADR Editor",
					"ADR Engineer",
					"ADR Coordinator",
					"ADR Mixer",
					"ADR Post Producer",
					"ADR Recording Engineer",
					"ADR Recordist",
					"Assistant Dialogue Editor",
					"Assistant Foley Artist",
					"Assistant Sound Designer",
					"Assistant Sound Engineer",
					"Audio Post Coordinator",
					"Digital Foley Artist",
					"Foley Artist",
					"Foley Mixer",
					"Foley Recording Engineer",
					"Foley Recordist",
					"Foley Supervisor",
					"Joint ADR Mixer",
					"Keyboard Programmer",
					"Location Sound Assistant",
					"Location Sound Mixer",
					"Location Sound Recordist",
					"Loop Group Coordinator",
					"Main Title Theme Composer",
					"Music Arranger",
					"Music Co-Supervisor",
					"Music Consultant",
					"Music Coordinator",
					"Music Producer",
					"Music Sound Design and Processing",
					"Music Supervision Assistant",
					"O.B. Sound",
					"Second Assistant Sound",
					"Sound Assistant",
					"Sound Mix Technician",
					"Sound Post Production Coordinator",
					"Sound Post Supervisor",
					"Sound Re-Recording Assistant",
					"Sound Supervisor",
					"Sound Technical Supervisor",
					"Vocals",
				]
			}>,
		]
	>
	/**
	 * List of languages (ISO 639-1 tags) used throughout TMDB.
	 * 
	 * @link https://developer.themoviedb.org/reference/configuration-primary-translations
	 */
	languages: Readonly<[
		Readonly<{
			iso_639_1: "xx",
			english_name: "No Language",
			name: "No Language"
		}>,
		Readonly<{
			iso_639_1: "aa",
			english_name: "Afar",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "af",
			english_name: "Afrikaans",
			name: "Afrikaans"
		}>,
		Readonly<{
			iso_639_1: "ak",
			english_name: "Akan",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "an",
			english_name: "Aragonese",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "as",
			english_name: "Assamese",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "av",
			english_name: "Avaric",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "ae",
			english_name: "Avestan",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "ay",
			english_name: "Aymara",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "az",
			english_name: "Azerbaijani",
			name: "Azərbaycan"
		}>,
		Readonly<{
			iso_639_1: "ba",
			english_name: "Bashkir",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "bm",
			english_name: "Bambara",
			name: "Bamanankan"
		}>,
		Readonly<{
			iso_639_1: "bi",
			english_name: "Bislama",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "bo",
			english_name: "Tibetan",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "br",
			english_name: "Breton",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "ca",
			english_name: "Catalan",
			name: "Català"
		}>,
		Readonly<{
			iso_639_1: "cs",
			english_name: "Czech",
			name: "Český"
		}>,
		Readonly<{
			iso_639_1: "ce",
			english_name: "Chechen",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "cu",
			english_name: "Slavic",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "cv",
			english_name: "Chuvash",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "kw",
			english_name: "Cornish",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "co",
			english_name: "Corsican",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "cr",
			english_name: "Cree",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "cy",
			english_name: "Welsh",
			name: "Cymraeg"
		}>,
		Readonly<{
			iso_639_1: "da",
			english_name: "Danish",
			name: "Dansk"
		}>,
		Readonly<{
			iso_639_1: "de",
			english_name: "German",
			name: "Deutsch"
		}>,
		Readonly<{
			iso_639_1: "dv",
			english_name: "Divehi",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "dz",
			english_name: "Dzongkha",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "eo",
			english_name: "Esperanto",
			name: "Esperanto"
		}>,
		Readonly<{
			iso_639_1: "et",
			english_name: "Estonian",
			name: "Eesti"
		}>,
		Readonly<{
			iso_639_1: "eu",
			english_name: "Basque",
			name: "euskera"
		}>,
		Readonly<{
			iso_639_1: "fo",
			english_name: "Faroese",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "fj",
			english_name: "Fijian",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "fi",
			english_name: "Finnish",
			name: "suomi"
		}>,
		Readonly<{
			iso_639_1: "fr",
			english_name: "French",
			name: "Français"
		}>,
		Readonly<{
			iso_639_1: "fy",
			english_name: "Frisian",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "ff",
			english_name: "Fulah",
			name: "Fulfulde"
		}>,
		Readonly<{
			iso_639_1: "gd",
			english_name: "Gaelic",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "ga",
			english_name: "Irish",
			name: "Gaeilge"
		}>,
		Readonly<{
			iso_639_1: "gl",
			english_name: "Galician",
			name: "Galego"
		}>,
		Readonly<{
			iso_639_1: "gv",
			english_name: "Manx",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "gn",
			english_name: "Guarani",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "gu",
			english_name: "Gujarati",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "ht",
			english_name: "Haitian; Haitian Creole",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "ha",
			english_name: "Hausa",
			name: "Hausa"
		}>,
		Readonly<{
			iso_639_1: "sh",
			english_name: "Serbo-Croatian",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "hz",
			english_name: "Herero",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "ho",
			english_name: "Hiri Motu",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "hr",
			english_name: "Croatian",
			name: "Hrvatski"
		}>,
		Readonly<{
			iso_639_1: "hu",
			english_name: "Hungarian",
			name: "Magyar"
		}>,
		Readonly<{
			iso_639_1: "ig",
			english_name: "Igbo",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "io",
			english_name: "Ido",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "ii",
			english_name: "Yi",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "iu",
			english_name: "Inuktitut",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "ie",
			english_name: "Interlingue",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "ia",
			english_name: "Interlingua",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "id",
			english_name: "Indonesian",
			name: "Bahasa indonesia"
		}>,
		Readonly<{
			iso_639_1: "ik",
			english_name: "Inupiaq",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "is",
			english_name: "Icelandic",
			name: "Íslenska"
		}>,
		Readonly<{
			iso_639_1: "it",
			english_name: "Italian",
			name: "Italiano"
		}>,
		Readonly<{
			iso_639_1: "jv",
			english_name: "Javanese",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "ja",
			english_name: "Japanese",
			name: "日本語"
		}>,
		Readonly<{
			iso_639_1: "kl",
			english_name: "Kalaallisut",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "kn",
			english_name: "Kannada",
			name: "?????"
		}>,
		Readonly<{
			iso_639_1: "ks",
			english_name: "Kashmiri",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "kr",
			english_name: "Kanuri",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "kk",
			english_name: "Kazakh",
			name: "қазақ"
		}>,
		Readonly<{
			iso_639_1: "km",
			english_name: "Khmer",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "ki",
			english_name: "Kikuyu",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "rw",
			english_name: "Kinyarwanda",
			name: "Kinyarwanda"
		}>,
		Readonly<{
			iso_639_1: "ky",
			english_name: "Kirghiz",
			name: "??????"
		}>,
		Readonly<{
			iso_639_1: "kv",
			english_name: "Komi",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "kg",
			english_name: "Kongo",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "ko",
			english_name: "Korean",
			name: "한국어/조선말"
		}>,
		Readonly<{
			iso_639_1: "kj",
			english_name: "Kuanyama",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "ku",
			english_name: "Kurdish",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "lo",
			english_name: "Lao",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "la",
			english_name: "Latin",
			name: "Latin"
		}>,
		Readonly<{
			iso_639_1: "lv",
			english_name: "Latvian",
			name: "Latviešu"
		}>,
		Readonly<{
			iso_639_1: "li",
			english_name: "Limburgish",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "ln",
			english_name: "Lingala",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "lt",
			english_name: "Lithuanian",
			name: "Lietuvių"
		}>,
		Readonly<{
			iso_639_1: "lb",
			english_name: "Letzeburgesch",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "lu",
			english_name: "Luba-Katanga",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "lg",
			english_name: "Ganda",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "mh",
			english_name: "Marshall",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "ml",
			english_name: "Malayalam",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "mr",
			english_name: "Marathi",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "mg",
			english_name: "Malagasy",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "mt",
			english_name: "Maltese",
			name: "Malti"
		}>,
		Readonly<{
			iso_639_1: "mo",
			english_name: "Moldavian",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "mn",
			english_name: "Mongolian",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "mi",
			english_name: "Maori",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "ms",
			english_name: "Malay",
			name: "Bahasa melayu"
		}>,
		Readonly<{
			iso_639_1: "my",
			english_name: "Burmese",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "na",
			english_name: "Nauru",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "nv",
			english_name: "Navajo",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "nr",
			english_name: "Ndebele",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "nd",
			english_name: "Ndebele",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "ng",
			english_name: "Ndonga",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "ne",
			english_name: "Nepali",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "nl",
			english_name: "Dutch",
			name: "Nederlands"
		}>,
		Readonly<{
			iso_639_1: "nn",
			english_name: "Norwegian Nynorsk",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "nb",
			english_name: "Norwegian Bokmål",
			name: "Bokmål"
		}>,
		Readonly<{
			iso_639_1: "no",
			english_name: "Norwegian",
			name: "Norsk"
		}>,
		Readonly<{
			iso_639_1: "ny",
			english_name: "Chichewa; Nyanja",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "oc",
			english_name: "Occitan",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "oj",
			english_name: "Ojibwa",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "or",
			english_name: "Oriya",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "om",
			english_name: "Oromo",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "os",
			english_name: "Ossetian; Ossetic",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "pi",
			english_name: "Pali",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "pl",
			english_name: "Polish",
			name: "Polski"
		}>,
		Readonly<{
			iso_639_1: "pt",
			english_name: "Portuguese",
			name: "Português"
		}>,
		Readonly<{
			iso_639_1: "qu",
			english_name: "Quechua",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "rm",
			english_name: "Raeto-Romance",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "ro",
			english_name: "Romanian",
			name: "Română"
		}>,
		Readonly<{
			iso_639_1: "rn",
			english_name: "Rundi",
			name: "Kirundi"
		}>,
		Readonly<{
			iso_639_1: "ru",
			english_name: "Russian",
			name: "Pусский"
		}>,
		Readonly<{
			iso_639_1: "sg",
			english_name: "Sango",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "sa",
			english_name: "Sanskrit",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "si",
			english_name: "Sinhalese",
			name: "සිංහල"
		}>,
		Readonly<{
			iso_639_1: "sk",
			english_name: "Slovak",
			name: "Slovenčina"
		}>,
		Readonly<{
			iso_639_1: "sl",
			english_name: "Slovenian",
			name: "Slovenščina"
		}>,
		Readonly<{
			iso_639_1: "se",
			english_name: "Northern Sami",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "sm",
			english_name: "Samoan",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "sn",
			english_name: "Shona",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "sd",
			english_name: "Sindhi",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "so",
			english_name: "Somali",
			name: "Somali"
		}>,
		Readonly<{
			iso_639_1: "st",
			english_name: "Sotho",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "es",
			english_name: "Spanish",
			name: "Español"
		}>,
		Readonly<{
			iso_639_1: "sq",
			english_name: "Albanian",
			name: "shqip"
		}>,
		Readonly<{
			iso_639_1: "sc",
			english_name: "Sardinian",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "sr",
			english_name: "Serbian",
			name: "Srpski"
		}>,
		Readonly<{
			iso_639_1: "ss",
			english_name: "Swati",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "su",
			english_name: "Sundanese",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "sw",
			english_name: "Swahili",
			name: "Kiswahili"
		}>,
		Readonly<{
			iso_639_1: "sv",
			english_name: "Swedish",
			name: "svenska"
		}>,
		Readonly<{
			iso_639_1: "ty",
			english_name: "Tahitian",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "ta",
			english_name: "Tamil",
			name: "தமிழ்"
		}>,
		Readonly<{
			iso_639_1: "tt",
			english_name: "Tatar",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "te",
			english_name: "Telugu",
			name: "తెలుగు"
		}>,
		Readonly<{
			iso_639_1: "tg",
			english_name: "Tajik",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "tl",
			english_name: "Tagalog",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "th",
			english_name: "Thai",
			name: "ภาษาไทย"
		}>,
		Readonly<{
			iso_639_1: "ti",
			english_name: "Tigrinya",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "to",
			english_name: "Tonga",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "tn",
			english_name: "Tswana",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "ts",
			english_name: "Tsonga",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "tk",
			english_name: "Turkmen",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "tr",
			english_name: "Turkish",
			name: "Türkçe"
		}>,
		Readonly<{
			iso_639_1: "tw",
			english_name: "Twi",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "ug",
			english_name: "Uighur",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "uk",
			english_name: "Ukrainian",
			name: "Український"
		}>,
		Readonly<{
			iso_639_1: "ur",
			english_name: "Urdu",
			name: "اردو"
		}>,
		Readonly<{
			iso_639_1: "uz",
			english_name: "Uzbek",
			name: "ozbek"
		}>,
		Readonly<{
			iso_639_1: "ve",
			english_name: "Venda",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "vi",
			english_name: "Vietnamese",
			name: "Tiếng Việt"
		}>,
		Readonly<{
			iso_639_1: "vo",
			english_name: "Volapük",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "wa",
			english_name: "Walloon",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "wo",
			english_name: "Wolof",
			name: "Wolof"
		}>,
		Readonly<{
			iso_639_1: "xh",
			english_name: "Xhosa",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "yi",
			english_name: "Yiddish",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "za",
			english_name: "Zhuang",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "zu",
			english_name: "Zulu",
			name: "isiZulu"
		}>,
		Readonly<{
			iso_639_1: "ab",
			english_name: "Abkhazian",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "zh",
			english_name: "Mandarin",
			name: "普通话"
		}>,
		Readonly<{
			iso_639_1: "ps",
			english_name: "Pushto",
			name: "پښتو"
		}>,
		Readonly<{
			iso_639_1: "am",
			english_name: "Amharic",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "ar",
			english_name: "Arabic",
			name: "العربية"
		}>,
		Readonly<{
			iso_639_1: "bg",
			english_name: "Bulgarian",
			name: "български език"
		}>,
		Readonly<{
			iso_639_1: "cn",
			english_name: "Cantonese",
			name: "广州话 / 廣州話"
		}>,
		Readonly<{
			iso_639_1: "mk",
			english_name: "Macedonian",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "el",
			english_name: "Greek",
			name: "ελληνικά"
		}>,
		Readonly<{
			iso_639_1: "fa",
			english_name: "Persian",
			name: "فارسی"
		}>,
		Readonly<{
			iso_639_1: "he",
			english_name: "Hebrew",
			name: "עִבְרִית"
		}>,
		Readonly<{
			iso_639_1: "hi",
			english_name: "Hindi",
			name: "हिन्दी"
		}>,
		Readonly<{
			iso_639_1: "hy",
			english_name: "Armenian",
			name: ""
		}>,
		Readonly<{
			iso_639_1: "en",
			english_name: "English",
			name: "English"
		}>,
		Readonly<{
			iso_639_1: "ee",
			english_name: "Ewe",
			name: "Èʋegbe"
		}>,
		Readonly<{
			iso_639_1: "ka",
			english_name: "Georgian",
			name: "ქართული"
		}>,
		Readonly<{
			iso_639_1: "pa",
			english_name: "Punjabi",
			name: "ਪੰਜਾਬੀ"
		}>,
		Readonly<{
			iso_639_1: "bn",
			english_name: "Bengali",
			name: "বাংলা"
		}>,
		Readonly<{
			iso_639_1: "bs",
			english_name: "Bosnian",
			name: "Bosanski"
		}>,
		Readonly<{
			iso_639_1: "ch",
			english_name: "Chamorro",
			name: "Finu' Chamorro"
		}>,
		Readonly<{
			iso_639_1: "be",
			english_name: "Belarusian",
			name: "беларуская мова"
		}>,
		Readonly<{
			iso_639_1: "yo",
			english_name: "Yoruba",
			name: "Èdè Yorùbá"
		}>
	]>
	/**
	 * List of the officially supported translations on TMDB.
	 * 
	 * @link https://developer.themoviedb.org/reference/configuration-primary-translations
	 */
	primaryTranslations: Readonly<[
		"af-ZA",
		"ar-AE",
		"ar-BH",
		"ar-EG",
		"ar-IQ",
		"ar-JO",
		"ar-LY",
		"ar-MA",
		"ar-QA",
		"ar-SA",
		"ar-TD",
		"ar-YE",
		"be-BY",
		"bg-BG",
		"bn-BD",
		"br-FR",
		"ca-AD",
		"ca-ES",
		"ch-GU",
		"cs-CZ",
		"cy-GB",
		"da-DK",
		"de-AT",
		"de-CH",
		"de-DE",
		"el-CY",
		"el-GR",
		"en-AG",
		"en-AU",
		"en-BB",
		"en-BZ",
		"en-CA",
		"en-CM",
		"en-GB",
		"en-GG",
		"en-GH",
		"en-GI",
		"en-GY",
		"en-IE",
		"en-JM",
		"en-KE",
		"en-LC",
		"en-MW",
		"en-NZ",
		"en-PG",
		"en-TC",
		"en-US",
		"en-ZM",
		"en-ZW",
		"eo-EO",
		"es-AR",
		"es-CL",
		"es-DO",
		"es-EC",
		"es-ES",
		"es-GQ",
		"es-GT",
		"es-HN",
		"es-MX",
		"es-NI",
		"es-PA",
		"es-PE",
		"es-PY",
		"es-SV",
		"es-UY",
		"et-EE",
		"eu-ES",
		"fa-IR",
		"fi-FI",
		"fr-BF",
		"fr-CA",
		"fr-CD",
		"fr-CI",
		"fr-FR",
		"fr-GF",
		"fr-GP",
		"fr-MC",
		"fr-ML",
		"fr-MU",
		"fr-PF",
		"ga-IE",
		"gd-GB",
		"gl-ES",
		"he-IL",
		"hi-IN",
		"hr-HR",
		"hu-HU",
		"id-ID",
		"it-IT",
		"it-VA",
		"ja-JP",
		"ka-GE",
		"kk-KZ",
		"kn-IN",
		"ko-KR",
		"ku-TR",
		"ky-KG",
		"lt-LT",
		"lv-LV",
		"ml-IN",
		"mr-IN",
		"ms-MY",
		"ms-SG",
		"nb-NO",
		"nl-BE",
		"nl-NL",
		"no-NO",
		"pa-IN",
		"pl-PL",
		"pt-AO",
		"pt-BR",
		"pt-MZ",
		"pt-PT",
		"ro-MD",
		"ro-RO",
		"ru-RU",
		"si-LK",
		"sk-SK",
		"sl-SI",
		"so-SO",
		"sq-AL",
		"sq-XK",
		"sr-ME",
		"sr-RS",
		"sv-SE",
		"sw-TZ",
		"ta-IN",
		"te-IN",
		"th-TH",
		"tl-PH",
		"tr-TR",
		"uk-UA",
		"ur-PK",
		"uz-UZ",
		"vi-VN",
		"zh-CN",
		"zh-HK",
		"zh-SG",
		"zh-TW",
		"zu-ZA"
	]>
	/**
	 * List of timezones used throughout TMDB.
	 * 
	 * @link https://developer.themoviedb.org/reference/configuration-timezones
	 */
	timezones: [
		Readonly<{
			"iso_3166_1": "AD",
			"zones": [
				"Europe/Andorra"
			]
		}>,
		Readonly<{
			"iso_3166_1": "AE",
			"zones": [
				"Asia/Dubai"
			]
		}>,
		Readonly<{
			"iso_3166_1": "AF",
			"zones": [
				"Asia/Kabul"
			]
		}>,
		Readonly<{
			"iso_3166_1": "AG",
			"zones": [
				"America/Puerto_Rico"
			]
		}>,
		Readonly<{
			"iso_3166_1": "AI",
			"zones": [
				"America/Puerto_Rico"
			]
		}>,
		Readonly<{
			"iso_3166_1": "AL",
			"zones": [
				"Europe/Tirane"
			]
		}>,
		Readonly<{
			"iso_3166_1": "AM",
			"zones": [
				"Asia/Yerevan"
			]
		}>,
		Readonly<{
			"iso_3166_1": "AO",
			"zones": [
				"Africa/Lagos"
			]
		}>,
		Readonly<{
			"iso_3166_1": "AQ",
			"zones": [
				"Antarctica/Casey",
				"Antarctica/Davis",
				"Antarctica/Mawson",
				"Antarctica/Palmer",
				"Antarctica/Rothera",
				"Antarctica/Troll",
				"Antarctica/Vostok",
				"Pacific/Auckland",
				"Pacific/Port_Moresby",
				"Asia/Riyadh"
			]
		}>,
		Readonly<{
			"iso_3166_1": "AR",
			"zones": [
				"America/Argentina/Buenos_Aires",
				"America/Argentina/Cordoba",
				"America/Argentina/Salta",
				"America/Argentina/Jujuy",
				"America/Argentina/Tucuman",
				"America/Argentina/Catamarca",
				"America/Argentina/La_Rioja",
				"America/Argentina/San_Juan",
				"America/Argentina/Mendoza",
				"America/Argentina/San_Luis",
				"America/Argentina/Rio_Gallegos",
				"America/Argentina/Ushuaia"
			]
		}>,
		Readonly<{
			"iso_3166_1": "AS",
			"zones": [
				"Pacific/Pago_Pago"
			]
		}>,
		Readonly<{
			"iso_3166_1": "AT",
			"zones": [
				"Europe/Vienna"
			]
		}>,
		Readonly<{
			"iso_3166_1": "AU",
			"zones": [
				"Australia/Lord_Howe",
				"Antarctica/Macquarie",
				"Australia/Hobart",
				"Australia/Melbourne",
				"Australia/Sydney",
				"Australia/Broken_Hill",
				"Australia/Brisbane",
				"Australia/Lindeman",
				"Australia/Adelaide",
				"Australia/Darwin",
				"Australia/Perth",
				"Australia/Eucla"
			]
		}>,
		Readonly<{
			"iso_3166_1": "AW",
			"zones": [
				"America/Puerto_Rico"
			]
		}>,
		Readonly<{
			"iso_3166_1": "AX",
			"zones": [
				"Europe/Helsinki"
			]
		}>,
		Readonly<{
			"iso_3166_1": "AZ",
			"zones": [
				"Asia/Baku"
			]
		}>,
		Readonly<{
			"iso_3166_1": "BA",
			"zones": [
				"Europe/Belgrade"
			]
		}>,
		Readonly<{
			"iso_3166_1": "BB",
			"zones": [
				"America/Barbados"
			]
		}>,
		Readonly<{
			"iso_3166_1": "BD",
			"zones": [
				"Asia/Dhaka"
			]
		}>,
		Readonly<{
			"iso_3166_1": "BE",
			"zones": [
				"Europe/Brussels"
			]
		}>,
		Readonly<{
			"iso_3166_1": "BF",
			"zones": [
				"Africa/Abidjan"
			]
		}>,
		Readonly<{
			"iso_3166_1": "BG",
			"zones": [
				"Europe/Sofia"
			]
		}>,
		Readonly<{
			"iso_3166_1": "BH",
			"zones": [
				"Asia/Qatar"
			]
		}>,
		Readonly<{
			"iso_3166_1": "BI",
			"zones": [
				"Africa/Maputo"
			]
		}>,
		Readonly<{
			"iso_3166_1": "BJ",
			"zones": [
				"Africa/Lagos"
			]
		}>,
		Readonly<{
			"iso_3166_1": "BL",
			"zones": [
				"America/Puerto_Rico"
			]
		}>,
		Readonly<{
			"iso_3166_1": "BM",
			"zones": [
				"Atlantic/Bermuda"
			]
		}>,
		Readonly<{
			"iso_3166_1": "BN",
			"zones": [
				"Asia/Kuching"
			]
		}>,
		Readonly<{
			"iso_3166_1": "BO",
			"zones": [
				"America/La_Paz"
			]
		}>,
		Readonly<{
			"iso_3166_1": "BQ",
			"zones": [
				"America/Puerto_Rico"
			]
		}>,
		Readonly<{
			"iso_3166_1": "BR",
			"zones": [
				"America/Noronha",
				"America/Belem",
				"America/Fortaleza",
				"America/Recife",
				"America/Araguaina",
				"America/Maceio",
				"America/Bahia",
				"America/Sao_Paulo",
				"America/Campo_Grande",
				"America/Cuiaba",
				"America/Santarem",
				"America/Porto_Velho",
				"America/Boa_Vista",
				"America/Manaus",
				"America/Eirunepe",
				"America/Rio_Branco"
			]
		}>,
		Readonly<{
			"iso_3166_1": "BS",
			"zones": [
				"America/Toronto"
			]
		}>,
		Readonly<{
			"iso_3166_1": "BT",
			"zones": [
				"Asia/Thimphu"
			]
		}>,
		Readonly<{
			"iso_3166_1": "BV",
			"zones": []
		}>,
		Readonly<{
			"iso_3166_1": "BW",
			"zones": [
				"Africa/Maputo"
			]
		}>,
		Readonly<{
			"iso_3166_1": "BY",
			"zones": [
				"Europe/Minsk"
			]
		}>,
		Readonly<{
			"iso_3166_1": "BZ",
			"zones": [
				"America/Belize"
			]
		}>,
		Readonly<{
			"iso_3166_1": "CA",
			"zones": [
				"America/St_Johns",
				"America/Halifax",
				"America/Glace_Bay",
				"America/Moncton",
				"America/Goose_Bay",
				"America/Toronto",
				"America/Iqaluit",
				"America/Winnipeg",
				"America/Resolute",
				"America/Rankin_Inlet",
				"America/Regina",
				"America/Swift_Current",
				"America/Edmonton",
				"America/Cambridge_Bay",
				"America/Inuvik",
				"America/Dawson_Creek",
				"America/Fort_Nelson",
				"America/Whitehorse",
				"America/Dawson",
				"America/Vancouver",
				"America/Panama",
				"America/Puerto_Rico",
				"America/Phoenix"
			]
		}>,
		Readonly<{
			"iso_3166_1": "CC",
			"zones": [
				"Asia/Yangon"
			]
		}>,
		Readonly<{
			"iso_3166_1": "CD",
			"zones": [
				"Africa/Maputo",
				"Africa/Lagos"
			]
		}>,
		Readonly<{
			"iso_3166_1": "CF",
			"zones": [
				"Africa/Lagos"
			]
		}>,
		Readonly<{
			"iso_3166_1": "CG",
			"zones": [
				"Africa/Lagos"
			]
		}>,
		Readonly<{
			"iso_3166_1": "CH",
			"zones": [
				"Europe/Zurich"
			]
		}>,
		Readonly<{
			"iso_3166_1": "CI",
			"zones": [
				"Africa/Abidjan"
			]
		}>,
		Readonly<{
			"iso_3166_1": "CK",
			"zones": [
				"Pacific/Rarotonga"
			]
		}>,
		Readonly<{
			"iso_3166_1": "CL",
			"zones": [
				"America/Santiago",
				"America/Punta_Arenas",
				"Pacific/Easter"
			]
		}>,
		Readonly<{
			"iso_3166_1": "CM",
			"zones": [
				"Africa/Lagos"
			]
		}>,
		Readonly<{
			"iso_3166_1": "CN",
			"zones": [
				"Asia/Shanghai",
				"Asia/Urumqi"
			]
		}>,
		Readonly<{
			"iso_3166_1": "CO",
			"zones": [
				"America/Bogota"
			]
		}>,
		Readonly<{
			"iso_3166_1": "CR",
			"zones": [
				"America/Costa_Rica"
			]
		}>,
		Readonly<{
			"iso_3166_1": "CU",
			"zones": [
				"America/Havana"
			]
		}>,
		Readonly<{
			"iso_3166_1": "CV",
			"zones": [
				"Atlantic/Cape_Verde"
			]
		}>,
		Readonly<{
			"iso_3166_1": "CW",
			"zones": [
				"America/Puerto_Rico"
			]
		}>,
		Readonly<{
			"iso_3166_1": "CX",
			"zones": [
				"Asia/Bangkok"
			]
		}>,
		Readonly<{
			"iso_3166_1": "CY",
			"zones": [
				"Asia/Nicosia",
				"Asia/Famagusta"
			]
		}>,
		Readonly<{
			"iso_3166_1": "CZ",
			"zones": [
				"Europe/Prague"
			]
		}>,
		Readonly<{
			"iso_3166_1": "DE",
			"zones": [
				"Europe/Berlin",
				"Europe/Zurich"
			]
		}>,
		Readonly<{
			"iso_3166_1": "DJ",
			"zones": [
				"Africa/Nairobi"
			]
		}>,
		Readonly<{
			"iso_3166_1": "DK",
			"zones": [
				"Europe/Berlin"
			]
		}>,
		Readonly<{
			"iso_3166_1": "DM",
			"zones": [
				"America/Puerto_Rico"
			]
		}>,
		Readonly<{
			"iso_3166_1": "DO",
			"zones": [
				"America/Santo_Domingo"
			]
		}>,
		Readonly<{
			"iso_3166_1": "DZ",
			"zones": [
				"Africa/Algiers"
			]
		}>,
		Readonly<{
			"iso_3166_1": "EC",
			"zones": [
				"America/Guayaquil",
				"Pacific/Galapagos"
			]
		}>,
		Readonly<{
			"iso_3166_1": "EE",
			"zones": [
				"Europe/Tallinn"
			]
		}>,
		Readonly<{
			"iso_3166_1": "EG",
			"zones": [
				"Africa/Cairo"
			]
		}>,
		Readonly<{
			"iso_3166_1": "EH",
			"zones": [
				"Africa/El_Aaiun"
			]
		}>,
		Readonly<{
			"iso_3166_1": "ER",
			"zones": [
				"Africa/Nairobi"
			]
		}>,
		Readonly<{
			"iso_3166_1": "ES",
			"zones": [
				"Europe/Madrid",
				"Africa/Ceuta",
				"Atlantic/Canary"
			]
		}>,
		Readonly<{
			"iso_3166_1": "ET",
			"zones": [
				"Africa/Nairobi"
			]
		}>,
		Readonly<{
			"iso_3166_1": "FI",
			"zones": [
				"Europe/Helsinki"
			]
		}>,
		Readonly<{
			"iso_3166_1": "FJ",
			"zones": [
				"Pacific/Fiji"
			]
		}>,
		Readonly<{
			"iso_3166_1": "FK",
			"zones": [
				"Atlantic/Stanley"
			]
		}>,
		Readonly<{
			"iso_3166_1": "FM",
			"zones": [
				"Pacific/Kosrae",
				"Pacific/Port_Moresby",
				"Pacific/Guadalcanal"
			]
		}>,
		Readonly<{
			"iso_3166_1": "FO",
			"zones": [
				"Atlantic/Faroe"
			]
		}>,
		Readonly<{
			"iso_3166_1": "FR",
			"zones": [
				"Europe/Paris"
			]
		}>,
		Readonly<{
			"iso_3166_1": "GA",
			"zones": [
				"Africa/Lagos"
			]
		}>,
		Readonly<{
			"iso_3166_1": "GB",
			"zones": [
				"Europe/London"
			]
		}>,
		Readonly<{
			"iso_3166_1": "GD",
			"zones": [
				"America/Puerto_Rico"
			]
		}>,
		Readonly<{
			"iso_3166_1": "GE",
			"zones": [
				"Asia/Tbilisi"
			]
		}>,
		Readonly<{
			"iso_3166_1": "GF",
			"zones": [
				"America/Cayenne"
			]
		}>,
		Readonly<{
			"iso_3166_1": "GG",
			"zones": [
				"Europe/London"
			]
		}>,
		Readonly<{
			"iso_3166_1": "GH",
			"zones": [
				"Africa/Abidjan"
			]
		}>,
		Readonly<{
			"iso_3166_1": "GI",
			"zones": [
				"Europe/Gibraltar"
			]
		}>,
		Readonly<{
			"iso_3166_1": "GL",
			"zones": [
				"America/Nuuk",
				"America/Danmarkshavn",
				"America/Scoresbysund",
				"America/Thule"
			]
		}>,
		Readonly<{
			"iso_3166_1": "GM",
			"zones": [
				"Africa/Abidjan"
			]
		}>,
		Readonly<{
			"iso_3166_1": "GN",
			"zones": [
				"Africa/Abidjan"
			]
		}>,
		Readonly<{
			"iso_3166_1": "GP",
			"zones": [
				"America/Puerto_Rico"
			]
		}>,
		Readonly<{
			"iso_3166_1": "GQ",
			"zones": [
				"Africa/Lagos"
			]
		}>,
		Readonly<{
			"iso_3166_1": "GR",
			"zones": [
				"Europe/Athens"
			]
		}>,
		Readonly<{
			"iso_3166_1": "GS",
			"zones": [
				"Atlantic/South_Georgia"
			]
		}>,
		Readonly<{
			"iso_3166_1": "GT",
			"zones": [
				"America/Guatemala"
			]
		}>,
		Readonly<{
			"iso_3166_1": "GU",
			"zones": [
				"Pacific/Guam"
			]
		}>,
		Readonly<{
			"iso_3166_1": "GW",
			"zones": [
				"Africa/Bissau"
			]
		}>,
		Readonly<{
			"iso_3166_1": "GY",
			"zones": [
				"America/Guyana"
			]
		}>,
		Readonly<{
			"iso_3166_1": "HK",
			"zones": [
				"Asia/Hong_Kong"
			]
		}>,
		Readonly<{
			"iso_3166_1": "HM",
			"zones": []
		}>,
		Readonly<{
			"iso_3166_1": "HN",
			"zones": [
				"America/Tegucigalpa"
			]
		}>,
		Readonly<{
			"iso_3166_1": "HR",
			"zones": [
				"Europe/Belgrade"
			]
		}>,
		Readonly<{
			"iso_3166_1": "HT",
			"zones": [
				"America/Port-au-Prince"
			]
		}>,
		Readonly<{
			"iso_3166_1": "HU",
			"zones": [
				"Europe/Budapest"
			]
		}>,
		Readonly<{
			"iso_3166_1": "ID",
			"zones": [
				"Asia/Jakarta",
				"Asia/Pontianak",
				"Asia/Makassar",
				"Asia/Jayapura"
			]
		}>,
		Readonly<{
			"iso_3166_1": "IE",
			"zones": [
				"Europe/Dublin"
			]
		}>,
		Readonly<{
			"iso_3166_1": "IL",
			"zones": [
				"Asia/Jerusalem"
			]
		}>,
		Readonly<{
			"iso_3166_1": "IM",
			"zones": [
				"Europe/London"
			]
		}>,
		Readonly<{
			"iso_3166_1": "IN",
			"zones": [
				"Asia/Kolkata"
			]
		}>,
		Readonly<{
			"iso_3166_1": "IO",
			"zones": [
				"Indian/Chagos"
			]
		}>,
		Readonly<{
			"iso_3166_1": "IQ",
			"zones": [
				"Asia/Baghdad"
			]
		}>,
		Readonly<{
			"iso_3166_1": "IR",
			"zones": [
				"Asia/Tehran"
			]
		}>,
		Readonly<{
			"iso_3166_1": "IS",
			"zones": [
				"Africa/Abidjan"
			]
		}>,
		Readonly<{
			"iso_3166_1": "IT",
			"zones": [
				"Europe/Rome"
			]
		}>,
		Readonly<{
			"iso_3166_1": "JE",
			"zones": [
				"Europe/London"
			]
		}>,
		Readonly<{
			"iso_3166_1": "JM",
			"zones": [
				"America/Jamaica"
			]
		}>,
		Readonly<{
			"iso_3166_1": "JO",
			"zones": [
				"Asia/Amman"
			]
		}>,
		Readonly<{
			"iso_3166_1": "JP",
			"zones": [
				"Asia/Tokyo"
			]
		}>,
		Readonly<{
			"iso_3166_1": "KE",
			"zones": [
				"Africa/Nairobi"
			]
		}>,
		Readonly<{
			"iso_3166_1": "KG",
			"zones": [
				"Asia/Bishkek"
			]
		}>,
		Readonly<{
			"iso_3166_1": "KH",
			"zones": [
				"Asia/Bangkok"
			]
		}>,
		Readonly<{
			"iso_3166_1": "KI",
			"zones": [
				"Pacific/Tarawa",
				"Pacific/Kanton",
				"Pacific/Kiritimati"
			]
		}>,
		Readonly<{
			"iso_3166_1": "KM",
			"zones": [
				"Africa/Nairobi"
			]
		}>,
		Readonly<{
			"iso_3166_1": "KN",
			"zones": [
				"America/Puerto_Rico"
			]
		}>,
		Readonly<{
			"iso_3166_1": "KP",
			"zones": [
				"Asia/Pyongyang"
			]
		}>,
		Readonly<{
			"iso_3166_1": "KR",
			"zones": [
				"Asia/Seoul"
			]
		}>,
		Readonly<{
			"iso_3166_1": "KW",
			"zones": [
				"Asia/Riyadh"
			]
		}>,
		Readonly<{
			"iso_3166_1": "KY",
			"zones": [
				"America/Panama"
			]
		}>,
		Readonly<{
			"iso_3166_1": "KZ",
			"zones": [
				"Asia/Almaty",
				"Asia/Qyzylorda",
				"Asia/Qostanay",
				"Asia/Aqtobe",
				"Asia/Aqtau",
				"Asia/Atyrau",
				"Asia/Oral"
			]
		}>,
		Readonly<{
			"iso_3166_1": "LA",
			"zones": [
				"Asia/Bangkok"
			]
		}>,
		Readonly<{
			"iso_3166_1": "LB",
			"zones": [
				"Asia/Beirut"
			]
		}>,
		Readonly<{
			"iso_3166_1": "LC",
			"zones": [
				"America/Puerto_Rico"
			]
		}>,
		Readonly<{
			"iso_3166_1": "LI",
			"zones": [
				"Europe/Zurich"
			]
		}>,
		Readonly<{
			"iso_3166_1": "LK",
			"zones": [
				"Asia/Colombo"
			]
		}>,
		Readonly<{
			"iso_3166_1": "LR",
			"zones": [
				"Africa/Monrovia"
			]
		}>,
		Readonly<{
			"iso_3166_1": "LS",
			"zones": [
				"Africa/Johannesburg"
			]
		}>,
		Readonly<{
			"iso_3166_1": "LT",
			"zones": [
				"Europe/Vilnius"
			]
		}>,
		Readonly<{
			"iso_3166_1": "LU",
			"zones": [
				"Europe/Brussels"
			]
		}>,
		Readonly<{
			"iso_3166_1": "LV",
			"zones": [
				"Europe/Riga"
			]
		}>,
		Readonly<{
			"iso_3166_1": "LY",
			"zones": [
				"Africa/Tripoli"
			]
		}>,
		Readonly<{
			"iso_3166_1": "MA",
			"zones": [
				"Africa/Casablanca"
			]
		}>,
		Readonly<{
			"iso_3166_1": "MC",
			"zones": [
				"Europe/Paris"
			]
		}>,
		Readonly<{
			"iso_3166_1": "MD",
			"zones": [
				"Europe/Chisinau"
			]
		}>,
		Readonly<{
			"iso_3166_1": "ME",
			"zones": [
				"Europe/Belgrade"
			]
		}>,
		Readonly<{
			"iso_3166_1": "MF",
			"zones": [
				"America/Puerto_Rico"
			]
		}>,
		Readonly<{
			"iso_3166_1": "MG",
			"zones": [
				"Africa/Nairobi"
			]
		}>,
		Readonly<{
			"iso_3166_1": "MH",
			"zones": [
				"Pacific/Kwajalein",
				"Pacific/Tarawa"
			]
		}>,
		Readonly<{
			"iso_3166_1": "MK",
			"zones": [
				"Europe/Belgrade"
			]
		}>,
		Readonly<{
			"iso_3166_1": "ML",
			"zones": [
				"Africa/Abidjan"
			]
		}>,
		Readonly<{
			"iso_3166_1": "MM",
			"zones": [
				"Asia/Yangon"
			]
		}>,
		Readonly<{
			"iso_3166_1": "MN",
			"zones": [
				"Asia/Ulaanbaatar",
				"Asia/Hovd",
				"Asia/Choibalsan"
			]
		}>,
		Readonly<{
			"iso_3166_1": "MO",
			"zones": [
				"Asia/Macau"
			]
		}>,
		Readonly<{
			"iso_3166_1": "MP",
			"zones": [
				"Pacific/Guam"
			]
		}>,
		Readonly<{
			"iso_3166_1": "MQ",
			"zones": [
				"America/Martinique"
			]
		}>,
		Readonly<{
			"iso_3166_1": "MR",
			"zones": [
				"Africa/Abidjan"
			]
		}>,
		Readonly<{
			"iso_3166_1": "MS",
			"zones": [
				"America/Puerto_Rico"
			]
		}>,
		Readonly<{
			"iso_3166_1": "MT",
			"zones": [
				"Europe/Malta"
			]
		}>,
		Readonly<{
			"iso_3166_1": "MU",
			"zones": [
				"Indian/Mauritius"
			]
		}>,
		Readonly<{
			"iso_3166_1": "MV",
			"zones": [
				"Indian/Maldives"
			]
		}>,
		Readonly<{
			"iso_3166_1": "MW",
			"zones": [
				"Africa/Maputo"
			]
		}>,
		Readonly<{
			"iso_3166_1": "MX",
			"zones": [
				"America/Mexico_City",
				"America/Cancun",
				"America/Merida",
				"America/Monterrey",
				"America/Matamoros",
				"America/Chihuahua",
				"America/Ciudad_Juarez",
				"America/Ojinaga",
				"America/Mazatlan",
				"America/Bahia_Banderas",
				"America/Hermosillo",
				"America/Tijuana"
			]
		}>,
		Readonly<{
			"iso_3166_1": "MY",
			"zones": [
				"Asia/Kuching",
				"Asia/Singapore"
			]
		}>,
		Readonly<{
			"iso_3166_1": "MZ",
			"zones": [
				"Africa/Maputo"
			]
		}>,
		Readonly<{
			"iso_3166_1": "NA",
			"zones": [
				"Africa/Windhoek"
			]
		}>,
		Readonly<{
			"iso_3166_1": "NC",
			"zones": [
				"Pacific/Noumea"
			]
		}>,
		Readonly<{
			"iso_3166_1": "NE",
			"zones": [
				"Africa/Lagos"
			]
		}>,
		Readonly<{
			"iso_3166_1": "NF",
			"zones": [
				"Pacific/Norfolk"
			]
		}>,
		Readonly<{
			"iso_3166_1": "NG",
			"zones": [
				"Africa/Lagos"
			]
		}>,
		Readonly<{
			"iso_3166_1": "NI",
			"zones": [
				"America/Managua"
			]
		}>,
		Readonly<{
			"iso_3166_1": "NL",
			"zones": [
				"Europe/Brussels"
			]
		}>,
		Readonly<{
			"iso_3166_1": "NO",
			"zones": [
				"Europe/Berlin"
			]
		}>,
		Readonly<{
			"iso_3166_1": "NP",
			"zones": [
				"Asia/Kathmandu"
			]
		}>,
		Readonly<{
			"iso_3166_1": "NR",
			"zones": [
				"Pacific/Nauru"
			]
		}>,
		Readonly<{
			"iso_3166_1": "NU",
			"zones": [
				"Pacific/Niue"
			]
		}>,
		Readonly<{
			"iso_3166_1": "NZ",
			"zones": [
				"Pacific/Auckland",
				"Pacific/Chatham"
			]
		}>,
		Readonly<{
			"iso_3166_1": "OM",
			"zones": [
				"Asia/Dubai"
			]
		}>,
		Readonly<{
			"iso_3166_1": "PA",
			"zones": [
				"America/Panama"
			]
		}>,
		Readonly<{
			"iso_3166_1": "PE",
			"zones": [
				"America/Lima"
			]
		}>,
		Readonly<{
			"iso_3166_1": "PF",
			"zones": [
				"Pacific/Tahiti",
				"Pacific/Marquesas",
				"Pacific/Gambier"
			]
		}>,
		Readonly<{
			"iso_3166_1": "PG",
			"zones": [
				"Pacific/Port_Moresby",
				"Pacific/Bougainville"
			]
		}>,
		Readonly<{
			"iso_3166_1": "PH",
			"zones": [
				"Asia/Manila"
			]
		}>,
		Readonly<{
			"iso_3166_1": "PK",
			"zones": [
				"Asia/Karachi"
			]
		}>,
		Readonly<{
			"iso_3166_1": "PL",
			"zones": [
				"Europe/Warsaw"
			]
		}>,
		Readonly<{
			"iso_3166_1": "PM",
			"zones": [
				"America/Miquelon"
			]
		}>,
		Readonly<{
			"iso_3166_1": "PN",
			"zones": [
				"Pacific/Pitcairn"
			]
		}>,
		Readonly<{
			"iso_3166_1": "PR",
			"zones": [
				"America/Puerto_Rico"
			]
		}>,
		Readonly<{
			"iso_3166_1": "PS",
			"zones": [
				"Asia/Gaza",
				"Asia/Hebron"
			]
		}>,
		Readonly<{
			"iso_3166_1": "PT",
			"zones": [
				"Europe/Lisbon",
				"Atlantic/Madeira",
				"Atlantic/Azores"
			]
		}>,
		Readonly<{
			"iso_3166_1": "PW",
			"zones": [
				"Pacific/Palau"
			]
		}>,
		Readonly<{
			"iso_3166_1": "PY",
			"zones": [
				"America/Asuncion"
			]
		}>,
		Readonly<{
			"iso_3166_1": "QA",
			"zones": [
				"Asia/Qatar"
			]
		}>,
		Readonly<{
			"iso_3166_1": "RE",
			"zones": [
				"Asia/Dubai"
			]
		}>,
		Readonly<{
			"iso_3166_1": "RO",
			"zones": [
				"Europe/Bucharest"
			]
		}>,
		Readonly<{
			"iso_3166_1": "RS",
			"zones": [
				"Europe/Belgrade"
			]
		}>,
		Readonly<{
			"iso_3166_1": "RU",
			"zones": [
				"Europe/Kaliningrad",
				"Europe/Moscow",
				"Europe/Simferopol",
				"Europe/Kirov",
				"Europe/Volgograd",
				"Europe/Astrakhan",
				"Europe/Saratov",
				"Europe/Ulyanovsk",
				"Europe/Samara",
				"Asia/Yekaterinburg",
				"Asia/Omsk",
				"Asia/Novosibirsk",
				"Asia/Barnaul",
				"Asia/Tomsk",
				"Asia/Novokuznetsk",
				"Asia/Krasnoyarsk",
				"Asia/Irkutsk",
				"Asia/Chita",
				"Asia/Yakutsk",
				"Asia/Khandyga",
				"Asia/Vladivostok",
				"Asia/Ust-Nera",
				"Asia/Magadan",
				"Asia/Sakhalin",
				"Asia/Srednekolymsk",
				"Asia/Kamchatka",
				"Asia/Anadyr"
			]
		}>,
		Readonly<{
			"iso_3166_1": "RW",
			"zones": [
				"Africa/Maputo"
			]
		}>,
		Readonly<{
			"iso_3166_1": "SA",
			"zones": [
				"Asia/Riyadh"
			]
		}>,
		Readonly<{
			"iso_3166_1": "SB",
			"zones": [
				"Pacific/Guadalcanal"
			]
		}>,
		Readonly<{
			"iso_3166_1": "SC",
			"zones": [
				"Asia/Dubai"
			]
		}>,
		Readonly<{
			"iso_3166_1": "SD",
			"zones": [
				"Africa/Khartoum"
			]
		}>,
		Readonly<{
			"iso_3166_1": "SE",
			"zones": [
				"Europe/Berlin"
			]
		}>,
		Readonly<{
			"iso_3166_1": "SG",
			"zones": [
				"Asia/Singapore"
			]
		}>,
		Readonly<{
			"iso_3166_1": "SH",
			"zones": [
				"Africa/Abidjan"
			]
		}>,
		Readonly<{
			"iso_3166_1": "SI",
			"zones": [
				"Europe/Belgrade"
			]
		}>,
		Readonly<{
			"iso_3166_1": "SJ",
			"zones": [
				"Europe/Berlin"
			]
		}>,
		Readonly<{
			"iso_3166_1": "SK",
			"zones": [
				"Europe/Prague"
			]
		}>,
		Readonly<{
			"iso_3166_1": "SL",
			"zones": [
				"Africa/Abidjan"
			]
		}>,
		Readonly<{
			"iso_3166_1": "SM",
			"zones": [
				"Europe/Rome"
			]
		}>,
		Readonly<{
			"iso_3166_1": "SN",
			"zones": [
				"Africa/Abidjan"
			]
		}>,
		Readonly<{
			"iso_3166_1": "SO",
			"zones": [
				"Africa/Nairobi"
			]
		}>,
		Readonly<{
			"iso_3166_1": "SR",
			"zones": [
				"America/Paramaribo"
			]
		}>,
		Readonly<{
			"iso_3166_1": "SS",
			"zones": [
				"Africa/Juba"
			]
		}>,
		Readonly<{
			"iso_3166_1": "ST",
			"zones": [
				"Africa/Sao_Tome"
			]
		}>,
		Readonly<{
			"iso_3166_1": "SV",
			"zones": [
				"America/El_Salvador"
			]
		}>,
		Readonly<{
			"iso_3166_1": "SX",
			"zones": [
				"America/Puerto_Rico"
			]
		}>,
		Readonly<{
			"iso_3166_1": "SY",
			"zones": [
				"Asia/Damascus"
			]
		}>,
		Readonly<{
			"iso_3166_1": "SZ",
			"zones": [
				"Africa/Johannesburg"
			]
		}>,
		Readonly<{
			"iso_3166_1": "TC",
			"zones": [
				"America/Grand_Turk"
			]
		}>,
		Readonly<{
			"iso_3166_1": "TD",
			"zones": [
				"Africa/Ndjamena"
			]
		}>,
		Readonly<{
			"iso_3166_1": "TF",
			"zones": [
				"Asia/Dubai",
				"Indian/Maldives"
			]
		}>,
		Readonly<{
			"iso_3166_1": "TG",
			"zones": [
				"Africa/Abidjan"
			]
		}>,
		Readonly<{
			"iso_3166_1": "TH",
			"zones": [
				"Asia/Bangkok"
			]
		}>,
		Readonly<{
			"iso_3166_1": "TJ",
			"zones": [
				"Asia/Dushanbe"
			]
		}>,
		Readonly<{
			"iso_3166_1": "TK",
			"zones": [
				"Pacific/Fakaofo"
			]
		}>,
		Readonly<{
			"iso_3166_1": "TL",
			"zones": [
				"Asia/Dili"
			]
		}>,
		Readonly<{
			"iso_3166_1": "TM",
			"zones": [
				"Asia/Ashgabat"
			]
		}>,
		Readonly<{
			"iso_3166_1": "TN",
			"zones": [
				"Africa/Tunis"
			]
		}>,
		Readonly<{
			"iso_3166_1": "TO",
			"zones": [
				"Pacific/Tongatapu"
			]
		}>,
		Readonly<{
			"iso_3166_1": "TR",
			"zones": [
				"Europe/Istanbul"
			]
		}>,
		Readonly<{
			"iso_3166_1": "TT",
			"zones": [
				"America/Puerto_Rico"
			]
		}>,
		Readonly<{
			"iso_3166_1": "TV",
			"zones": [
				"Pacific/Tarawa"
			]
		}>,
		Readonly<{
			"iso_3166_1": "TW",
			"zones": [
				"Asia/Taipei"
			]
		}>,
		Readonly<{
			"iso_3166_1": "TZ",
			"zones": [
				"Africa/Nairobi"
			]
		}>,
		Readonly<{
			"iso_3166_1": "UA",
			"zones": [
				"Europe/Kyiv",
				"Europe/Simferopol"
			]
		}>,
		Readonly<{
			"iso_3166_1": "UG",
			"zones": [
				"Africa/Nairobi"
			]
		}>,
		Readonly<{
			"iso_3166_1": "UM",
			"zones": [
				"Pacific/Pago_Pago",
				"Pacific/Tarawa"
			]
		}>,
		Readonly<{
			"iso_3166_1": "US",
			"zones": [
				"America/New_York",
				"America/Detroit",
				"America/Kentucky/Louisville",
				"America/Kentucky/Monticello",
				"America/Indiana/Indianapolis",
				"America/Indiana/Vincennes",
				"America/Indiana/Winamac",
				"America/Indiana/Marengo",
				"America/Indiana/Petersburg",
				"America/Indiana/Vevay",
				"America/Chicago",
				"America/Indiana/Tell_City",
				"America/Indiana/Knox",
				"America/Menominee",
				"America/North_Dakota/Center",
				"America/North_Dakota/New_Salem",
				"America/North_Dakota/Beulah",
				"America/Denver",
				"America/Boise",
				"America/Phoenix",
				"America/Los_Angeles",
				"America/Anchorage",
				"America/Juneau",
				"America/Sitka",
				"America/Metlakatla",
				"America/Yakutat",
				"America/Nome",
				"America/Adak",
				"Pacific/Honolulu"
			]
		}>,
		Readonly<{
			"iso_3166_1": "UY",
			"zones": [
				"America/Montevideo"
			]
		}>,
		Readonly<{
			"iso_3166_1": "UZ",
			"zones": [
				"Asia/Samarkand",
				"Asia/Tashkent"
			]
		}>,
		Readonly<{
			"iso_3166_1": "VA",
			"zones": [
				"Europe/Rome"
			]
		}>,
		Readonly<{
			"iso_3166_1": "VC",
			"zones": [
				"America/Puerto_Rico"
			]
		}>,
		Readonly<{
			"iso_3166_1": "VE",
			"zones": [
				"America/Caracas"
			]
		}>,
		Readonly<{
			"iso_3166_1": "VG",
			"zones": [
				"America/Puerto_Rico"
			]
		}>,
		Readonly<{
			"iso_3166_1": "VI",
			"zones": [
				"America/Puerto_Rico"
			]
		}>,
		Readonly<{
			"iso_3166_1": "VN",
			"zones": [
				"Asia/Ho_Chi_Minh",
				"Asia/Bangkok"
			]
		}>,
		Readonly<{
			"iso_3166_1": "VU",
			"zones": [
				"Pacific/Efate"
			]
		}>,
		Readonly<{
			"iso_3166_1": "WF",
			"zones": [
				"Pacific/Tarawa"
			]
		}>,
		Readonly<{
			"iso_3166_1": "WS",
			"zones": [
				"Pacific/Apia"
			]
		}>,
		Readonly<{
			"iso_3166_1": "YE",
			"zones": [
				"Asia/Riyadh"
			]
		}>,
		Readonly<{
			"iso_3166_1": "YT",
			"zones": [
				"Africa/Nairobi"
			]
		}>,
		Readonly<{
			"iso_3166_1": "ZA",
			"zones": [
				"Africa/Johannesburg"
			]
		}>,
		Readonly<{
			"iso_3166_1": "ZM",
			"zones": [
				"Africa/Maputo"
			]
		}>,
		Readonly<{
			"iso_3166_1": "ZW",
			"zones": [
				"Africa/Maputo"
			]
		}>
	]
}>

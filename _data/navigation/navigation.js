/** @format */

const origin = `https://atdev-testing.netlify.app`

const service_list = {
	app_development: {
		en: {
			label: `Custom Software Development`,
			link: `${origin}/pages/en/services/app-development`,
		},
		es: {
			label: `Desarrollo de Software Personalizado`,
			link: `${origin}/pages/es/services/app-development`,
		},
	},
	nearshore: {
		en: {
			label: `Nearshore Staff Augmentation`,
			link: `${origin}/pages/en/services/nearshore/`,
		},
		es: {
			label: `Aumento de Personal Cerca de la Costa`,
			link: `${origin}/pages/es/services/nearshore/`,
		},
	},
	recruiting: {
		en: {
			label: `Recruiting`,
			link: `${origin}/pages/en/services/recruiting/`,
		},
		es: {
			label: `Reclutamiento`,
			link: `${origin}/pages/es/services/recruiting/`,
		},
	},
}

const translated_links = {
	en: {
		home: `${origin}/pages/en/`,
		services: `${origin}/pages/en/services`,
		careers: `${origin}/pages/en/careersus`,
		about: `${origin}/pages/en/about`,
		contact: `${origin}/pages/en/contact`,
	},
	es: {
		home: `${origin}/pages/es/`,
		services: `${origin}/pages/es/services`,
		careers: `${origin}/pages/es/careersus`,
		about: `${origin}/pages/es/about`,
		contact: `${origin}/pages/es/contact`,
	},
}

module.exports = {
	home: {
		label: {
			en: `Home`,
			es: `Inicio`,
		},
		link: {
			en: `${origin}/pages/en/`,
			es: `${origin}/pages/es/`,
		},
		translated_link: {
			en: translated_links.en.home,
			es: translated_links.es.home,
		},
	},
	services: {
		label: {
			en: `Services`,
			es: `Servicios`,
		},
		link: {
			en: `${origin}/pages/en/service`,
			es: `${origin}/pages/es/service`,
		},
		translated_link: {
			en: translated_links.en.services,
			es: translated_links.es.services,
		},
		service_list,
	},
	careers: {
		label: {
			en: `Careers`,
			es: `Carreras`,
		},
		link: {
			en: `${origin}/pages/en/careersus`,
			es: `${origin}/pages/es/careersus`,
		},
		translated_link: {
			en: translated_links.en.careers,
			es: translated_links.es.careers,
		},
	},
	about: {
		label: {
			en: `About`,
			es: `Nosotros`,
		},
		link: {
			en: `${origin}/pages/en/about`,
			es: `${origin}/pages/es/about`,
		},
		translated_link: {
			en: translated_links.en.about,
			es: translated_links.es.about,
		},
	},
	contact: {
		label: {
			en: `Contact`,
			es: `Contactos`,
		},
		link: {
			en: `${origin}/pages/en/contact`,
			es: `${origin}/pages/es/contact`,
		},
		translated_link: {
			en: translated_links.en.contact,
			es: translated_links.es.contact,
		},
	},
}
